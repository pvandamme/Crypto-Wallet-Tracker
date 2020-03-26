import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateInputFilter } from 'state/actions/topCoinsFiltersActions'

const TopSectionFilters = ({ updateInputFilter }) => {
	return (
		<div>
			<label htmlFor="search">Search : </label>
			<input
				onChange={(e) => updateInputFilter(e)}
				type="text"
				id="search"
				placeholder="Bitcoin.."
				className="top-section__input"
			/>
		</div>
	)
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ updateInputFilter }, dispatch)
}

export default connect(null, mapDispatchToProps)(TopSectionFilters)
