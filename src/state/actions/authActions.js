import { auth } from 'firebaseConfig/firebase'
import {
	FETCH_LOGIN_BEGIN,
	FETCH_LOGIN_FAILURE,
	FETCH_LOGIN_SUCCESS,
	FETCH_LOGOUT_BEGIN,
	FETCH_LOGOUT_FAILURE,
	FETCH_LOGOUT_SUCCESS,
	FETCH_VERIFY_BEGIN,
	FETCH_VERIFY_SUCCESS
} from '../actionTypes'

// Action creators

const fetchLoginBegin = () => {
	return {
		type: FETCH_LOGIN_BEGIN
	}
}

const fetchLoginSuccess = (user) => {
	return {
		type: FETCH_LOGIN_SUCCESS,
		user
	}
}

const fetchLoginFailure = () => {
	return {
		type: FETCH_LOGIN_FAILURE
	}
}

const fetchLogoutBegin = () => {
	return {
		type: FETCH_LOGOUT_BEGIN
	}
}

const fetchLogoutSuccess = () => {
	return {
		type: FETCH_LOGOUT_SUCCESS
	}
}

const fetchLogoutFailure = () => {
	return {
		type: FETCH_LOGOUT_FAILURE
	}
}

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

// THUNKS

export const loginUser = (email, password) => {
	return (dispatch) => {
		dispatch(fetchLoginBegin())
		auth.signInWithEmailAndPassword(email, password)
			.then((user) => {
				dispatch(fetchLoginSuccess(user))
			})
			.catch((error) => {
				dispatch(fetchLoginFailure())
			})
	}
}

export const logoutUser = () => {
	return (dispatch) => {
		dispatch(fetchLogoutBegin())
		auth.signOut()
			.then(() => {
				dispatch(fetchLogoutSuccess())
			})
			.catch((error) => {
				dispatch(fetchLogoutFailure())
			})
	}
}

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
