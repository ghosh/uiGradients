// Setting up the UIGrad namespace if it doenst exist
window.UIGrad = window.UIGrad || {};

(function( window, document, $ ){

  "use strict";

  UIGrad.Popup = (function () {

    var popup = $('#popup');
    var popupTrigger = $("#add-gradient");

    function show() {
      popup.addClass('is-active');
    }

    function close() {
      popup.removeClass('is-active');
    }

    function _bindEvents () {

      popupTrigger.on("click", function(event) {
        event.stopPropagation();
        show();
      });

      $(document).on('keydown', function(event) {

        switch(event.which) {
            case 27: // esc
              close();
            break;

            case 32: // space
              show();
            break;

            default: return; // exit this handler for other keys
        }
      });


      $(document).on("click", function(event) {
        if ( popup.hasClass('is-active') ) {
          if ( !popup.is(event.target) && popup.has(event.target).length === 0 ) {
            close();
          }
        }
      });

    }

    function init() {
      _bindEvents();
    }

    return {
      init: init,
      close: close
    };

  })();

  // Initiating the events
  window.UIGrad.Popup.init();

})( window, document, $ );
