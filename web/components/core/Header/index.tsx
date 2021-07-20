import React from 'react'
import Link from 'next/link'
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
  height: ${p => p.theme.heights.header};
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Header = () => {
  return (
    <Wrapper as="header">
      <Stack>
        <Burger />
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
      </Stack>

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

    </Wrapper >
  )
}

Header.displayName = 'Header'

export default React.memo(Header)