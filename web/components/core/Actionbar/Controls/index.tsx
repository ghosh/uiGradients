import React from 'react'
import styled from 'styled-components'

import Text from '@/lib/Text'
import Stack from '@/lib/Stack'
import Divider from '@/lib/Divider'

import Display from './icons/display.svg'
import Grid from './icons/grid.svg'

const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-start;
  flex-basis: 40%;
`

const Controls = () => {
  return (
    <Wrapper>
      <Stack gap={3}>
        <Display />
        <Grid />
      </Stack>
      <Divider mx={5} />
      <Stack gap={3}>
        <Text variant='p'>All gradients</Text>
        <Text variant='p'>My favourites (32)</Text>
      </Stack>
    </Wrapper>
  )
}

Controls.displayName = 'Controls'

export default Controls