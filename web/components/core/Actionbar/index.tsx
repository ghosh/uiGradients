import React from 'react'
import styled from 'styled-components'

import Container from '../Container'

import Controls from './Controls'
import Swatches from './Swatches'
import Actions from './Actions'

const Bar = styled(Container)`
  height: ${p => p.theme.heights.actionbar};
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Actionbar = () => {
  return (
    <Bar as="section">
      <Controls />
      <Swatches />
      <Actions />
    </Bar>
  )
}

export default Actionbar