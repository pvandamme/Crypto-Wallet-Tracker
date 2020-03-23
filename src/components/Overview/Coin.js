import React from 'react'
import { formatNumber } from '../../helpers/helpers'

const Coin = (props) => {
	return (
		<ul className="top-coins__grid">
			<li>
				<div className="top-coins__name">
					<img src={props.coin.image} alt="icon" />
					<p>{props.coin.name}</p>
				</div>
			</li>
			<li>
				<p>{props.coin.current_price}</p>
			</li>
			<li>
				<p>{formatNumber(props.coin.market_cap)}</p>
			</li>
		</ul>
	)
}

export default Coin
