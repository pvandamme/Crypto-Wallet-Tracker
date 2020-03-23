import React from 'react'
import { roundNumber, formatNumber } from '../../helpers/helpers'

const Coin = ({ coin }) => {
	return (
		<ul className="top-coins__grid">
			<li>
				<div className="top-coins__name">
					<img src={coin.icon} alt="icon" />
					<p>{coin.name}</p>
				</div>
			</li>
			<li>
				<p>${formatNumber(coin.mkCap)}</p>
			</li>
			<li>
				<p>${formatNumber(coin.price)}</p>
			</li>
			<li>
				<p className={coin.priceChange < 0 ? 'red' : 'green'}>
					{roundNumber(coin.priceChange, 2)}%
				</p>
			</li>
		</ul>
	)
}

export default Coin
