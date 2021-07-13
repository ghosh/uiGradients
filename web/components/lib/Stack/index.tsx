import React from "react";
import styled from 'styled-components'

interface StackProps {
  children: React.ReactNode,
  gap: number
}

const Stack = styled.div<StackProps>`
  display: flex;
  gap: ${p => p.gap * 4}px;
  align-items: center
`

Stack.displayName = "Stack";

Stack.defaultProps = {
  gap: 1
};

export default Stack;
