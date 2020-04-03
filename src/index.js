import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouter'
import { Provider } from 'react-redux'
import configureStore from './state/store'
import './styles/styles.scss'

const store = configureStore()

store.subscribe(() => {
	const state = store.getState()
	console.log(state)
})

const Index = () => {
	return (
		<Provider store={store}>
			<AppRouter />
		</Provider>
	)
}

ReactDOM.render(<Index />, document.getElementById('root'))
