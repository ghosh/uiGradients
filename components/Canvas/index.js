import React from 'react'
import styled from 'styled-components'

const GradientCanvas = styled.div`
  width: 100%;
  height: calc(100vh - 50px);
  background-image: linear-gradient(90deg, #24C6DC 0%, #514A9D 100%);
`

const Canvas = () => {
  return (
    <GradientCanvas />
  )
}

export default Canvas
