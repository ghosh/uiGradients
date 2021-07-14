import React from 'react'
import styled from 'styled-components'

import Stack from '@/lib/Stack'
import Text from '@/lib/Text'

import Plus from './icons/plus.svg'

const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-basis: 40%;
  justify-content: flex-end;
`

const Actions = () => {
  return (
    <Wrapper>
      <Stack gap={2}>
        <Plus />
        <Text variant="p">Add gradient</Text>
      </Stack>
    </Wrapper>
  )
}

Actions.displayName = 'Actions'

export default Actions