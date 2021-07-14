import React from 'react'
import styled from 'styled-components'

import Stack from '@/lib/Stack'

const Swatch = styled.span`
  height: 16px;
  width: 16px;
  border-radius: 100%;
  background-color: #018472;
`

const Wrapper = styled.div`
    flex-grow: 0;
    display: flex;
    justify-content: center;
`

const Swatches = () => {
  return (
    <Wrapper>
      <Stack gap={2}>
        <Swatch />
        <Swatch />
        <Swatch />
      </Stack>
    </Wrapper>
  )
}

Swatches.displayName = 'Swatches'

export default Swatches