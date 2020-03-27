export const getAssetPending = (state) => state.asset.pending

export const getAssetSuccess = (state) => state.asset.success

export const getAssetError = (state) => state.asset.error

export const getAssetData = (state) => state.asset.assetData

export const getAssetSparkline = (state) =>
	state.asset.assetData.market_data.sparkline_7d
