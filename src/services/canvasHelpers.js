const canvasHelpers = {

  generateCoordinates(direction, height, width) {
    switch (direction) {
      case 'to left':
        return [width, height, 0, height];
      case 'to right':
        return [0, height, width, height];
      case 'to top':
        return [0, height, 0, 0];
      case 'to bottom':
        return [width, 0, width, height];
      default:
        return [];
    }
  },

  /**
   * TODO: Calculate the color stops programmatically
   */
  generateFillStyle(grd, ...colors) {
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
    return grd;
  },

};

export default canvasHelpers;
