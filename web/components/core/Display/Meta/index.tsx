import React from 'react'
import styled from 'styled-components'

import Text from '@/lib/Text'
import Spacer from '@/lib/Spacer'
import Stack from '@/lib/Stack'

import Heart from './icons/heart.svg'
import Rotate from './icons/rotate.svg'
import Code from './icons/code.svg'
import Download from './icons/download.svg'

interface MetaProps {
  gradient: null | UIG.Gradient
}

const Name = styled(Text)`
  color: white;
  font-size: 20px;
  user-select: none;
  margin-top: 24px;
  text-align: center;
  font-weight: 300;
`

const Wrapper = styled.div`
  max-width: 300px;
`

const Meta = ({ gradient }: MetaProps) => {
  return (
    <Wrapper>
      <Name>{gradient?.name}</Name>
      <Spacer my={4} />
      <Stack gap={3} align="center">
        <Heart style={{ width: '20px' }} />
        <Rotate style={{ width: '20px' }} />
        <Code style={{ width: '20px' }} />
        <Download style={{ width: '20px' }} />
      </Stack>
    </Wrapper>
  )
}

Meta.displayName = 'Meta'

export default Meta