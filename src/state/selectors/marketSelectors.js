import { formatNumber, roundNumber } from '../../helpers/helpers'

export const getMarketData = (state) => state.marketData

export const getMarketSuccess = (state) => state.success

export const getMarketPending = (state) => state.pending

export const getMarketError = (state) => state.error

export const getGlobal = (state) => {
	const data = state.marketData.globalData
	return {
		totalMarketCap: formatNumber(data.total_market_cap.usd),
		totalVolume: formatNumber(data.total_volume.usd),
		btcDominance: roundNumber(data.market_cap_percentage.btc, 1),
		cryptocurrencies: data.active_cryptocurrencies
	}
}

export const getTopCoins = (state) => {
	return state.marketData.topCoins.map((coin) => {
		return {
			id: coin.id,
			name: coin.name,
			mkCap: coin.market_cap,
			icon: coin.image,
			price: coin.current_price,
			priceChange: coin.price_change_percentage_24h
		}
	})
}
