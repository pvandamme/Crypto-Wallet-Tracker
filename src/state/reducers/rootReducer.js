import { combineReducers } from 'redux'
import market from './marketReducer'
import topCoinsFilters from './topCoinsFiltersReducer'

export default combineReducers({
	market,
	topCoinsFilters
})
