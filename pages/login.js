import React from 'react'

import { reduxPage } from '@/store'
import LoginContainer from '@/containers/Auth/Login'

const Login = (props) => {
  return [
    <LoginContainer />
  ]
}

export default reduxPage(Login)
