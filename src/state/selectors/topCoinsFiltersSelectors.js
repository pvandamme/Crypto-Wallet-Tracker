export const getDisplay = (state) => state.topCoinsFilters.display

export const getFilterBy = (state) => state.topCoinsFilters.filterBy

export const getPagination = (state) => state.topCoinsFilters.pagination

export const getInputFilter = (state) => state.topCoinsFilters.inputFilter

export const getSortedByInputFilter = (state) => {
	const inputFilter = getInputFilter(state)
	return state.market.marketData.topCoins.filter((coin) =>
		coin.name.toLowerCase().includes(inputFilter)
	)
}

// TODO - Move filter function here
