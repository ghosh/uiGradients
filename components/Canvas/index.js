import React from 'react'
import styled from 'styled-components'

import LeftChev from './icons/leftchev.svg'
import RightChev from './icons/rightchev.svg'

const GradientCanvas = styled.div`
  width: 100%;
  height: calc(100vh - 90px);
  background-image: linear-gradient(90deg, #24C6DC 0%, #514A9D 100%);
  position: relative;
`

const GradientNav = styled.ul`
  margin: 0;
  padding: 0;
  position: absolute;
  top: 50%;
  transform: translate3d(0, -50%, 0);
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const GradientNavItem = styled.li`
  height: 100px;
  width: 60px;
  background-color: rgba(255,255,255,.1);
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .2s ease-in-out;

  svg {
    transition: all .2s ease-in-out;
  }

  &:hover {
    background-color: rgba(255,255,255,.2);
  }

  &:hover svg {
    transform: scale(1.3)
  }
`

const Canvas = () => {
  return (
    <GradientCanvas>

      <GradientNav>

        <GradientNavItem>
          <LeftChev width='14' height='18' fill='#fff' />
        </GradientNavItem>

        <GradientNavItem>
          <RightChev width='14' height='18' fill='#fff' />
        </GradientNavItem>

      </GradientNav>

    </GradientCanvas>
  )
}

export default Canvas
