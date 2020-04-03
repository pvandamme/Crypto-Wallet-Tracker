import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { logoutUser } from 'state/actions/authActions/logoutActions'

const Logout = ({ logoutUser }) => {
	return (
		<ul className="main-head__right">
			<li>
				<a onClick={() => logoutUser()}>Logout</a>
			</li>
		</ul>
	)
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ logoutUser }, dispatch)
}

export default connect(null, mapDispatchToProps)(Logout)
