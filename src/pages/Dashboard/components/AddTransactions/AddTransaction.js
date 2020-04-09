import React, { useState } from 'react'
import Modal from 'react-modal'
import { useForm } from 'react-hook-form'
import SelectAsset from './SelectAsset'
import TransactionDatePicker from './TransactionDatePicker'
import PriceInput from './PriceInput'
import FormError from './FormError'
import { connect } from 'react-redux'
import { getAuthUid } from 'state/selectors/authSelectors'
import { firestore } from 'firebaseConfig/firebase'

const AddTransaction = ({ uid }) => {
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
			firestore.collection('users/' + uid + '/transactions').add({
				data,
			})
			closeModal()
		}
	}

	return (
		<div className="add-transaction">
			<button
				className="add-transaction-button"
				onClick={() => setIsOpen(true)}>
				Add transaction
			</button>
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

const mapStateToProps = (state) => {
	return {
		uid: getAuthUid(state),
	}
}

export default connect(mapStateToProps)(AddTransaction)
