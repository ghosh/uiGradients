import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

import Header from '@modules/Header'
import ActionBar from '@modules/ActionBar'
import Sandbox from '@modules/Sandbox'
import Canvas from '@modules/Canvas'
import Collection from '@modules/Collection'

import { store } from '../firebase'

const Home = (props) => {
  return (
    <>
      <Head>
        <title>uiGradients</title>
      </Head>
      <Header />
      <ActionBar />
      <Sandbox>
        <Collection gradients={props.gradients}/>
        <Canvas />
      </Sandbox>
    </>
  )
}

Home.propTypes = {
  gradients: PropTypes.array
}

Home.getInitialProps = async ({ req }) => {
  const gradients = await store.gradients()
  return { gradients }
}

export default Home
