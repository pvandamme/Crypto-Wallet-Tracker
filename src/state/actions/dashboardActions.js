import CoinGecko from 'coingecko-api'
import { firestore } from 'firebaseConfig/firebase'
import {
	FETCH_TRANSACTIONS_BEGIN,
	FETCH_TRANSACTIONS_SUCCESS,
	SET_UNSUB_FUNCTION,
	SET_SELECTED_COIN,
	FETCH_CHART_BEGIN,
	FETCH_CHART_SUCCESS,
	RESET_SELECTED_COIN,
} from 'state/actionTypes'
import { fetchMarket } from './marketActions'
import { fetchChart } from './assetActions'

/*  Action creators */

export const resetSelectedCoin = () => {
	return {
		type: RESET_SELECTED_COIN,
	}
}

export const fetchTransactionsBegin = () => {
	return {
		type: FETCH_TRANSACTIONS_BEGIN,
	}
}

export const fetchTransactionsSuccess = (transactions) => {
	return {
		type: FETCH_TRANSACTIONS_SUCCESS,
		transactions,
	}
}

const setUnsubFunction = (unsub) => {
	return {
		type: SET_UNSUB_FUNCTION,
		unsub,
	}
}

export const setSelectedCoin = (selectedCoin) => {
	return {
		type: SET_SELECTED_COIN,
		selectedCoin,
	}
}

const fetchChartBegin = () => {
	return {
		type: FETCH_CHART_BEGIN,
	}
}

const fetchChartSuccess = (lineChart) => {
	return {
		type: FETCH_CHART_SUCCESS,
		lineChart,
	}
}

/* Thunk */

export const saveSelectedCoin = (coin) => {
	return (dispatch, getState) => {
		const match = getState().market.marketData.topCoins.find(
			(elem) => elem.id === coin
		)
		dispatch(setSelectedCoin(match))
	}
}

export const setTransactionsListener = (uid) => {
	return (dispatch, getState) => {
		if (!getState().dashboard.success) dispatch(fetchTransactionsBegin())
		if (!getState().market.success) dispatch(fetchMarket())
		const unsub = firestore
			.collection('users/' + uid + '/transactions')
			.onSnapshot(
				async (snapshot) => {
					let transactions = getState().dashboard.transactions
					const changes = snapshot.docChanges()
					changes.forEach((change) => {
						let data = change.doc.data()
						data.id = change.doc.id
						if (change.type === 'added') {
							transactions.push(data)
						} else if (change.type === 'modified') {
							transactions = transactions.map((transaction) =>
								transaction.id === change.doc.id
									? data
									: transaction
							)
						} else if (change.type === 'removed') {
							transactions = transactions.filter(
								(transaction) =>
									transaction.id !== change.doc.id
							)
						}
					})
					dispatch(fetchTransactionsSuccess(transactions))
					const lineChart = await createLineChart(
						transactions,
						dispatch
					)
					dispatch(fetchChartSuccess(lineChart))
				},
				(error) => {
					console.log(error)
					fetchTransactionsFailure()
				}
			)
		dispatch(setUnsubFunction(unsub))
	}
}

/* Helpers */

const createLineChart = (transactions, dispatch) => {
	dispatch(fetchChartBegin())
	const client = new CoinGecko()
	return new Promise(async (resolve, reject) => {
		let charts = []

		transactions.forEach((transaction) => {
			const chart = fetchChart(client, transaction.asset, 30)
			charts.push(chart)
		})

		const data = await Promise.all([...charts])

		data.map((elem) => {
			if (!elem.success) reject()
		})

		const cleanData = transactions.map((elem, i) => {
			return {
				asset: elem.asset,
				amount: elem.amount,
				date: elem.date,
				price: elem.price,
				prices: data[i].data.prices,
			}
		})

		const lineChart = convertChartData(cleanData)
		resolve(lineChart)
	})
}

const convertChartData = (data) => {
	let min = 0

	data.forEach((elem) => {
		if (elem.prices.length < min || min === 0) {
			min = elem.prices.length
		}
	})

	let charts = new Array(min)

	for (let i = 0; i < charts.length; i++) {
		charts[i] = new Array(2)
		charts[i].fill(0)
	}

	data.forEach((elem) => {
		elem.prices.forEach((price, i) => {
			if (price[0] > elem.date || i === min - 1) {
				charts[i][0] +=
					price[1] * elem.amount - elem.price * elem.amount
				charts[i][1] += price[1] * elem.amount
			}
		})
	})

	return charts.map((elem, i) => {
		return data.length && i < min ? [data[0].prices[i][0], elem] : [0, elem]
	})
}

const sortTransaction = (transactions) => {
	return transactions.sort((a, b) => (a.date > b.date ? 1 : -1))
}
