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

export const fetchAssetSuccess = (assetData, charts) => {
	return {
		type: FETCH_ASSET_SUCCESS,
		payload: {
			assetData,
			charts
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
			const fetchWeekly = fetchChart(CoinGeckoClient, asset, 7)
			const fetchMonthly = fetchChart(CoinGeckoClient, asset, 30)
			const fetchDaily = fetchChart(CoinGeckoClient, asset, 1)
			const fetchYearly = fetchChart(CoinGeckoClient, asset, 365)

			const data = await Promise.all([
				fetchAsset,
				fetchWeekly,
				fetchMonthly,
				fetchDaily,
				fetchYearly
			])

			data.map((elem) => {
				if (!elem.success) throw new Error()
			})

			dispatch(
				fetchAssetSuccess(data[0].data, {
					weeklyChart: data[1].data,
					monthlyChart: data[2].data,
					dailyChart: data[3].data,
					yearlyChart: data[4].data
				})
			)
		} catch (e) {
			dispatch(fetchAssetFailure())
		}
	}
}

// Helper functions

const fetchChart = (client, asset, days) => {
	return client.coins.fetchMarketChart(asset, {
		days
	})
}
