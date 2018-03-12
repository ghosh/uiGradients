import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import transition from 'styled-transition-group'

const FadeUp = transition.span.attrs({
  mountOnEnter: true,
  unmountOnExit: true,
  timeout: 500
})`
  position: absolute;
  background-color: #eaeaea;
  padding: 3px 5px;
  font-size: 12px;
  border-radius: 3px;
  margin-left: -27px;
  bottom: 0;
  left: 50%;
  opacity: 1;

  &:enter {
    opacity: 0;
  }
  &:enter-active {
    opacity: 1;
    transition: opacity .1s ease;
  }
  &:exit {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  &:exit-active {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
    transition: transform .5s ease, opacity .5s ease;
  }
`

const HexBase = styled.li`
  position: relative;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 3px 6px;
  border-radius: 3px;
  transition: background 0.2s ease-in-out;

  &:hover {
    background-color: #eceaea;
  }
`

const HexPallete = styled.span`
  display: inline-block;
  width: 14px;
  height: 14px;
  background-color: #32c4da;
  margin-right: 5px;

  /* Adapt the colours based on prop */
  background-color: ${ props => props.color };
`

const HexColor = styled.span`
  font-family: "SF Mono Regular", "Source Code Pro", Consolas, monospace;
  font-size: 15px;
`

class Hex extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      copied: false
    }
    this.onCopy = this.onCopy.bind(this)
  }

  onCopy () {
    this.setState({ copied: true })
    setTimeout(() => {
      this.setState({ copied: false })
    }, 50)
  }

  render () {
    const { color } = this.props
    return (
      <CopyToClipboard text={ color } onCopy={ this.onCopy }>
        <HexBase>
          <HexPallete color={ color } />
          <HexColor>
            {color}
          </HexColor>
          <FadeUp in={ this.state.copied }>
            copied!
          </FadeUp>
        </HexBase>
      </CopyToClipboard>
    )
  }
}

Hex.propTypes = {
  color: PropTypes.string.isRequired
}

export default Hex
