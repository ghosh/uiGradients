import Canvas from './canvasHelpers';

const isChrome = !!window.chrome && !!window.chrome.webstore;
const isFirefox = typeof InstallTrigger !== 'undefined';

export default function (direction, ...colors) {
  if (isChrome === false && isFirefox === false) return;

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const link = document.querySelector('link[rel*="icon"]');

  canvas.height = 32;
  canvas.width = 32; // set the size

  const dir = Canvas.generateCoordinates(direction, canvas.height, canvas.width);
  const grd = ctx.createLinearGradient(...dir);

  ctx.fillStyle = Canvas.generateFillStyle(grd, ...colors);
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  link.href = canvas.toDataURL('image/png'); // update favicon
}
