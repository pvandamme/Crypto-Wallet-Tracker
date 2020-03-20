import React, { Component } from 'react'
import axios from 'axios'

export default class Overview extends Component {
	state = {
		loading: true
	}

	async componentDidMount() {
		const options = {
			url:
				'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
			method: 'GET',
			header: {
				'X-CMC_PRO_API_KEY': '8a928122-419b-4555-84ef-a73a731a753a'
			},
			proxy: {
				host: '51.79.52.62',
				port: 3128,
				auth: {
					username: 'mikeymike',
					password: 'rapunz3l'
				}
			}
		}
		const response = await axios(options)
		console.log(response)
	}
	render() {
		return (
			<div>
				{this.state.loading ? <p>Loading...</p> : <p>Fetched !</p>}
			</div>
		)
	}
}
