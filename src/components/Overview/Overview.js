import React, { Component } from 'react'
import LoadingSpinner from '../Shared/LoadingSpinner'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
	getMarketPending,
	getMarketError,
	getMarketSuccess
} from '../../state/selectors/marketSelectors'
import { fetchMarket } from '../../state/actions/marketActions'
import OverviewPage from './OverviewPage'

class Overview extends Component {
	componentDidMount() {
		this.props.fetchMarket()
	}
	render() {
		const { success, error, pending } = this.props

		if (pending) {
			return <LoadingSpinner />
		} else if (error) {
			return <p>An error occur, please reload !</p> // TODO - Error component
		} else if (success) {
			return <OverviewPage />
		}

		return null
	}
}

const mapStateToProps = (state) => {
	return {
		pending: getMarketPending(state),
		error: getMarketError(state),
		success: getMarketSuccess(state)
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ fetchMarket }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Overview)
