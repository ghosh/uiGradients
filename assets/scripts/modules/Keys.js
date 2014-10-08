window.uiGradients = window.uiGradients || {};

(function( window, document, $ ){

  "use strict";

  uiGradients.Keys = (function () {

    var canvas = $("#canvas");
    var pallete = $("#pallete");

    function _bindEvents () {

      $(document).on('keydown', function(event) {
        switch(event.which) {

          case 37: // left
            if (pallete.hasClass('is-active')) {
              return;
            }
            canvas.trigger('changeDown');
          break;

          case 39: // right
            if (pallete.hasClass('is-active')) {
              return;
            }
            canvas.trigger('changeUp');
          break;

          case 16: // shift
            pallete.trigger('toggle');
          break;

          case 27: // esc
            pallete.trigger('close');
            close();
          break;

          default: return; // exit this handler
        }
      });
    }

    function init() {
      _bindEvents();
    }

    return {
      init: init
    };

  })();

  // Initiating the events
  window.uiGradients.Keys.init();

})( window, document, $ );