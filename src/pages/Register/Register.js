import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { registerUser } from 'state/actions/authActions/registerActions'

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
		this.props.registerUser(this.state.email, this.state.password)
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

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ registerUser }, dispatch)
}

export default connect(null, mapDispatchToProps)(Register)
