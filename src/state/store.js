import { applyMiddleware, createStore } from 'redux'
import marketReducer from './reducers/marketReducer'
import thunk from 'redux-thunk'

const store = createStore(
	marketReducer,
	applyMiddleware(thunk),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
