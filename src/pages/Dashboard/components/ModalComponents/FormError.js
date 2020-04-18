import React from 'react'

const FormError = ({ errors }) => {
	return (
		<div className="form-error">
			{errors.amount && errors.amount.type === 'required' && (
				<p>Quantity is required !</p>
			)}
			{errors.amount && errors.amount.type === 'pattern' && (
				<p>Please enter a valid quantity number !</p>
			)}
			{errors.price && errors.price.type === 'required' && (
				<p>Price is required !</p>
			)}
			{errors.price && errors.price.type === 'pattern' && (
				<p>Please enter a valid price number !</p>
			)}
			{errors.asset && <p>{errors.asset.message}</p>}
		</div>
	)
}

export default FormError
