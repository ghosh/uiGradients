import React from 'react'

import Spacer from '@lib/Spacer'

import {
  FacebookButton,
  TwitterButton
} from '@features/Shares'

import { ReactComponent as Logo } from './icons/logo.svg'
import { ReactComponent as GithubLogo } from './icons/github.svg'

import {
  HeaderContainer,
  LogoContainer,
  SocialContainer
} from './header.style'

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <SocialContainer>
        <FacebookButton />
        <Spacer mr={3} />
        <TwitterButton />
        <Spacer mr={3} />
        <GithubLogo viewBox="0 0 26 26"/>
      </SocialContainer>
    </HeaderContainer>
  )
}

export default React.memo(Header)
