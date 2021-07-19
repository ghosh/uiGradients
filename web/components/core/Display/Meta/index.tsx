import React from 'react'
import styled from 'styled-components'

import Text from '@/lib/Text'

interface MetaProps {
  gradient: null | UIG.Gradient
}

const Name = styled(Text)`
  color: white;
  font-size: 18px;
  user-select: none;
  margin-top: 24px;
`

const Meta = ({ gradient }: MetaProps) => {
  return (
    <Name>{gradient?.name}</Name>
  )
}

Meta.displayName = 'Meta'

export default Meta