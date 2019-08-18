import React from 'react'
import styled from 'styled-components'

import Spacer from '@lib/Spacer'

import { ReactComponent as FBLogo } from './icons/facebook.svg'
import { ReactComponent as TWLogo } from './icons/twitter.svg'

const Button = styled.button`
  color: #fff;
  padding: 0 12px;
  height: 30px;
  width: 160px;
  font-size: 12px;
  font-weight: 400;
  cursor: pointer;
  line-height: 1.125rem;
  margin: 0;
  border: 1px solid transparent;
  vertical-align: middle;
  -webkit-appearance: none;
  background-color: transparent;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Facebook = styled(Button)`
  background-color: #415993
`

const Twitter = styled(Button)`
  background-color: #4ba0eb
`

const FacebookButton = () => {
  return (
    <Facebook>
      <FBLogo /> <Spacer mr={2}/> Share on Facebook
    </Facebook>
  )
}

const TwitterButton = () => {
  return (
    <Twitter>
      <TWLogo /> <Spacer mr={2} /> Share on Twitter
    </Twitter>
  )
}

export {
  FacebookButton,
  TwitterButton
}
