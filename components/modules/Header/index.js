import React from 'react'
import {
  HeaderContainer
} from './header.style'

import { ReactComponent as Logo } from './icons/logo.svg'

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
    </HeaderContainer>
  )
}

export default Header
