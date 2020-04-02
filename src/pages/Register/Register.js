import React, { Component } from 'react'
import { auth } from 'firebaseConfig/firebase'
import { withRouter } from 'react-router-dom'

class Register extends Component {
	state = {
		email: '',
		password: '',
		firstName: ''
	}
	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}
	handleSubmit = async (e) => {
		e.preventDefault()
		await auth.createUserWithEmailAndPassword(
			this.state.email,
			this.state.password
		)
		this.props.history.push('/')
	}
	render() {
		return (
			<div className="">
				<form className="" onSubmit={this.handleSubmit}>
					<h5 className="">Sign Up</h5>
					<div className="">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							id="email"
							onChange={this.handleChange}
						/>
					</div>
					<div className="">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
							onChange={this.handleChange}
						/>
					</div>
					<div className="">
						<label htmlFor="firstName">First Name</label>
						<input
							type="text"
							id="firstName"
							onChange={this.handleChange}
							required={true}
						/>
					</div>
					<div className="">
						<button className="">Sign Up</button>
					</div>
				</form>
			</div>
		)
	}
}

export default Register
