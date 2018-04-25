import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { HexList } from '@/components/Hex'
import Actionbar from '@/components/Actionbar'

import GradientUploader from '@/services/gradientUploader'

const BumperBase = styled.section`
  padding: 0 20px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px #eaeaea;

  > * {
    flex: 1;
  }
`

class Bumper extends Component {
  constructor (props) {
    super(props)
    this.handleGradientUpload = this.handleGradientUpload.bind(this)
  }

  shouldComponentUpdate (nextProps, nextState) {
    if (this.props.direction !== nextProps.direction) return true
    if (this.props.gradient !== nextProps.gradient) return true
    return false
  }

  handleGradientUpload () {
    GradientUploader()
  }

  render () {
    return (
      <BumperBase>
        <div>
          <button onClick={ this.handleGradientUpload }>Upload Gradients</button>
        </div>
        {this.props.gradient.colors && <HexList colors={ this.props.gradient.colors } />}
        <Actionbar
          direction={ this.props.direction }
          gradient={ this.props.gradient }
          handleGradientRotation={ this.props.handleGradientRotation }
          handleAddGradientClick={ this.props.handleAddGradientClick }
          handeGetCssClick={ this.props.handeGetCssClick }
        />
      </BumperBase>
    )
  }
}

Bumper.propTypes = {
  direction: PropTypes.string.isRequired,
  gradient: PropTypes.object.isRequired,
  handleGradientRotation: PropTypes.func.isRequired,
  handleAddGradientClick: PropTypes.func.isRequired,
  handeGetCssClick: PropTypes.func.isRequired
}

export default Bumper
