import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

import { setActiveGradient } from './actions'

import Head from '@/components/Head'
import Header from '@/components/Header'
import Bumper from '@/components/Bumper'
import Canvas from '@/components/Canvas'

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
    return (
      <div>
        <Head title='uiGradients - Beautiful gradients for designers and developers' />
        <Header />
        <Bumper />
        <Canvas />
      </div>
    )
  }
}

CanvasContainer.propTypes = {
  gradients: PropTypes.array.isRequired,
  count: PropTypes.number.isRequired,
  setActiveGradient: PropTypes.func
}

CanvasContainer.defaultProps = {
  setActiveGradient: () => {}
}

const mapStateToProps = (state, ownProps) => {
  return {
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
