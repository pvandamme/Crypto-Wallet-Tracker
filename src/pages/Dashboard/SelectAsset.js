import React from 'react'
import Select from 'react-select'
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

const options = [
	{ value: 'chocolate', label: 'Chocolate' },
	{ value: 'strawberry', label: 'Strawberry' },
	{ value: 'vanilla', label: 'Vanilla' },
]

const SelectAsset = ({ topCoins }) => {
	return <Select options={getOptions(topCoins)} />
}

const mapStateToProps = (state) => {
	return {
		topCoins: getTopCoins(state),
	}
}

export default connect(mapStateToProps)(SelectAsset)
