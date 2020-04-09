import React from 'react'
import HoldDoughnutChart from 'pages/Dashboard/HoldDoughnutChart'
import Filter from 'pages/Overview/components/TopCoins/Filter'

const Hold = () => {
	return (
		<div className="hold">
			<HoldDoughnutChart />
			<div className="hold__list">
				<h3>Holding</h3>
				<ul className="top-coins__grid top-coins__legend">
					<Filter filter="name" tag="# Name" />
					<Filter filter="mc" tag="# Value" />
					<Filter filter="price" tag="# Price" />
					<Filter filter="change" tag="# Change (24h)" />
				</ul>
			</div>
		</div>
	)
}

export default Hold
