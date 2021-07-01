/**
 * Given a color, it detects if it
 * falls into a major color group
 */

const hexToHsl = require('hex-to-hsl');
const COLORS = require('../colors');

const colorDetective = (hexColor) => {

  const [hue, sat, lgt] = hexToHsl(hexColor);

  if ((lgt / 100) < 0.2) return COLORS.Blacks;
  if ((lgt / 100) > 0.85) return COLORS.Whites;

  if ((sat / 100) < 0.20) return COLORS.Grays;

  if (hue < 30) return COLORS.Reds;
  if (hue < 60) return COLORS.Oranges;
  if (hue < 90) return COLORS.Yellows;
  if (hue < 150) return COLORS.Greens;
  if (hue < 210) return COLORS.Cyans;
  if (hue < 270) return COLORS.Blues;
  if (hue < 330) return COLORS.Magentas;

  return 'Reds';
}

module.exports = colorDetective