import React from 'react'
import GlobalMarket from './GlobalMarket'
import TopCoinsList from './TopCoinsList'
import TopSection from './TopSection'
import FilterBy from './FilterBy'
import Pagination from './Pagination'

const OverviewPage = () => {
	return (
		<main>
			<GlobalMarket />
			<TopSection />
			<FilterBy />
			<TopCoinsList />
			<Pagination />
		</main>
	)
}

export default OverviewPage
