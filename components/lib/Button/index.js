import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Button = ({ children }) => {
  const StyledButton = styled.button`
    padding: 0 6px;
    height: 36px;
    font-weight: 500;
    cursor: pointer;
    display: inline-block;
    line-height: 1.125rem;
    margin: 0;
    border: 1px solid transparent;
    vertical-align: middle;
    -webkit-appearance: none;
    color: inherit;
    background-color: transparent;
  `

  return (
    <StyledButton>
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ])
}

export default Button
