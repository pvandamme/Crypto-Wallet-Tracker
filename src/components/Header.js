import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
	return (
		<header className="main-head">
			<nav className="main-head__nav">
				<NavLink to="/">
					<h1>Crypto Traker</h1>
				</NavLink>
				<NavLink to="/overview">Overwiew</NavLink>
				<NavLink to="/login">Login</NavLink>
				<NavLink to="/register">Register</NavLink>
			</nav>
		</header>
	)
}

export default Header
