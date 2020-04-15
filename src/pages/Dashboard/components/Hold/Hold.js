import React from 'react'
import HoldDoughnutChart from 'pages/Dashboard/HoldDoughnutChart'
import CoinsList from './CoinsList'
import AddTransaction from '../AddTransaction/AddTransaction'

const Hold = () => {
	return (
		<div className="hold">
			<HoldDoughnutChart />
			<div className="hold__list">
				<div className="hold__list-add">
					<AddTransaction />
				</div>
				<h3>Holding</h3>
				<div className="hold__list-coin">
					<div className="hold__list-elem">
						<p># Name</p>
					</div>
					<div className="hold__list-elem">
						<p># Amount</p>
					</div>
					<div className="hold__list-elem">
						<p># Price</p>
					</div>
					<div className="hold__list-elem">
						<p># Value</p>
					</div>
					<div className="hold__list-elem">
						<p># Change (24h)</p>
					</div>
					<div className="hold__list-elem">
						<p># ROI</p>
					</div>
				</div>
				<CoinsList />
			</div>
		</div>
	)
}

export default Hold
