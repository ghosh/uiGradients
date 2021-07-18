import { GetStaticProps } from 'next'

import gradients from '../../stubs/gradients.json'

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