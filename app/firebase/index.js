import firebase from 'firebase'
require('firebase/firestore')

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyD9rDbsPHfG24SN99hQtJfE7Lfw-H-WeSQ',
  authDomain: 'uigradients.firebaseapp.com',
  databaseURL: 'https://uigradients.firebaseio.com',
  projectId: 'uigradients',
  storageBucket: 'uigradients.appspot.com',
  messagingSenderId: '504222998838'
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export const db = firebase.firestore()

// at the bottom of src/firebase.js
export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
