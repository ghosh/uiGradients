import React from 'react'
import styled from 'styled-components'

import useGradientStore from '@/store/gradient'
import useUiStore from '@/store/ui'

interface PaletteProps {
  gradient: UIG.Gradient,
  index: number
}

interface BackgroundProps {
  colors: string[]
}

const Background = styled.li.attrs<BackgroundProps>(
  // More efficient for large number of elements
  ({ colors }) => ({
    style: {
      background: `linear-gradient(to right, ${colors.join(', ')})`,
    },
  })
) <BackgroundProps>`
  height: 160px;
  border-radius: 4px;;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform 0.1s ease-in-out;
  backface-visibility: hidden;

  &:hover {
    transform: scale(1.02);

    p {
      background-color: rgba(255, 255, 255, .2);
    }
  }

  &:active {
    transform: scale(1);
  }
`

const Label = styled.p`
  /* background-color: rgba(255, 255, 255, .1); */
  padding: 8px;
  border-radius: 4px;;
  font-family: Source Code Pro,monospace;
  font-size: 15px;
  color: white;
`

const Link = styled.a`
  width: 100%;
  height: 100%;
  text-decoration: none;
`

const Palette = ({ gradient, index }: PaletteProps) => {
  const setActiveGradient = useGradientStore(s => s.setActiveGradient)
  const setActiveIndex = useGradientStore(s => s.setActiveIndex)
  const toggleDisplay = useUiStore(s => s.toggleDisplay)

  const handleGradientClick = (
    e: React.MouseEvent<HTMLElement>,
    gradient: UIG.Gradient
  ) => {
    // If trying to open in new tab, allow it
    if (
      e.ctrlKey
      || e.shiftKey
      || e.metaKey
      || (e.button && e.button == 1)
    ) { return }

    e.preventDefault()

    setActiveGradient(gradient)
    setActiveIndex(index)

    history.pushState('', gradient.name, `/${gradient.slug}`)
    toggleDisplay()
  }

  return (
    <Link
      href={`/${gradient.slug}`}
      onClick={(e) => handleGradientClick(e, gradient)}
    >
      <Background colors={gradient.colors}>
        <Label>{gradient.name}</Label>
      </Background>
    </Link>
  )
}

Palette.displayName = 'Palette'

export default Palette