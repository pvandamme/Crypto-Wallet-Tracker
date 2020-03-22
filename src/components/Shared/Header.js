import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
	return (
		<header className="main-head">
			<nav className="main-head__nav">
				<ul className="main-head__left">
					<li>
						<NavLink to="/">
							<h1>Crypto Traker</h1>
						</NavLink>
					</li>
					<li>
						<NavLink to="/overview">Overwiew</NavLink>
					</li>
				</ul>
				<ul className="main-head__right">
					<li>
						<NavLink to="/login">Login</NavLink>
					</li>
					<li>
						<NavLink to="/register">Register</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
