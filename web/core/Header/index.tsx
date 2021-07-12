import React from 'react'
import styled from 'styled-components'

import Container from '../Container'

const Title = styled.h1`
  color: papayawhip;
  font-size: 50px;
`

export interface HeaderProps {

}

const Header: React.FC<HeaderProps> = () => {
  return (
    <Container>
      <Title>Hello</Title>
    </Container>
  )
}

export default Header