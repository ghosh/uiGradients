import update from 'immutability-helper';
import * as type from './types'

function gradientReducer(state = {}, action) {
  const gradients = state.list
  let gradientIndex = null;

  switch (action.type) {
    case type.SET_FIREBASE_GRADIENTS:
      return Object.assign({}, state, {
        list: action.payload,
        count: action.payload.length
      })

    case type.SET_ACTIVE_GRADIENT:
      return Object.assign({}, state, {
        activeIndex: action.gradient.id,
        activeGradient: action.gradient
      })

    case type.CHANGE_GRADIENT:
      let newIndex = 0
      if (action.direction === 'up') {
        const updatedIndex = state.activeIndex - 1
        newIndex = (updatedIndex < 0) ? state.list.length - 1 : updatedIndex
      } else if (action.direction === 'down') {
        const updatedIndex = state.activeIndex + 1
        newIndex = (updatedIndex > state.list.length - 1) ? 0 : updatedIndex
      }
      return Object.assign({}, state, {
        activeIndex: newIndex,
        activeGradient: state.list[newIndex]
      })

    case type.FAV_GRADIENT:
      const slug = action.gradientSlug
      const userID = action.userID

      //Find index of specific object using findIndex method.
      gradientIndex = gradients.findIndex((gradient => gradient.slug == slug));
      const prevFavs = gradients[gradientIndex].favs || {}
      const nextFavs = { ...prevFavs, [userID]: true }

      return update(state, {
        list: {
          [gradientIndex]: {
            favs: { $set: nextFavs }
          }
        }
      })


    case type.UNFAV_GRADIENT:
      //Find index of specific object using findIndex method.
      gradientIndex = gradients.findIndex((gradient => gradient.slug == action.gradientSlug));
      const oldFavs = gradients[gradientIndex].favs || {}
      const newFavs = delete oldFavs[action.userID];

      return update(state, {
        list: {
          [gradientIndex]: {
            favs: { $set: newFavs }
          }
        }
      })


    default:
      return state
  }
}

export default gradientReducer
