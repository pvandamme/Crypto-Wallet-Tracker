import React, { Component } from 'react'
import { loginUser } from 'state/actions/authActions/loginActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Login extends Component {
	state = {
		email: '',
		password: ''
	}
	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}
	handleSubmit = (e) => {
		e.preventDefault()
		this.props.loginUser(this.state.email, this.state.password)
	}
	render() {
		return (
			<div className="">
				<form className="" onSubmit={this.handleSubmit}>
					<h5 className="">Sign In</h5>
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
						<button className="">Login</button>
					</div>
				</form>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ loginUser }, dispatch)
}

export default connect(null, mapDispatchToProps)(Login)
