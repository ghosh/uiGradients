import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const BaseList = styled.ul`
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;
`

const List = (props) => {
  return (
    <BaseList>
      {props.children}
    </BaseList>
  )
}

List.propTypes = {
  children: PropTypes.node
}

List.defaultProps = {
  children: null
}

export default List
