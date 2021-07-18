import React from 'react'
import styled from 'styled-components'

import Text from '@/lib/Text'
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
      <Text variant="sm">This is the footer k?</Text>
    </Wrapper>
  )
}

Footer.displayName = 'Footer'

export default Footer