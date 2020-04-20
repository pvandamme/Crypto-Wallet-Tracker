import React, { useEffect } from 'react'
import GlobalMarket from './components/TopSection/GlobalMarket'
import TopCoinsList from './components/TopCoins/TopCoinsList'
import TopSection from './components/TopSection/TopSection'
import FilterBy from './components/TopCoins/FiltersBy'
import Pagination from './components/Pagination/Pagination'
import { connect } from 'react-redux'
import FetchTopCoins from './components/FetchTopCoins/FetchTopCoins'
import { getMarketSuccess } from 'state/selectors/marketSelectors'

const Overview = ({ success, resetFilter }) => {
	return success ? (
		<main>
			<GlobalMarket />
			<TopSection />
			<FilterBy />
			<TopCoinsList />
			<Pagination />
		</main>
	) : (
		<FetchTopCoins />
	)
}

const mapStateToProps = (state) => {
	return {
		success: getMarketSuccess(state),
	}
}

export default connect(mapStateToProps)(Overview)
