import React from 'react'
import Router from 'next/router'

const Home = () => <p>Home</p>

Home.getInitialProps = async ({ res }) => {
  const slugs = ['atlas', 'hazel', 'moonrise', 'predawn']
  var rando = slugs[Math.floor(Math.random() * slugs.length)]

  if (res) {
    res.writeHead(302, {
      Location: `/g/${ rando }`
    })
    res.end()
  } else {
    Router.push(`/g/${ rando }`)
  }
  return {}
}

export default Home
