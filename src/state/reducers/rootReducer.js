import { combineReducers } from 'redux'
import market from './marketReducer'
import filtersTop from './filtersTopReducer'

export default combineReducers({
	market,
	filtersTop
})
