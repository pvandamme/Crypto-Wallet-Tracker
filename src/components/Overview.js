import React, { Component } from 'react'
import axios from 'axios'
import Loading from './Loading'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addOverviewData } from '../actions/marketDataAction'

class Overview extends Component {
	state = {
		loading: true,
		error: false
	}
	async componentDidMount() {
		const url = 'https://api.coingecko.com/api/v3'
		const optionsOne = {
			url: url + '/coins/markets',
			params: {
				vs_currency: 'usd',
				price_change_percentage: '1h,24h,7d'
			},
			method: 'get'
		}
		const optionsTwo = {
			url: url + '/global',
			method: 'get'
		}
		const requestOne = axios(optionsOne)
		const requestTwo = axios(optionsTwo)

		try {
			const responses = await axios.all([requestOne, requestTwo])
			this.setState({ loading: false })
			this.props.addOverviewData(responses)
		} catch (e) {
			this.setState({ error: true, loading: false })
		}
	}
	render() {
		if (this.state.loading) {
			return <Loading />
		} else if (this.state.error) {
			return <p>An error occur, please reload !</p>
		} else {
			return <p>Fetched !</p>
		}
	}
}

const mapStateToProps = (state) => {
	return {
		topCoins: state.topCoins,
		globalData: state.globalData
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ addOverviewData }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Overview)
