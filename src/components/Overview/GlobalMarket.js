import React from 'react'
import {
	getGlobal,
	getMarketSuccess
} from '../../state/selectors/marketSelectors'
import { connect } from 'react-redux'
import { formatNumber } from '../../helpers/helpers'

const GlobalMarket = (props) => {
	const { globalData } = props
	const totalMarketCap = formatNumber(globalData.total_market_cap.usd)

	return (
		<section className="globaMarketWrapper">
			<ul>
				<li>Market Cap: ${totalMarketCap}</li>
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
