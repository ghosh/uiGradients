import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;
`

const Home = () => (
  <div>
    <Button>Hello</Button>
  </div>
)

export default Home
