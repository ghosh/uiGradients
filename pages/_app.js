import App from 'next/app'
import React from 'react'

import AppProvider from '@providers'

export default class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <>
        <AppProvider>
          <Component {...pageProps} />
        </AppProvider>
      </>
    )
  }
}
