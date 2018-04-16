import React from 'react'
import PropTypes from 'prop-types'

import { reduxPage } from '@/store'
import { gradients } from '@/store/hydrator'
import { exists } from '@@/utils'

import Header from '@/containers/Header'
import Canvas from '@/containers/Canvas'
import AuthListener from '@/containers/Auth/Listener'

const Home = (props) => {
  return (
    <AuthListener serverUser={ props.user }>
      {(user, isAuthenticated) => [
        <Header user={ user } isAuthenticated={ isAuthenticated } />,
        <Canvas url={ props.url } gradient={ props.activeGradient } />
      ]}
    </AuthListener>
  )
}

Home.getInitialProps = ({ store, pathname, query, req }) => {
  let activeGradient = null
  let user = null

  if (!exists(query)) {
    const gradient = {}
    activeGradient = gradient
  } else {
    const gradientIndex = gradients.findIndex(gradient => gradient.slug === query.slug)
    const gradient = gradients[gradientIndex]
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
