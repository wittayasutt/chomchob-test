import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from './counter'
import card from './card'
import product from './product'

export default combineReducers({
	routing: routerReducer,
	counter,
	card,
	product
})
