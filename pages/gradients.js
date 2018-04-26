import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { reduxPage } from '@/store'
import { exists } from '@@/utils'

import { db } from '@/firebase'

import Header from '@/containers/Header'
import GradientsContainer from '@/containers/Gradients'
import AuthListener from '@/containers/Auth/Listener'

const Gradients = (props) => {
  return (
    <AuthListener serverUser={ props.user }>
      {(user, isAuthenticated) => (
        <Fragment>
          <Header user={ user } isAuthenticated={ isAuthenticated } key='header' />
          <GradientsContainer key='GradientsContainer' />
        </Fragment>
      )}
    </AuthListener>
  )
}

Gradients.getInitialProps = async ({ store, req }) => {
  const state = await store.getState()

  if (state.gradients.list.length <= 0) {
    const grads = await db.getGradients()
    store.dispatch({
      type: 'SET_FIREBASE_GRADIENTS',
      payload: grads
    })
  }

  let user = null
  if (exists(req) && exists(req.cookies.user)) {
    user = req.cookies.user
    store.dispatch({
      type: 'USER_DID_LOGIN',
      user: JSON.parse(user)
    })
  }
  return { user }
}

Gradients.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])
}

Gradients.defaultProps = {
  user: {}
}

export default reduxPage(Gradients)
