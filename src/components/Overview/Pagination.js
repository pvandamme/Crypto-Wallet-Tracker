import React from 'react'
import ReactPaginate from 'react-paginate'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updatePagination } from '../../state/actions/filtersTopActions'

const Pagination = ({ updatePagination }) => {
	const handleChange = (n) => {
		updatePagination(n.selected)
	}
	return (
		<ReactPaginate
			containerClassName="pagination"
			pageCount={10}
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

export default connect(null, mapDispatchToProps)(Pagination)
