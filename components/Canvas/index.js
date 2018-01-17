import React from 'react'
import styled from 'styled-components'

const GradientCanvas = styled.div`
  width: 100%;
  height: calc(100vh - 50px);
  background-color: papayawhip;
`

const Canvas = () => {
  return (
    <GradientCanvas />
  )
}

export default Canvas
