import React from 'react'
import { connect } from 'react-redux'
import { getAssetData } from 'state/selectors/assetSelectors'
import { formatNumber, roundNumber } from 'helpers/helpers'

const AssetTopSection = ({ asset, priceChange, price }) => {
	return (
		<main className="asset">
			<div className="asset__top-section">
				<div className="asset__title">
					<img src={asset.image.small} alt="icon" />
					<h3>{asset.name}</h3>
					<p>({asset.symbol.toUpperCase()})</p>
				</div>
				<div className="asset__price">
					<p className="">${formatNumber(price)}</p>
					<p className={priceChange < 0 ? 'red' : 'green'}>
						({roundNumber(priceChange, 2)}%)
					</p>
				</div>
			</div>
		</main>
	)
}

const mapStateToProps = (state) => {
	const asset = getAssetData(state)
	return {
		asset,
		priceChange: asset.market_data.price_change_percentage_24h,
		price: asset.market_data.current_price.usd
	}
}

export default connect(mapStateToProps)(AssetTopSection)
