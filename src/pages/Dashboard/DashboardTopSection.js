import React from 'react'
import { connect } from 'react-redux'
import { getDashboardData } from 'state/selectors/dashboardSelectors'

const DashboardTopSection = ({ data }) => {
	const { totalInvested, value, roi, profit } = data

	let color = ''
	if (roi > 0) {
		color = 'green'
	} else if (roi < 0) {
		color = 'red-card'
	}

	return (
		<div className="dashboard-top-section">
			<div className="card">
				<p className="card-title">Invested</p>
				<p className="card-value">$ {totalInvested}</p>
			</div>
			<div className="card">
				<p className="card-title">Portfolio value</p>
				<p className="card-value">$ {value}</p>
			</div>
			<div className="card">
				<p className="card-title">Profit</p>
				<p className="card-value">$ {profit}</p>
			</div>
			<div className="card">
				<p className="card-title">ROI</p>
				<p className={'card-value ' + color}>
					{roi >= 0 ? '+' : '-'} {roi >= 0 ? roi : roi * -1}%
				</p>
			</div>
		</div>
	)
}

const mapStateToPros = (state) => {
	return {
		data: getDashboardData(state),
	}
}

export default connect(mapStateToPros)(DashboardTopSection)
