import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 140px;
  width: 260px;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  flex-basis: 100%;

  @media (${ props => props.theme.breakpoints.sm }) {
    flex-basis: 50%;
  }

  @media (${ props => props.theme.breakpoints.md }) {
    flex-basis: 33.333%;
  }

 @media (${ props => props.theme.breakpoints.lg }) {
    flex-basis: 25%;
  }

 @media (${ props => props.theme.breakpoints.xxl }) {
    flex-basis: 20%;
    height: 180px;
  }
`

const Palette = styled.div`
  background-color: slateblue;
  position: absolute;
  top: 10px;
  left: 10px;
  bottom: 10px;
  right: 10px;
  border-radius: 4px;
`

const Gradient = () => {
  return (
    <Wrapper>
      <Palette>
        <p>Gradient</p>
      </Palette>
    </Wrapper>
  )
}

export default Gradient
