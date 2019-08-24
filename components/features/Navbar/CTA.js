import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const LinkItem = styled.a`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 12px;
  cursor: pointer;
  color: #373737;
  font-size: 14px;

  &:hover {
    background-color: #E4EBF2;
  }
`

const Button = ({ onClick, children }) => {
  return (
    <LinkItem onClick={onClick}>
      {children}
    </LinkItem>
  )
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
}

export default Button
