import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import GradientDownloader from '@/services/gradientDownloader'

import { TooltipBase } from '@/patterns/Tooltip'

import RotateIcon from './icons/rotate.svg'
import CodeIcon from './icons/code.svg'
import AddIcon from './icons/add.svg'
import DownloadIcon from './icons/download.svg'

const ActionbarContainer = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
`

const ActionItem = styled.li`
  margin: 0 10px !important;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  cursor: pointer;
  box-sizing: border-box;
  border-radius: 3px;
  position: relative;
  transition: background 0.2s ease-in-out;

  &:hover {
    background-color: #eceaea;
  }

  &:last-child {
    margin-right: 0;
  }

  &:not(:first-child):before {
    content: "|";
    margin-left: 10px;
    position: absolute;
    left: -23px;
    top: 5px;
    color: #eaeaea;
  }
`

const ActionTooltip = TooltipBase.extend`
  width: 100%;
  height: 32px;
  justify-content: center;
  align-items: center;
  display: flex;
`

class Actionbar extends PureComponent {
  constructor (props) {
    super(props)
    this.downloadGradient = this.downloadGradient.bind(this)
    this.handleKeyboardEvents = this.handleKeyboardEvents.bind(this)
  }

  shouldComponentUpdate (nextProps, nextState) {
    if (this.props.direction !== nextProps.direction) return true
    if (this.props.gradient !== nextProps.gradient) return true
    return false
  }

  componentDidMount () {
    document.addEventListener('keyup', this.handleKeyboardEvents)
  }

  componentWillUnmount () {
    document.removeEventListener('keyup', this.handleKeyboardEvents)
  }

  handleKeyboardEvents (event) {
    switch (event.keyCode) {
      case 38: // up
        this.props.handleGradientRotation('up')
        break
      case 40: // down
        this.props.handleGradientRotation('down')
        break
      default:
        break
    }
  }

  downloadGradient () {
    GradientDownloader(
      this.props.direction,
      this.props.gradient.name,
      ...this.props.gradient.colors
    )
  }

  render () {
    return (
      <ActionbarContainer>

        <ActionItem onClick={ () => this.props.handleGradientRotation('up') }>
          <ActionTooltip label='Rotate gradient'>
            <RotateIcon width='16' height='16' />
          </ActionTooltip>
        </ActionItem>

        <ActionItem onClick={ () => this.props.handeGetCssClick() }>
          <ActionTooltip label='Get CSS'>
            <CodeIcon width='16' height='16' />
          </ActionTooltip>
        </ActionItem>

        <ActionItem onClick={ () => this.props.handleAddGradientClick() }>
          <ActionTooltip label='Add gradient'>
            <AddIcon width='16' height='16' />
          </ActionTooltip>
        </ActionItem>

        <ActionItem onClick={ this.downloadGradient }>
          <ActionTooltip label='Download'>
            <DownloadIcon width='16' height='16' />
          </ActionTooltip>
        </ActionItem>
      </ActionbarContainer>
    )
  }
}

Actionbar.propTypes = {
  handleGradientRotation: PropTypes.func.isRequired,
  handleAddGradientClick: PropTypes.func.isRequired,
  handeGetCssClick: PropTypes.func.isRequired,
  direction: PropTypes.string,
  gradient: PropTypes.obj
}

Actionbar.defaultProps = {
  direction: 'to-left',
  gradient: {}
}

export default Actionbar
