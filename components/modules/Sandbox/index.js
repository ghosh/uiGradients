import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Box = styled.div`
  /* 90 = 48 + 40 + 1 + 1 */
  /* Box = Header + Action bar + 2 1px borders */
  height: calc(100vh - 90px);
  background-color: slategray;
  position: relative;
  overflow: hidden;
`

const Sandbox = ({ children }) => {
  return (
    <Box>
      {children}
    </Box>
  )
}

Sandbox.propTypes = {
  children: PropTypes.node
}

export default Sandbox
