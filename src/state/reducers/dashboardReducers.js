import {
	FETCH_TRANSACTIONS_BEGIN,
	FETCH_TRANSACTIONS_FAILURE,
	FETCH_TRANSACTIONS_SUCCESS,
	SET_UNSUB_FUNCTION,
	SET_SELECTED_COIN,
	FETCH_CHART_BEGIN,
	FETCH_CHART_SUCCESS,
	FETCH_CHART_FAILURE,
	RESET_SELECTED_COIN,
	RESET_DASHBOARD,
} from 'state/actionTypes'

const defaultState = {
	pending: false,
	error: false,
	success: false,
	chartPending: false,
	chartSuccess: false,
	unsub: null,
	transactions: [],
	selectedCoin: {},
	lineChart: [],
	combine: [],
	details: '',
}

export default (state = defaultState, action) => {
	switch (action.type) {
		case FETCH_TRANSACTIONS_BEGIN:
			return {
				...state,
				pending: true,
				success: false,
				error: false,
			}
		case FETCH_TRANSACTIONS_SUCCESS:
			return {
				...state,
				pending: false,
				success: true,
				transactions: action.transactions,
			}
		case FETCH_TRANSACTIONS_FAILURE:
			return {
				...state,
				pending: false,
				error: true,
			}
		case RESET_SELECTED_COIN:
			return {
				...state,
				selectedCoin: {},
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
		case FETCH_CHART_BEGIN:
			return { ...state, error: false, chartPending: true }
		case FETCH_CHART_SUCCESS:
			return {
				...state,
				chartPending: false,
				lineChart: action.lineChart,
				chartSuccess: true,
			}
		case FETCH_CHART_FAILURE:
			return {
				...state,
				error: true,
			}
		case RESET_DASHBOARD:
			return {
				...defaultState,
			}
		default:
			return state
	}
}
