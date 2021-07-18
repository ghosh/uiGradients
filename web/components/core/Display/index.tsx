import React from 'react'
import styled from 'styled-components'

interface DisplayProps {
  gradient?: UIG.Gradient
}

const Wrapper = styled.div`
  top: 0;
  left: 20px;
  bottom: 0;
  background-color: #2d2d2d;
  position: absolute;
  right: 20px;
  padding: 0 20px;
  border-radius: 8px;
`

const Display = ({ gradient }: DisplayProps) => {
  return (
    <Wrapper>
      <h1>Gradient</h1>
    </Wrapper>
  )
}

Display.displayName = 'Display'

export default Display