import { auth, googleAuthProvider } from './firebase'

const signInWithGoogle = () => {
  let p = new Promise(function (resolve, reject) {
    auth.signInWithPopup(googleAuthProvider).then(result => {
      resolve(result)
    }).catch(error => {
      console.log(error)
      reject(error)
    })
  })

  return p
}

// Sign out
const signOut = () => auth.signOut()

export {
  signInWithGoogle,
  signOut
}
