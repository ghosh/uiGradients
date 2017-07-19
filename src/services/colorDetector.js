import hexToHsl from 'hex-to-hsl';

export default function (hexColor) {
  const [hue, sat, lgt] = hexToHsl(hexColor);

  if ((lgt / 100) < 0.2) return 'Blacks';
  if ((lgt / 100) > 0.85) return 'Whites';

  if ((sat / 100) < 0.20) return 'Grays';

  if (hue < 30) return 'Reds';
  if (hue < 60) return 'Oranges';
  if (hue < 90) return 'Yellows';
  if (hue < 150) return 'Greens';
  if (hue < 210) return 'Cyans';
  if (hue < 270) return 'Blues';
  if (hue < 330) return 'Magentas';

  return 'Reds';
}
