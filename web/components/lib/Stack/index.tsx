import React from "react"
import styled, { css } from 'styled-components'

interface StackProps {
  gap?: number,
  align?: string
}

const Stack = styled.div<StackProps>`
  display: flex;
  gap: ${({ gap = 1 }) => gap * 4}px;
  align-items: center;

  ${({ align }) => align === 'center' && css`
    justify-content: center;
  `}
`

Stack.displayName = "Stack"

Stack.defaultProps = {
  gap: 1
}

export default Stack
