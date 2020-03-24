import {
	UPDATE_FILTER_BY,
	UPDATE_ASC,
	UPDATE_PAGINATION,
	UPDATE_DISPLAY
} from '../actionTypes'

const defaultState = {
	filterBy: 'mc',
	asc: false,
	pagination: 0,
	display: 10
}

export default (state = defaultState, action) => {
	switch (action.type) {
		case UPDATE_FILTER_BY:
			return { ...state, asc: false, filterBy: action.payload }
		case UPDATE_ASC:
			return { ...state, asc: action.payload }
		case UPDATE_PAGINATION:
			return { ...state, pagination: action.payload }
		case UPDATE_DISPLAY:
			return { ...state, display: action.payload }
		default:
			return state
	}
}
