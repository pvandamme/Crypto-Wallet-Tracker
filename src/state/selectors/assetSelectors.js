export const getAssetPending = (state) => state.asset.pending

export const getAssetSuccess = (state) => state.asset.success

export const getAssetError = (state) => state.asset.error

export const getAssetData = (state) => {
	const asset = state.asset.assetData
	return {
		name: asset.name,
		symbol: asset.symbol.toUpperCase(),
		icon: asset.image.small,
		priceChange: asset.market_data.price_change_percentage_24h,
		price: asset.market_data.current_price.usd
	}
}
