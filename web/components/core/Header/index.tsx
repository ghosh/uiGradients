import React from 'react'

import Stack from '../../lib/Stack'

import FB from './icons/facebook.svg'
import TW from './icons/twitter.svg'

import { Wrapper, Logo, Social, Github } from './header.styles'



const Header: React.FC = () => {
  return (
    <Wrapper as="header">
      <section>
        <Logo />
      </section>
      <section>

        <Stack gap={3}>
          <Social facebook={true}>
            <FB />
            <span>Share on Facebook</span>
          </Social>

          <Social twitter={true}>
            <TW />
            <span>Share on Twitter</span>
          </Social>

          <Github />
        </Stack>
      </section>
    </Wrapper>
  )
}

export default Header