import React, { useState } from 'react'
import Select, { components } from 'react-select'
import { connect } from 'react-redux'
import { getTopCoins } from 'state/selectors/marketSelectors'
import { saveSelectedCoin } from 'state/actions/dashboardActions'
import { bindActionCreators } from 'redux'
import { getSelectedCoin } from 'state/selectors/dashboardSelectors'

const getOptions = (topCoins) => {
	return topCoins.map((coin) => {
		return {
			value: coin.id,
			label: coin.name,
		}
	})
}

const SingleValue = ({ ...props }) => {
	const name = props.selectProps.selectedCoin.name
	return (
		<components.SingleValue {...props}>
			<img
				src={
					name === 'Hxro'
						? 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Poop_Emoji_Icon.png'
						: props.selectProps.selectedCoin.image
				}
				className="icon"
			/>
			{name === 'Hxro' ? 'Shitcoin' : name}
		</components.SingleValue>
	)
}

const SelectAsset = ({
	saveSelectedCoin,
	topCoins,
	setValue,
	register,
	selectedCoin,
}) => {
	const customStyle = {
		control: (styles) => ({
			...styles,
		}),
		singleValue: (styles) => ({
			...styles,
			alignItems: 'center',
			display: 'flex',
		}),
	}

	const handleChange = (e) => {
		setValue('asset', e.value)
		saveSelectedCoin(e.value)
	}

	return (
		<label className="modal-label">
			<p>Select Asset :</p>
			<Select
				onChange={(e) => handleChange(e)}
				components={{ SingleValue }}
				className="select-asset"
				options={getOptions(topCoins)}
				selectedCoin={selectedCoin}
				styles={customStyle}
				ref={register({ name: 'asset' })}
				defaultValue={selectedCoin}
			/>
		</label>
	)
}

const mapStateToProps = (state) => {
	return {
		topCoins: getTopCoins(state),
		selectedCoin: getSelectedCoin(state),
	}
}

const mapDispatchToPros = (dispatch) => {
	return bindActionCreators({ saveSelectedCoin }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToPros)(SelectAsset)
