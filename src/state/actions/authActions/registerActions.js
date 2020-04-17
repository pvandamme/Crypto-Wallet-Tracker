import { auth, firestore } from 'firebaseConfig/firebase'
import {
	FETCH_REGISTER_BEGIN,
	FETCH_REGISTER_FAILURE,
	FETCH_REGISTER_SUCCESS,
} from '../../actionTypes'

// Action creators

const fetchRegisterBegin = () => {
	return {
		type: FETCH_REGISTER_BEGIN,
	}
}

const fetchRegisterSuccess = (user) => {
	return {
		type: FETCH_REGISTER_SUCCESS,
		user,
	}
}

const fetchRegisterFailure = (error) => {
	return {
		type: FETCH_REGISTER_FAILURE,
		error: error.message,
	}
}

// Thunk

export const registerUser = (username, email, password) => {
	return (dispatch) => {
		dispatch(fetchRegisterBegin())
		auth.createUserWithEmailAndPassword(email, password)
			.then(({ user }) => {
				firestore.collection('users').doc(user.uid).set({
					username,
				})
				dispatch(fetchRegisterSuccess(user))
			})
			.catch((error) => {
				dispatch(fetchRegisterFailure(error))
			})
	}
}
