import React from 'react'
import styled, { css } from 'styled-components'

import Container from '../Container'

import Stack from '../../lib/Stack'

import RawLogo from './icons/logo.svg'
import FB from './icons/facebook.svg'
import TW from './icons/twitter.svg'

const Logo = styled(RawLogo)`
  color: black;
  width: 114px;
  height: 26px;
`

const Wrapper = styled(Container)`
  display: flex;
  justify-content: space-between;
`

interface SocialProps {
  facebook?: boolean,
  twitter?: boolean,
}

const Social = styled.div<SocialProps>`
  border: 0;
  border-radius: 4px;
  color: #fff;
  font-weight: 600;
  padding: 0 8px 0 8px;
  background-color: #eaeaea;
  text-decoration: none;
  height: 30px;
  line-height: 30px;
  font-size: 13px;
  width: 140px;
  outline: 0;
  transition: background-color 0.2s ease-in-out;
  fill: white;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 16px;
    height: 16px;
    margin-right: 4px;
  }

  ${props => props.facebook && css`
    background-color: #3b5998;
    &:hover {
      background-color: darken(#3b5998, 5%);
    }
  `}

  ${props => props.twitter && css`
    background-color: #1da1f2;
    &:hover {
      background-color: darken(#1da1f2, 5%);
    }
  `}
`

const Header: React.FC = () => {
  return (
    <Wrapper as="header">
      <section>
        <Logo />
      </section>
      <section>

        <Stack gap={2}>
          <Social facebook={true}>
            <FB />
            <span>Facebook</span>
          </Social>

          <Social twitter={true}>
            <TW />
            <span>Twitter</span>
          </Social>
        </Stack>
      </section>
    </Wrapper>
  )
}

export default Header