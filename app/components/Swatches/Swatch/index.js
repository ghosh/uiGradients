import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

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
    return (
      <SwatchItem
        color={ this.props.color }
        selected={ (this.props.color === this.props.activeColor) }
        onClick={ () => this.props.handleClick(this.props.color) }
      />
    )
  }
}

Swatch.propTypes = {
  color: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  activeColor: PropTypes.string
}

Swatch.defaultProps = {
  handleClick: () => {},
  activeColor: null
}

export default Swatch
