export const SET_CARD = 'tab/SET_CARD'

export default (state = 'grid', action) => {
	switch (action.type) {
		case SET_CARD:
			return action.card
		default:
			return state
	}
}

export const setCard = card => {
	return dispatch => dispatch({ type: SET_CARD, card })
}
