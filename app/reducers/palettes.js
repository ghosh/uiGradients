import * as type from './types'

function paletteReducer (state = {}, action) {
  switch (action.type) {
    case type.SET_ACTIVE_PALETTE:
      return action.palette

    default:
      return state
  }
}

export default paletteReducer
