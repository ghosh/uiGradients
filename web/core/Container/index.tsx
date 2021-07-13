import React from 'react'
import styled from 'styled-components'


interface ContainerProps {
  children: React.ReactNode
}

const Container = styled.div<ContainerProps>`
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;
`

Container.displayName = 'Container'

export default Container