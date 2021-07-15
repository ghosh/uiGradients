import React from 'react'
import styled from 'styled-components'

import Container from '@/core/Container'

const Wrapper = styled(Container)`
  height: ${p => p.theme.heights.footer};
  display: flex;
  justify-content: center;
  align-items: center;
`

const Footer = () => {
  return (
    <Wrapper as='footer'>
      <p>This is the footer k?</p>
    </Wrapper>
  )
}

Footer.displayName = 'Footer'

export default Footer