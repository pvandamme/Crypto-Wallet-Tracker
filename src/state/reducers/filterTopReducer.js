import {
	FILTER_BY_CHANGE,
	FILTER_BY_MC,
	FILTER_BY_PRICE,
	FILTER_BY_NAME,
	RESET_FILTER
} from '../actionTypes'

const defaultState = {
	byName: false,
	byMc: true,
	byPrice: false,
	byChange: false
}

const resetState = {
	byName: false,
	byMc: false,
	byPrice: false,
	byChange: false
}

export default (state = defaultState, action) => {
	switch (action.type) {
		case FILTER_BY_NAME:
			return { ...state, byName: true }
		case FILTER_BY_MC:
			return { ...state, byMc: true }
		case FILTER_BY_PRICE:
			return { ...state, byPrice: true }
		case FILTER_BY_CHANGE:
			return { ...state, byChange: true }
		case RESET_FILTER:
			return resetState
		default:
			return state
	}
}
