import React from 'react'

export default ({ style }) => {
	const customStyle = {
		height: '90%',
	}
	return (
		<div className="center-loading" style={style ? customStyle : {}}>
			<div className="lds-roller">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	)
}
