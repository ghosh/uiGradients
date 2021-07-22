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
  /* max-width: 300px; */
  z-index: 2;
  height: 100px;
`

const Icon = styled.span`
  width: 32px;
  height: 32px;
  cursor: pointer;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  will-change: transform;
  transition: scale .2s cubic-bezier(.62,.28,.23,.99);

  background: rgba( 255, 255, 255, 0.25 );
  box-shadow: 0 2px 32px 0 rgba( 0, 0, 0, 0.2 );
  /* backdrop-filter: blur( 4px ); */
  /* -webkit-backdrop-filter: blur( 4px ); */
  border-radius: 8px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );

  &:hover {
    transform: scale(1.1);
    background-color: rgba(255, 255, 255, 0.10);
  }

  &:active {
    transform: scale(1);
    background-color: rgba(255, 255, 255, 0.45);
  }
`

const Meta = ({ gradient }: MetaProps) => {
  return (
    <Wrapper>
      <Name>{gradient?.name}</Name>
      <Spacer my={3} />
      <Stack gap={5} align="center">
        <Icon>
          <Heart style={{ width: '18px' }} />
        </Icon>
        <Icon>
          <Rotate style={{ width: '18px' }} />
        </Icon>
        <Icon>
          <Code style={{ width: '18px' }} />
        </Icon>
        <Icon>
          <Download style={{ width: '18px' }} />
        </Icon>
      </Stack>
    </Wrapper>
  )
}

Meta.displayName = 'Meta'

export default Meta