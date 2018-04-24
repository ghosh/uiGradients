import { db } from './firebase'

export const favGradient = (gradientSlug, userID) => {
  db
    .collection('gradients')
    .doc(gradientSlug)
    .set({
      favs: { [userID]: true }
    })
    .then(() => {
      console.log('Added as Fav')
    })
    .catch(error => {
      console.log(error)
    })
}

export async function getGradients () {
  const querySnapshot = await db.collection('gradients').get()
  const data = []
  // querySnapshot.forEach(doc => { data[doc.id] = doc.data() })
  querySnapshot.forEach(doc => {
    data.push({
      slug: doc.id,
      favs: doc.data().favs
    })
  })
  return data
}
