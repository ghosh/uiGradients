import * as type from './types'

function userReducer (state = null, action) {
  switch (action.type) {
    case type.USER_DID_LOGIN:
      return action.user

    case type.USER_DID_LOGOUT:
      return null
    default:
      return state
  }
}

export default userReducer
