import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled(Link)`
	@media only screen and (max-width: 1088px) {
		width: 50% !important;
	}

	@media only screen and (max-width: 768px) {
		width: 100% !important;
	}
`

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

const Button = styled.div`
	display: flex !important;
	transition: 0.2s;
`

const shortString = (string, length) => {
	if (string.length > length) return string.substring(0, length) + '...'
	return string
}

const Item = props => (
	<Wrapper className="column is-one-quarter" to={`/item/${props.product.id}`}>
		<Card className="card">
			<div className="card-image">
				<figure className="image is-4by3">
					<img src={props.product.image_url} alt={props.product.name} />
				</figure>
			</div>

			<div className="card-content">
				<Media className="media">
					<img src={props.product.brand_info.url} alt={props.product.name} />
					<p className="title is-4">{shortString(props.product.name, 22)}</p>
				</Media>
				<Content className="content">
					{shortString(props.product.description, 60)}
				</Content>
				<Price>&#3647;{props.product.price}</Price>
				<Button className="button is-primary">Detail</Button>
			</div>
		</Card>
	</Wrapper>
)

export default Item
