const isChrome = !!window.chrome && !!window.chrome.webstore;
const isFirefox = typeof InstallTrigger !== 'undefined';

export default function (direction, ...colors) {
  if (isChrome === false && isFirefox === false) return;

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const link = document.querySelector('link[rel*="icon"]');

  canvas.height = 32;
  canvas.width = 32; // set the size

  const coordinates = (gradientDir) => {
    switch (gradientDir) {
      case 'to left':
        return [canvas.width, canvas.height, 0, canvas.height];
      case 'to right':
        return [0, canvas.height, canvas.width, canvas.height];
      case 'to top':
        return [0, canvas.height, 0, 0];
      case 'to bottom':
        return [canvas.width, 0, canvas.width, canvas.height];
      default:
        return [];
    }
  };

  const dir = coordinates(direction);
  const grd = ctx.createLinearGradient(...dir);

  /**
   * TODO: Calculate the color stops programmatically
   */
  switch (colors.length) {
    case 2:
      grd.addColorStop(0, colors[0]);
      grd.addColorStop(1, colors[1]);
      break;
    case 3:
      grd.addColorStop(0, colors[0]);
      grd.addColorStop(0.5, colors[1]);
      grd.addColorStop(1, colors[2]);
      break;
    case 4:
      grd.addColorStop(0, colors[0]);
      grd.addColorStop(0.4, colors[1]);
      grd.addColorStop(0.8, colors[2]);
      grd.addColorStop(1, colors[3]);
      break;
    case 5:
      grd.addColorStop(0, colors[0]);
      grd.addColorStop(0.25, colors[1]);
      grd.addColorStop(0.5, colors[2]);
      grd.addColorStop(0.75, colors[3]);
      grd.addColorStop(1, colors[4]);
      break;
    default:
  }

  ctx.fillStyle = grd;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  link.href = canvas.toDataURL('image/png'); // update favicon
}
