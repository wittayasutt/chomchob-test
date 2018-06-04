import React, { Component } from 'react'
import { Route /*Link*/ } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import config from '../../config'

import NavBar from '../navbar'
import Tabs from '../tabs'
import Grid from '../grid'
import List from '../list'
import Footer from '../footer'

import Home from '../home'
import About from '../about'

const Wrapper = styled.div``

const Container = styled.div`
	clear: both;
`

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			products: []
		}
	}

	componentDidMount = () => {
		axios
			.get(`${config.api}/product`)
			.then(res => {
				this.setState({ products: res.data.list })
				return res.data
			})
			.catch(err => console.log('err', err))
	}

	render() {
		const { products } = this.state

		return (
			<Wrapper>
				{/*<Link to="/">Home</Link>
					<Link to="/about-us">About</Link>*/}
				<NavBar />
				<Tabs />
				{/* <Grid products={products} /> */}
				<List products={products} />
				<Container className="container">
					<Route exact={true} path="/" component={Home} />
					<Route exact={true} path="/about-us" component={About} />
				</Container>
				<Footer />
			</Wrapper>
		)
	}
}

export default App
