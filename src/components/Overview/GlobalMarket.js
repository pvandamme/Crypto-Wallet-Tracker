import React from 'react'
import {
	getGlobal,
	getMarketSuccess
} from '../../state/selectors/marketSelectors'
import { connect } from 'react-redux'

const GlobalMarket = (props) => {
	const { globalData } = props

	return (
		<section className="global-market">
			<ul className="global-market__list">
				<li>
					Market Cap: <span>${globalData.totalMarketCap}</span>
				</li>
				<li>
					24h Vol: <span>${globalData.totalVolume}</span>
				</li>
				<li>
					BTC Dominance: <span>{globalData.btcDominance}%</span>
				</li>
				<li>
					Cryptocurrencies: <span>{globalData.cryptocurrencies}</span>
				</li>
			</ul>
			<hr className="Global-market__line" />
		</section>
	)
}

const mapStateToProps = (state) => {
	return {
		globalData: getGlobal(state),
		success: getMarketSuccess(state)
	}
}

export default connect(mapStateToProps)(GlobalMarket)
