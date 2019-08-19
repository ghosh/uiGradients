import React from 'react'
import styled from 'styled-components'

import { ReactComponent as MenuIcon } from './icons/menu.svg'

const Wrapper = styled.div`
  height: 40px;
  padding: 0 12px;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #E4EBF2;
  }

  svg {
    stroke: #373737;
  }
`

const Burger = () => {
  return (
    <Wrapper>
      <MenuIcon />
    </Wrapper>
  )
}

export default Burger
