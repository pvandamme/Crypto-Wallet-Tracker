import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const TransactionDatePicker = ({ topCoins, setValue, register }) => {
	const [startDate, setStartDate] = useState(new Date())
	return (
		<label className="modal-label">
			<p>Date :</p>
			<DatePicker
				className="date-picker"
				selected={startDate}
				onChange={(date) => setStartDate(date)}
				maxDate={new Date()}
			/>
		</label>
	)
}

export default TransactionDatePicker
