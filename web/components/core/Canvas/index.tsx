import React from 'react'
import styled from 'styled-components'

import Container from '@/core/Container'

const Wrapper = styled(Container)`
  height: calc(100vh - 40px - 30px - 20px);
  border-radius: 8px;
  position: relative;
  overflow: hidden;
`

interface CanvasProps {
  children: React.ReactNode
}

const Canvas = ({ children }: CanvasProps) => {
  return (
    <Wrapper as="main">
      {children}
    </Wrapper>
  )
}

Canvas.displayName = 'Canvas'

export default Canvas