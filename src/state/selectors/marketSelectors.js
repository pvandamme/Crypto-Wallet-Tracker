import { formatNumber, roundNumber, cutNumber } from 'helpers/helpers'
import { getInputFilter, getFilterBy } from './topCoinsFiltersSelectors'

export const getMarketData = (state) => state.market.Data

export const getMarketSuccess = (state) => state.market.success

export const getMarketPending = (state) => state.market.pending

export const getMarketError = (state) => state.market.error

export const getGlobal = (state) => {
	const data = state.market.marketData.globalData
	return {
		totalMarketCap: formatNumber(parseInt(data.total_market_cap.usd)),
		totalVolume: formatNumber(parseInt(data.total_volume.usd)),
		btcDominance: roundNumber(data.market_cap_percentage.btc, 1),
		cryptocurrencies: data.active_cryptocurrencies
	}
}

export const getTopCoins = (state) =>
	formatTopCoins(state.market.marketData.topCoins)

export const getFilterTopCoins = (state) => {
	let sorted = getSortedByInputFilter(state)
	sorted = applyFilterBy(sorted, state)
	sorted = state.topCoinsFilters.asc
		? sliceTopCoin(sorted.reverse(), state.topCoinsFilters)
		: sliceTopCoin(sorted, state.topCoinsFilters)
	return formatTopCoins(sorted)
}

export const getSortedByInputFilter = (state) => {
	const inputFilter = getInputFilter(state)
	return state.market.marketData.topCoins.filter((coin) =>
		coin.name.toLowerCase().includes(inputFilter)
	)
}

const formatTopCoins = (coins) => {
	return coins.map((coin) => ({
		id: coin.id,
		name: coin.name,
		mkCap: coin.market_cap,
		icon: coin.image,
		price: cutNumber(coin.current_price),
		priceChange: coin.price_change_percentage_24h // TODO - round etc
	}))
}

const applyFilterBy = (sorted, state) => {
	const filterBy = getFilterBy(state)
	return sorted.sort((a, b) => {
		switch (filterBy) {
			case 'name':
				return a.name > b.name ? 1 : -1
			case 'mc':
				return a.market_cap > b.market_cap ? -1 : 1
			case 'price':
				return a.current_price > b.current_price ? 1 : -1
			case 'change':
				return a.price_change_percentage_24h > b.price_change_percentage_24h
					? 1
					: -1
			default:
				break
		}
	})
}

const sliceTopCoin = (top, { display, pagination }) => {
	return top.slice(pagination * display.value, display.value * (pagination + 1))
}
