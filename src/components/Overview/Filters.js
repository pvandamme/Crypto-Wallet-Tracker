import React from 'react'
import { bindActionCreators } from 'redux'
import { setFilter } from '../../state/actions/filterTopActions'
import { connect } from 'react-redux'

const Filters = ({ setFilter }) => {
	const handleClick = (filter) => setFilter(filter)
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
	return bindActionCreators({ setFilter }, dispatch)
}

export default connect(null, mapDispatchToProps)(Filters)
