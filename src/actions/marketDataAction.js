export const addOverviewData = (data) => {
	return {
		type: 'ADD_OVERVIEW_DATA',
		payload: {
			topCoins: data[0].data,
			globalData: data[1].data.data
		}
	}
}
