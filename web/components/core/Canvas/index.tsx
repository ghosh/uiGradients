import React from 'react'
import styled from 'styled-components'

import Container from '@/core/Container'

const Wrapper = styled(Container)`
  height: calc(100vh - 40px - 30px - 20px)
`

const Viewer = styled.div`
  height: 100%;
  background-color: #1a1a1a;
  border-radius: 8px;
  overflow-x: scroll;
`

interface CanvasProps {
  children: React.ReactNode
}

const Canvas = ({ children }: CanvasProps) => {
  return (
    <Wrapper as="main">
      <Viewer>
        {children}
      </Viewer>
    </Wrapper>
  )
}

Canvas.displayName = 'Canvas'

export default Canvas