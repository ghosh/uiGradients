window.uiGradients = window.uiGradients || {};

(function( window, document, $ ){

  "use strict";

  uiGradients.Pallete = (function () {

    var canvas = $("#canvas"),
        pallete = $("#pallete"),
        palleteTrigger = $("#do-show-pallete");

    function _show() {
      uiGradients.Popup.reset();
      pallete.addClass('is-active');
    }

    function _close() {
       pallete.removeClass('is-active');
    }

    function _bootEventHandlers() {

      pallete.on('toggle', function() {
        ( pallete.hasClass('is-active') ) ? _close() : _show();
      });

      pallete.on('close', function() {
        _close();
      });

    }

    function _bindEvents() {
      palleteTrigger.on("click", function(event) {
        event.stopPropagation();
        _show();
      });

      $( "#pallete-list" ).on( "click", ".pallete__item", function( event ) {
          var id = $( this ).data();
          canvas.trigger( 'showGradient', [id] )
          _close();
      });

    }

    function init() {
      _bindEvents();
      _bootEventHandlers();
    }

    return {
      init: init
    };

  })();

  // Initiating the events
  window.uiGradients.Pallete.init();

})( window, document, $ );
