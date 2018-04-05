import React from 'react'

import { reduxPage } from '@/store'
import LoginContainer from '@/containers/Auth/Login'
import AuthListener from '@/containers/Auth/Listener'

const Login = (props) => {
  return (
    <AuthListener>
      {(user) => [
        <LoginContainer />
      ]}
    </AuthListener>
  )
}

export default reduxPage(Login)
