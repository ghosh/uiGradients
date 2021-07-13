import styled, { css } from 'styled-components'

import Container from '../Container'

import RawLogo from './icons/logo.svg'
import GH from './icons/github.svg'

export const Logo = styled(RawLogo)`
  color: black;
  width: 114px;
  height: 26px;
`

export const Github = styled(GH)`
  fill: #2d2d2d;
  width: 30px;
  height: 30px;
  cursor: pointer;

  &:hover {
    fill: black;
  }
`

export const Wrapper = styled(Container)`
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

interface SocialProps {
  facebook?: boolean,
  twitter?: boolean,
}

export const Social = styled.button<SocialProps>`
  border: 0;
  border-radius: 4px;
  color: #fff;
  font-weight: 600;
  background-color: #eaeaea;
  text-decoration: none;
  height: 30px;
  line-height: 30px;
  font-size: 12px;
  width: 160px;
  padding: 0 12px;
  outline: 0;
  transition: background-color 0.1s ease-in-out;
  fill: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }

  ${props => props.facebook && css`
    background-color: #3b5998;
    &:hover {
      background-color: #2c4272;
    }
  `}

  ${props => props.twitter && css`
    background-color: #1da1f2;
    &:hover {
      background-color: #0c81ca;
    }
  `}
`