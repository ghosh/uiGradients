function canvasReducer (state = {}, action) {
  switch (action.type) {
    case 'SHOW_NEXT_GRADIENT':
      return {
        modalType: action.modalType,
        modalProps: action.modalProps
      }

    default:
      return state
  }
}

export default canvasReducer
