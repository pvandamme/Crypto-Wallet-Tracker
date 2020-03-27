import React from 'react'

const Asset = (props) => {
	return <p>{props.match.params.coin}</p>
}

export default Asset
