import React from 'react'
import styled from 'styled-components'

import Container from '@/core/Container'

const Wrapper = styled(Container)`
  height: ${p => p.theme.heights.display};
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