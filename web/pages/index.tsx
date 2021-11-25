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
  gradients: UIG.Gradient[],
  gradient: UIG.Gradient,
  index: number
}

const Home = ({ gradients, gradient, index }: HomeProps) => {
  const setGradients = useStore(state => state.setGradients)
  const setActiveGradient = useStore(state => state.setActiveGradient)
  const setActiveIndex = useStore(state => state.setActiveIndex)
  const activeGradient = useStore(state => state.activeGradient)

  // Sets up initial state on page load
  useEffect(() => {
    setGradients(gradients)
    setActiveGradient(gradient)
    setActiveIndex(index)

    history.pushState('', gradient.name, `/${gradient.slug}`)
  }, [gradients, gradient, index, setGradients, setActiveGradient, setActiveIndex])

  // Updates url on gradient change
  useEffect(() => {
    if (activeGradient) {
      history.pushState('', activeGradient.name, `/${activeGradient.slug}`)
    }
  }, [activeGradient])

  return (
    <>
      <Header />
      <Actionbar />
      <Canvas>
        <Display gradient={gradient} />
        <Grid gradients={gradients} />
      </Canvas>
      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  // Picks a random gradient as the first gradient to show
  const gradient : UIG.Gradient = gradients[Math.floor(Math.random() * gradients.length)]
  const index = gradients.findIndex(g => g === gradient)

  return {
    props: {
      gradients,
      gradient,
      index
    }
  }
}

export default Home