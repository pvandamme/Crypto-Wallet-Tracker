import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchMarket } from '../../state/actions/marketActions'

const Title = (props) => {
	return (
		<div className="top-coins__title">
			<h3>Market Overview</h3>
			<button onClick={() => props.fetchMarket()}>
				<i className="fas fa-sync-alt i"></i>
			</button>
		</div>
	)
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ fetchMarket }, dispatch)
}

export default connect(null, mapDispatchToProps)(Title)
