import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const List = styled.ul`
  display: flex;
  align-items: center;
`

const Label = styled.p`
  font-size: 15px;
  color: #fff;
  margin-right: 8px;
  -webkit-font-smoothing: antialiased;
`

class SwatchList extends PureComponent {
  render () {
    return (
      <List>
        <Label>Filter by color:</Label>
        {this.props.children}
      </List>
    )
  }
}

SwatchList.propTypes = {
  children: PropTypes.node.isRequired
}

export default SwatchList
