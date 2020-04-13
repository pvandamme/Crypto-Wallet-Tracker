import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchAsset } from 'state/actions/assetActions'
import {
	getAssetPending,
	getAssetError,
	getAssetSuccess,
} from 'state/selectors/assetSelectors'
import LoadingSpinner from 'pages/Shared/LoadingSpinner'
import AssetTopSection from './components/AssetTopSection'
import SelectTimeFrame from './components/SelectTimeFrame/SelectTimeFrame'
import AssetChart from './components/AssetChart'

class Asset extends Component {
	componentDidMount() {
		const { fetchAsset, coin } = this.props
		fetchAsset(coin)
	}
	render() {
		const { error, pending, success } = this.props

		if (pending) {
			return <LoadingSpinner />
		} else if (error) {
			return <p>An error Occur</p> // TODO - Split error component
		} else if (success) {
			return (
				<main className="asset">
					<AssetTopSection />
					<SelectTimeFrame />
					<AssetChart />
				</main>
			)
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
		coin: match.params.coin,
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Asset)
