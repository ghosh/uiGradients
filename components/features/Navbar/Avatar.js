import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 12px;
  cursor: pointer;

  &:hover {
    background-color: #E4EBF2;
  }
`

const Frame = styled.div`
  height: 26px;
  width: 26px;
  border-radius: 100%;
  background-color: salmon;
`

const Avatar = () => {
  return (
    <Wrapper>
      <Frame />
    </Wrapper>
  )
}

export default Avatar
