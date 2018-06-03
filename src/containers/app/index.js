import React from 'react'
import { Route /*Link*/ } from 'react-router-dom'
import styled from 'styled-components'
import NavBar from '../navbar'
import Home from '../home'
import About from '../about'

const Wrapper = styled.div``

const Container = styled.div``

const App = () => (
	<Wrapper>
		{/*<Link to="/">Home</Link>
	    <Link to="/about-us">About</Link>*/}
		<NavBar />
		<main>
			<Container className="container">
				<Route exact="exact" path="/" component={Home} />
				<Route exact="exact" path="/about-us" component={About} />
			</Container>
		</main>
	</Wrapper>
)

export default App
