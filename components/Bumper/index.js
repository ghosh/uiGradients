import React from 'react'
import styled from 'styled-components'

const BumperBase = styled.section`
  padding: 0 20px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px #eaeaea;

  > * {
    flex: 1;
  }
`

const Bumper = () => {
  return (
    <BumperBase>
      <div />
      <p>Hello</p>
      <div />
    </BumperBase>
  )
}

export default Bumper
