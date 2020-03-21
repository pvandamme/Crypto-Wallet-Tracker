import React, { Component } from 'react'
import axios from 'axios'
import Loading from './Loading'

export default class Overview extends Component {
	state = {
		loading: true
	}

	async componentDidMount() {
		const options = {
			url: 'https://api.coingecko.com/api/v3/coins/list',
			method: 'get'
		}
		const response = await axios(options)
		console.log(response.data)
		this.setState({ loading: false })
	}
	render() {
		return (
			<div className="overview">
				{this.state.loading ? <Loading /> : <p>LJKFHGBAWLKF</p>}
			</div>
		)
	}
}
