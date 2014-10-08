window.uiGradients = window.uiGradients || {};

(function( window, document, $ ){

  "use strict";

  uiGradients.Nav = (function () {

    var canvas = $("#canvas");
    var nav    = $("#nav");

    function _bindEvents () {

      nav.on('click', '#nav--prev', function() {
        canvas.trigger('changeDown');
      })

      nav.on('click', '#nav--next', function() {
        canvas.trigger('changeUp');
      })

    }

    function init() {
      _bindEvents();
    }

    return {
      init: init
    };

  })();

  // Initiating the events
  window.uiGradients.Nav.init();

})( window, document, $ );
