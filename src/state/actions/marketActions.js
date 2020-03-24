import CoinGecko from 'coingecko-api'
import {
	FETCH_MARKET_BEGIN,
	FETCH_MARKET_SUCCESS,
	FETCH_MARKET_FAILURE
} from '../actionTypes'

// Action creators

export const fetchMarketBegin = () => {
	return {
		type: FETCH_MARKET_BEGIN
	}
}

export const fetchMarketSuccess = (data) => {
	return {
		type: FETCH_MARKET_SUCCESS,
		payload: data
	}
}

export const fetchMarketFailure = () => {
	return {
		type: FETCH_MARKET_FAILURE
	}
}

// Thunk

export const fetchMarket = () => {
	const CoinGeckoClient = new CoinGecko()

	return async (dispatch) => {
		dispatch(fetchMarketBegin())
		try {
			const fetchGlobal = CoinGeckoClient.global()
			const fetchTopCoins = CoinGeckoClient.coins.markets({
				vs_currency: 'usd',
				per_page: 250
			})
			const [globalData, topCoins] = await Promise.all([
				fetchGlobal,
				fetchTopCoins
			])
			if (!globalData.success || !topCoins.success) {
				throw new Error()
			}
			dispatch(
				fetchMarketSuccess({
					globalData: globalData.data.data,
					topCoins: topCoins.data
				})
			)
		} catch (e) {
			dispatch(fetchMarketFailure())
		}
	}
}
