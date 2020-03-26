import { formatNumber, roundNumber } from '../../helpers/helpers'
import {
	getInputFilter,
	getSortedByInputFilter
} from './topCoinsFiltersSelectors'

export const getMarketData = (state) => state.market.Data

export const getMarketSuccess = (state) => state.market.success

export const getMarketPending = (state) => state.market.pending

export const getMarketError = (state) => state.market.error

export const getGlobal = (state) => {
	const data = state.market.marketData.globalData
	return {
		totalMarketCap: formatNumber(data.total_market_cap.usd),
		totalVolume: formatNumber(data.total_volume.usd),
		btcDominance: roundNumber(data.market_cap_percentage.btc, 1),
		cryptocurrencies: data.active_cryptocurrencies
	}
}

const applyFilterBy = (sorted, state) =>
	sorted.sort((a, b) => {
		const filterBy = state.topCoinsFilters.filterBy
		switch (filterBy) {
			case 'name':
				return a.name > b.name ? 1 : 0
			case 'mc':
				return a.market_cap > b.market_cap ? 0 : 1
			case 'price':
				return a.current_price > b.current_price ? 1 : 0
			case 'change':
				return a.price_change_percentage_24h >
					b.price_change_percentage_24h
					? 1
					: 0
			default:
				break
		}
	})

const sliceTopCoin = (top, { display, pagination }) => {
	return top.slice(
		pagination * display.value,
		display.value * (pagination + 1)
	)
}

export const getTopCoins = (state) => {
	let sorted = getSortedByInputFilter(state)
	sorted = applyFilterBy(sorted, state)
	sorted = state.topCoinsFilters.asc
		? sliceTopCoin(sorted.reverse(), state.topCoinsFilters)
		: sliceTopCoin(sorted, state.topCoinsFilters)

	const test = sorted.map((coin) => {
		return {
			id: coin.id,
			name: coin.name,
			mkCap: coin.market_cap,
			icon: coin.image,
			price: coin.current_price,
			priceChange: coin.price_change_percentage_24h
		}
	})
	return test
}
