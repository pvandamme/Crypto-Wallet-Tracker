import React, { Component } from 'react'
import LoadingSpinner from 'pages/Shared/LoadingSpinner'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
	getMarketPending,
	getMarketError,
} from 'state/selectors/marketSelectors'
import { fetchMarket } from 'state/actions/marketActions'

class FetchTopCoins extends Component {
	componentDidMount() {
		this.props.fetchMarket()
	}
	render() {
		const { error, pending } = this.props

		if (pending) {
			return <LoadingSpinner />
		} else if (error) {
			return <p>An error occur, please reload !</p> // TODO - Error component
		}

		return null
	}
}

const mapStateToProps = (state) => {
	return {
		pending: getMarketPending(state),
		error: getMarketError(state),
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ fetchMarket }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FetchTopCoins)

// TODO - Enfaite cest dl'a merde go remove
