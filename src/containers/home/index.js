import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import Tabs from '../tabs'
import Grid from '../grid'
import List from '../list'

const Container = styled.div``

const Home = props => (
	<Container className="container">
		<Tabs />
		{props.card === 'grid' && <Grid />}
		{props.card === 'list' && <List />}
	</Container>
)

const mapStateToProps = state => ({ card: state.card })

export default connect(mapStateToProps)(Home)
