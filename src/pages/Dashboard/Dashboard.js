import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAuthUid } from 'state/selectors/authSelectors'
import { bindActionCreators } from 'redux'
import { setTransactionsListener } from 'state/actions/dashboardActions'
import { firestore } from 'firebaseConfig/firebase'

const handleClick = (uid) => {
	firestore.collection('users/' + uid + '/transactions').add({
		asset: 'EWZZZZZZZZZZ',
		amount: 548,
	})
}

class Dashboard extends Component {
	componentDidMount() {
		const { uid, setTransactionsListener } = this.props
		setTransactionsListener(uid)
	}
	render() {
		return (
			<button onClick={() => handleClick(this.props.uid)}>
				Click me !
			</button>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		uid: getAuthUid(state),
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ setTransactionsListener }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
