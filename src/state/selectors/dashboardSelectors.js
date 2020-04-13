import { formatNumber, roundNumber, cutNumber } from 'helpers/helpers'

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

export const getChartPending = (state) => state.dashboard.chartPending

export const getCombineTransaction = (state) =>
	combineTransaction(state.dashboard.transactions)

export const getDoughnutData = ({ dashboard, market }) => {
	const transactions = combineTransaction(dashboard.transactions)
	let labels = []
	let data = []
	transactions.forEach((transaction) => {
		labels.push(
			transaction.asset.charAt(0).toUpperCase() +
				transaction.asset.slice(1)
		)
		data.push(
			(
				getCoinPrice(transaction, market.marketData.topCoins) *
				transaction.amount
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

export const getDashboardData = ({ dashboard, market }) => {
	const totalInvested = getTotalInvested(dashboard).toFixed(2)
	const value = getPortfolioValue(
		dashboard.transactions,
		market.marketData.topCoins
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

export const getHoldListData = ({ dashboard, market }) => {
	const combine = combineTransaction(dashboard.transactions)
	return combine.map((elem) => {
		const price = getCoinPrice(elem, market.marketData.topCoins)
		const coinInvested = getCoinInvested(elem.asset, dashboard.transactions)
		const roi = (
			((price * elem.amount - coinInvested) / coinInvested) *
			100
		).toFixed(2)
		return {
			name: elem.asset.charAt(0).toUpperCase() + elem.asset.slice(1),
			value: (price * elem.amount).toFixed(2),
			amount: formatNumber(elem.amount),
			date: elem.date,
			price: cutNumber(price),
			roi,
			image: getCoinImage(elem, market.marketData.topCoins),
			priceChange: getCoinChange(elem, market.marketData.topCoins),
		}
	})
}

/* Helper functions */

const getTotalInvested = ({ transactions }) => {
	let total = 0

	transactions.forEach((elem) => {
		total += elem.amount * elem.price
	})

	return total
}

const getCoinImage = (transaction, topCoins) => {
	const coin = topCoins.find((elem) => elem.id === transaction.asset)
	return coin.image
}

const getCoinInvested = (name, transactions) => {
	let total = 0
	transactions.forEach((transaction) => {
		if (transaction.asset === name) {
			total += transaction.price * transaction.amount
		}
	})
	return total
}

const getCoinPrice = (coin, topCoins) => {
	return topCoins.find((elem) => elem.id === coin.asset).current_price
}

const getCoinChange = (coin, topCoins) => {
	const priceChange = topCoins.find((elem) => elem.id === coin.asset)
		.price_change_percentage_24h
	return priceChange.toFixed(2)
}

const getPortfolioValue = (transactions, topCoins) => {
	let total = 0

	transactions.forEach((transaction) => {
		const match = getCoinPrice(transaction, topCoins)
		total += match * transaction.amount
	})

	return total
}

const combineTransaction = (a) => {
	let transactions = JSON.parse(JSON.stringify(a))
	let i = 0
	let y = 0

	while (i < transactions.length) {
		y = i + 1
		while (y < transactions.length) {
			if (transactions[y].asset === transactions[i].asset) {
				transactions[i].amount += transactions[y].amount
				transactions.splice(y, 1)
				y--
			}
			y++
		}
		y = 0
		i++
	}

	return transactions
}
