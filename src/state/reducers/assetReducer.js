import {
	FETCH_ASSET_BEGIN,
	FETCH_ASSET_FAILURE,
	FETCH_ASSET_SUCCESS,
	UPDATE_TIMEFRAME
} from '../actionTypes'

const defaultState = {
	pending: false,
	error: false,
	success: false,
	assetData: {},
	charts: {},
	timeFrame: 'monthly'
}

export default (state = defaultState, action) => {
	switch (action.type) {
		case FETCH_ASSET_BEGIN:
			return {
				...state,
				pending: true,
				success: false
			}
		case FETCH_ASSET_SUCCESS:
			return {
				...state,
				pending: false,
				success: true,
				assetData: action.payload.assetData,
				charts: action.payload.charts
			}
		case FETCH_ASSET_FAILURE:
			return {
				...state,
				pending: false,
				error: true
			}
		case UPDATE_TIMEFRAME:
			return {
				...state,
				timeFrame: action.payload
			}
		default:
			return state
	}
}
