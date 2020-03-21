import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouter'
import { Provider } from 'react-redux'
import './styles/styles.scss'
import configureStore from './store/configureStore'

const store = configureStore()

store.subscribe(() => {
	const state = store.getState()
	console.log(state)
})

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
)

ReactDOM.render(jsx, document.getElementById('root'))
