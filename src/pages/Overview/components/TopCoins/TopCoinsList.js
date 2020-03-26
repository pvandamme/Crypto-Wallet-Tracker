import React from 'react'
import { connect } from 'react-redux'
import { getTopCoins } from 'state/selectors/marketSelectors'
import Coin from './Coin'

const TopCoinsList = (props) => {
	const { topCoins } = props
	const list = topCoins.map((coin) => <Coin coin={coin} key={coin.id} />)
	return <div>{list}</div>
}

const mapStateToProps = (state) => {
	return {
		topCoins: getTopCoins(state)
	}
}

export default connect(mapStateToProps)(TopCoinsList)
