import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../routes/Home'
import Login from '../routes/Login'
import Overview from '../routes/Overview'
import Register from '../routes/Register'
import NotFoundPage from '../routes/NotFoundPage'
import Header from '../components/Header'

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
