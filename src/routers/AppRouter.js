import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from 'pages/Home/Home'
import Login from 'pages/Login/Login'
import Overview from 'pages/Overview/Overview'
import Register from 'pages/Register/Register'
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage'
import Header from 'pages/Shared/Header/Header'
import Asset from 'pages/Asset/Asset'
import { connect } from 'react-redux'
import { getVerifyStatus } from 'state/selectors/authSelectors'
import LoadingSpinner from 'pages/Shared/LoadingSpinner'
import Dashboard from 'pages/Dashboard/Dashboard'
import ProtectedRoutes from './ProtectedRoutes'

const AppRouter = ({ verify }) => {
	if (!verify) {
		return (
			<BrowserRouter>
				<div>
					<Header />
					<Switch>
						<Route path="/" component={Home} exact={true} />
						<Route path="/overview" component={Overview} />
						<Route path="/login" component={Login} />
						<Route path="/register" component={Register} />
						<Route path="/asset/:coin" component={Asset} />
						<Route path="/dashboard" component={Dashboard} />
						<Route component={NotFoundPage} />
					</Switch>
				</div>
			</BrowserRouter>
		)
	} else {
		return <LoadingSpinner />
	}
}

const mapStateToProps = (state) => {
	return {
		verify: getVerifyStatus(state),
	}
}

export default connect(mapStateToProps)(AppRouter)
