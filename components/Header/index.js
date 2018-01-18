import React from 'react'
import styled from 'styled-components'

import Button from '../../patterns/Button'
import Spacing from '../../patterns/Spacing'
import Divider from '../../patterns/Divider'
import Avatar from '../../patterns/Avatar'
import Burger from '../../patterns/Burger'
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

const FlexContainer = styled.section`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: ${props => (props.justify === 'end') ? 'flex-end' : 'flex-start'};
`

const Header = () => {
  return (
    <HeaderBar>

      <FlexContainer>
        <Button social='twitter' label='Share on Twitter' />
        <Spacing right={5} />
        <Button social='facebook' label='Share on Facebook' />
      </FlexContainer>

      <Logo height='28' />

      <FlexContainer justify='end'>
        <List>
          <ListItem>
            All gradients
          </ListItem>
          <Spacing left={10} />
          <ListItem>
            Saved gradients
          </ListItem>
        </List>
        <Spacing left={10} />
        <Divider />
        <Spacing left={10} />
        <Avatar />
        <Spacing left={10} />
        <Burger />
      </FlexContainer>

    </HeaderBar>
  )
}

export default Header
