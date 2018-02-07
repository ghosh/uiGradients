import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { exists } from '@/utils'

import LeftChev from './icons/leftchev.svg'
import RightChev from './icons/rightchev.svg'

const GradientCanvas = styled.div`
  width: 100%;
  height: calc(100vh - 90px);
  position: relative;

  background-image: ${props =>
    (exists(props.gradient) && `linear-gradient(90deg, ${[...props.gradient.colors].join(', ')})`) ||
    'linear-gradient(90deg, #eaeaea, #eaeaea)'
};
  `

const GradientName = styled.h2`
  position: absolute;
  top: 15px;
  left: 50%;
  transform: translate3d(-50%,0,0);
  color: #fff;
  font-size: 20px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`

const GradientNav = styled.ul`
  margin: 0;
  padding: 0;
  position: absolute;
  top: 50%;
  transform: translate3d(0, -50%, 0);
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const GradientNavItem = styled.li`
  height: 100px;
  width: 60px;
  background-color: rgba(255,255,255,.1);
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .2s ease-in-out;

  svg {
    transition: all .2s ease-in-out;
  }

  &:hover {
    background-color: rgba(255,255,255,.2);
  }

  &:hover svg {
    transform: scale(1.3)
  }
`

class Canvas extends PureComponent {
  componentDidMount () {
    document.addEventListener('keyup', this.handleKeyboardEvents.bind(this))
  }

  componentWillUnmount () {
    document.removeEventListener('keyup', this.handleKeyboardEvents.bind(this))
  }

  handleKeyboardEvents (event) {
    switch (event.keyCode) {
      case 37: // left
        this.props.handleGradientChange('down')
        break
      case 39: // left
        this.props.handleGradientChange('up')
        break
      default:
        break
    }
  }

  render () {
    return (
      <GradientCanvas gradient={this.props.gradient} >

        <GradientName>
          {this.props.gradient.name}
        </GradientName>

        <GradientNav>

          <GradientNavItem onClick={() => this.props.handleGradientChange('down')}>
            <LeftChev width='14' height='18' fill='#fff' />
          </GradientNavItem>

          <GradientNavItem onClick={() => this.props.handleGradientChange('up')}>
            <RightChev width='14' height='18' fill='#fff' />
          </GradientNavItem>

        </GradientNav>

      </GradientCanvas>
    )
  }
}

Canvas.propTypes = {
  gradient: PropTypes.object.isRequired,
  handleGradientChange: PropTypes.func.isRequired
}

export default Canvas
