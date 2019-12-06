import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBVLGsY7hBKVx7ma338p_r3zsx9gsxSCbk",
    authDomain: "chatbox-7b697.firebaseapp.com",
    databaseURL: "https://chatbox-7b697.firebaseio.com"
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base
