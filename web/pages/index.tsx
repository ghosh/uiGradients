import { GetStaticProps } from 'next'

import gradients from '../../stubs/gradients.json'

import Header from '@/core/Header'
import Actionbar from '@/core/Actionbar'
import Canvas from '@/core/Canvas'
import Footer from '@/core/Footer'

import Spacer from '@/lib/Spacer'

interface Gradient {
  name: string,
  colors: string[],
  slug: string,
  hues: string[]
}

interface HomeProps {
  gradients: Gradient[]
}

const Home = ({ gradients }: HomeProps) => {

  const handleGradientClick = (e: React.MouseEvent<HTMLElement>, g: Gradient) => {
    // If trying to open in new tab, allow it
    if (
      e.ctrlKey
      || e.shiftKey
      || e.metaKey
      || (e.button && e.button == 1)
    ) {
      return
    }

    e.preventDefault()
    console.log('Handle inline')

    // TODO: Test for edge cases
    history.pushState('', g.name, `/${g.slug}`)
  }

  return (
    <>
      <Header />
      <Actionbar />
      <Canvas />
      <Footer />
      {/* <ul>
        {gradients.map((gradient) => (
          <li key={gradient.slug}>
            <a href={`/${gradient.slug}`} onClick={(e) => handleGradientClick(e, gradient)}>
              {gradient.name}
            </a>
          </li>
        ))}
      </ul> */}
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