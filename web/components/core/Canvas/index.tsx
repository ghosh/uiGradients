import React from 'react'
import styled from 'styled-components'

import Container from '@/core/Container'

const Viewer = styled.div`
  height: 100vh;
  background-color: #1a1a1a;
  border-radius: 4px;
  overflow-x: scroll;
`

const Canvas = () => {
  return (
    <Container as="main">
      <Viewer>
        <h1>Canvas here</h1>
      </Viewer>
    </Container>
  )
}

Canvas.displayName = 'Canvas'

export default Canvas