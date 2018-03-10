import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const MenuItemBase = styled.li`
  display: block;
  font-size: 13px;
  padding: 7px;
  &:hover {
    background-color: #3f4d5a;
  }
}
`

const MenuItem = ({ children }) => {
  return (
    <MenuItemBase>
      {children}
    </MenuItemBase>
  )
}

MenuItem.propTypes = {
  children: PropTypes.node
}

MenuItem.defaultProps = {
  children: null
}

export default MenuItem
