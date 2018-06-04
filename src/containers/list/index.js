import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	flex-direction: column;
`

const Wrapper = styled.div`
	margin-top: 0.75rem;
`

const List = styled.div`
	min-height: 200px;
	display: flex;
	flex-direction: row;
	margin: 0.75rem 0;
	padding: 0.75rem;
	transition: 0.2s;
	cursor: pointer;

	:hover {
		box-shadow: 0px 3px 20px 5px rgba(0, 0, 0, 0.1);
	}

	:active {
		box-shadow: 0px 3px 10px 5px rgba(0, 0, 0, 0.1);
	}
`

const Image = styled.img`
	height: 174px;
	width: 174px;
	min-width: 174px;
	border: 1px solid #eaeaea;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
	margin-right: 0.75rem;
`

const Content = styled.div``

const Title = styled.p`
	margin-bottom: 0.75rem !important;
`

const Desc = styled.p`
	width: 80%;
	color: #666666;
`

const Detail = styled.div`
	min-width: 120px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

const Price = styled.div`
	font-size: 1.1rem;
	font-weight: 500;
	margin-bottom: 0.2rem;
	color: red;
`

const Button = styled.a`
	transition: 0.2s;
`

class Lists extends Component {
	render() {
		const { products } = this.props

		if (products.length === 0) return null
		return (
			<Container className="container">
				<Wrapper>
					{products.map(product => (
						<List key={product.id}>
							<Image src={product.image_url} alt={product.name} />
							<Content>
								<Title className="title is-4">{product.name}</Title>
								<Desc className="content">{product.description}</Desc>
							</Content>
							<Detail>
								<Price>&#3647;{product.price}</Price>
								<Button className="button is-primary">Detail</Button>
							</Detail>
						</List>
					))}
				</Wrapper>
			</Container>
		)
	}
}

export default Lists
