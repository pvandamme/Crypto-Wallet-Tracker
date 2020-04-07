import React from 'react'
import { connect } from 'react-redux'
import { getSelectedCoin } from 'state/selectors/dashboardSelectors'

const PriceInput = ({ selectedCoin, register, name }) => {
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
				defaultValue={
					selectedCoin && name === 'Price'
						? selectedCoin.current_price
						: null
				}
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
