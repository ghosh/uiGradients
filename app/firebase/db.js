import { db } from './firebase'

// User API
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
