export function LoginUser (user) {
  return {
    type: 'USER_DID_LOGIN',
    user: user
  }
}

export function LogoutUser () {
  return {
    type: 'UER_DID_LOGOUT'
  }
}