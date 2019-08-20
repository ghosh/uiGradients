import React from 'react'
import Head from 'next/head'

import Header from '@modules/Header'
import ActionBar from '@modules/ActionBar'
import Sandbox from '@modules/Sandbox'
import Canvas from '@modules/Canvas'
import Collection from '@modules/Collection'

const Home = () => (
  <>
    <Head>
      <title>uiGradients</title>
    </Head>
    <Header />
    <ActionBar />
    <Sandbox>
      <Collection />
      <Canvas />
    </Sandbox>
  </>
)

export default Home
