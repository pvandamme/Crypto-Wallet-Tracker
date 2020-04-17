import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { logoutUser } from 'state/actions/authActions/logoutActions'
import { NavLink } from 'react-router-dom'

const Logout = ({ logoutUser }) => {
	return (
		<ul className="main-head__right">
			<li>
				<NavLink to="/overview">Overview</NavLink>
			</li>
			<div className="right-wrapper">
				<li>
					<NavLink to="/dashboard">Dashboard</NavLink>
				</li>
				<li>
					<a onClick={() => logoutUser()}>Logout</a>
				</li>
			</div>
		</ul>
	)
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ logoutUser }, dispatch)
}

export default connect(null, mapDispatchToProps)(Logout)
