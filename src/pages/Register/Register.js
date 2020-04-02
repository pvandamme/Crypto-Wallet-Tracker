import React from 'react'
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { registerUser } from 'state/actions/authActions/registerActions'
import { Link } from 'react-router-dom'

const Register = () => {
	const { register, handleSubmit, errors } = useForm()
	const onSubmit = (data) => console.log(data)
	console.log(errors)
	//handleSubmit = async (e) => {
	//	e.preventDefault()
	//this.props.registerUser(this.state.email, this.state.password)
	//	}
	return (
		<form
			className="form-wrapper"
			autoComplete="off"
			onSubmit={handleSubmit(onSubmit)}>
			<h3 className="">Sign Up</h3>
			<input
				type="text"
				placeholder="First name"
				name="firstName"
				ref={register({ required: true, maxLength: 80 })}
			/>
			{errors.firstName && <p>First name is required !</p>}
			<input
				type="text"
				placeholder="Last name"
				name="lastName"
				ref={register({ required: true, maxLength: 100 })}
			/>
			{errors.lastName && <p>Last Name is required !</p>}
			<input
				type="text"
				placeholder="Email"
				name="email"
				ref={register({
					required: true,
					pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
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
					pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/,
					required: true
				})}
			/>
			{errors.password && errors.password.type === 'required' && (
				<p className="form__reset-margin">Password is required !</p>
			)}
			{errors.password && errors.password.type === 'pattern' && (
				<p>
					Password must be at least 6 characters long contain a number
					and an uppercase letter !
				</p>
			)}
			<button type="submit">Register</button>
			<Link to="/login">Already have an account ?</Link>
		</form>
	)
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ registerUser }, dispatch)
}

export default connect(null, mapDispatchToProps)(Register)
