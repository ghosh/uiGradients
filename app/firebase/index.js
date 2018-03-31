import firebase from 'firebase'
require('firebase/firestore')

// Initialize Firebase
var config = {

}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export const db = firebase.firestore()

// at the bottom of src/firebase.js
export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
