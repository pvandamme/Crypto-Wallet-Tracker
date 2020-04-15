import React from 'react'
import { connect } from 'react-redux'
import { getTransactions } from 'state/selectors/dashboardSelectors'
import EditTransaction from './EditTransaction'

const TransactionsList = ({ transactions }) => {
	const ret = transactions.map((transaction, i) => (
		<EditTransaction key={i} transaction={transaction} />
	))
	return <div className="details-wrapper">{ret}</div>
}

const mapStateToProps = (state, ownProps) => {
	return {
		transactions: getTransactions(state, ownProps.name),
	}
}

export default connect(mapStateToProps)(TransactionsList)
