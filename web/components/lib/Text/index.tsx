import React from 'react'
import styled, { css } from 'styled-components'

interface TextProps {
  size?: 'p'
}

const Text = styled.p<TextProps>`
  color: #50616F;

  /* Default Prop for size */
  ${({ size = 'p' }) => size === 'p' && css`
    font-size: 16px;
  `}
`

// Doesn't work with TS at the moment
Text.defaultProps = {
  size: 'p'
}

Text.displayName = 'Text'

export default Text