export const getDisplay = (state) => state.filtersTop.display

export const getFilterBy = (state) => state.filtersTop.filterBy

export const getPagination = (state) => state.filtersTop.pagination

export const getInputFilter = (state) => state.filtersTop.inputFilter

export const getSortedByInputFilter = (state) => {
	const inputFilter = getInputFilter(state)
	return state.market.marketData.topCoins.filter((coin) =>
		coin.name.toLowerCase().includes(inputFilter)
	)
}

// TODO - Move filter function here
