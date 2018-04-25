import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { reduxPage } from '@/store'
import { exists } from '@@/utils'
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
  const fireGradients = await db.getGradients()
  // console.log(fireGradients)

  let activeGradient = null
  let user = null

  if (!exists(query)) {
    const randomGradient = fireGradients[Math.floor(Math.random() * fireGradients.length)]
    activeGradient = randomGradient
  } else {
    const gradientIndex = fireGradients.findIndex(gradient => gradient.slug === query.slug)
    const gradient = fireGradients[gradientIndex]
    activeGradient = gradient
  }

  if (exists(req)) {
    user = req.cookies.user
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
