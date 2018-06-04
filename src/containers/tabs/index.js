import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	border-bottom: 1px solid #eaeaea;
`

const Tab = styled.ul`
	display: flex;
	flex-direction: row;
	margin: 1.5rem 0 0.75rem;
`

const Menu = styled.li`
	height: 32px;
	width: 32px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 14px;
	border: 1px solid #eaeaea;
	transition: 0.2s;
	cursor: pointer;

	:nth-child(1) {
		border-radius: 4px 0 0 4px;
	}

	:nth-child(2) {
		border-radius: 0 4px 4px 0;
	}

	:hover {
		background: #22d0b2;
		color: #ffffff;
		border-color: #22d0b2;
	}
`

const Tabs = props => (
	<Container className="container">
		<Tab>
			<Menu>
				<i className="fas fa-th-large" aria-hidden="true" />
			</Menu>
			<Menu>
				<i className="fas fa-list" aria-hidden="true" />
			</Menu>
		</Tab>
	</Container>
)

export default Tabs
