import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled(Link)`
	height: 200px;
	display: flex;
	flex-direction: row;
	margin: 0.75rem 0;
	padding: 0.75rem;
	transition: 0.2s;
	overflow: hidden;
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

	@media only screen and (max-width: 1088px) {
		height: 100px;
		width: 100px;
		min-width: 100px;
	}
`

const Content = styled.div`
	@media only screen and (max-width: 1088px) {
		margin-right: 5px;
	}
`

const Title = styled.p`
	margin-bottom: 0.75rem !important;
`

const Desc = styled.p`
	width: 80%;
	color: #666666;

	@media only screen and (max-width: 1088px) {
		width: 100%;
	}
`

const Detail = styled.div`
	min-width: 120px;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 20px;

	@media only screen and (max-width: 1088px) {
		min-width: auto;
	}
`

const Price = styled.div`
	font-size: 1.1rem;
	font-weight: 500;
	margin-bottom: 0.2rem;
	color: red;
`

const Button = styled.div`
	transition: 0.2s;
`

const Item = props => (
	<Wrapper to={`/item/${props.product.id}`}>
		<Image src={props.product.image_url} alt={props.product.name} />
		<Content>
			<Title className="title is-4">{props.product.name}</Title>
			<Desc className="content">{props.product.description}</Desc>
		</Content>
		<Detail>
			<Price>&#3647;{props.product.price}</Price>
			<Button className="button is-primary">Detail</Button>
		</Detail>
	</Wrapper>
)

export default Item
