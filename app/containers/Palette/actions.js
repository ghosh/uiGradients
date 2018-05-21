import { db } from '@/firebase'

function syncFavGradient (gradientSlug, userID) {
  return {
    type: 'FAV_GRADIENT',
    gradientSlug: gradientSlug,
    userID: userID
  }
}

// export function FavGradient () {
//   return dispatch => {
//     setTimeout(() => {
//       dispatch(syncFavGradient())
//     }, 3000)
//   }
// }

// export function FavGradient (gradientSlug, userID) {
//   return function (dispatch) {
//     return db.favGradient(gradientSlug, userID)
//       .then(
//         response => dispatch(syncFavGradient(gradientSlug, userID)),
//         error => console.log('An error occurred.', error)
//       )
//   }
// }

export function FavGradient (gradientSlug, userID) {
  return async function (dispatch) {
    try {
      await db.favGradient(gradientSlug, userID)
      dispatch(syncFavGradient(gradientSlug, userID))
    } catch (error) {
      console.log('An error occurred.', error)
    }
  }
}

export function UnFavGradient (gradientSlug, userID) {
  return {
    type: 'UNFAV_GRADIENT',
    gradientSlug: gradientSlug,
    userID: userID
  }
}
