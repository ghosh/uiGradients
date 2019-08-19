import React from 'react'
import Head from 'next/head'

import Header from '@modules/Header'
import ActionBar from '@modules/ActionBar'
import Sandbox from '@modules/Sandbox'

const Home = () => (
  <>
    <Head>
      <title>uiGradients</title>
    </Head>
    <Header />
    <ActionBar />
    <Sandbox />
  </>
)

export default Home
