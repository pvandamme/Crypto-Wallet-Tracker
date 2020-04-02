import { combineReducers } from 'redux'
import market from './marketReducer'
import topCoinsFilters from './topCoinsFiltersReducer'
import asset from './assetReducer'
import auth from './authReducer'

export default combineReducers({
	market,
	topCoinsFilters,
	asset,
	auth
})
