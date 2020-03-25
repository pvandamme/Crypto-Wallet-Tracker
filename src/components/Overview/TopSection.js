import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchMarket } from '../../state/actions/marketActions'
import Select from './Select'
import TopSectionFilters from './TopSectionFilters'

const TopSection = ({ fetchMarket }) => {
	return (
		<div className="top-section">
			<div className="top-section__title">
				<h3>Market Overview</h3>
				<button onClick={() => fetchMarket()}>
					<i className="fas fa-sync-alt"></i>
				</button>
			</div>
			<div className="top-section__filter">
				<TopSectionFilters />
				<Select />
			</div>
		</div>
	)
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ fetchMarket }, dispatch)
}

export default connect(null, mapDispatchToProps)(TopSection)
