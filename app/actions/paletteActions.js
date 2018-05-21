import { db } from '@/firebase'

function syncFavGradient(gradientSlug, userID) {
  return {
    type: 'FAV_GRADIENT',
    gradientSlug: gradientSlug,
    userID: userID
  }
}

function syncUnFavGradient(gradientSlug, userID) {
  return {
    type: 'UNFAV_GRADIENT',
    gradientSlug: gradientSlug,
    userID: userID
  }
}


export function FavGradient(gradientSlug, userID) {
  return async function (dispatch) {
    try {
      await db.favGradient(gradientSlug, userID)
      dispatch(syncFavGradient(gradientSlug, userID))
    } catch (error) {
      console.log('An error occurred.', error)
    }
  }
}

export function UnFavGradient(gradientSlug, userID) {
  return async function (dispatch) {
    try {
      await db.unfavGradient(gradientSlug, userID)
      dispatch(syncUnFavGradient(gradientSlug, userID))
    } catch (error) {
      console.log('An error occurred.', error)
    }
  }
}
