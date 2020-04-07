import {
	FETCH_TRANSACTIONS_BEGIN,
	FETCH_TRANSACTIONS_FAILURE,
	FETCH_TRANSACTIONS_SUCCESS,
	SET_UNSUB_FUNCTION,
	SET_SELECTED_COIN,
} from 'state/actionTypes'

const defaultState = {
	pending: false,
	error: false,
	success: false,
	transactions: [],
	unsub: null,
	selectedCoin: {},
}

export default (state = defaultState, action) => {
	switch (action.type) {
		case FETCH_TRANSACTIONS_BEGIN:
			return {
				...state,
				pending: true,
			}
		case FETCH_TRANSACTIONS_SUCCESS:
			return {
				...state,
				pending: false,
				success: true,
				selectedCoin: {},
				transactions: action.transactions,
			}
		case FETCH_TRANSACTIONS_FAILURE:
			return {
				...state,
				pending: false,
				error: true,
			}
		case SET_UNSUB_FUNCTION:
			return {
				...state,
				unsub: action.unsub,
			}
		case SET_SELECTED_COIN:
			return {
				...state,
				selectedCoin: action.selectedCoin,
			}
		default:
			return state
	}
}
