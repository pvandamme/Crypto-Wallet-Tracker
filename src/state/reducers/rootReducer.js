import { combineReducers } from 'redux'
import market from './marketReducer'
import topCoinsFilters from './topCoinsFiltersReducer'
import asset from './assetReducer'

export default combineReducers({
	market,
	topCoinsFilters,
	asset
})
