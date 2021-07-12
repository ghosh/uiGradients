import { GetStaticProps, GetStaticPaths } from 'next'
import gradients from '../../stubs/gradients.json'

interface Gradient {
  name: string,
  colors: string[],
  slug: string
}

interface GradientProps {
  gradient: Gradient
}

const Gradient = ({ gradient }: GradientProps) => {
  return (
    <>
      <h1>Gradient</h1>
      <ul>
        <li>{gradient.name}</li>
      </ul>
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
  const gradient = gradients.filter(gradient => {
    return gradient.slug === params?.slug
  })

  return {
    props: {
      gradient: gradient.shift()
    }
  }

}

export default Gradient