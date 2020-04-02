import { applyMiddleware, createStore } from 'redux'
import rootReducer from './reducers/rootReducer'
import thunk from 'redux-thunk'
import { verifyAuth } from './actions/authActions'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const configureStore = () => {
	const store = createStore(
		rootReducer,
		composeEnhancer(applyMiddleware(thunk))
	)
	store.dispatch(verifyAuth())
	return store
}

export default configureStore
