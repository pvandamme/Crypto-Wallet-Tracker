import React, { useState } from 'react'
import Modal from 'react-modal'
import { useForm } from 'react-hook-form'
import SelectAsset from '../ModalComponents/SelectAsset'
import TransactionDatePicker from '../ModalComponents/TransactionDatePicker'
import PriceInput from '../ModalComponents/PriceInput'
import FormError from '../ModalComponents/FormError'
import { connect } from 'react-redux'
import { getAuthUid } from 'state/selectors/authSelectors'
import { firestore } from 'firebaseConfig/firebase'
import { resetSelectedCoin } from 'state/actions/dashboardActions'
import { bindActionCreators } from 'redux'
import HoldCoin from './HoldCoin'

const EditTransaction = ({ uid, resetSelectedCoin, transaction }) => {
	Modal.setAppElement('#root')
	const [isOpen, setIsOpen] = useState(false)
	const { setError, register, handleSubmit, errors, setValue } = useForm()

	const closeModal = () => {
		setIsOpen(false)
		setValue('asset', null)
		resetSelectedCoin()
	}

	const onSubmit = (data) => {
		if (!data.asset) {
			setError('asset', 'required', 'Please select an asset !')
		} else {
			data.amount = parseFloat(data.amount)
			data.price = parseFloat(data.price)
			firestore.collection('users/' + uid + '/transactions').add(data)
			closeModal()
		}
	}

	return (
		<div className="edit-transaction">
			<HoldCoin transaction={transaction} setIsOpen={setIsOpen} />
			<Modal
				isOpen={isOpen}
				className="dashboard__modal"
				onRequestClose={() => closeModal()}
				contentLabel="Add transaction">
				<h4>Edit Transaction</h4>

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
						Edit transaction
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

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ resetSelectedCoin }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EditTransaction)
