import React from 'react'
import styled from 'styled-components'


interface ContainerProps {
  children: React.ReactNode
}

const Container = styled.div<ContainerProps>`
  max-width: 1140px;
  margin: 0 auto;
`

Container.displayName = 'Container'

export default Container