export const getPlaceholderGradient = () => {
  const gradient = {
    id: 99999999,
    name: 'White Wash',
    colors: ['#fff', '#fafafa'],
    slug: 'white-wash'
  }
  return gradient
}

export const getRandomNumber = () => {
  return Math.floor(Math.random() * 100) + 1
}

// Checks if object exists and is not empty
export const exists = (obj) => {
  return obj && Object.keys(obj).length > 0
}

// Returns a slug from a string
export const slugify = (string) => {
  return string.toString().toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
}

// Removes duplicates gradients
export const removeDuplicatesBy = (keyFn, array) => {
  const mySet = new Set()
  return array.filter((x) => {
    const key = keyFn(x)
    const isNew = !mySet.has(key)
    if (isNew) mySet.add(key)
    return isNew
  })
}
