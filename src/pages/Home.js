import React from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'

const Button = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;
`

const Home = () => (
  <Layout>
    <Layout.Header>Header</Layout.Header>
    <Layout.Control>Controls</Layout.Control>
    <Layout.Canvas>Canvas</Layout.Canvas>
    <Layout.Footer>Footer</Layout.Footer>
  </Layout>
)

export default Home
