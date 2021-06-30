import { GetStaticProps } from 'next'
import gradients from '../temp/gradients.json'

interface Gradient {
  name: string,
  colors: string[],
  slug: string
}

interface HomeProps {
  gradients: Gradient[]
}

function Home({ gradients }: HomeProps) {

  return (
    <>
      <h1>Home</h1>
      <ul>
        {gradients.map((gradient) => (
          <li key={gradient.slug}>{gradient.name}</li>
        ))}
      </ul>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      gradients
    }
  }
}

export default Home