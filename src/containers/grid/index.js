import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div``

const Columns = styled.div`
	margin-top: 0.75rem !important;
`

const Column = styled.div``

const Card = styled.div`
	transition: 0.2s;
	cursor: pointer;

	:hover {
		box-shadow: 0px 3px 20px 5px rgba(0, 0, 0, 0.1);
	}

	:active {
		box-shadow: 0px 3px 10px 5px rgba(0, 0, 0, 0.1);
	}
`

const Media = styled.div`
	min-height: 52px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center !important;
	margin-bottom: 8px;

	img {
		height: 48px;
		width: 48px;
		margin-right: 8px;
	}
`

const Content = styled.div`
	margin-bottom: 0.5rem !important;
`

const Price = styled.div`
	display: flex;
	justify-content: flex-end;
	font-size: 1.1rem;
	font-weight: 500;
	margin-bottom: 1rem !important;
	color: red;
`

const Button = styled.a`
	display: flex !important;
	transition: 0.2s;
`

class Grid extends Component {
	shortString = (string, length) => {
		if (string.length > length) return string.substring(0, length) + '...'
		return string
	}

	render() {
		const { products } = this.props

		if (products.length === 0) return null
		return (
			<Container className="container">
				<Columns className="columns is-multiline">
					{products.map(product => (
						<Column className="column is-one-quarter" key={product.id}>
							<Card className="card">
								<div className="card-image">
									<figure className="image is-4by3">
										<img src={product.image_url} alt={product.name} />
									</figure>
								</div>

								<div className="card-content">
									<Media className="media">
										<img src={product.brand_info.url} alt={product.name} />
										<p className="title is-4">
											{this.shortString(product.name, 22)}
										</p>
									</Media>

									<Content className="content">
										{this.shortString(product.description, 60)}
									</Content>

									<Price>&#3647;{product.price}</Price>

									<Button className="button is-primary">Detail</Button>
								</div>
							</Card>
						</Column>
					))}
				</Columns>
			</Container>
		)
	}
}

export default Grid
