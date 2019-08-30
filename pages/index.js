import React from 'react'
import Router from 'next/router'

const Home = () => <p>Home</p>

Home.getInitialProps = async ({ res }) => {
  if (res) {
    res.writeHead(302, {
      Location: '/gradients'
    })
    res.end()
  } else {
    Router.push('/gradients')
  }
  return {}
}

export default Home
