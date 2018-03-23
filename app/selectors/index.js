import { createSelector } from 'reselect'

export const getGradientCount = state => state.gradients.count
export const getGradients = state => state.gradients.list
export const getPalette = state => state.palette

export const getGradientsByPalette = createSelector(
  [getPalette, getGradients],
  (palette, gradients) => {
    if (palette === null) return gradients.slice().reverse()

    const filtered = gradients.filter(gradient => {
      return gradient.palettes.includes(palette)
    })

    return filtered
  }
)
