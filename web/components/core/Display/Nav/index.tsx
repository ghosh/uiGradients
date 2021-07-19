import React, { useEffect } from 'react'
import styled, { css } from 'styled-components'

import useUiStore from '@/store/ui'
import useGradientStore from '@/store/gradient'
import useKeyPress from '@/hooks/useKeyPress'

import NextIcon from './icons/next.svg'
import PrevIcon from './icons/prev.svg'
import UpIcon from './icons/up.svg'

const List = styled.ul`
  width: 100%;
  height: 100%;
  position: absolute;
`

const ListContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

interface ItemProps {
  active?: boolean
}

const Item = styled.li<ItemProps>`
  position: absolute;
  height: 100%;
  width: 75vw;
  border-radius: 100%;
  cursor: pointer;
  max-width: ${p => p.theme.heights.display};
  background-color: transparent;

  &:hover {
    background-color: rgba(255, 255, 255, 5%);

    svg {
      color: rgba(255, 255, 255, 40%);
    }
  }

  &:active {
    background-color: rgba(255, 255, 255, 10%);
  }

  ${({ active }) => active && css`
    background-color: rgba(255, 255, 255, 10%);
  `}
`

const Left = styled(Item)`
  left: 0;
  transform: translate3d(-50%, 0, 0);
`

const Right = styled(Item)`
  right: 0;
  transform: translate3d(50%, 0, 0);
`

const Prev = styled(PrevIcon)`
  position: absolute;
  right: 40px;
  top: 50%;
  transform: translate3d(0 ,-25px, 0);
  width: 50px;
  height: 50px;
  color: rgba(255, 255, 255, 20%);
`

const Next = styled(NextIcon)`
  position: absolute;
  left: 40px;
  top: 50%;
  transform: translate3d(0 ,-25px, 0);
  width: 50px;
  height: 50px;
  color: rgba(255, 255, 255, 20%);
`

const Up = styled(UpIcon)`
  width: 32px;
  height: 32px;
  color: rgba(255, 255, 255, .4)
`

const UpContainer = styled.div`
  z-index: 2;
  position: absolute;
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate3d(-18px, 0, 0);
  left: 50%;
  bottom: 24px;
  transition: scale .2s cubic-bezier(.62,.28,.23,.99);
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: rgba(255, 255, 255, .1);
    svg {
      color: rgba(255, 255, 255, 1);
      transform: scale(1.1);
    }
  }

  &:active {
    background-color: rgba(255, 255, 255, .1);
    svg {
      color: rgba(255, 255, 255, 1);
      transform: scale(1);
    }
  }
`

const Nav = () => {
  const nextPress = useKeyPress("ArrowRight")
  const prevPress = useKeyPress("ArrowLeft")

  const showDisplay = useUiStore(s => s.showDisplay)
  const hideDisplay = useUiStore(s => s.hideDisplay)

  const nextGradient = useGradientStore(s => s.nextGradient)
  const prevGradient = useGradientStore(s => s.prevGradient)

  useEffect(() => {
    if (nextPress) showDisplay(), nextGradient()
    if (prevPress) prevGradient(), showDisplay()
  }, [nextPress, prevPress, nextGradient, prevGradient, showDisplay])

  return (
    <List>
      <ListContainer>
        <Left
          active={prevPress}
          onClick={prevGradient}
        >
          <Prev />
        </Left>
        <Right
          active={nextPress}
          onClick={nextGradient}
        >
          <Next />
        </Right>

        <UpContainer onClick={hideDisplay}>
          <Up />
        </UpContainer>
      </ListContainer>
    </List>
  )
}

Nav.displayName = 'Nav'

export default Nav