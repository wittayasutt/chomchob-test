import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import Item from './item'

const Container = styled.div``

const Columns = styled.div`
	margin-top: 0.75rem !important;

	@media only screen and (max-width: 1088px) {
		margin: 0 !important;
	}
`

class Grid extends Component {
	render() {
		const { products } = this.props

		if (!products || products.length === 0) return null
		return (
			<Container className="container">
				<Columns className="columns is-multiline">
					{products.map(product => <Item product={product} key={product.id} />)}
				</Columns>
			</Container>
		)
	}
}

const mapStateToProps = state => ({ products: state.product.product })

export default connect(mapStateToProps)(Grid)
