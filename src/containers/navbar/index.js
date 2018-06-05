import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.nav`
	border-bottom: 2px solid #dbdbdb;
`

const NavBar = () => (
	<Wrapper
		className="navbar"
		role="navigation"
		aria-label="dropdown navigation">
		<div className="navbar-menu container" />
	</Wrapper>
)

export default NavBar
