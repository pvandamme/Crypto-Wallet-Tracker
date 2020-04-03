import { auth } from 'firebaseConfig/firebase'
import {
	FETCH_LOGIN_BEGIN,
	FETCH_LOGIN_FAILURE,
	FETCH_LOGIN_SUCCESS
} from '../../actionTypes'

// Action creators

const fetchLoginBegin = () => {
	return {
		type: FETCH_LOGIN_BEGIN
	}
}

export const fetchLoginSuccess = (user) => {
	return {
		type: FETCH_LOGIN_SUCCESS,
		user
	}
}

const fetchLoginFailure = (error) => {
	console.log(error)
	return {
		type: FETCH_LOGIN_FAILURE,
		error: error.message
	}
}

// Thunk

export const loginUser = (email, password) => {
	return (dispatch) => {
		dispatch(fetchLoginBegin())
		auth.signInWithEmailAndPassword(email, password)
			.then((user) => {
				dispatch(fetchLoginSuccess(user))
			})
			.catch((error) => {
				dispatch(fetchLoginFailure(error))
			})
	}
}
