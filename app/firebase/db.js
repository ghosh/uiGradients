import firebase from 'firebase'
import { db } from './firebase'

export async function favGradient (gradientSlug, userID) {
  const querySnapshot = await db.collection('gradients').doc(gradientSlug)
  await querySnapshot.update('favs', { [userID]: true })
  console.log('done')
}

export async function unfavGradient (gradientSlug, userID) {
  const querySnapshot = await db.collection('gradients').doc(gradientSlug)
  await querySnapshot.update(`favs.${ userID }`, firebase.firestore.FieldValue.delete())
  console.log('done')
}

export async function getGradients () {
  const querySnapshot = await db.collection('gradients').get()
  const data = []

  // querySnapshot.forEach(doc => { data[doc.id] = doc.data() })
  querySnapshot.forEach(doc => {
    data.push(doc.data())
  })

  return data
}

export const uploadGradients = (gradients) => {
  gradients.forEach(gradient => {
    db
      .collection('gradients')
      .doc(gradient.slug)
      .set(gradient)
      .then(() => {
        console.log('Uploaded gradient:', gradient.name)
      })
      .catch(error => {
        console.log(error)
      })
  })
}
