import React from 'react'
import { formatNumber } from '../../helpers/helpers'

const Coin = (props) => {
	return (
		<li>
			<span>{props.coin.name}</span>
			<span>{props.coin.current_price}</span>
			<span>{formatNumber(props.coin.market_cap)}</span>
		</li>
	)
}

export default Coin
