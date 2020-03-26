import React from 'react'
import { bindActionCreators } from 'redux'
import { updateFilters } from 'state/actions/topCoinsFiltersActions'
import { connect } from 'react-redux'
import { getFilterBy } from 'state/selectors/topCoinsFiltersSelectors'

const FilterBy = ({ updateFilters, filterBy }) => {
	const handleClick = (filter) => updateFilters(filter)

	return (
		<ul className="top-coins__grid top-coins__legend">
			<li>
				<div
					onClick={() => handleClick('name')}
					className="top-coins__sort-icon">
					<p># Name</p>
					<i
						className={`fas fa-sort ${
							filterBy === 'name' ? 'top-coins__active' : ''
						}`}></i>
				</div>
			</li>
			<li>
				<div
					onClick={() => handleClick('mc')}
					className="top-coins__sort-icon">
					<p># Market Cap</p>
					<i
						className={`fas fa-sort ${
							filterBy === 'mc' ? 'top-coins__active' : ''
						}`}></i>
				</div>
			</li>
			<li className="top-coins__center">
				<div
					onClick={() => handleClick('price')}
					className="top-coins__sort-icon">
					<p># Price</p>
					<i
						className={`fas fa-sort ${
							filterBy === 'price' ? 'top-coins__active' : ''
						}`}></i>
				</div>
			</li>
			<li>
				<div
					onClick={() => handleClick('change')}
					className="top-coins__sort-icon">
					<p># Change (24h)</p>{' '}
					<i
						className={`fas fa-sort ${
							filterBy === 'change' ? 'top-coins__active' : ''
						}`}></i>
				</div>
			</li>
		</ul>
		// TODO - Split en composant
	)
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ updateFilters }, dispatch)
}

const mapStateToProps = (state) => {
	return { filterBy: getFilterBy(state) }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterBy)
