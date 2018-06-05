import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import Item from './item'

const Container = styled.div`
	display: flex;
	flex-direction: column;
`

const Wrapper = styled.div``

class List extends Component {
	render() {
		const { products } = this.props

		if (!products || products.length === 0) return null
		return (
			<Container className="container">
				<Wrapper>
					{products.map(product => <Item product={product} key={product.id} />)}
				</Wrapper>
			</Container>
		)
	}
}

const mapStateToProps = state => ({ products: state.product.product })

export default connect(mapStateToProps)(List)
