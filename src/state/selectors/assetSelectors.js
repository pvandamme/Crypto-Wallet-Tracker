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
		price: cutNumber(asset.market_data.current_price.usd),
	}
}

export const getAssetChart = (state) => {
	switch (
		state.asset.timeFrame // TODO - Wallah c moche f un effor bg
	) {
		case 'monthly':
			return state.asset.charts.monthlyChart.prices
		case 'daily':
			return state.asset.charts.dailyChart.prices
		case 'weekly':
			return state.asset.charts.weeklyChart.prices
		case 'yearly':
			return state.asset.charts.yearlyChart.prices
		default:
			break
	}
}

export const getTimeFrame = (state) => state.asset.timeFrame
