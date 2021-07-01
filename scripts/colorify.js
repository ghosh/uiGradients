/**
 * Adds a hue item to gradient
 */

const colorDetective = require('./utils/colorDetective');

const colorify = (gradients) => {
  gradients.forEach((gradient) => {
    const hues = [];
    gradient.colors.forEach(color => {
      hues.push(colorDetective(color))
    });
    gradient = Object.assign(gradient, { 'hues': hues })
  })
  return gradients;
}

module.exports = colorify