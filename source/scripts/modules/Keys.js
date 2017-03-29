window.uiGradients = window.uiGradients || {};

(function( window, document, $ ){

  "use strict";

  uiGradients.Keys = (function () {

    var canvas = $("#canvas"),
        pallete = $("#pallete");

    function _bindEvents () {

      $(document).on('keydown', function(event) {
        switch(event.which) {

          case 37: // left
            ga('send', 'event', 'keyboard navigation', 'left', 'prev gradient');
            if (pallete.hasClass('is-active')) return;
            canvas.trigger('changeDown');
          break;

          case 39: // right
            ga('send', 'event', 'keyboard navigation', 'right', 'next gradient');
            if (pallete.hasClass('is-active')) return;
            canvas.trigger('changeUp');
          break;

          case 16: // shift
            ga('send', 'event', 'keyboard navigation', 'shift', 'show pallete');
            pallete.trigger('toggle');
          break;

          case 27: // esc
            ga('send', 'event', 'keyboard navigation', 'esc', 'hide pallete');
            pallete.trigger('close');
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
