// Setting up the UIGrad namespace if it doenst exist
window.UIGrad = window.UIGrad || {};

(function( window, document, $ ){

  "use strict";

  UIGrad.Nav = (function () {

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
  window.UIGrad.Nav.init();

})( window, document, $ );
