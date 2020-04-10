import React from 'react'
import HoldDoughnutChart from 'pages/Dashboard/HoldDoughnutChart'
import Filter from 'pages/Overview/components/TopCoins/Filter'
import HoldCoin from './HoldCoin'

const Hold = () => {
	return (
		<div className="hold">
			<HoldDoughnutChart />
			<div className="hold__list">
				<h3>Holding</h3>
				<div className="hold__list--grid">
					<p># Name</p>
					<p># Value</p>
					<p># Price</p>
					<p># Change (24h)</p>
					<p># ROI </p>
				</div>
				<HoldCoin />
			</div>
		</div>
	)
}

export default Hold
