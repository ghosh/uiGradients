import Canvas from './canvasHelpers';

const isChrome = !!window.chrome && !!window.chrome.webstore;
const isFirefox = typeof InstallTrigger !== 'undefined';

const canvas = document.createElement('canvas');
canvas.height = 32;
canvas.width = 32;
const ctx = canvas.getContext('2d');

export default function (direction, ...colors) {
  if (isChrome === false && isFirefox === false) return;

  const link = document.querySelector('link[rel*="icon"]');
  const dir = Canvas.generateCoordinates(direction, canvas.height, canvas.width);
  const grd = ctx.createLinearGradient(...dir);

  ctx.fillStyle = Canvas.generateFillStyle(grd, ...colors);
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  link.href = canvas.toDataURL('image/png');
}
