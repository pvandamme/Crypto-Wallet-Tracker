import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'
import { getIsAuthenticated } from 'state/selectors/authSelectors'

const ProtectedRoute = ({ component, path, auth }) => {
	return auth ? (
		<Route path={path} component={component} />
	) : (
		<Redirect to="/login" />
	)
}
const mapStateToProps = (state) => ({
	auth: getIsAuthenticated(state),
})

export default connect(mapStateToProps)(ProtectedRoute)
