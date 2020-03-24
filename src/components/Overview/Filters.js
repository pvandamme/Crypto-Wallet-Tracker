import React from 'react'
import { bindActionCreators } from 'redux'
import { updateFilters } from '../../state/actions/filtersTopActions'
import { connect } from 'react-redux'

const Filters = ({ updateFilters }) => {
	const handleClick = (filter) => updateFilters(filter)
	return (
		<ul className="top-coins__grid top-coins__legend">
			<li>
				<p onClick={() => handleClick('name')}># Name</p>
			</li>
			<li>
				<p onClick={() => handleClick('mc')}># Market Cap</p>
			</li>
			<li className="top-coins__center">
				<p onClick={() => handleClick('price')}># Price</p>
			</li>
			<li>
				<p onClick={() => handleClick('change')}># Change (24h)</p>{' '}
			</li>
		</ul>
	)
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ updateFilters }, dispatch)
}

export default connect(null, mapDispatchToProps)(Filters)
