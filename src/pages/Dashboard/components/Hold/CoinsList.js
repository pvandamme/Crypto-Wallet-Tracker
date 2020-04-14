import React from 'react'
import { connect } from 'react-redux'
import { getHoldListData } from 'state/selectors/dashboardSelectors'
import ComposedTransaction from './ComposedTransaction'

const CoinsList = ({ transactions }) => {
	const ret = transactions.map((transaction) => {
		return (
			<ComposedTransaction
				transaction={transaction}
				key={transaction.name}
			/>
		)
	})
	return <div className="scrollable">{ret}</div>
}

const mapStateToProps = (state) => {
	return {
		transactions: getHoldListData(state),
	}
}

export default connect(mapStateToProps)(CoinsList)
