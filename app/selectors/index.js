// TODO: Memozie selector using reslect

export const getGradientsByPalette = (palette, gradients) => {
  if (palette === null) return gradients.slice().reverse()

  const filtered = gradients.filter(gradient => {
    return gradient.palettes.includes(palette)
  })

  return filtered
}
