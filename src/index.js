import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouter'
import { Provider } from 'react-redux'
import store from './state/store'
import './styles/styles.scss'
import firebase from 'firebaseConfig/firebase'

store.subscribe(() => {
	const state = store.getState()
	console.log(state)
})

class Index extends Component {
	componentDidMount() {
		firebase.auth().onAuthStateChanged(function(user) {
			if (user) {
				console.log(user)
			} else {
				console.log('no user')
			}
		})
	}
	render() {
		return (
			<Provider store={store}>
				<AppRouter />
			</Provider>
		)
	}
}

ReactDOM.render(<Index />, document.getElementById('root'))
