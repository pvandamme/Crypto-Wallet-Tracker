import {
	FETCH_MARKET_BEGIN,
	FETCH_MARKET_SUCCESS,
	FETCH_MARKET_FAILURE
} from '../actionTypes'

const defaultState = {
	pending: false,
	marketData: [],
	error: false
}

export default (state = defaultState, action) => {
	switch (action.type) {
		case 'FETCH_MARKET_BEGIN':
			return {
				...state,
				pending: true
			}
		case FETCH_MARKET_SUCCESS:
			return {
				...state,
				pending: false,
				marketData: action.payload
			}
		case FETCH_MARKET_FAILURE:
			return {
				...state,
				pending: false,
				error: true
			}
		default:
			return state
	}
}
