import React from 'react'

import { reduxPage } from '@/store'

import Header from '@/containers/Header'
import GradientsContainer from '@/containers/Gradients'
import AuthListener from '@/containers/Auth/Listener'

const Gradients = (props) => {
  return (
    <AuthListener>
      {(user, isAuthenticated) => [
        <Header user={ user } isAuthenticated={ isAuthenticated } />,
        <GradientsContainer />
      ]}
    </AuthListener>
  )
}

export default reduxPage(Gradients)
