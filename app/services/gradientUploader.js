import Gradients from '@@/gradients.json'

import { slugify, removeDuplicatesBy } from '@/helpers/utils'
import colorDetector from '@/services/colorDetector'

import { db } from '@/firebase'

export default function () {
  const slugifiedGradients = Gradients.map((gradient, index) => ({
    name: gradient.name,
    colors: gradient.colors,
    slug: slugify(gradient.name)
  }))

  const uniqueGradients = removeDuplicatesBy(gradient => gradient.slug, slugifiedGradients)

  const allGradients = uniqueGradients.map((gradient, index) => ({
    ...gradient,
    id: index, // Add index for navigation
    favs: {}, // Add favs for storing user ids
    palettes: colorDetector(...gradient.colors)
  }))

  const gradients = allGradients

  db.uploadGradients(gradients)
}
