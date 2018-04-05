import React from 'react'
import Router from 'next/router'
import { auth } from '@/firebase'

const Logout = (props) => {
  return (
    <div />
  )
}

Logout.getInitialProps = ({ res }) => {
  auth.signOut()
  if (res) {
    res.writeHead(302, {
      Location: 'https://uigradients.com'
    })
    res.end()
    res.finished = true
  } else {
    Router.replace('/')
  }
  return {}
}

export default Logout
