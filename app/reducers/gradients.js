import * as type from './types'

function gradientReducer (state = {}, action) {
  switch (action.type) {
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

    default:
      return state
  }
}

export default gradientReducer
