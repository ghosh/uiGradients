window.uiGradients = window.uiGradients || {};

(function( window, document, $ ){

  "use strict";

  uiGradients.Infobox = (function () {

    var canvas = $("#canvas");
    var color1;
    var color2;

    function _setup() {

      canvas.on('infobox-updated', function () {
        color1 = new ZeroClipboard( $('#do-copy-colour1'), {
          moviePath: "ZeroClipboard.swf",
          debug: false
        });

        color2 = new ZeroClipboard( $('#do-copy-colour2'), {
          moviePath: "ZeroClipboard.swf",
          debug: false
        });

        _bindEvents();
      })

    }

    function _bindEvents () {
        color1.on( "ready", function(readyEvent) {
          color1.on( "aftercopy", function(event){
            $(".infobox__color1-success").show();
            setTimeout(function() { $(".infobox__color1-success").hide(); }, 1000);
          });
        });

        color2.on( "ready", function(readyEvent) {
          color2.on( "aftercopy", function(event){
            $(".infobox__color2-success").show();
            setTimeout(function() { $(".infobox__color2-success").hide(); }, 1000);
          });
        });
    }

    function init() {
      _setup();
    }

    return {
      init: init
    };

  })();

  // Initiating the events
  window.uiGradients.Infobox.init();

})( window, document, $ );
