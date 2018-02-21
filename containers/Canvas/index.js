import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

import { exists } from '@/utils'

import Head from '@/components/Head'
import Header from '@/components/Header'
import Bumper from '@/components/Bumper'
import Canvas from '@/components/Canvas'

import { setActiveGradient, changeGradient, rotateGradient } from './actions'

class CanvasContainer extends Component {
  componentDidMount () {
    this.setActiveGradient()
  }

  componentDidUpdate () {
    const { activeGradient } = this.props
    const obj = { Page: activeGradient.name, Url: `/g/${ activeGradient.slug }` }
    history.pushState(obj, obj.Page, obj.Url)
  }

  setActiveGradient () {
    let activeGradient = null
    if (exists(this.props.gradient)) {
      activeGradient = this.props.gradient
    } else {
      const { gradients, count, url } = this.props
      let gradientIndex = null
      if (url.query.slug) {
        gradientIndex = gradients.findIndex(gradient => gradient.slug === url.query.slug)
      } else {
        gradientIndex = Math.floor(Math.random() * count)
      }
      activeGradient = gradients[gradientIndex]
    }
    this.props.setActiveGradient(activeGradient)
  }

  render () {
    const { activeGradient, activeDirection, gradient, changeGradient, rotateGradient } = this.props
    return (
      <div>
        <Head title='uiGradients - Beautiful gradients for designers and developers' />
        <Header />
        <Bumper
          gradient={ activeGradient || gradient }
          handleGradientRotation={ rotateGradient }
        />
        <Canvas
          direction={ activeDirection }
          gradient={ activeGradient || gradient }
          handleGradientChange={ changeGradient }
        />
      </div>
    )
  }
}

CanvasContainer.propTypes = {
  gradients: PropTypes.array.isRequired, // list of gradients
  count: PropTypes.number.isRequired, // total num of gradients
  url: PropTypes.object.isRequired, // url object
  gradient: PropTypes.object, // any gradient loaded from server
  activeGradient: PropTypes.object, // gradient being set from clinet
  activeDirection: PropTypes.string, // direction of gradient
  setActiveGradient: PropTypes.func,
  changeGradient: PropTypes.func,
  rotateGradient: PropTypes.func
}

CanvasContainer.defaultProps = {
  activeGradient: null,
  activeDirection: 'to-left',
  setActiveGradient: () => {},
  changeGradient: () => {},
  rotateGradient: () => {}
}

const mapStateToProps = (state, ownProps) => {
  return {
    activeGradient: state.gradients.activeGradient,
    activeDirection: state.gradients.activeDirection,
    gradients: state.gradients.list,
    count: state.gradients.count
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    setActiveGradient,
    changeGradient,
    rotateGradient
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CanvasContainer)
