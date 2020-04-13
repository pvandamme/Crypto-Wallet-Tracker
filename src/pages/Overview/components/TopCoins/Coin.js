import React, { Component } from 'react'
import { roundNumber, formatNumber } from 'helpers/helpers'
import { Link } from 'react-router-dom'

class Coin extends Component {
	render() {
		const { coin } = this.props

		return (
			<Link to={`/asset/${coin.id}`} className="top-coins__link">
				<ul className="top-coins__grid top-coins__coin">
					<li>
						<div className="top-coins__name">
							<img src={coin.icon} alt="icon" />
							{coin.name}
						</div>
					</li>
					<li>${formatNumber(coin.mkCap)}</li>
					<li className="top-coins__center">${coin.price}</li>
					<li className={coin.priceChange < 0 ? 'red' : 'green'}>
						{coin.priceChange.toFixed(2)}%
					</li>
				</ul>
			</Link>
		)
	}
}

export default Coin
