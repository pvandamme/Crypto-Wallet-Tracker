import React from 'react'
import { connect } from 'react-redux'
import { getHoldListData } from 'state/selectors/dashboardSelectors'
import HoldCoin from './HoldCoin'

const HoldCoins = ({ transactions }) => {
	const ret = transactions.map((transaction) => {
		return <HoldCoin transaction={transaction} key={transaction.name} />
	})
	return <div className="scrollable">{ret}</div>
}

const mapStateToProps = (state) => {
	return {
		transactions: getHoldListData(state),
	}
}

export default connect(mapStateToProps)(HoldCoins)
