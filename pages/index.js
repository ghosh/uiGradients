import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

import Header from '@modules/Header'
import ActionBar from '@modules/ActionBar'
import Sandbox from '@modules/Sandbox'
import Canvas from '@modules/Canvas'
import Collection from '@modules/Collection'

import { useGradients } from '@providers/GradientProvider'

import { store } from '../firebase/db'

const Home = (props) => {
  const { gradients } = useGradients()

  const gradientData = gradients || props.gradients
  return (
    <>
      <Head>
        <title>uiGradients</title>
      </Head>
      <Header />
      <ActionBar />
      <Sandbox>
        <Collection gradients={gradientData}/>
        <Canvas />
      </Sandbox>
    </>
  )
}

Home.propTypes = {
  gradients: PropTypes.array
}

Home.getInitialProps = async () => {
  const gradients = await store.gradients()
  return { gradients }
}

export default Home
