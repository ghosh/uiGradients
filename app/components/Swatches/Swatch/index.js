import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import Close from '../icons/close.svg'

const SwatchItem = styled.li`
  cursor: pointer;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  margin-right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${ props => props.color };

  ${ props => props.selected && css`
    border: solid 3px white;
  ` }
`

class Swatch extends PureComponent {
  render () {
    const activeSwatch = this.props.color === this.props.activeColor
    return (
      <SwatchItem
        color={ this.props.color }
        selected={ activeSwatch }
        onClick={ () => this.props.handleClick(this.props.color, this.props.palette) }
      >
        {activeSwatch && <Close width='16' height='16' stroke='#ffffff' />}
      </SwatchItem>
    )
  }
}

Swatch.propTypes = {
  palette: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  activeColor: PropTypes.string
}

Swatch.defaultProps = {
  handleClick: () => {},
  activeColor: null
}

export default Swatch
