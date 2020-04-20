import React from 'react'

const Coin = ({ transaction, setIsOpen, isOpen }) => {
	const {
		amount,
		name,
		value,
		price,
		priceChange,
		roi,
		image,
		date,
	} = transaction

	const jsx = isOpen ? (
		<div
			className="hold__list-coin hold__list-background hold__list-hover"
			onClick={() => setIsOpen(!isOpen)}>
			<div className="hold__list-elem">
				<img src={image} alt="icon" />
				<p>{name}</p>
			</div>
			<div className="details-elem">
				<p># Date</p>
			</div>
			<div className="details-elem">
				<p># Quantity</p>
			</div>
			<div className="details-elem">
				<p># Value</p>
			</div>
			<div className="details-elem">
				<p># ROI</p>
			</div>
			<div className="details-elem"></div>
		</div>
	) : (
		<div
			className="hold__list-coin hold__list-hover"
			onClick={() => setIsOpen(!isOpen)}>
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

	return jsx
}

export default Coin
