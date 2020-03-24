import React from 'react'
import { bindActionCreators } from 'redux'
import { updateFilters } from '../../state/actions/filtersTopActions'
import { connect } from 'react-redux'

const Filters = ({ updateFilters }) => {
	const handleClick = (filter) => updateFilters(filter)
	return (
		<ul className="top-coins__grid top-coins__legend">
			<li onClick={() => handleClick('name')}># Name</li>
			<li onClick={() => handleClick('mc')}># Market Cap</li>
			<li
				className="top-coins__center"
				onClick={() => handleClick('price')}>
				# Price
			</li>
			<li onClick={() => handleClick('change')}># Change (24h)</li>
		</ul>
	)
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ updateFilters }, dispatch)
}

export default connect(null, mapDispatchToProps)(Filters)
