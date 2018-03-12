import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const SwatchItem = styled.li`
  cursor: pointer;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  margin-right: 8px;

  background-color: ${ props => props.color };

  ${ props => props.selected && css`
    border: solid 3px white;
  ` }
`

class Swatch extends PureComponent {
  render () {
    return (
      <SwatchItem color={ this.props.color } selected={ this.props.selected } />
    )
  }
}

Swatch.propTypes = {
  color: PropTypes.string.isRequired,
  selected: PropTypes.bool
}

Swatch.defaultProps = {
  selected: false
}

export default Swatch
