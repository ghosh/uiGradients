import React from 'react'
import styled from 'styled-components'

import Palette from './Palette'

interface GridProps {
  gradients: UIG.Gradient[]
}

const List = styled.ul`
  background-color: #E7EBEF;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 16px;
  padding: 16px;
`

const Grid = ({ gradients }: GridProps) => {
  return (
    <List>
      {gradients.map((gradient) => (
        <Palette
          gradient={gradient}
          key={gradient.slug}
        />
        // <Item key={gradient.slug}>
        //   <a href={`/${gradient.slug}`} onClick={(e) => handleGradientClick(e, gradient)}>
        //     {gradient.name}
        //   </a>
        // </Item>
      ))}
    </List>
  )
}

Grid.displayName = 'Grid'

export default Grid