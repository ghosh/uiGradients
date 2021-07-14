import React from 'react'
import styled, { css } from 'styled-components'

interface TextProps {
  variant?: 'p'
}

const Text = styled.p<TextProps>`
  color: #50616F;

  /* Default Prop for size */
  ${({ variant = 'p' }) => variant === 'p' && css`
    font-size: 16px;
  `}
`

// Doesn't work with TS at the moment
Text.defaultProps = {
  variant: 'p'
}

Text.displayName = 'Text'

export default Text