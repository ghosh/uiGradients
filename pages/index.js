import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { reduxPage } from '@/store'
import { exists } from '@/helpers/utils'
import { db } from '@/firebase'

import Header from '@/containers/Header'
import Canvas from '@/containers/Canvas'
import AuthListener from '@/containers/Auth/Listener'

const Home = (props) => {
  return (
    <AuthListener serverUser={ props.user }>
      {(user, isAuthenticated) => (
        <Fragment>
          <Header user={ user } isAuthenticated={ isAuthenticated } />
          <Canvas url={ props.url } gradient={ props.activeGradient } />
        </Fragment>
      )}
    </AuthListener>
  )
}

Home.getInitialProps = async ({ store, pathname, query, req }) => {
  const state = await store.getState()
  let gradients = []
  if (state.gradients.list.length <= 0) {
    gradients = await db.getGradients()
    store.dispatch({
      type: 'SET_FIREBASE_GRADIENTS',
      payload: gradients
    })
  } else {
    gradients = state.gradients.list
  }

  let activeGradient = null
  let user = null

  if (!exists(query)) {
    const randomGradient = gradients[Math.floor(Math.random() * gradients.length)]
    activeGradient = randomGradient
  } else {
    const gradientIndex = gradients.findIndex(gradient => gradient.slug === query.slug)
    const gradient = gradients[gradientIndex]
    activeGradient = gradient
  }

  if (exists(req) && exists(req.cookies.user)) {
    JSON.parse(req.cookies.user)

    user = await req.cookies.user
    store.dispatch({
      type: 'USER_DID_LOGIN',
      user: JSON.parse(user)
    })
  }

  return { activeGradient, user }
}

Home.propTypes = {
  url: PropTypes.object.isRequired,
  user: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  activeGradient: PropTypes.object.isRequired
}

Home.defaultProps = {
  url: {},
  user: {},
  activeGradient: {}
}

export default reduxPage(Home)
