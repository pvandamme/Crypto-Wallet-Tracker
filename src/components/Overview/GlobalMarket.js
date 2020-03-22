import React from 'react'
import {
	getGlobal,
	getMarketSuccess
} from '../../state/selectors/marketSelectors'
import { connect } from 'react-redux'

const GlobalMarket = (props) => {
	const { globalData } = props

	return (
		<section className="globaMarketWrapper">
			<ul>
				<li>Market Cap: ${globalData.totalMarketCap}</li>
				<li>24h Vol: ${globalData.totalVolume}</li>
				<li>BTC Dominance: {globalData.btcDominance}%</li>
				<li>Cryptocurrencies: {globalData.cryptocurrencies}</li>
			</ul>
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
