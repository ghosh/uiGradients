import React from 'react'
import styled from 'styled-components'

const LinkItem = styled.a`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 12px;
  cursor: pointer;
  color: initial;
  font-size: 14px;

  &:hover {
    background-color: #E4EBF2;
  }
`

const NavItems = () => {
  return (
    <>
      <LinkItem>All gradients</LinkItem>
      <LinkItem>Fav gradients</LinkItem>
    </>
  )
}

export default NavItems
