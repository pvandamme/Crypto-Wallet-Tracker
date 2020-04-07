import { firestore } from 'firebaseConfig/firebase'
import {
	FETCH_TRANSACTIONS_BEGIN,
	FETCH_TRANSACTIONS_FAILURE,
	FETCH_TRANSACTIONS_SUCCESS,
	SET_UNSUB_FUNCTION,
	SET_SELECTED_COIN,
} from 'state/actionTypes'
import { fetchMarket } from './marketActions'

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

export const fetchTransactionsFailure = () => {
	return {
		type: FETCH_TRANSACTIONS_FAILURE,
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
				(snapshot) => {
					let transactions = getState().dashboard.transactions
					const changes = snapshot.docChanges()
					changes.forEach((change) => {
						transactions.push(change.doc.data())
					})
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
