import React, { useState } from 'react'
import Modal from 'react-modal'
import { useForm } from 'react-hook-form'
import SelectAsset from './SelectAsset'

const AddTransaction = () => {
	Modal.setAppElement('#root')
	const [isOpen, setIsOpen] = useState(false)

	const { register, handleSubmit, errors } = useForm()
	const onSubmit = (data) => {
		setIsOpen(false)
	}

	return (
		<div>
			<button onClick={() => setIsOpen(true)}>Open Modal</button>
			<Modal
				isOpen={true}
				className="dashboard__modal"
				contentLabel="Add transaction">
				<h4>Add transaction</h4>
				<form
					className="dashboard__modal-form"
					autoComplete="off"
					onSubmit={handleSubmit(onSubmit)}>
					<SelectAsset />
					<input
						type="number"
						placeholder="Amount"
						name="amount"
						step="0.00000001"
						ref={register({ required: true })}
					/>
					<button type="submit">Add transaction</button>
					<button onClick={() => setIsOpen(false)}>Close</button>
				</form>
			</Modal>
		</div>
	)
}

export default AddTransaction
