import React from 'react'
import NextHead from 'next/head'
import { string } from 'prop-types'

const defaultTitle = 'uiGradients - Beautiful colored gradients'
const defaultDescription = 'uiGradients is a handpicked collection of beautiful gradients for designers and developers'
const defaultOGURL = 'http://uigradients.com'
const defaultOGImage = '/static/images/uigradients.jpg'

const Head = (props) => (
  <NextHead>

    <meta charSet='UTF-8' />
    <title>{props.title || ''}</title>
    <meta name='description' content={ props.description || defaultDescription } />

    <meta property='og:type' content='website' />
    <meta property='og:site_name' content='uiGradients' />
    <meta property='og:url' content={ props.url || defaultOGURL } />
    <meta property='og:title' content={ props.title || defaultTitle } />
    <meta property='og:description' content={ props.description || defaultDescription } />
    <meta property='og:image' content={ props.image || defaultOGImage } />
    <meta property='og:image:width' content='1200' />
    <meta property='og:image:height' content='630' />

    <meta name='twitter:site' content={ props.url || defaultOGURL } />
    <meta name='twitter:card' content='summary_large_image' />
    <meta name='twitter:creator' content='@_ighosh' />
    <meta name='twitter:title' content={ props.title || defaultTitle } />
    <meta name='twitter:description' content={ props.description || defaultDescription } />
    <meta name='twitter:image' content={ props.image || defaultOGImage } />
    <meta name='twitter:image:width' content='1200' />
    <meta name='twitter:image:height' content='630' />

    <meta name='viewport' content='width=device-width, initial-scale=1' />

    <link rel='icon' type='image/png' href='/static/images/favicon-32x32.png' sizes='32x32' />
    <link rel='icon' type='image/png' href='/static/images/favicon-16x16.png' sizes='16x16' />

  </NextHead>
)

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  image: string
}

export default Head
