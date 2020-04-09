import CoinGecko from 'coingecko-api'
import { firestore } from 'firebaseConfig/firebase'
import {
	FETCH_TRANSACTIONS_BEGIN,
	FETCH_TRANSACTIONS_FAILURE,
	FETCH_TRANSACTIONS_SUCCESS,
	SET_UNSUB_FUNCTION,
	SET_SELECTED_COIN,
	FETCH_CHART_BEGIN,
	FETCH_CHART_SUCCESS,
} from 'state/actionTypes'
import { fetchMarket } from './marketActions'
import { fetchChart } from './assetActions'

/*  Action creators */

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
						transactions.push(change.doc.data())
					})
					const lineChart = await createLineChart(
						transactions,
						dispatch
					)
					dispatch(fetchChartSuccess(lineChart))
					dispatch(fetchTransactionsSuccess(transactions))
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
			const chart = fetchChart(client, transaction.data.asset, 30)
			charts.push(chart)
		})

		const data = await Promise.all([...charts])

		data.map((elem) => {
			if (!elem.success) reject()
		})

		const cleanData = transactions.map((elem, i) => {
			return {
				asset: elem.data.asset,
				amount: elem.data.amount,
				date: elem.data.date,
				price: elem.data.price,
				prices: data[i].data.prices,
			}
		})
		const lineChart = convertChartData(cleanData)
		resolve(lineChart)
	})
}

const convertChartData = (data) => {
	let charts = new Array(720).fill(0)

	data.forEach((elem) => {
		elem.prices.forEach((price, i) => {
			if (price[0] > elem.date || i === 719) {
				charts[i] += price[1] * elem.amount - elem.price * elem.amount
			}
		})
	})
	return charts.map((elem, i) => {
		return data.length && i < 720 ? [data[0].prices[i][0], elem] : [0, elem]
	})
}
