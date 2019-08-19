import React from 'react'
import styled from 'styled-components'

import Spacer from '@lib/Spacer'

import { ReactComponent as AddIcon } from './icons/add.svg'
import { ReactComponent as CodeIcon } from './icons/code.svg'
import { ReactComponent as RotateIcon } from './icons/rotate.svg'
import { ReactComponent as DownloadIcon } from './icons/download.svg'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  cursor: pointer;

  &:hover {
    background-color: #3366cc;

    svg { stroke: #ffffff }
  }

  svg {
    stroke: #323a40;
  }
`

// TODO: Make each icon and background a different color
const ActionItems = () => {
  return (
    <>
    <Wrapper>
      <AddIcon mr={1}/>
    </Wrapper>
      <Spacer />
    <Wrapper>
      <CodeIcon/>
    </Wrapper>
      <Spacer mr={1} />
    <Wrapper>
      <RotateIcon />
    </Wrapper>
      <Spacer mr={1} />
    <Wrapper>
      <DownloadIcon />
    </Wrapper>
    </>
  )
}

export default ActionItems
