import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
	apiKey: 'AIzaSyBlpXgHOnDVqj1l8IXGiQzf1y615Uua3lQ',
	authDomain: 'crypto-tracker-dea6b.firebaseapp.com',
	databaseURL: 'https://crypto-tracker-dea6b.firebaseio.com',
	projectId: 'crypto-tracker-dea6b',
	storageBucket: 'crypto-tracker-dea6b.appspot.com',
	messagingSenderId: '398951531499',
	appId: '1:398951531499:web:de56ca4e30f5b5533bcfae'
}

firebase.initializeApp(config)

export const firestore = firebase.firestore()
export const auth = firebase.auth()
export default firebase
