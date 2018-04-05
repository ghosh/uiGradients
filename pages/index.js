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
    <AuthListener>
      {(user, isAuthenticated) => [
        <Header user={ user } isAuthenticated={ isAuthenticated } />,
        <Canvas url={ props.url } gradient={ props.activeGradient } />
      ]}
    </AuthListener>
  )
}

Home.getInitialProps = ({ store, pathname, query }) => {
  if (!exists(query)) {
    const activeGradient = {}
    return { activeGradient }
  } else {
    const gradientIndex = gradients.findIndex(gradient => gradient.slug === query.slug)
    const activeGradient = gradients[gradientIndex]
    return { activeGradient }
  }
}

Home.propTypes = {
  url: PropTypes.object.isRequired,
  activeGradient: PropTypes.object.isRequired
}

Home.defaultProps = {
  url: {},
  activeGradient: {}
}

export default reduxPage(Home)
