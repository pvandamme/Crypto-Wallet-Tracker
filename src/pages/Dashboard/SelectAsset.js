import React from 'react'
import Select, { components } from 'react-select'
import { connect } from 'react-redux'
import { getTopCoins } from 'state/selectors/marketSelectors'

const getOptions = (topCoins) => {
	return topCoins.map((coin) => {
		return {
			value: coin.id,
			label: coin.name,
		}
	})
}

const SingleValue = ({ children, ...props }) => {
	const name = props.getValue()[0].value
	const topCoins = props.selectProps.topCoins
	const coin = topCoins.find((coin) => coin.id === name)
	return (
		<components.SingleValue {...props}>
			<img src={coin.icon} alt="test" className="icon" />
			{children}
		</components.SingleValue>
	)
}

const SelectAsset = ({ topCoins }) => {
	const customStyle = {
		singleValue: (styles) => ({
			...styles,
			alignItems: 'center',
			display: 'flex',
		}),
	}
	return (
		<Select
			components={{ SingleValue }}
			className="select-asset"
			options={getOptions(topCoins)}
			topCoins={topCoins}
			styles={customStyle}
		/>
	)
}

const mapStateToProps = (state) => {
	return {
		topCoins: getTopCoins(state),
	}
}

export default connect(mapStateToProps)(SelectAsset)
