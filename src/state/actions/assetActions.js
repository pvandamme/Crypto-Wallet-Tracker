import CoinGecko from 'coingecko-api'
import {
	FETCH_ASSET_BEGIN,
	FETCH_ASSET_FAILURE,
	FETCH_ASSET_SUCCESS
} from '../actionTypes'

// Action creators

export const fetchAssetBegin = () => {
	return {
		type: FETCH_ASSET_BEGIN
	}
}

export const fetchAssetSuccess = (assetData, chart) => {
	return {
		type: FETCH_ASSET_SUCCESS,
		payload: {
			assetData,
			chart
		}
	}
}

export const fetchAssetFailure = () => {
	return {
		type: FETCH_ASSET_FAILURE
	}
}

// Thunk

export const fetchAsset = (asset) => {
	const CoinGeckoClient = new CoinGecko()

	return async (dispatch) => {
		dispatch(fetchAssetBegin())
		try {
			const fetchAsset = CoinGeckoClient.coins.fetch(asset, {
				localization: false
			})
			const fetchChart = CoinGeckoClient.coins.fetchMarketChart(asset)
			const [assetData, chart] = await Promise.all([
				fetchAsset,
				fetchChart
			])
			if (!assetData.success || !chart.success) {
				throw new Error()
			}
			dispatch(fetchAssetSuccess(assetData.data, chart.data))
		} catch (e) {
			console.log(e)
			dispatch(fetchAssetFailure())
		}
	}
}
