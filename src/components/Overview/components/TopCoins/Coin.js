import React, { Component } from 'react'
import { roundNumber, formatNumber } from 'helpers/helpers'
import { Spring } from 'react-spring/renderprops'

class Coin extends Component {
	state = {
		details: false
	}
	handleChange = () => {
		this.setState({ details: !this.state.details })
	}
	render() {
		const { coin } = this.props
		if (!this.state.details) {
			return (
				<ul
					className="top-coins__grid"
					onClick={() => this.handleChange()}>
					<li>
						<div className="top-coins__name">
							<img src={coin.icon} alt="icon" />
							{coin.name}
						</div>
					</li>
					<li>${formatNumber(coin.mkCap)}</li>
					<li className="top-coins__center">
						${formatNumber(coin.price)}
					</li>
					<li className={coin.priceChange < 0 ? 'red' : 'green'}>
						{roundNumber(coin.priceChange, 2)}%
					</li>
				</ul>
			)
		} else {
			return (
				<div>
					<ul
						className="top-coins__grid"
						onClick={() => this.handleChange()}>
						<li>
							<div className="top-coins__name">
								<img src={coin.icon} alt="icon" />
								{coin.name}
							</div>
						</li>
						<li>${formatNumber(coin.mkCap)}</li>
						<li className="top-coins__center">
							${formatNumber(coin.price)}
						</li>
						<li className={coin.priceChange < 0 ? 'red' : 'green'}>
							{roundNumber(coin.priceChange, 2)}%
						</li>
					</ul>
					<Spring
						from={{ opacity: 0, marginTop: -60 }}
						to={{ opacity: 1, marginTop: 0 }}>
						{(props) => (
							<div style={props}>
								<ul
									className="top-coins__grid slow"
									onClick={() => this.handleChange()}>
									<li>
										<div className="top-coins__name">
											<img src={coin.icon} alt="icon" />
											CCCC
										</div>
									</li>
									<li>${formatNumber(coin.mkCap)}</li>
									<li className="top-coins__center">
										${formatNumber(coin.price)}
									</li>
									<li
										className={
											coin.priceChange < 0
												? 'red'
												: 'green'
										}>
										{roundNumber(coin.priceChange, 2)}%
									</li>
								</ul>
							</div>
						)}
					</Spring>
				</div>
			)
		}
	}
}

export default Coin
