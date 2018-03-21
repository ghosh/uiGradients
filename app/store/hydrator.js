import Gradients from '@@/gradients.json'
import { slugify, removeDuplicatesBy } from '@@/utils'
import colorDetector from '@/services/colorDetector'

const slugifiedGradients = Gradients.map((gradient, index) => ({
  name: gradient.name,
  colors: gradient.colors,
  slug: slugify(gradient.name)
}))

const uniqueGradients = removeDuplicatesBy(gradient => gradient.slug, slugifiedGradients)

const allGradients = uniqueGradients.map((gradient, index) => ({
  ...gradient,
  id: index,
  palettes: colorDetector(...gradient.colors)
}))

export const gradients = allGradients

const hydratedState = {
  gradients: {
    count: gradients.length,
    list: gradients,
    directionIndex: 2,
    activeDirection: 'to right',
    directions: ['to left', 'to bottom', 'to right', 'to top']
  }
}

export default hydratedState
