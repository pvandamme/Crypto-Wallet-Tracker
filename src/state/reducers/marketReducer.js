import {
	FETCH_MARKET_BEGIN,
	FETCH_MARKET_SUCCESS,
	FETCH_MARKET_FAILURE,
} from '../actionTypes'

const defaultState = {
	pending: false,
	error: false,
	success: false,
	marketData: {},
}

export default (state = defaultState, action) => {
	switch (action.type) {
		case FETCH_MARKET_BEGIN:
			return {
				...state,
				pending: true,
				success: false,
				error: false,
			}
		case FETCH_MARKET_SUCCESS:
			return {
				...state,
				pending: false,
				success: true,
				marketData: action.payload,
			}
		case FETCH_MARKET_FAILURE:
			return {
				...state,
				pending: false,
				error: true,
			}
		default:
			return state
	}
}
