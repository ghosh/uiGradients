import React from 'react'
import styled from 'styled-components'

import Container from '../Container'

import Controls from './Controls'
import Swatches from './Swatches'
import Actions from './Actions'

const Bar = styled.div`
  display: flex;
`

const Actionbar = () => {
  return (
    <Container>
      <Bar>
        <Controls />
        <Swatches />
        <Actions />
      </Bar>
    </Container>
  )
}

export default Actionbar