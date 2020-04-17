import React from 'react'
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link, Redirect } from 'react-router-dom'
import { loginUser } from 'state/actions/authActions/loginActions'
import {
	getIsAuthenticated,
	getLoginBegin,
	getLoginError,
	getAuthUid,
} from 'state/selectors/authSelectors'

const Login = ({ auth, loginError, loginBegin, loginUser }) => {
	const { register, handleSubmit, errors } = useForm()
	const onSubmit = (data) => loginUser(data.email, data.password)

	if (auth) {
		return <Redirect to="/dashboard" />
	} else {
		return (
			<form
				className="form-wrapper form__height"
				autoComplete="off"
				onSubmit={handleSubmit(onSubmit)}>
				<h3>Login</h3>
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
					type="password"
					placeholder="Password"
					name="password"
					ref={register({
						required: true,
					})}
				/>
				{errors.password && errors.password.type === 'required' && (
					<p>Password is required !</p>
				)}
				{loginError ? <p>{loginError}</p> : ''}
				<button
					type="submit"
					className={loginBegin ? 'form__flex' : ''}>
					{loginBegin ? (
						<i className="fa fa-spinner fa-spin"></i>
					) : (
						''
					)}
					{loginBegin ? 'Loading' : 'Login'}
				</button>
				<Link to="/register">Don't have an account ?</Link>
			</form>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ loginUser }, dispatch)
}

const mapStateToProps = (state) => {
	return {
		loginBegin: getLoginBegin(state),
		loginError: getLoginError(state),
		auth: getIsAuthenticated(state),
		uid: getAuthUid(state),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
