import React from 'react'

export default ({ style }) => {
	const customStyle = {
		height: '45vh',
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
