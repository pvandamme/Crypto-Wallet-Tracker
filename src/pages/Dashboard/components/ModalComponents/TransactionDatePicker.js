import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const TransactionDatePicker = ({ setValue, register }) => {
	const [startDate, setStartDate] = useState(new Date())
	const handleChange = (date) => {
		setStartDate(date)
		setValue('date', date.getTime())
	}
	const ref = () => {
		register({ name: 'date' })
		setValue('date', startDate.getTime())
	}
	return (
		<label className="modal-label">
			<p>Date :</p>
			<DatePicker
				className="date-picker"
				selected={startDate}
				onChange={(date) => handleChange(date)}
				maxDate={new Date()}
				ref={ref()}
			/>
		</label>
	)
}

export default TransactionDatePicker
