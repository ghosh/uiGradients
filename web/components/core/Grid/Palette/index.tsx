import React from 'react'
import styled from 'styled-components'

interface PaletteProps {
  gradient: UIG.Gradient
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
  height: 200px;
  border-radius: 4px;;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    p {
      background-color: rgba(255, 255, 255, .2);
    }
  }
`

const Label = styled.p`
  background-color: rgba(255, 255, 255, .1);
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

const Palette = ({ gradient }: PaletteProps) => {

  // TODO: Move out to global scope
  const handleGradientClick = (
    e: React.MouseEvent<HTMLElement>,
    g: UIG.Gradient
  ) => {
    // If trying to open in new tab, allow it
    if (
      e.ctrlKey
      || e.shiftKey
      || e.metaKey
      || (e.button && e.button == 1)
    ) { return }

    e.preventDefault()
    console.log('Handle inline')

    // TODO: Test for edge cases
    history.pushState('', g.name, `/${g.slug}`)
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