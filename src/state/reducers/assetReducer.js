import {
	FETCH_ASSET_BEGIN,
	FETCH_ASSET_FAILURE,
	FETCH_ASSET_SUCCESS
} from '../actionTypes'

const defaultState = {
	pending: false,
	error: false,
	success: false,
	assetData: {}
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
				assetData: action.payload
			}
		case FETCH_ASSET_FAILURE:
			return {
				...state,
				pending: false,
				error: true
			}
		default:
			return state
	}
}
