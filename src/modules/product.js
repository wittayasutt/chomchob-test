export const SELECT_PRODUCT = 'product/SELECT_PRODUCT'
export const SET_PRODUCT = 'product/SET_PRODUCT'

const initialState = {
	selected: 0,
	product: []
}

export default (state = initialState, action) => {
	switch (action.type) {
		case SELECT_PRODUCT:
			return {
				...state,
				selected: action.select
			}
		case SET_PRODUCT:
			return {
				...state,
				product: action.product
			}
		default:
			return state
	}
}

export const selectProduct = select => {
	return dispatch => dispatch({ type: SELECT_PRODUCT, select })
}

export const setProduct = product => {
	return dispatch => dispatch({ type: SET_PRODUCT, product })
}
