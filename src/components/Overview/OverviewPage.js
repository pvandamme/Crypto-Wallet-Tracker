import React from 'react'
import GlobalMarket from './GlobalMarket'
import TopCoinsList from './TopCoinsList'
import Title from './Title'
import Filters from './Filters'
import Pagination from './Pagination'

const OverviewPage = () => {
	return (
		<main>
			<GlobalMarket />
			<Pagination />
			<Title />
			<Filters />
			<TopCoinsList />
		</main>
	)
}

export default OverviewPage
