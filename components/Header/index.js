import React from 'react'
import styled from 'styled-components'

import Button from '../../patterns/Button'
import Spacing from '../../patterns/Spacing'
import { List, ListItem } from '../../patterns/List'

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

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: ${props => (props.justify === 'end') ? 'flex-end' : 'flex-start'};
`

const Header = () => {
  return (
    <HeaderBar>

      <FlexContainer>
        <Spacing right={5}>
          <Button social='twitter' label='Share on Twitter' />
        </Spacing>
        <Button social='facebook' label='Share on Facebook' />
      </FlexContainer>

      <Logo />

      <FlexContainer justify='end'>
        <List>
          <Spacing right={5}>
            <ListItem>
              All gradients
            </ListItem>
          </Spacing>
          <ListItem>
            Saved gradients
          </ListItem>
        </List>
      </FlexContainer>

    </HeaderBar>
  )
}

export default Header
