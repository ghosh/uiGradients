(function ($) {
    $.fn.getContrastingText = function (hex) {
      
      /* 
       * Lower threshold equals more dark text on dark background
       * When in doubt use 130 ~half of 256. 
      */
      threshold = 180;

      hRed = hexToR(hex);
      hGreen = hexToG(hex);
      hBlue = hexToB(hex);

      function hexToR(h) {
        return parseInt((cutHex(h)).substring(0, 2), 16)
      }

      function hexToG(h) {
        return parseInt((cutHex(h)).substring(2, 4), 16)
      }

      function hexToB(h) {
        return parseInt((cutHex(h)).substring(4, 6), 16)
      }

      function cutHex(h) {
        return (h.charAt(0) == "#") ? h.substring(1, 7) : h
      }

      cBrightness = ((hRed * 299) + (hGreen * 587) + (hBlue * 114)) / 1000;
      if (cBrightness > threshold) {
        return "#313131";
      } else {
        return "#ffffff";
      }

      
    };
}(jQuery));