import { UPDATE_FILTER_BY, UPDATE_ASC } from '../actionTypes'

const defaultState = {
	filterBy: 'mc',
	asc: false
}

export default (state = defaultState, action) => {
	switch (action.type) {
		case UPDATE_FILTER_BY:
			return { asc: false, filterBy: action.payload }
		case UPDATE_ASC:
			return { ...state, asc: action.payload }
		default:
			return state
	}
}
