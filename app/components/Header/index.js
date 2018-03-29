import React, { PureComponent } from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import Button from '@/patterns/Button'
import Spacing from '@/patterns/Spacing'
import Divider from '@/patterns/Divider'
import Avatar from '@/patterns/Avatar'
import Burger from '@/patterns/Burger'
import { List, ListItem } from '@/patterns/List'

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
  justify-content: ${ props => (props.justify === 'end') ? 'flex-end' : 'flex-start' };
`

const A = styled.a`
  text-decoration: none;
  &:hover {
    color: #36c;
    border-bottom: dotted 1px #333;
  }
`

class Header extends PureComponent {
  constructor (props) {
    super(props)

    this.handleShareClick = this.handleShareClick.bind(this)
  }

  handleShareClick (media) {
    switch (media) {
      case 'Twitter':
        window.open(
          'http://twitter.com/share?url=https://uigradients.com&amp;text=Beautiful%20color%20gradients%20for%20designers%20and%20developers&amp;via=_ighosh',
          'twitter-share',
          'width=700,height=300'
        )
        break

      case 'Facebook':
        window.open(
          'http://www.facebook.com/sharer.php?u=https://uigradients.com',
          'facebook-share',
          'width=700,height=400'
        )
        break

      default:
        break
    }
  }

  render () {
    return (
      <HeaderBar>

        <FlexContainer>
          <Button social='twitter' label='Share on Twitter' onClick={ () => this.handleShareClick('Twitter') } />
          <Spacing right={ 5 } />
          <Button social='facebook' label='Share on Facebook' onClick={ () => this.handleShareClick('Facebook') } />
        </FlexContainer>

        <Link href='/'>
          <Logo height='28' />
        </Link>

        <FlexContainer justify='end'>
          <List>
            <ListItem>
              <Link href='/gradients' prefetch>
                <A>All gradients</A>
              </Link>
            </ListItem>
            <Spacing left={ 10 } />
            <ListItem>
              <Link href='/g/vanusa'>
                <A>Saved gradients</A>
              </Link>
            </ListItem>
          </List>
          <Spacing left={ 10 } />
          <Divider />
          <Spacing left={ 10 } />
          <Avatar />
          <Spacing left={ 10 } />
          <Burger />
        </FlexContainer>

      </HeaderBar>
    )
  }
}

export default Header
