import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Spacer from '@lib/Spacer'

import {
  FacebookButton,
  TwitterButton,
  GithubIcon
} from '@features/Shares'

import { ReactComponent as Logo } from './icons/logo.svg'

const Header = () => {
  const HeaderContainer = styled.header`
  padding: 0 20px;
  display: flex;
  align-items: center;
  height: 48px;
  border-bottom: solid 1px #DDDDDD;

  justify-content: space-around;

  /* left align md breakpoint onwards */
  @media (${ props => props.theme.breakpoints.md }) {
    justify-content: space-between;
  }
`

  const LogoContainer = styled.div``

  const SocialContainer = styled.div`
    display: none;

    /* Show shares md breakpoint onwards */
    @media (${ props => props.theme.breakpoints.md }) {
      display: flex;
    }
  `

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
        <GithubIcon />
      </SocialContainer>
    </HeaderContainer>
  )
}

Header.propTypes = {
  theme: PropTypes.object
}

export default React.memo(Header)
