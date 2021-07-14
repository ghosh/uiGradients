import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-basis: 40%;
  justify-content: flex-end;
`

const Actions = () => {
  return (
    <Wrapper>
      <p>Actions here</p>
    </Wrapper>
  )
}

Actions.displayName = 'Actions'

export default Actions