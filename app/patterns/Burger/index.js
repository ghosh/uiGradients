import React from 'react'
import styled from 'styled-components'

const BaseBurger = styled.div`
  position: relative;
  margin-top: 6px;
  margin-bottom: 6px;

  &, &:before, &:after {
    display: block;
    width: 22px;
    height: 2px;
    background-color: #373737;
    transition-property: background-color, transform;
    transition-duration: .3s;
  }

  &:before, &:after {
    position: absolute;
    content: "";
  }

  &:before {
    top: -6px;
  }

  &:after {
    top: 6px;
  }
`

const Burger = (props) => {
  return (
    <BaseBurger />
  )
}

export default Burger
