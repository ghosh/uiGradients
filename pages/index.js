import React from 'react'
import PropTypes from 'prop-types'

import { reduxPage } from '@/store'
import { uniqueGradients } from '@/store/hydrator'
import { exists } from '@@/utils'

import Canvas from '@/containers/Canvas'

const Home = (props) => <Canvas url={ props.url } gradient={ props.activeGradient } />

Home.getInitialProps = ({ store, pathname, query }) => {
  if (!exists(query)) {
    const activeGradient = {}
    return { activeGradient }
  } else {
    const gradientIndex = uniqueGradients.findIndex(gradient => gradient.slug === query.slug)
    const activeGradient = uniqueGradients[gradientIndex]
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
