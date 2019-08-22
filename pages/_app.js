import App from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../GlobalStyle'
import Theme from '../theme'

export default class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        <Component {...pageProps} />
      </ThemeProvider>
      </>
    )
  }
}
