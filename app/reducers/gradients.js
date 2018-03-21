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

    case type.ROTATE_GRADIENT:
      let directionIndex
      if (action.direction === 'down') {
        directionIndex = state.directionIndex + 1
        directionIndex = (directionIndex > state.directions.length - 1) ? 0 : directionIndex
      } else if (action.direction === 'up') {
        directionIndex = state.directionIndex - 1
        directionIndex = (directionIndex < 0) ? state.directions.length - 1 : directionIndex
      }
      return Object.assign({}, state, {
        directionIndex: directionIndex,
        activeDirection: state.directions[directionIndex]
      })

    default:
      return state
  }
}

export default gradientReducer
