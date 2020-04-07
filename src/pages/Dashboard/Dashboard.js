import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAuthUid } from 'state/selectors/authSelectors'
import { bindActionCreators } from 'redux'
import { setTransactionsListener } from 'state/actions/dashboardActions'
import TopSection from './TopSection'
import LoadingSpinner from 'pages/Shared/LoadingSpinner'
import {
	getDashboardPending,
	getDashboardSuccess,
	getDashboardError,
} from 'state/selectors/dashboardSelectors'
import AddTransaction from './AddTransaction'
import HoldChart from './HoldChart'

class Dashboard extends Component {
	componentDidMount() {
		const { uid, setTransactionsListener, success } = this.props
		if (!success) setTransactionsListener(uid)
	}
	render() {
		const { pending, error, success } = this.props

		if (pending) {
			return <LoadingSpinner />
		} else if (error) {
			return <p>Error</p> // TODO - Error component
		} else if (success) {
			return (
				<div>
					<main className="dashboard">
						<TopSection />
						<AddTransaction />
						<HoldChart />
					</main>
				</div>
			)
		}

		return null
	}
}

const mapStateToProps = (state) => {
	return {
		uid: getAuthUid(state),
		pending: getDashboardPending(state),
		success: getDashboardSuccess(state),
		error: getDashboardError(state),
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ setTransactionsListener }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
