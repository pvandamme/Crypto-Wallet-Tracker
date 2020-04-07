import React from 'react'
import HoldingCoin from './HoldingCoin'

const Holding = () => {
	return (
		<div className="holding">
			<ul className="holding-grid">
				<li>
					<div className="top-coins__name">Name</div>
				</li>
				<li>Price</li>
				<li>Value</li>
				<li>Change (24h)</li>
				<li>ROI</li>
			</ul>
		</div>
	)
}

export default Holding
