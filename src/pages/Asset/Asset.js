import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchAsset } from 'state/actions/assetActions'
import {
	getAssetPending,
	getAssetError,
	getAssetSuccess
} from 'state/selectors/assetSelectors'
import LoadingSpinner from 'pages/Shared/LoadingSpinner'
import AssetPage from './components/AssetPage'

class Asset extends Component {
	componentDidMount() {
		const { fetchAsset, coin } = this.props
		//fetchAsset(coin)
	}
	render() {
		const { coin, error, pending, success } = this.props

		if (pending) {
			return <LoadingSpinner />
		} else if (error) {
			return <p>An error Occur</p> // TODO - Split error component
		} else if (success) {
			return <AssetPage />
		}

		return null
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ fetchAsset }, dispatch)
}

const mapStateToProps = (state, ownProps) => {
	const { match } = ownProps
	return {
		pending: getAssetPending(state),
		error: getAssetError(state),
		success: getAssetSuccess(state),
		coin: match.params.coin
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Asset)
