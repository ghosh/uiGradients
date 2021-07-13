import React from 'react'

import Text from '@/lib/Text'
import Stack from '@/lib/Stack'

import Container from '../Container'

const Actionbar = () => {
  return (
    <Container>
      <Stack gap={4}>
        <Text size='p'>All gradients</Text>
        <Text size='p'>My favourites (32)</Text>
      </Stack>
    </Container>
  )
}

export default Actionbar