import React, { useState } from 'react'
import { SlideDown } from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'
import Coin from './Coin'
import TransactionsList from './TransactionsList'

const ComposedTransaction = ({ transaction }) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div>
			<Coin
				setIsOpen={setIsOpen}
				isOpen={isOpen}
				transaction={transaction}
			/>
			<SlideDown className={'my-dropdown-slidedown'}>
				{isOpen ? <TransactionsList name={transaction.name} /> : null}
			</SlideDown>
		</div>
	)
}

export default ComposedTransaction
