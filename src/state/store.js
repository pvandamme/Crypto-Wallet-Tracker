import { applyMiddleware, createStore, compose } from 'redux'
import rootReducer from './reducers/rootReducer'
import thunk from 'redux-thunk'
import { verifyAuth } from './actions/authActions/verifyActions'
import { auth } from 'firebaseConfig/firebase'
import { fetchLoginSuccess } from './actions/authActions/loginActions'

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const composeEnhancer = compose

const configureStore = () => {
	const store = createStore(
		rootReducer,
		composeEnhancer(applyMiddleware(thunk))
	)
	auth.onAuthStateChanged((user) => {
		if (user) {
			store.dispatch(fetchLoginSuccess(user))
		}
	})
	store.dispatch(verifyAuth())
	return store
}

export default configureStore
