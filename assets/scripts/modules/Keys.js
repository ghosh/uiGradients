// Setting up the UIGrad namespace if it doenst exist
window.UIGrad = window.UIGrad || {};

(function( window, document, $ ){

  "use strict";

  UIGrad.Keys = (function () {

    var canvas = $("#canvas");

    function _bindEvents () {

      $(document).on('keydown', function(event) {
        switch(event.which) {
          case 37: // left
            canvas.trigger('changeDown');
          break;

          case 39: // right
            canvas.trigger('changeUp');
          break;

          default: return; // exit this handler for other keys
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
  window.UIGrad.Keys.init();

})( window, document, $ );
