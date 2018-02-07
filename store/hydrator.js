import Gradients from '../gradients.json'

import { slugify, removeDuplicatesBy } from '@/utils'

const slugifiedGradients = Gradients.map((gradient, index) => ({
  id: index,
  name: gradient.name,
  colors: gradient.colors,
  slug: slugify(gradient.name)
}))

export const uniqueGradients = removeDuplicatesBy(gradient => gradient.id, slugifiedGradients)

const hydratedState = {
  gradients: {
    count: uniqueGradients.length,
    list: uniqueGradients,
    directionIndex: 2,
    activeDirection: 'to right',
    directions: ['to left', 'to bottom', 'to right', 'to top']
  }
}

export default hydratedState
