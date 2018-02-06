import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

import { getPlaceholderGradient } from '@/utils'

import Head from '@/components/Head'
import Header from '@/components/Header'
import Bumper from '@/components/Bumper'
import Canvas from '@/components/Canvas'

import { setActiveGradient } from './actions'

class CanvasContainer extends Component {
  componentDidMount () {
    this.setActiveGradient()
  }

  setActiveGradient () {
    const { gradients, count } = this.props
    const randomIndex = Math.floor(Math.random() * count)
    const activeGradient = gradients[randomIndex]

    this.props.setActiveGradient(activeGradient)
  }

  render () {
    const { activeGradient } = this.props
    return (
      <div>
        <Head title='uiGradients - Beautiful gradients for designers and developers' />
        <Header />
        <Bumper gradient={activeGradient} />
        <Canvas gradient={activeGradient} />
      </div>
    )
  }
}

CanvasContainer.propTypes = {
  gradients: PropTypes.array.isRequired,
  count: PropTypes.number.isRequired,
  activeGradient: PropTypes.object,
  setActiveGradient: PropTypes.func
}

CanvasContainer.defaultProps = {
  activeGradient: getPlaceholderGradient(),
  setActiveGradient: () => {}
}

const mapStateToProps = (state, ownProps) => {
  return {
    activeGradient: state.canvas.activeGradient,
    gradients: state.gradients.list,
    count: state.gradients.count
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    setActiveGradient
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CanvasContainer)
