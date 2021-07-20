import React from 'react'
import styled from 'styled-components'

import Palette from './Palette'

interface GridProps {
  gradients: UIG.Gradient[]
}

const Wrapper = styled.div`
  overflow-y: scroll;
  height: 100%;
  border-radius: 8px;
`

const List = styled.ul`
  background-color: #E7EBEF;
  background-color: #c1cfdc;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 16px;
  padding: 16px;
`

const Grid = ({ gradients }: GridProps) => {
  return (
    <Wrapper>
      <List>
        {gradients.map((gradient, index) => (
          <Palette
            gradient={gradient}
            index={index}
            key={gradient.slug}
          />
        ))}
      </List>
    </Wrapper>
  )
}

Grid.displayName = 'Grid'

export default Grid