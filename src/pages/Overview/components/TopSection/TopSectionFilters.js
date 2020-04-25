import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateInputFilter } from 'state/actions/topCoinsFiltersActions'
import { getInputFilter } from 'state/selectors/topCoinsFiltersSelectors'

const TopSectionFilters = ({ updateInputFilter, value }) => {
	return (
		<div>
			<label htmlFor="search">Search : </label>
			<input
				value={value}
				autoComplete="off"
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

const mapStateToProps = (state) => {
	return {
		value: getInputFilter(state)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TopSectionFilters)
