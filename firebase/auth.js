import { auth, provider, db } from './firebase'

const login = () => {
  auth.signInWithPopup(provider)
    .then(result => result.user)
    .then(user => _saveUserInfo(user))
    .catch(err => console.log(err)
    )
}

const _saveUserInfo = (datum) => {
  db.collection('users').doc(datum.uid).set({
    uid: datum.uid,
    displayName: datum.displayName,
    email: datum.email,
    emailVerified: datum.emailVerified,
    photoURL: datum.photoURL
  }, { merge: true })
    .then(function () {
      console.log('Document successfully written!')
    })
    .catch(function (error) {
      console.error('Error writing document: ', error)
    })
}

/**
 * Destroy current user session
 */
const logout = () => auth.signOut()

export {
  logout,
  login,
  auth
}
