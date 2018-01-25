import React from 'react'
import styled from 'styled-components'

import Spacing from '../../patterns/Spacing'
import Arrow from './icons/arrow.svg'

const SwatchesContainer = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Swatch = styled.li`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 3px 6px;
  border-radius: 3px;
  transition: background 0.2s ease-in-out;

  &:hover {
    background-color: #eceaea;
  }
`

const SwatchPallete = styled.span`
  display: inline-block;
  width: 14px;
  height: 14px;
  background-color: #32c4da;
  margin-right: 5px;
`

const SwatchColor = styled.span`
  font-family: "SF Mono Regular", "Source Code Pro", Consolas, monospace;
  font-size: 15px;
`

const ArrowContainer = styled.span`
  margin-top: 1px;
`

const Swatches = () => {
  return (
    <SwatchesContainer>

      <Swatch>
        <SwatchPallete />
        <SwatchColor>
          #eaeaea
        </SwatchColor>
      </Swatch>

      <Spacing left={3} />

      <ArrowContainer>
        <Arrow height='11' width='14' />
      </ArrowContainer>

      <Spacing left={3} />

      <Swatch>
        <SwatchPallete />
        <SwatchColor>
          #eaeaea
        </SwatchColor>
      </Swatch>

    </SwatchesContainer>
  )
}

export default Swatches
