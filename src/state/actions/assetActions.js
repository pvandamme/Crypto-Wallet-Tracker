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

export const fetchAssetSuccess = (assetData) => {
	return {
		type: FETCH_ASSET_SUCCESS,
		payload: assetData
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
			const assetData = await CoinGeckoClient.coins.fetch(asset, {
				localization: false,
				sparkline: true
			})
			if (!assetData.success) {
				throw new Error()
			}
			dispatch(fetchAssetSuccess(assetData.data))
		} catch (e) {
			dispatch(fetchAssetFailure())
		}
	}
}
