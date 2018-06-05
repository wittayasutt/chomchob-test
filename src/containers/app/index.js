import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import config from '../../config'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setProduct } from '../../modules/product'

import NavBar from '../navbar'
import Home from '../home'
import Item from '../item'
import Footer from '../footer'

const Wrapper = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
`

const Body = styled.div`
	flex: 1;
`

class App extends Component {
	componentDidMount = () => {
		axios
			.get(`${config.api}/product`)
			.then(res => {
				this.props.setProduct(res.data.list)
				return res.data
			})
			.catch(err => console.log('err', err))
	}

	render() {
		return (
			<Wrapper>
				<NavBar />
				<Body>
					<Route exact={true} path="/" component={Home} />
					<Route exact={true} path="/item/:id" component={Item} />
				</Body>
				<Footer />
			</Wrapper>
		)
	}
}

const mapDispatchToProps = dispatch =>
	bindActionCreators({ setProduct }, dispatch)

export default withRouter(connect(null, mapDispatchToProps)(App))
