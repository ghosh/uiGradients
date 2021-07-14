import React from 'react'
import styled from 'styled-components'

import Stack from '@/lib/Stack'
import Burger from '@/lib/Burger'
import Spacer from '@/lib/Spacer'

import Social from './Social'

import LG from './icons/logo.svg'
import FB from './icons/facebook.svg'
import TW from './icons/twitter.svg'
import GH from './icons/github.svg'

import Container from '../Container'

const Logo = styled(LG)`
  color: black;
  width: 114px;
  height: 26px;
`

const Github = styled(GH)`
  fill: #2d2d2d;
  width: 30px;
  height: 30px;
  cursor: pointer;

  &:hover {
    fill: black;
  }
`

const Wrapper = styled(Container)`
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Header = () => {
  return (
    <Spacer my={4} as="header">
      <Wrapper>
        <section>
          <Stack>
            <Burger />
            <Logo />
          </Stack>
        </section>
        <section>

          <Stack gap={3}>
            <Social media="FB">
              <FB />
              <span>Share on Facebook</span>
            </Social>

            <Social media="TW">
              <TW />
              <span>Share on Twitter</span>
            </Social>

            <Github />
          </Stack>
        </section>
      </Wrapper>
    </Spacer>
  )
}

Header.displayName = 'Header'

export default Header