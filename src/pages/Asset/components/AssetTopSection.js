import React from 'react'
import { connect } from 'react-redux'
import { getAssetData } from 'state/selectors/assetSelectors'

const AssetTopSection = ({ asset }) => {
	return (
		<main className="asset">
			<div className="asset__top-section">
				<div className="asset__title">
					<img src={asset.icon} alt="icon" />
					<h3>{asset.name}</h3>
					<p>({asset.symbol})</p>
				</div>
				<div className="asset__price">
					<p className="">${asset.price}</p>
					<p className={asset.priceChange < 0 ? 'red' : 'green'}>
						({asset.priceChange}%)
					</p>
				</div>
			</div>
		</main>
	)
	return null
}

const mapStateToProps = (state) => {
	return {
		asset: getAssetData(state),
	}
}

export default connect(mapStateToProps)(AssetTopSection)
