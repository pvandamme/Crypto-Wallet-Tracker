import React from 'react'
import { connect } from 'react-redux'
import { getTopCoins } from '../../state/selectors/marketSelectors'
import Coin from './Coin'
import { fetchMarket } from '../../state/actions/marketActions'
import { bindActionCreators } from 'redux'

const TopCoinsList = (props) => {
	const { topCoins } = props
	const list = topCoins.map((coin) => <Coin coin={coin} key={coin.id} />)
	return (
		<div className="top-coins">
			<div className="top-coins__title">
				<h3>Market Overview</h3>
				<button onClick={() => props.fetchMarket()}>
					<i className="fas fa-sync-alt i"></i>
				</button>
			</div>
			<ul className="top-coins__grid top-coins__legend">
				<li># Name</li>
				<li># Market Cap</li>
				<li># Price</li>
				<li># Change (24h)</li>
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

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ fetchMarket }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TopCoinsList)
