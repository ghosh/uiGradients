import u from 'updeep'
import * as type from './types'

const initialState = u.freeze({})

function gradientReducer (state = initialState, action) {
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
      let slug = action.gradientSlug
      let userID = action.userID

      return {

      }

    default:
      return state
  }
}

export default gradientReducer
