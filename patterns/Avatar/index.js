import React from 'react'
import styled from 'styled-components'

const BaseAvatar = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 4px;
  background-color: #eaeaea;
`

const Avatar = (props) => {
  return (
    <BaseAvatar src='/static/avatar.jpg' />
  )
}

export default Avatar
