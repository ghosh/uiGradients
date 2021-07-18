import React, { useEffect } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import gradients from '../../stubs/gradients.json'

import Header from '@/core/Header'
import Actionbar from '@/core/Actionbar'
import Canvas from '@/core/Canvas'
import Display from '@/core/Display'
import Grid from '@/core/Grid'
import Footer from '@/core/Footer'

import useStore from '@/store/gradient'

interface GradientProps {
  gradients: UIG.Gradient[],
  gradient: UIG.Gradient,
  index: number
}

const Gradient = ({ gradients, gradient, index }: GradientProps) => {
  const setGradients = useStore(state => state.setGradients)
  const setActiveGradient = useStore(state => state.setActiveGradient)
  const setActiveIndex = useStore(state => state.setActiveIndex)


  useEffect(() => {
    setGradients(gradients)
    setActiveGradient(gradient)
    setActiveIndex(index)

  }, [gradients, gradient, index, setGradients, setActiveGradient, setActiveIndex])

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

/**
 * Generates a static page for each gradient
 * The url is the slug
 * @returns Paths to built pages
 */
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = gradients.map((gradient) => ({
    params: { slug: gradient.slug },
  }))

  return { paths, fallback: false }
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Gets the gradient from the slug
  const gradient = gradients.filter(gradient => {
    return gradient.slug === params?.slug
  })

  const index = gradients.findIndex(g => g === gradient[0])

  return {
    props: {
      gradients: gradients,
      gradient: gradient[0],
      index: index
    }
  }

}

export default Gradient