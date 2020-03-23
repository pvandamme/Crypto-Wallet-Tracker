import React from 'react'
import { connect } from 'react-redux'
import { getTopCoins } from '../../state/selectors/marketSelectors'
import Coin from './Coin'

const TopCoinsList = (props) => {
	const { topCoins } = props
	const list = topCoins.map((coin) => <Coin coin={coin} key={coin.id} />)
	return (
		<div className="top-coins">
			<h3>Market Overview</h3>
			<ul className="top-coins__grid">
				<li># Name</li>
				<li># Price</li>
				<li># Market Cap</li>
			</ul>
			<div>{list}</div>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		topCoins: getTopCoins(state)
	}
}

export default connect(mapStateToProps)(TopCoinsList)
