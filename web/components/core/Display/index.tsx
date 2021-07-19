import React, { useEffect } from 'react'
import styled, { css } from 'styled-components'

import useGradientStore from '@/store/gradient'
import useUiStore from '@/store/ui'

import useKeyPress from '@/hooks/useKeyPress'

interface DisplayProps {
  gradient?: UIG.Gradient
}

interface WrapperProps {
  visible: boolean,
  gradient?: null | UIG.Gradient
}

const Wrapper = styled.div<WrapperProps>`
  top: 0;
  left: 20px;
  bottom: 0;
  background-color: #2d2d2d;
  position: absolute;
  right: 20px;
  padding: 0 20px;
  border-radius: 8px;

  backface-visibility: hidden;
  transition: all .25s cubic-bezier(.62,.28,.23,.99);
  will-change: transform;
  transform: translate3d(0,-100%,0);

  ${({ gradient }) => gradient && css`
    background: linear-gradient(
      to right,
      ${[gradient.colors].join(', ')}
    );
  `}

  ${({ visible }) => visible === true && css`
    transform: translate3d(0,0,0);
  `}
`

const Display = ({ gradient }: DisplayProps) => {

  const nextPress = useKeyPress("ArrowRight")
  const prevPress = useKeyPress("ArrowLeft")

  const isDisplayShowing = useUiStore(s => s.isDisplayShowing)
  const hideDisplay = useUiStore(s => s.hideDisplay)
  const showDisplay = useUiStore(s => s.showDisplay)

  const activeGradient = useGradientStore(s => s.activeGradient)
  const nextGradient = useGradientStore(s => s.nextGradient)
  const prevGradient = useGradientStore(s => s.prevGradient)

  useEffect(() => {
    showDisplay()
    nextPress && nextGradient()
    prevPress && prevGradient()
  }, [nextPress, prevPress, nextGradient, prevGradient, showDisplay])

  return (
    <Wrapper visible={isDisplayShowing} gradient={activeGradient || gradient}>
      <h1 onClick={hideDisplay}>
        {activeGradient?.name}
      </h1>
      <p onClick={prevGradient}>Prev</p>
      <p onClick={nextGradient}>Next</p>
    </Wrapper>
  )
}

Display.displayName = 'Display'

export default Display