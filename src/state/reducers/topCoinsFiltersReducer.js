import {
	UPDATE_FILTER_BY,
	UPDATE_ASC,
	UPDATE_PAGINATION,
	UPDATE_DISPLAY,
	UPDATE_INPUT_FILTER
} from '../actionTypes'

const defaultState = {
	filterBy: 'mc',
	asc: false,
	pagination: 0,
	display: { value: 10, label: 10 },
	inputFilter: ''
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
			return { ...state, display: action.payload, pagination: 0 }
		case UPDATE_INPUT_FILTER:
			return { ...state, inputFilter: action.payload, pagination: 0 }
		default:
			return state
	}
}
