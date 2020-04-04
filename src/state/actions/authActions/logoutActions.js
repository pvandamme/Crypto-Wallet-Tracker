import { auth } from 'firebaseConfig/firebase'
import { FETCH_LOGOUT_BEGIN, FETCH_LOGOUT_SUCCESS } from '../../actionTypes'

// Action creators

const fetchLogoutBegin = () => {
	return {
		type: FETCH_LOGOUT_BEGIN,
	}
}

const fetchLogoutSuccess = () => {
	return {
		type: FETCH_LOGOUT_SUCCESS,
	}
}

// Thunk

export const logoutUser = () => {
	return (dispatch, getState) => {
		getState().dashboard.unsub()
		dispatch(fetchLogoutBegin())
		auth.signOut()
			.then(() => {
				dispatch(fetchLogoutSuccess())
			})
			.catch((error) => {
				console.log(error)
			})
	}
}
