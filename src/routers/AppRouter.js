import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from '../components/Welcome'
import Login from '../components/Login'
import Overview from '../components/Overview'
import Register from '../components/Register'
import NotFoundPage from '../components/NotFoundPage'
import Header from '../components/Header'

const AppRouter = () => (
	<BrowserRouter>
		<div>
			<Header />
			<Switch>
				<Route path="/" component={App} exact={true} />
				<Route path="/overview" component={Overview} />
				<Route path="/login" component={Login} />
				<Route path="/register" component={Register} />
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	</BrowserRouter>
)

export default AppRouter
