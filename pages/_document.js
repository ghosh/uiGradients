import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, injectGlobal } from 'styled-components'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App { ...props } />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render () {
    return (
      <html lang='en'>
        <Head>
          <title>My page</title>
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

// Global style
// eslint-disable-next-line
injectGlobal`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    border: 0;
    border-collapse: collapse;
    border-spacing: 0;
    box-sizing: border-box;
    outline: none;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    list-style: none;
    quotes: none;
  }
  footer, header, menu, nav, section, small {
    display: block;
  }
  body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto ,sans-serif; }
`
