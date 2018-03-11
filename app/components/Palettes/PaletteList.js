import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
`

const PaletteList = (props) => {
  return (
    <List>
      {props.children}
    </List>
  )
}

PaletteList.propTypes = {
  children: PropTypes.node
}

PaletteList.defaultProps = {
  children: null
}

export default PaletteList
