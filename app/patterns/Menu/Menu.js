import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const MenuBase = styled.ul`
  background: #30404d;
  color: #f5f8fa;
  /* box-shadow: 0 0 0 1px rgba(16,22,26,.2), 0 0 0 rgba(16,22,26,0), 0 1px 1px rgba(16,22,26,.4); */
  padding: 7px;
  list-style: none;
  text-align: left;
  border-radius: 3px;
  min-width: 200px;
`

const Menu = ({ children }) => {
  return (
    <MenuBase>
      {children}
    </MenuBase>
  )
}

Menu.propTypes = {
  children: PropTypes.node
}

Menu.defaultProps = {
  children: null
}

export default Menu
