import React from 'react'
import ReactPaginate from 'react-paginate'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updatePagination } from '../../state/actions/filtersTopActions'
import { getDisplay } from '../../state/selectors/filtersSelector'

const Pagination = ({ updatePagination, display }) => {
	const handleChange = (n) => {
		updatePagination(n.selected)
	}
	return (
		<ReactPaginate
			containerClassName="pagination"
			pageCount={250 / display}
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
	return { display: getDisplay(state) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)
