import { roundNumber, cutNumber } from 'helpers/helpers'

export const getAssetPending = (state) => state.asset.pending

export const getAssetSuccess = (state) => state.asset.success

export const getAssetError = (state) => state.asset.error

export const getAssetData = (state) => {
	const asset = state.asset.assetData
	return {
		name: asset.name,
		symbol: asset.symbol.toUpperCase(),
		icon: asset.image.small,
		priceChange: roundNumber(
			asset.market_data.price_change_percentage_24h,
			2
		),
		price: cutNumber(asset.market_data.current_price.usd)
	}
}

export const getAssetCharts = (state) => state.asset.charts.monthlyChart.prices
