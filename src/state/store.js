import { applyMiddleware, createStore } from 'redux'
import marketReducer from './reducers/marketReducer'
import thunk from 'redux-thunk'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
	marketReducer,
	composeEnhancer(applyMiddleware(thunk))
)

export default store
