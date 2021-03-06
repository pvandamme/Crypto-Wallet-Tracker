import React, { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { registerUser } from 'state/actions/authActions/registerActions'
import { Link, Redirect } from 'react-router-dom'
import {
	getRegisterBegin,
	getRegisterError,
	getIsAuthenticated,
} from 'state/selectors/authSelectors'

const Register = ({ registerUser, registerBegin, registerError, auth }) => {
	const {
		register,
		handleSubmit,
		errors,
		watch,
		triggerValidation,
	} = useForm()
	const onSubmit = (data) =>
		registerUser(data.username, data.email, data.password)

	const password = useRef({})
	password.current = watch('password', '')

	if (auth) {
		return <Redirect to="/dashboard" />
	} else {
		return (
			<form
				className="form-wrapper"
				autoComplete="off"
				onSubmit={handleSubmit(onSubmit)}>
				<h3 className="">Sign Up</h3>
				<input
					type="text"
					placeholder="Username"
					name="username"
					ref={register({ required: true, maxLength: 80 })}
				/>
				{errors.username && <p>Username is required !</p>}
				<input
					type="text"
					placeholder="Email"
					name="email"
					ref={register({
						required: true,
						pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
					})}
				/>
				{errors.email && errors.email.type === 'required' && (
					<p>Email is required !</p>
				)}
				{errors.email && errors.email.type === 'pattern' && (
					<p>Please enter a valid email !</p>
				)}
				<input
					onChange={() => {
						triggerValidation('password')
					}}
					type="password"
					placeholder="Password"
					name="password"
					ref={register({
						pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/,
						required: true,
					})}
				/>
				{errors.password && errors.password.type === 'required' && (
					<p>Password is required !</p>
				)}
				{errors.password && errors.password.type === 'pattern' && (
					<p>
						Password must be at least 6 characters long contain a
						number and an uppercase letter !
					</p>
				)}
				<input
					onChange={() => {
						triggerValidation('confirm_password')
					}}
					type="password"
					placeholder="Confirm Password"
					name="confirm_password"
					ref={register({
						validate: (value) =>
							value === password.current ||
							'The passwords do not match',
					})}
				/>
				{errors.confirm_password && <p>Passwords do not match.</p>}
				{registerError ? <p>{registerError}</p> : ''}
				<button
					type="submit"
					className={registerBegin ? 'form__flex' : ''}>
					{registerBegin ? (
						<i className="fa fa-spinner fa-spin"></i>
					) : (
						''
					)}
					{registerBegin ? 'Loading' : 'Register'}
				</button>
				<Link to="/login">Already have an account ?</Link>
			</form>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ registerUser }, dispatch)
}

const mapStateToProps = (state) => {
	return {
		registerBegin: getRegisterBegin(state),
		registerError: getRegisterError(state),
		auth: getIsAuthenticated(state),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
