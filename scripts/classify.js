/**
 * Sorts gradients into color buckets
 */

const COLORS = require('./colors.js')

const classify = (gradients) => {
  const filterByHue = (hue) => gradients.filter(gradient => gradient.hues.includes(hue))

  return {
    cyans: filterByHue(COLORS.Cyans),
    reds: filterByHue(COLORS.Reds),
    oranges: filterByHue(COLORS.Oranges),
    yellows: filterByHue(COLORS.Yellows),
    greens: filterByHue(COLORS.Greens),
    blues: filterByHue(COLORS.Blues),
    magentas: filterByHue(COLORS.Magentas),
    blacks: filterByHue(COLORS.Blacks),
    whites: filterByHue(COLORS.Whites),
    grays: filterByHue(COLORS.Grays)
  }
}

module.exports = classify