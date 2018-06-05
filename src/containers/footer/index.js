import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
	height: 200px;
	width: 100%;
	background: #fafafa;
	margin-top: 1.5rem;
`

const Container = styled.div`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`

const Tabs = props => (
	<Wrapper>
		<Container className="container">
			<b>ChomCHOB</b>
		</Container>
	</Wrapper>
)

export default Tabs
