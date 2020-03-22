import { formatNumber, roundNumber } from '../../helpers/helpers'

export const getMarketData = (state) => state.marketData

export const getMarketSuccess = (state) => state.success

export const getMarketPending = (state) => state.pending

export const getMarketError = (state) => state.error

export const getTopCoins = (state) => state.marketData.topCoins

export const getGlobal = (state) => {
	const data = state.marketData.globalData
	return {
		totalMarketCap: formatNumber(data.total_market_cap.usd),
		totalVolume: formatNumber(data.total_volume.usd),
		btcDominance: roundNumber(data.market_cap_percentage.btc),
		cryptocurrencies: data.active_cryptocurrencies
	}
}
