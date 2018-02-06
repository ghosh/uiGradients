function canvasReducer (state = {}, action) {
  switch (action.type) {
    case 'SET_ACTIVE_GRADIENT':
      return {
        activeGradient: action.gradient
      }

    default:
      return state
  }
}

export default canvasReducer
