import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const BaseLayout = styled.div`
  display:grid;
  grid-template-rows: 54px 34px auto 24px;
  height: 100vh;
`

const BaseHeader = styled.header`
  height: 100%;
`

const BaseControl = styled.div`
  height: 100%;
`

const BaseCanvas = styled.main`
  height: 100%;
`

const BaseFooter = styled.footer`
  height: 100%;
`

const Layout = ({ children }) => {
  return <BaseLayout>{children}</BaseLayout>
}

const Header = ({ children }) => <BaseHeader> {children} </BaseHeader>
const Control = ({ children }) => <BaseControl> {children} </BaseControl>
const Canvas = ({ children }) => <BaseCanvas> {children} </BaseCanvas>
const Footer = ({ children }) => <BaseFooter> {children} </BaseFooter>

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

Header.propTypes = {
  children: PropTypes.node.isRequired
}

Control.propTypes = {
  children: PropTypes.node.isRequired
}

Canvas.propTypes = {
  children: PropTypes.node.isRequired
}

Footer.propTypes = {
  children: PropTypes.node.isRequired
}

Layout.Header = Header
Layout.Control = Control
Layout.Canvas = Canvas
Layout.Footer = Footer

export default Layout
