import React from 'react'
import styled from 'styled-components'

import Button from '../../patterns/Button'
import Spacing from '../../patterns/Spacing'

import Logo from './icons/logo.svg'

const HeaderBar = styled.header`
  padding: 0 20px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px #eaeaea;

  > * {
    flex: 1;
  }
`

const ShareContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`

const Header = () => {
  return (
    <HeaderBar>

      <ShareContainer>
        <Spacing right={5}>
          <Button social='twitter' label='Share on Twitter' />
        </Spacing>
        <Button social='facebook' label='Share on Facebook' />
      </ShareContainer>

      <Logo />

      <div>
        <p>all gradients</p>
        <p>saved gradients</p>
      </div>

    </HeaderBar>
  )
}

export default Header
