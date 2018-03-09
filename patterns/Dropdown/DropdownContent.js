import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const DropdownContentBase = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 10;
`

const DropdownContent = ({ children, dropdownActive }) => {
  return (
    <DropdownContentBase>
      {dropdownActive && children}
    </DropdownContentBase>
  )
}

DropdownContent.propTypes = {
  dropdownActive: PropTypes.bool,
  children: PropTypes.node
}

DropdownContent.defaultProps = {
  dropdownActive: false,
  children: null
}

export default DropdownContent
