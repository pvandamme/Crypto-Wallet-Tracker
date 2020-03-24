import { combineReducers } from 'redux'
import market from './marketReducer'
import filterTop from './filterTopReducer'

export default combineReducers({
	market,
	filterTop
})
