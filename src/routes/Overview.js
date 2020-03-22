import React, { Component } from 'react'
import LoadingSpinner from '../components/LoadingSpinner'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
	getMarketPending,
	getMarketData,
	getMarketError
} from '../state/selectors/marketSelectors'
import { fetchMarket } from '../state/actions/marketActions'

class Overview extends Component {
	componentDidMount() {
		this.props.fetchMarket()
	}
	render() {
		const { marketData, error, pending } = this.props
		if (pending) {
			return <LoadingSpinner />
		} else if (error) {
			return <p>An error occur, please reload !</p>
		} else {
			return <p>Fetched !</p>
		}
	}
}

const mapStateToProps = (state) => {
	return {
		pending: getMarketPending(state),
		marketData: getMarketData(state),
		error: getMarketError(state)
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ fetchMarket }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Overview)
