import React from 'react'
import Head from 'next/head'

import Header from '@modules/Header'
import ActionBar from '@modules/ActionBar'

const Home = () => (
  <>
    <Head>
      <title>uiGradients</title>
    </Head>
    <Header />
    <ActionBar />
  </>
)

export default Home
