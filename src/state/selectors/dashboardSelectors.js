import { formatNumber } from 'helpers/helpers'

export const getDashboardTransactions = (state) => state.dashboard.transactions

export const getTransactionBegin = (state) => state.dashboard.pending

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

export const getLineChart = (state) => state.dashboard.lineChart

export const getChartData = ({ dashboard, market }) => {
	let { transactions } = dashboard
	transactions = combineTransaction(transactions)
	let labels = []
	let data = []
	transactions.forEach((transaction) => {
		labels.push(
			transaction.data.asset.charAt(0).toUpperCase() +
				transaction.data.asset.slice(1)
		)
		data.push(
			(
				getCoinPrice(transaction, market.marketData.topCoins) *
				transaction.data.amount
			).toFixed(2)
		)
	})
	const backgroundColor = new Array(Math.ceil(transactions.length / 7))
		.fill([
			'rgba(255, 99, 132, 0.6)',
			'rgba(54, 162, 235, 0.6)',
			'rgba(255, 206, 86, 0.6)',
			'rgba(75, 192, 192, 0.6)',
			'rgba(153, 102, 255, 0.6)',
			'rgba(255, 159, 64, 0.6)',
		])
		.flat()
	return {
		labels,
		data,
		backgroundColor,
	}
}

export const getDashboardData = (state) => {
	const { dashboard } = state
	const totalInvested = getTotalInvested(dashboard).toFixed(2)
	const value = getPortfolioValue(
		dashboard.transactions,
		state.market.marketData.topCoins
	).toFixed(2)
	const profit = formatNumber((value - totalInvested).toFixed(2))
	const roi = (((value - totalInvested) / totalInvested) * 100).toFixed(2)
	return {
		totalInvested: formatNumber(totalInvested),
		value: formatNumber(value),
		profit: formatNumber(profit),
		roi: roi === 'NaN' ? 0 : roi,
	}
}

/* Helper functions */

const getTotalInvested = ({ transactions }) => {
	let total = 0

	transactions.forEach((elem) => {
		total += elem.data.amount * elem.data.price
	})

	return total
}

const getCoinPrice = (coin, topCoins) => {
	return topCoins.find((elem) => elem.id === coin.data.asset).current_price
}

const getPortfolioValue = (transactions, topCoins) => {
	let total = 0

	transactions.forEach((transaction) => {
		const match = getCoinPrice(transaction, topCoins)
		total += match * transaction.data.amount
	})

	return total
}

const combineTransaction = (transactions) => {
	transactions.forEach((transaction) => {
		let count = 0
		transactions.forEach((elem, secondIndex) => {
			if (elem.data.asset === transaction.data.asset) {
				count++
				if (count > 1) {
					transaction.data.amount =
						parseInt(transaction.data.amount) +
						parseInt(elem.data.amount)
					transactions.splice(secondIndex, 1)
				}
			}
		})
	})
	return transactions
}
