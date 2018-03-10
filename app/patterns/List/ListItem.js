import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const BaseListItem = styled.li`
  font-size: 14px;
  color: #373737;
`

const ListItem = (props) => {
  return (
    <BaseListItem>
      {props.children}
    </BaseListItem>
  )
}

ListItem.propTypes = {
  children: PropTypes.node
}

ListItem.defaultProps = {
  children: null
}

export default ListItem
