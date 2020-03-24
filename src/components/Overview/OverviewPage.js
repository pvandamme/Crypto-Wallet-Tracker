import React from 'react'
import GlobalMarket from './GlobalMarket'
import TopCoinsList from './TopCoinsList'
import Title from './Title'
import Filters from './Filters'

const OverviewPage = () => {
	return (
		<main>
			<GlobalMarket />
			<Title />
			<Filters />
			<TopCoinsList />
		</main>
	)
}

export default OverviewPage
