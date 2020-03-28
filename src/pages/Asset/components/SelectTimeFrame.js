import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateTimeFrame } from 'state/actions/assetActions'

const SelectTimeFrame = ({ updateTimeFrame }) => {
	return (
		<div>
			<button onClick={() => updateTimeFrame('daily')}>Daily</button>
			<button onClick={() => updateTimeFrame('weekly')}>Weekly</button>
			<button onClick={() => updateTimeFrame('monthly')}>Monthly</button>
			<button onClick={() => updateTimeFrame('yearly')}>Yearly</button>
		</div>
	)
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ updateTimeFrame }, dispatch)
}

export default connect(null, mapDispatchToProps)(SelectTimeFrame)
