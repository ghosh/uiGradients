import React from "react"
import styled from 'styled-components'

interface StackProps {
  gap?: number
}

const Stack = styled.div<StackProps>`
  display: flex;
  gap: ${({ gap = 1 }) => gap * 4}px;
  align-items: center
`

Stack.displayName = "Stack"

Stack.defaultProps = {
  gap: 1
}

export default Stack
