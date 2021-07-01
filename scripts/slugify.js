/**
 * Generates slugs for each gradient
 * and adds it to the gradient object
 */

const stringToSlug = require('./utils/stringToSlug')

const slugify = (gradients) => {
  const slugs = []

  gradients.forEach((gradient) => {
    gradient = Object.assign(gradient, { 'slug': stringToSlug(gradient.name) })
    slugs.push(gradient.slug)
  })

  return { gradients, slugs }
}

module.exports = slugify