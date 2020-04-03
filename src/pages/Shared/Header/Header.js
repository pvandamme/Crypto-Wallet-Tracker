import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { getIsAuthenticated } from 'state/selectors/authSelectors'
import AuthHead from './AuthHead'
import NoAuthHead from './NoAuthHead'

const Header = ({ auth }) => {
	return (
		<header className="main-head">
			<nav className="main-head__nav">
				<ul className="main-head__left">
					<li>
						<NavLink to="/">
							<h1>Crypto Tracker</h1>
						</NavLink>
					</li>
					<li>
						<NavLink to="/overview">Overview</NavLink>
					</li>
				</ul>
				{auth ? <AuthHead /> : <NoAuthHead />}
			</nav>
		</header>
	)
}

const mapStateToProps = (state) => {
	return {
		auth: getIsAuthenticated(state)
	}
}

export default connect(mapStateToProps)(Header)
