import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
  /* 90 = 48 + 40 + 1 + 1 */
  /* Box = Header + Action bar + 2 1px borders */
  height: calc(100vh - 90px);
  background-color: salmon;
`

const Sandbox = () => {
  return (
    <Box />
  )
}

export default Sandbox
