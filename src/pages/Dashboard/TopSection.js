import React from 'react'

const TopSection = () => {
	return (
		<div className="top-section">
			<div className="card">
				<p className="card-title">Invested</p>
				<p className="card-value">$ 600.86</p>
			</div>
			<div className="card">
				<p className="card-title">Portfolio value</p>
				<p className="card-value">$ 800.42</p>
			</div>
			<div className="card">
				<p className="card-title">Profit</p>
				<p className="card-value">$ 199.56</p>
			</div>
			<div className="card">
				<p className="card-title">ROI</p>
				<p className="card-value">+ 10%</p>
			</div>
		</div>
	)
}

export default TopSection
