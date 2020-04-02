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

const defaultState = {
	loginBegin: false,
	loginOutBegin: false,
	verifyBegin: false,
	loginError: false,
	logoutError: false,
	isAuthenticated: false,
	user: {}
}

export default (state = defaultState, action) => {
	switch (action.type) {
		case FETCH_LOGIN_BEGIN:
			return {
				...state,
				loginBegin: true,
				loginError: false
			}
		case FETCH_LOGIN_SUCCESS:
			return {
				...state,
				loginBegin: false,
				isAuthenticated: true,
				user: action.user
			}
		case FETCH_LOGIN_FAILURE:
			return {
				...state,
				loginBegin: false,
				isAuthenticated: false,
				loginError: true
			}
		case FETCH_LOGOUT_BEGIN:
			return {
				...state,
				loginOutBegin: true,
				logoutError: false
			}
		case FETCH_LOGOUT_SUCCESS:
			return {
				...state,
				loginOutBegin: false,
				isAuthenticated: false,
				user: {}
			}
		case FETCH_LOGOUT_FAILURE:
			return {
				...state,
				loginOutBegin: false,
				loginOutError: true
			}
		case FETCH_VERIFY_BEGIN:
			return {
				...state,
				verifyBegin: true
			}
		case FETCH_VERIFY_SUCCESS:
			return {
				...state,
				verifyBegin: false
			}
		default:
			return state
	}
}
