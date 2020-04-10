import React from 'react'
import { connect } from 'react-redux'
import { getHoldListData } from 'state/selectors/dashboardSelectors'

const HoldCoin = ({ transactions }) => {
	return (
		<div className="hold__list-coin">
			<p># Name</p>
			<p># Value</p>
			<p># Price</p>
			<p># Change (24h)</p>
			<p># ROI </p>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		transactions: 'cc',
	}
}

export default connect(mapStateToProps)(HoldCoin)
