import update from 'immutability-helper';
import * as type from './types'

function gradientReducer(state = {}, action) {
  const gradients = state.list
  let prevFavs = null
  let nextFavs = null
  let gradientIndex = null

  switch (action.type) {
    case type.SET_FIREBASE_GRADIENTS:
      return update(state, {
        list: { $set: action.payload },
        count: { $set: action.payload.length }
      });

    case type.SET_ACTIVE_GRADIENT:
      return update(state, {
        activeIndex: { $set: action.gradient.id },
        activeGradient: { $set: action.gradient }
      });

    case type.CHANGE_GRADIENT:
      let newIndex = 0
      if (action.direction === 'up') {
        const updatedIndex = state.activeIndex - 1
        newIndex = (updatedIndex < 0) ? state.list.length - 1 : updatedIndex
      } else if (action.direction === 'down') {
        const updatedIndex = state.activeIndex + 1
        newIndex = (updatedIndex > state.list.length - 1) ? 0 : updatedIndex
      }

      return update(state, {
        activeIndex: { $set: newIndex },
        activeGradient: { $set: state.list[newIndex] }
      });

    case type.FAV_GRADIENT:
      const slug = action.gradientSlug
      const userID = action.userID

      gradientIndex = gradients.findIndex((gradient => gradient.slug == slug));
      prevFavs = gradients[gradientIndex].favs || {}
      nextFavs = { ...prevFavs, [userID]: true }

      return update(state, {
        list: {
          [gradientIndex]: {
            favs: { $set: nextFavs }
          }
        }
      })


    case type.UNFAV_GRADIENT:
      gradientIndex = gradients.findIndex((gradient => gradient.slug == action.gradientSlug));
      prevFavs = gradients[gradientIndex].favs || {}
      nextFavs = delete prevFavs[action.userID];

      return update(state, {
        list: {
          [gradientIndex]: {
            favs: { $set: nextFavs }
          }
        }
      })


    default:
      return state
  }
}

export default gradientReducer
