import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const DropdownTargetBase = styled.div`
  position: relative;
`

const DropdownTarget = ({ children, toggleDropdown }) => {
  return (
    <DropdownTargetBase onClick={ () => toggleDropdown() }>
      {children}
    </DropdownTargetBase>
  )
}

DropdownTarget.propTypes = {
  toggleDropdown: PropTypes.func,
  children: PropTypes.node
}

DropdownTarget.defaultProps = {
  toggleDropdown: () => {},
  children: null
}

export default DropdownTarget
