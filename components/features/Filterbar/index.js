import React from 'react'
import styled from 'styled-components'

const Bar = styled.div`
  display: flex;
  align-items: center;
`

const Byline = styled.p`
  color: #373737;
  font-size: 14px;
  margin-right: 12px;
`

const Swatch = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  margin: 0 4px;
  background-color: ${ props => props.color || '#eaeaea' };
  cursor: pointer;
`

const Filterbar = () => {
  return (
    <Bar>
      <Byline>
        Filter by colour:
      </Byline>
      <Swatch color="#CB2D3E" />
      <Swatch color="#D76B26" />
      <Swatch color="#FFD200" />
      <Swatch color="#169957" />
      <Swatch color="#1BB5E0" />
      <Swatch color="#145799" />
      <Swatch color="#EAEAEA" />
      <Swatch color="#000000" />
    </Bar>
  )
}

export default Filterbar
