import React from 'react'
import styled from 'styled-components'

import Container from '../Container'

// import Logo from './icons/logo.svg'

const Title = styled.h1`
  color: papayawhip;
  font-size: 50px;
`

const Wrapper = styled(Container)`
  display: flex;
  justify-content: space-between;
`

export interface HeaderProps {

}

const Header: React.FC<HeaderProps> = () => {
  return (
    <Wrapper as="header">
      <section>
        <Title>Logo</Title>
      </section>
      <section>
        <Title>Socials</Title>
      </section>
    </Wrapper>
  )
}

export default Header