import React, { useEffect } from 'react'
import styled, { css } from 'styled-components'

import useGradientStore from '@/store/gradient'
import useUiStore from '@/store/ui'

import useKeyPress from '@/hooks/useKeyPress'

import Wrapper from './Wrapper'
import Meta from './Meta'
import Nav from './Nav'

interface DisplayProps {
  gradient?: UIG.Gradient
}

const Display = ({ gradient }: DisplayProps) => {
  const escPress = useKeyPress("Escape")

  const isDisplayShowing = useUiStore(s => s.isDisplayShowing)
  const hideDisplay = useUiStore(s => s.hideDisplay)

  const activeGradient = useGradientStore(s => s.activeGradient)
  const nextGradient = useGradientStore(s => s.nextGradient)
  const prevGradient = useGradientStore(s => s.prevGradient)

  useEffect(() => {
    if (isDisplayShowing && escPress) hideDisplay()
  }, [escPress, hideDisplay, isDisplayShowing])

  return (
    <Wrapper visible={isDisplayShowing} gradient={activeGradient || gradient}>
      <Meta gradient={activeGradient} />
      <Nav />
    </Wrapper>
  )
}

Display.displayName = 'Display'

export default Display