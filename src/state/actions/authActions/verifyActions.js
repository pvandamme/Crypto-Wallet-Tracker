import { auth } from 'firebaseConfig/firebase'
import { FETCH_VERIFY_BEGIN, FETCH_VERIFY_SUCCESS } from '../../actionTypes'
import { fetchLoginSuccess } from './loginActions'

// Action creators

const fetchVerifyBegin = () => {
	return {
		type: FETCH_VERIFY_BEGIN
	}
}

const fetchVerifySuccess = () => {
	return {
		type: FETCH_VERIFY_SUCCESS
	}
}

// Thunk

export const verifyAuth = () => {
	return (dispatch) => {
		dispatch(fetchVerifyBegin())
		auth.onAuthStateChanged((user) => {
			if (user !== null) {
				dispatch(fetchLoginSuccess(user))
			}
			dispatch(fetchVerifySuccess())
		})
	}
}
