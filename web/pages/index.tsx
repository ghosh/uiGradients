import React, { useEffect } from 'react'
import { GetStaticProps } from 'next'

import gradients from '../../stubs/gradients.json'

import useStore from '@/store/gradient'

import Header from '@/core/Header'
import Actionbar from '@/core/Actionbar'
import Canvas from '@/core/Canvas'
import Display from '@/core/Display'
import Grid from '@/core/Grid'
import Footer from '@/core/Footer'

interface HomeProps {
  gradients: UIG.Gradient[]
}

const Home = ({ gradients }: HomeProps) => {
  const setGradients = useStore(state => state.setGradients)
  const setActiveGradient = useStore(state => state.setActiveGradient)
  const setActiveIndex = useStore(state => state.setActiveIndex)


  useEffect(() => {
    setGradients(gradients)

    const randomGradient = gradients[Math.floor(Math.random() * gradients.length)]
    const index = gradients.findIndex(g => g === randomGradient)

    setActiveGradient(randomGradient)
    setActiveIndex(index)

    // history.pushState('', randomGradient.name, `/${randomGradient.slug}`)
  }, [gradients, setGradients, setActiveGradient, setActiveIndex])

  // Update url

  return (
    <>
      <Header />
      <Actionbar />
      <Canvas>
        <Display />
        <Grid gradients={gradients} />
      </Canvas>
      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      gradients
    }
  }
}

export default Home