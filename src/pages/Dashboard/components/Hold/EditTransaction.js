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
import { saveSelectedCoin } from 'state/actions/dashboardActions'
import TransactionsDetails from './TransactionsDetails'

const EditTransaction = ({
	uid,
	resetSelectedCoin,
	transaction,
	saveSelectedCoin,
}) => {
	Modal.setAppElement('#root')
	const [isOpen, setIsOpen] = useState(false)
	const { register, handleSubmit, errors, setValue } = useForm({
		defaultValues: {
			asset: transaction.name.toLowerCase(),
			amount: transaction.amount,
			price: transaction.price,
			date: transaction.date,
		},
	})

	const handleClick = (name) => {
		saveSelectedCoin(name.toLowerCase())
		setIsOpen(true)
	}

	const closeModal = () => {
		setIsOpen(false)
		resetSelectedCoin()
	}

	const onSubmit = (data) => {
		if (!data.asset) {
		} else {
			data.amount = parseFloat(data.amount)
			data.price = parseFloat(data.price)
			firestore
				.collection('users/' + uid + '/transactions')
				.doc(transaction.id)
				.set(data)
			closeModal()
		}
	}

	const deleteTransaction = () => {
		firestore
			.collection('users/' + uid + '/transactions')
			.doc(transaction.id)
			.delete()
	}

	return (
		<div className="edit-transaction">
			<TransactionsDetails
				transaction={transaction}
				handleClick={handleClick}
				deleteTransaction={deleteTransaction}
			/>
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
						<PriceInput
							name="Amount"
							register={register}
							amount={transaction.amount}
							setValue={setValue}
							edit={true}
						/>
					</div>

					<div className="dashboard__modal-data">
						<TransactionDatePicker
							setValue={setValue}
							register={register}
							date={transaction.date}
						/>
						<PriceInput
							name="Price"
							register={register}
							price={transaction.price}
							setValue={setValue}
							edit={true}
						/>
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
	return bindActionCreators({ resetSelectedCoin, saveSelectedCoin }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EditTransaction)
