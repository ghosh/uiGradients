import React from 'react'
import styled from 'styled-components'

import useGradientStore from '@/store/gradient'
import useUiStore from '@/store/ui'

import Stack from '@/lib/Stack'

interface SwatchProps {
  color: string
}

const Swatch = styled.span<SwatchProps>`
  height: 16px;
  width: 16px;
  border-radius: 100%;
  background-color: ${p => p.color};
`

const Wrapper = styled.div`
  flex-grow: 0;
  display: flex;
  justify-content: center;
`

const Swatches = () => {
  const isDisplayShowing = useUiStore(s => s.isDisplayShowing)
  const activeGradient = useGradientStore(s => s.activeGradient)

  return (
    <Wrapper>
      {isDisplayShowing &&
        <Stack gap={2}>
          {activeGradient?.colors.map((c, i) => (
            <Swatch key={i} color={c} />
          ))}
        </Stack>
      }
    </Wrapper>
  )
}

Swatches.displayName = 'Swatches'

export default Swatches