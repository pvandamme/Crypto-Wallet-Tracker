import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateTimeFrame } from 'state/actions/assetActions'
import SelectButton from './SelectButton'
import { getTimeFrame } from 'state/selectors/assetSelectors'

const SelectTimeFrame = ({ updateTimeFrame, focus }) => {
	const timeFrames = ['Daily', 'Weekly', 'Monthly', 'Yearly']

	return (
		<div className="select-tf">
			{timeFrames.map((timeFrame, i) => (
				<SelectButton
					focus={focus}
					timeFrame={timeFrame}
					handleClick={updateTimeFrame}
					key={i}
				/>
			))}
		</div>
	)
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ updateTimeFrame }, dispatch)
}

const mapStateToProps = (state) => {
	return {
		focus: getTimeFrame(state)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectTimeFrame)
