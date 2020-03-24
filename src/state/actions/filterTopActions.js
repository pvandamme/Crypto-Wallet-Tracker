import {
	FILTER_BY_CHANGE,
	FILTER_BY_MC,
	FILTER_BY_PRICE,
	FILTER_BY_NAME,
	RESET_FILTER
} from '../actionTypes'

// Action Creators

export const filterByName = () => {
	return {
		type: FILTER_BY_NAME
	}
}

export const filterByMc = () => {
	return {
		type: FILTER_BY_MC
	}
}

export const filterByPrice = () => {
	return {
		type: FILTER_BY_PRICE
	}
}

export const filterByChange = () => {
	return {
		type: FILTER_BY_CHANGE
	}
}

export const resetFilter = () => {
	return {
		type: RESET_FILTER
	}
}

// Thunk

export const setFilter = (filter) => {
	return (dispatch) => {
		dispatch(resetFilter())
		switch (filter) {
			case 'name':
				return dispatch(filterByName())
			case 'mc':
				return dispatch(filterByMc())
			case 'price':
				return dispatch(filterByPrice())
			case 'change':
				return dispatch(filterByChange())
			default:
				break
		}
	}
}
