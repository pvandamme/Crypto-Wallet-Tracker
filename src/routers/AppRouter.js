import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../components/Home/Home'
import Login from '../components/Login/Login'
import Overview from '../components/Overview/Overview'
import Register from '../components/Register/Register'
import NotFoundPage from '../components/NotFoundPage/NotFoundPage'
import Header from '../components/Shared/Header'

const AppRouter = () => (
	<BrowserRouter>
		<div>
			<Header />
			<Switch>
				<Route path="/" component={Home} exact={true} />
				<Route path="/overview" component={Overview} />
				<Route path="/login" component={Login} />
				<Route path="/register" component={Register} />
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	</BrowserRouter>
)

export default AppRouter
