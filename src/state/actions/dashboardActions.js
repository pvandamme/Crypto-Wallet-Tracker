import { firestore } from 'firebaseConfig/firebase'
import {
	FETCH_TRANSACTIONS_BEGIN,
	FETCH_TRANSACTIONS_FAILURE,
	FETCH_TRANSACTIONS_SUCCESS,
	SET_UNSUB_FUNCTION,
} from 'state/actionTypes'

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

/* Thunk */

export const setTransactionsListener = (uid) => {
	return (dispatch, getState) => {
		dispatch(fetchTransactionsBegin())
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
