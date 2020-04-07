export const getDashboardTransactions = (state) => state.dashboard.transactions

export const getDashboardPending = (state) =>
	state.dashboard.pending || state.market.pending

export const getDashboardSuccess = (state) =>
	state.dashboard.success && state.market.success

export const getDashboardError = (state) =>
	state.dashboard.error || state.market.error

export const getSelectedCoin = (state) => {
	const coin = state.dashboard.selectedCoin
	return coin ? coin : null
}

export const getTransactionBegin = (state) => state.dashboard.pending
