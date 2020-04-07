import { cutNumber, formatNumber, roundNumber } from 'helpers/helpers'

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

const getTotalInvested = ({ transactions }) => {
	let total = 0

	transactions.forEach((elem) => {
		total += elem.data.amount * elem.data.price
	})

	return total
}

const getPortfolioValue = (transactions, topCoins) => {
	let total = 0

	transactions.forEach((transaction) => {
		const match = topCoins.find(
			(coin) => coin.id === transaction.data.asset
		)
		total += match.current_price * transaction.data.amount
	})

	return total
}

export const getDashboardData = (state) => {
	const dashboard = state.dashboard
	const totalInvested = getTotalInvested(dashboard).toFixed(2)
	const value = getPortfolioValue(
		dashboard.transactions,
		state.market.marketData.topCoins
	).toFixed(2)
	const profit = (value - totalInvested).toFixed(2)
	const roi = (((value - totalInvested) / totalInvested) * 100).toFixed(2)
	return {
		totalInvested,
		value,
		profit,
		roi: roi === 'NaN' ? 0 : roi,
	}
}
