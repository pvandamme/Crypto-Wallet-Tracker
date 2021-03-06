import React from 'react'
import { bindActionCreators } from 'redux'
import { updateFilters } from 'state/actions/topCoinsFiltersActions'
import { connect } from 'react-redux'
import { getFilterBy } from 'state/selectors/topCoinsFiltersSelectors'

const Filter = ({ tag, filter, updateFilters, filterBy }) => {
	return (
		<li>
			<div
				onClick={() => updateFilters(filter)}
				className={`top-coins__sort-icon ${
					filter === 'price' ? 'top-coins__center' : ''
				} `}>
				<p>{tag}</p>
				<i
					className={`fas fa-sort ${
						filterBy === filter ? 'top-coins__active' : ''
					}`}></i>
			</div>
		</li>
	)
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ updateFilters }, dispatch)
}

const mapStateToProps = (state, ownProps) => {
	const { filter, tag } = ownProps
	return {
		filterBy: getFilterBy(state),
		filter,
		tag,
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
