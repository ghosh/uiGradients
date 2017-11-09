import { saveAs } from 'file-saver';
import toBlob from 'canvas-to-blob';

import Canvas from './canvasHelpers';

// Adds toBlob polyfill (for safari)
toBlob.init();

export default function (direction, name, ...colors) {
  const canvas = document.createElement('canvas');

  canvas.id = 'canva';
  canvas.width = screen.width; // eslint-disable-line
  canvas.height = screen.height; // eslint-disable-line
  canvas.style.zIndex = 1;
  canvas.style.position = 'absolute';
  document.body.appendChild(canvas);

  const canva = document.getElementById('canva');
  const ctx = canva.getContext('2d');

  const dir = Canvas.generateCoordinates(direction, canvas.height, canvas.width);
  const grd = ctx.createLinearGradient(...dir);

  ctx.fillStyle = Canvas.generateFillStyle(grd, ...colors);
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  canvas.toBlob((blob) => {
    saveAs(blob, `${name}.jpg`);
  });

  document.getElementById('canva').remove();
}
