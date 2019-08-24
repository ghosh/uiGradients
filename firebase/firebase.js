import firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/firestore'

import config from './config'

!firebase.apps.length && firebase.initializeApp(config)

const provider = new firebase.auth.GoogleAuthProvider()
const auth = firebase.auth()
const db = firebase.firestore()

export {
  provider,
  auth,
  db,
  firebase
}
