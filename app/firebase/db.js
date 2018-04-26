import firebase from 'firebase'
import { db } from './firebase'

export async function favGradient (gradientSlug, userID) {
  const gradientSnapshot = await db.collection('gradients').doc(gradientSlug)
  const gradientFavs = gradientSnapshot.get('favs').push(userID)
  await gradientSnapshot.update('favs', gradientFavs)
  console.log('done')
}

export async function unfavGradient (gradientSlug, userID) {
  const querySnapshot = await db.collection('gradients').doc(gradientSlug)
  await querySnapshot.update(`favs.${ userID }`, firebase.firestore.FieldValue.delete())
  console.log('done')
}

export async function getGradients () {
  const querySnapshot = await db.collection('gradients').get()
  const gradients = []
  querySnapshot.forEach(doc => gradients.push(doc.data()))
  return gradients
}

export const uploadGradients = (gradients) => {
  gradients.forEach(gradient => {
    db
      .collection('gradients')
      .doc(gradient.slug)
      .set(gradient, { merge: true })
      .then(() => {
        console.log('Uploaded gradient:', gradient.name)
      })
      .catch(error => {
        console.log(error)
      })
  })
}
