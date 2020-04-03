import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from 'pages/Home/Home'
import Login from 'pages/Login/Login'
import Overview from 'pages/Overview/Overview'
import Register from 'pages/Register/Register'
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage'
import Header from 'pages/Shared/Header/Header'
import Asset from 'pages/Asset/Asset'

const AppRouter = () => (
	<BrowserRouter>
		<div>
			<Header />
			<Switch>
				<Route path="/" component={Home} exact={true} />
				<Route path="/overview" component={Overview} />
				<Route path="/login" component={Login} />
				<Route path="/register" component={Register} />
				<Route path="/asset/:coin" component={Asset} />
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	</BrowserRouter>
)

export default AppRouter
