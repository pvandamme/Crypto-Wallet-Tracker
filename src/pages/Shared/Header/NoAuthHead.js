import React from 'react'
import { NavLink } from 'react-router-dom'

const NoAuthHead = () => {
	return (
		<ul className="main-head__right">
			<li>
				<NavLink to="/overview">Overview</NavLink>
			</li>
			<div className="right-wrapper">
				<li>
					<NavLink to="/login">Login</NavLink>
				</li>
				<li>
					<NavLink to="/register">Register</NavLink>
				</li>
			</div>
		</ul>
	)
}

export default NoAuthHead
