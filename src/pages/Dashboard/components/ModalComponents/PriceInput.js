import React from 'react'
import { connect } from 'react-redux'
import { getSelectedCoin } from 'state/selectors/dashboardSelectors'

const PriceInput = ({ selectedCoin, register, name, amount, price }) => {
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
				name={name.toLowerCase()}
				type="number"
				step="any"
				min="0.00000001"
				ref={register()}
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
