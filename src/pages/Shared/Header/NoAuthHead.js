import React from 'react'
import { NavLink } from 'react-router-dom'

const NoAuthHead = () => {
	return (
		<ul className="main-head__right">
			<li>
				<NavLink to="/login">Login</NavLink>
			</li>
			<li>
				<NavLink to="/register">Register</NavLink>
			</li>
		</ul>
	)
}

export default NoAuthHead
