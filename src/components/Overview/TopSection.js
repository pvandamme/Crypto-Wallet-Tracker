import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchMarket } from '../../state/actions/marketActions'
import { updateDisplay } from '../../state/actions/filtersTopActions'

const TopSection = ({ updateDisplay, fetchMarket }) => {
	return (
		<div className="top-coins__title">
			<h3>Market Overview</h3>
			<button onClick={() => fetchMarket()}>
				<i className="fas fa-sync-alt i"></i>
			</button>
			<select
				defaultValue="10"
				onChange={(e) => updateDisplay(e.target.value)}>
				<option value="5">5</option>
				<option value="10">10</option>
				<option value="25">25</option>
			</select>
		</div>
	)
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ fetchMarket, updateDisplay }, dispatch)
}

export default connect(null, mapDispatchToProps)(TopSection)
