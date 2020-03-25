import React, { Component } from 'react'
import { roundNumber, formatNumber } from '../../helpers/helpers'

class Coin extends Component {
	render() {
		const { coin } = this.props
		return (
			<ul className="top-coins__grid">
				<li>
					<div className="top-coins__name">
						<img src={coin.icon} alt="icon" />
						{coin.name}
					</div>
				</li>
				<li>${formatNumber(coin.mkCap)}</li>
				<li className="top-coins__center">
					${formatNumber(coin.price)}
				</li>
				<li className={coin.priceChange < 0 ? 'red' : 'green'}>
					{roundNumber(coin.priceChange, 2)}%
				</li>
			</ul>
		)
	}
}

export default Coin
