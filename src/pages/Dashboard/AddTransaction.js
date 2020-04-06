import React, { useState } from 'react'
import Modal from 'react-modal'
import { useForm } from 'react-hook-form'
import SelectAsset from './SelectAsset'
import TransactionDatePicker from './TransactionDatePicker'
import PriceInput from './PriceInput'
import FormError from './FormError'

const AddTransaction = () => {
	Modal.setAppElement('#root')
	const [isOpen, setIsOpen] = useState(false)
	const { setError, register, handleSubmit, errors, setValue } = useForm()

	const closeModal = () => {
		setIsOpen(false)
		setValue('asset', null)
	}

	const onSubmit = (data) => {
		if (!data.asset) {
			setError('asset', 'required', 'Please select an asset !')
		} else {
			closeModal()
			console.log(data)
		}
	}

	console.log(errors)

	return (
		<div>
			<button onClick={() => setIsOpen(true)}>Open Modal</button>
			<Modal
				isOpen={isOpen}
				className="dashboard__modal"
				onRequestClose={() => closeModal()}
				contentLabel="Add transaction">
				<h4>Add transaction</h4>

				<FormError errors={errors} />

				<form
					className="dashboard__modal-form"
					autoComplete="off"
					onSubmit={handleSubmit(onSubmit)}>
					<div className="dashboard__modal-data">
						<SelectAsset setValue={setValue} register={register} />
						<PriceInput name="Amount" register={register} />
					</div>

					<div className="dashboard__modal-data">
						<TransactionDatePicker
							setValue={setValue}
							register={register}
						/>
						<PriceInput name="Price" register={register} />
					</div>

					<button className="add-button" type="submit">
						Add transaction
					</button>
				</form>
			</Modal>
		</div>
	)
}

export default AddTransaction
