import { createStore } from 'redux'
import marketDataReducer from '../reducers/marketDataReducer'

export default () => {
	const store = createStore(
		marketDataReducer,
		window.__REDUX_DEVTOOLS_EXTENSION__ &&
			window.__REDUX_DEVTOOLS_EXTENSION__()
	)

	return store
}
