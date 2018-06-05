import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { connect } from 'react-redux'
import find from 'lodash/find'

const Wrapper = styled.div``

const Container = styled.div`
	@media only screen and (max-width: 1088px) {
		margin: 0 0.75rem !important;
	}
`

const Nav = styled.div`
	margin-top: 3rem;
`

const Divider = styled.div`
	height: 1px;
	background: #eaeaea;
	margin-bottom: 1.5rem;
`

const Content = styled.div`
	min-height: 400px;
	display: flex;
	flex-direction: row;

	@media only screen and (max-width: 768px) {
		flex-direction: column;
	}
`

const Image = styled.img`
	height: 400px;
	width: 400px;
	border: 1px solid #eaeaea;
	margin-right: 1.5rem;

	@media only screen and (max-width: 768px) {
		height: auto;
		width: 100%;
		margin-bottom: 0.75rem;
		margin-right: 0;
	}
`

const Body = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
`

const Title = styled.p`
	margin-bottom: 0.75rem !important;
`

const Desc = styled.p`
	flex: 1;
	color: #666666;
`

const PriceWrapper = styled.div``

const Price = styled.div`
	font-size: 1.1rem;
	font-weight: 500;
	color: red;
`

const Counter = styled.ul`
	display: flex;
	flex-direction: row;
	margin: 0.75rem 0;

	li {
		height: 35px;
		width: 35px;
		display: flex;
		justify-content: center;
		align-items: center;
		border: 1px solid #eaeaea;

		:nth-child(1) {
			border-radius: 4px 0 0 4px;
		}

		:nth-child(3) {
			border-radius: 0 4px 4px 0;
		}
	}

	.operation {
		transition: 0.2s;
		cursor: pointer;

		:hover {
			background: #22d0b2;
			color: #ffffff;
			border-color: #22d0b2;
		}

		:active {
			opacity: 0.8;
		}
	}
`

const Button = styled.a`
	transition: 0.2s;
`

const getItem = (product, id) => {
	return find(product, item => item.id === id)
}

class Item extends Component {
	constructor(props) {
		super(props)

		this.state = {
			amount: 1
		}
	}

	calculate = plus => {
		let amount = this.state.amount + plus
		if (amount < 1) amount = 1

		this.setState({ amount })
	}

	render() {
		const { item } = this.props
		const { amount } = this.state

		if (!item) return null
		return (
			<Wrapper>
				<Container className="container">
					<Nav className="breadcrumb" aria-label="breadcrumbs">
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li className="is-active">
								<a aria-current="page">{item.name}</a>
							</li>
						</ul>
					</Nav>
					<Divider />
					<Content>
						<Image src={item.image_url} alt={item.name} />
						<Body>
							<Title className="title is-4">{item.name}</Title>
							<Desc className="content">{item.description}</Desc>
							<PriceWrapper>
								<Price>
									&#3647;{(parseFloat(item.price) * amount).toFixed(2)}
								</Price>
								<Counter>
									<li className="operation" onClick={() => this.calculate(-1)}>
										<i className="fas fa-minus" aria-hidden="true" />
									</li>
									<li>{amount}</li>
									<li className="operation" onClick={() => this.calculate(1)}>
										<i className="fas fa-plus" aria-hidden="true" />
									</li>
								</Counter>
								<Button className="button is-primary">Add to Cart</Button>
							</PriceWrapper>
						</Body>
					</Content>
				</Container>
			</Wrapper>
		)
	}
}

const mapStateToProps = (state, ownProps) => ({
	item: getItem(state.product.product, ownProps.match.params.id)
})

export default connect(mapStateToProps)(Item)
