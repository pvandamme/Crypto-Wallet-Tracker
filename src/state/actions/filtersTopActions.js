import {
	UPDATE_FILTER_BY,
	UPDATE_ASC,
	UPDATE_PAGINATION,
	UPDATE_DISPLAY
} from '../actionTypes'

// Action Creators

export const updateFilterBy = (filterBy) => {
	return {
		type: UPDATE_FILTER_BY,
		payload: filterBy
	}
}

export const updateAsc = (asc) => {
	return {
		type: UPDATE_ASC,
		payload: asc
	}
}

export const updatePagination = (pagination) => {
	return {
		type: UPDATE_PAGINATION,
		payload: pagination
	}
}

export const updateDisplay = (display) => {
	return {
		type: UPDATE_DISPLAY,
		payload: display
	}
}

// Thunk

export const updateFilters = (newFilterBy) => {
	return (dispatch, getState) => {
		const {
			filtersTop: { filterBy, asc }
		} = getState()
		filterBy === newFilterBy
			? dispatch(updateAsc(!asc))
			: dispatch(updateFilterBy(newFilterBy))
	}
}
