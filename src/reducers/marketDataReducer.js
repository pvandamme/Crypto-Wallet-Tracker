export default (state = [], action) => {
	switch (action.type) {
		case 'ADD_TOP_COINS':
			return {
				...state,
				topCoins: action.data
			}
		default:
			return state
	}
}
