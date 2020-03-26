import React from 'react'
import ReactPaginate from 'react-paginate'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updatePagination } from 'state/actions/topCoinsFiltersActions'
import {
	getDisplay,
	getPagination
} from 'state/selectors/topCoinsFiltersSelectors'
import { getSortedByInputFilter } from 'state/selectors/marketSelectors'

const Pagination = ({ sorted, pagination, updatePagination, display }) => {
	const handleChange = (n) => {
		updatePagination(n.selected)
	}
	return (
		<ReactPaginate
			containerClassName="pagination"
			pageCount={sorted.length / display.value}
			forcePage={pagination}
			pageRangeDisplayed={3}
			marginPagesDisplayed={1}
			pageClassName="pagination__element"
			activeClassName="pagination__active"
			onPageChange={handleChange}
		/>
	)
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ updatePagination }, dispatch)
}

const mapStateToProps = (state) => {
	return {
		sorted: getSortedByInputFilter(state),
		display: getDisplay(state),
		pagination: getPagination(state)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)
