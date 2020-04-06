import React from 'react'

const PriceInput = ({ register, name }) => {
	return (
		<label className="modal-label">
			{name === 'Amount' ? (
				<p>Add amount :</p>
			) : (
				<p>Price per coin ($):</p>
			)}
			<input
				className="dashboard__modal-input"
				placeholder={name}
				name={name.toLowerCase()}
				ref={register({
					required: true,
					pattern: /^(?:[1-9]\d*|0)?(?:\.\d+)?$/,
				})}
			/>
		</label>
	)
}

export default PriceInput
