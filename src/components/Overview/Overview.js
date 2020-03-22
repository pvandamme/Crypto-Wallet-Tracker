import React, { Component } from 'react'
import LoadingSpinner from '../Shared/LoadingSpinner'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
	getMarketPending,
	getMarketError
} from '../../state/selectors/marketSelectors'
import { fetchMarket } from '../../state/actions/marketActions'

class Overview extends Component {
	componentDidMount() {
		this.props.fetchMarket()
	}
	render() {
		const { error, pending } = this.props
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
		error: getMarketError(state)
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ fetchMarket }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Overview)
