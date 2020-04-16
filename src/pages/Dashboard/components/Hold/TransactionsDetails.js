import React from 'react'

const convertDate = (inputFormat) => {
	const pad = (s) => {
		return s < 10 ? '0' + s : s
	}
	let d = new Date(inputFormat)
	return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('/')
}

const TransactionsDetails = ({
	transaction,
	handleClick,
	deleteTransaction,
}) => {
	const { date, value, amount, roi } = transaction
	return (
		<div
			className="hover-details  hold__list-details"
			onClick={() => handleClick(transaction.name)}>
			<div className="details-elem details-edit">
				<i className="fas fa-edit fa-2x"></i>
				<p>Edit</p>
			</div>
			<div className="details-elem">
				<p>{convertDate(date)}</p>
			</div>
			<div className="details-elem">
				<p>{amount}</p>
			</div>
			<div className="details-elem">
				<p>$ {value}</p>
			</div>
			<div className="details-elem">
				<p className={roi >= 0 ? 'green' : 'red'}>{roi} %</p>
			</div>
			<div className="details-elem">
				<button
					className="delete-button"
					onClick={(e) => {
						deleteTransaction()
						e.stopPropagation()
					}}>
					Delete
				</button>
			</div>
		</div>
	)
}

export default TransactionsDetails
