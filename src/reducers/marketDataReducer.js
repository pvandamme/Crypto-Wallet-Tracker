const defaultState = {
	topCoins: [],
	globalData: []
}

export default (state = defaultState, action) => {
	switch (action.type) {
		case 'ADD_OVERVIEW_DATA':
			return {
				...state,
				topCoins: action.payload.topCoins,
				globalData: action.payload.globalData
			}
		default:
			return state
	}
}
