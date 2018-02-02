import Gradients from '../gradients.json'

const slugify = (string) => {
  return string.toString().toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
}

const removeDuplicatesBy = (keyFn, array) => {
  const mySet = new Set()
  return array.filter((x) => {
    const key = keyFn(x)
    const isNew = !mySet.has(key)
    if (isNew) mySet.add(key)
    return isNew
  })
}

const slugifiedGradients = Gradients.map(gradient => ({
  name: gradient.name,
  colors: gradient.colors,
  id: slugify(gradient.name)
}))

const uniqueGradients = removeDuplicatesBy(gradient => gradient.id, slugifiedGradients)

const hydratedState = {
  gradients: {
    activeGradient: {},
    list: uniqueGradients
  }
}

export default hydratedState
