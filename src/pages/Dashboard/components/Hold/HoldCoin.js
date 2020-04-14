import React, { useState } from 'react'
import { SlideDown } from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'

const HoldCoin = ({ transaction, handleClick }) => {
	const { amount, name, value, price, priceChange, roi, image } = transaction
	const [isOpen, setIsOpen] = useState(false)

	const jsx = (
		<ul>
			<li>cc</li>
			<li>ccc</li>
			<li>ccccc</li>
		</ul>
	)

	return (
		<div>
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
			<SlideDown className={'my-dropdown-slidedown'}>
				{isOpen ? jsx : null}
			</SlideDown>
		</div>
	)
}

export default HoldCoin
