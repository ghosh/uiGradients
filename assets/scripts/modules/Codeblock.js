window.uiGradients = window.uiGradients || {};

(function( window, document, $ ){

  "use strict";

  uiGradients.Codeblock = (function () {

    var canvas = $("#canvas"),
        codebox = $('.popup__codeblock'),
        success = $('.popup__success');

    function _resetCodebox() {
      codebox.show();
      success.hide();
    }

    function _updateCodebox() {
      codebox.hide();
      success.slideDown();
    }

    function _setup() {

      var client = new ZeroClipboard( $('#do-copy-to-clipboard'), {
        moviePath: "ZeroClipboard.swf",
        debug: false
      });

      client.on( "ready", function(readyEvent) {
        client.on( "aftercopy", function(event){
          _updateCodebox();
        });
      });

    }

    function _bindEvents() {
      canvas.on("updating-gradient", function() {
        _resetCodebox();
      });
    }

    function init() {
      _setup();
      _bindEvents();
    }

    return {
      init: init
    };

  })();

  // Initiating the events
  window.uiGradients.Codeblock.init();

})( window, document, $ );
