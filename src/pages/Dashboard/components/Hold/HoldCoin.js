import React from 'react'

const HoldCoin = ({ transaction }) => {
	const { amount, name, value, price, priceChange, roi, image } = transaction
	return (
		<div className="hold__list-coin hold__list-hover">
			<div className="hold__list-elem">
				<img src={image} alt="icon" />
				<p>{name}</p>
			</div>
			<div className="hold__list-elem">
				<p>{amount}</p>
			</div>
			<div className="hold__list-elem">
				<p>$ {price}</p>
			</div>
			<div className="hold__list-elem">
				<p>$ {value}</p>
			</div>
			<div className="hold__list-elem">
				<p className={priceChange >= 0 ? 'green' : 'red'}>
					{priceChange} %
				</p>
			</div>
			<div className="hold__list-elem">
				<p className={roi >= 0 ? 'green' : 'red'}>{roi} %</p>
			</div>
		</div>
	)
}

export default HoldCoin
