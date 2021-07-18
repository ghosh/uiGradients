import React from 'react'
import styled from 'styled-components'

import Palette from './Palette'

interface GridProps {
  gradients: UIG.Gradient[]
}

const Wrapper = styled.div`
  overflow-y: scroll;
  height: 100%;
`

const List = styled.ul`
  background-color: #E7EBEF;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 16px;
  padding: 16px;
`

const Grid = ({ gradients }: GridProps) => {
  return (
    <Wrapper>
      <List>
        {gradients.map((gradient) => (
          <Palette
            gradient={gradient}
            key={gradient.slug}
          />
        ))}
      </List>
    </Wrapper>
  )
}

Grid.displayName = 'Grid'

export default Grid