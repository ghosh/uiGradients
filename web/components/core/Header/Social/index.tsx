import React from 'react'
import styled, { css } from 'styled-components'

interface SocialProps {
  media: 'FB' | 'TW'
}

const Social = styled.button<SocialProps>`
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

  ${({ media }) => media === 'FB' && css`
    background-color: #3b5998;
    &:hover {
      background-color: #2c4272;
    }
  `}

  ${({ media }) => media === 'TW' && css`
    background-color: #1da1f2;
    &:hover {
      background-color: #0c81ca;
    }
  `}
`

export default Social