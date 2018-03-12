import Gradients from '@@/gradients.json'

import { slugify, removeDuplicatesBy } from '@@/utils'

const slugifiedGradients = Gradients.map((gradient, index) => ({
  name: gradient.name,
  colors: gradient.colors,
  slug: slugify(gradient.name)
}))

const uniqueGradients = removeDuplicatesBy(gradient => gradient.slug, slugifiedGradients)

const allGradients = uniqueGradients.map((gradient, index) => ({
  id: index,
  name: gradient.name,
  colors: gradient.colors,
  slug: slugify(gradient.name)
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
