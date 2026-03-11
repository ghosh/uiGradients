import hexToHsl from 'hex-to-hsl';

const cache = new Map();

export default function (hexColor) {
  if (cache.has(hexColor)) return cache.get(hexColor);

  const [hue, sat, lgt] = hexToHsl(hexColor);

  let result;
  if ((lgt / 100) < 0.2) result = 'Blacks';
  else if ((lgt / 100) > 0.85) result = 'Whites';
  else if ((sat / 100) < 0.20) result = 'Grays';
  else if (hue < 30) result = 'Reds';
  else if (hue < 60) result = 'Oranges';
  else if (hue < 90) result = 'Yellows';
  else if (hue < 150) result = 'Greens';
  else if (hue < 210) result = 'Cyans';
  else if (hue < 270) result = 'Blues';
  else if (hue < 330) result = 'Magentas';
  else result = 'Reds';

  cache.set(hexColor, result);
  return result;
}
