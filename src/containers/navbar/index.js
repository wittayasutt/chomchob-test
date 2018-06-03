import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.nav`
	border-bottom: 2px solid #dbdbdb;
`

const NavBar = () => (
	<Wrapper
		className="navbar"
		role="navigation"
		aria-label="dropdown navigation"
	>
		<div className="navbar-menu container">
			<div className="navbar-end">
				<div className="navbar-item has-dropdown">
					<a className="navbar-link">
						<span className="icon has-text-info">
							<i className="fas fa-cog" />
						</span>Setting
					</a>

					<div className="navbar-dropdown is-right">
						<a className="navbar-item">Overview</a>
						<a className="navbar-item">Elements</a>
						<a className="navbar-item">Components</a>
						<hr className="navbar-divider" />
						<div className="navbar-item">Version 0.7.1</div>
					</div>
				</div>
			</div>
		</div>
	</Wrapper>
)

export default NavBar
