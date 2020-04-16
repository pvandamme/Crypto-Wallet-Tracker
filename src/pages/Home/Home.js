import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
	render() {
		return (
			<section className="hero">
				<div className="hero-text">
					<h2>Buy cryptocurrencies.</h2>
					<h2>Add your Transactions.</h2>
					<h2>Track your results.</h2>
					<Link to="/register">
						<button>TRY NOW</button>
					</Link>
				</div>
			</section>
		)
	}
}
