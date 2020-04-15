import React from 'react'
import { connect } from 'react-redux'
import { getSelectedCoin } from 'state/selectors/dashboardSelectors'

const PriceInput = ({
	selectedCoin,
	register,
	name,
	amount,
	price,
	setValue,
	edit,
}) => {
	const getDefaultValue = () => {
		if (name === 'Price') {
			if (price) {
				return price
			} else if (selectedCoin) {
				return selectedCoin.current_price
			}
		} else if (name === 'Amount' && amount) {
			return amount
		} else {
			return null
		}
	}

	if (!edit) {
		setValue('price', selectedCoin.current_price)
	}

	const handleChange = (e) => {
		setValue(name.toLowerCase(), e.target.value)
	}

	return (
		<label className="modal-label">
			{name === 'Amount' ? (
				<p>Add amount :</p>
			) : (
				<p>Price per coin ($) :</p>
			)}
			<input
				className="dashboard__modal-input"
				placeholder={name}
				onChange={(e) => handleChange(e)}
				type="number"
				step="any"
				min="0.00000001"
				ref={register({
					name: name.toLowerCase(),
					required: true,
					pattern: /^(?:[1-9]\d*|0)?(?:\.\d+)?$/,
				})}
				defaultValue={getDefaultValue()}
			/>
		</label>
	)
}

const mapStateToProps = (state) => {
	return {
		selectedCoin: getSelectedCoin(state),
	}
}

export default connect(mapStateToProps)(PriceInput)
