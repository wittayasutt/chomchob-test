import React from 'react'
import styled from 'styled-components'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setCard } from '../../modules/card'

const Container = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	border-bottom: 1px solid #eaeaea;

	@media only screen and (max-width: 1088px) {
		margin: 0 0.75rem !important;
	}
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

	${props => props.active && 'background: #22d0b2;'};
	${props => props.active && 'color: #ffffff;'};
	${props => props.active && 'border-color: #22d0b2;'};

	:nth-child(1) {
		border-radius: 4px 0 0 4px;
	}

	:nth-child(2) {
		border-radius: 0 4px 4px 0;
	}

	:hover {
		${props =>
			props.active ? 'background: #22d0b2;' : 'background: #eaeaea;'};
	}
`

const Tabs = props => (
	<Container className="container">
		<Tab>
			<Menu
				active={props.card === 'grid'}
				onClick={() => props.setCard('grid')}>
				<i className="fas fa-th-large" aria-hidden="true" />
			</Menu>
			<Menu
				active={props.card === 'list'}
				onClick={() => props.setCard('list')}>
				<i className="fas fa-list" aria-hidden="true" />
			</Menu>
		</Tab>
	</Container>
)

const mapStateToProps = state => ({ card: state.card })

const mapDispatchToProps = dispatch => bindActionCreators({ setCard }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Tabs)
