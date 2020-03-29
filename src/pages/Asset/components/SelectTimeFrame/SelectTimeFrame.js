import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateTimeFrame } from 'state/actions/assetActions'
import SelectButton from './SelectButton'

class SelectTimeFrame extends Component {
	state = {
		focus: 'daily'
	}

	handleClick = (timeFrame) => {
		this.setState({ focus: timeFrame })
		this.props.updateTimeFrame(timeFrame)
	}

	render() {
		const timeFrames = ['Daily', 'Weekly', 'Monthly', 'Yearly']

		return (
			<div className="select-tf">
				{timeFrames.map((timeFrame, i) => (
					<SelectButton
						focus={this.state.focus}
						timeFrame={timeFrame}
						handleClick={this.handleClick}
						key={i}
					/>
				))}
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ updateTimeFrame }, dispatch)
}

export default connect(null, mapDispatchToProps)(SelectTimeFrame)
