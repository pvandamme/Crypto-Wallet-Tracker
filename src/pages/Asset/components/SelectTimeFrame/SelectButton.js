import React from 'react'

const SelectButton = ({ focus, timeFrame, handleClick }) => {
	const lowerCase = timeFrame.toLowerCase()
	return (
		<button
			className={focus === lowerCase ? 'select-tf__focus' : ''}
			onClick={() => handleClick(lowerCase)}>
			{timeFrame}
		</button>
	)
}

export default SelectButton
