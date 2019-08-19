import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 12px;
  color: #DDDDDD;
`

const Separator = styled.div`
  font-size: 24px;
  margin: 0;
`

const Divider = () => {
  return (
    <Wrapper>
      <Separator>
        |
      </Separator>
    </Wrapper>
  )
}

export default Divider
