import React, { Component } from 'react'
import styled, { css } from 'styled-components'

const Swatches = styled.ul`
  display: flex;
  align-items: center;
  font-size: 15px;
`

const Swatch = styled.li`
  cursor: pointer;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background-color: aqua;
  margin-right: 8px;

  background-color: ${ props => props.color };

  ${ props => props.selected && css`
    border: solid 4px #fff;
  ` }
`

const Label = styled.li`
  color: #fff;
  margin-right: 8px;
  -webkit-font-smoothing: antialiased;
`

class Filter extends Component {
  render () {
    return (
      <Swatches>
        <Label>Filter by color:</Label>
        <Swatch color='#cb2d3e' />
        <Swatch color='#d76b26' />
        <Swatch color='#fed130' />
        <Swatch color='#219859' selected />
        <Swatch color='#2bb6de' />

        <Swatch color='#1b5897' />
        <Swatch color='#ed3dd7' />
        <Swatch color='#eaeaea' />
        <Swatch color='#c0c0cb' />
        <Swatch color='#333333' />
      </Swatches>
    )
  }
}

export default Filter
