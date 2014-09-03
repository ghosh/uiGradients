/**
 * The Main Gradients module. Handles the loading
 * and shwing of gradient data
 *
 * @author Indrashish Ghosh (@_ighosh)
 */
window.uiGradients = window.uiGradients || {};

(function( window, document, $ ){

  "use strict";

  uiGradients.Gradients = (function () {

    var gradients;
    var gradientIndex;
    var canvas = $("#canvas");
    var infoTemplate = $('#gradient-info-template').html();
    var codeTemplate = $('#gradient-code-template').html();


    function _loadGradients() {
      $.getJSON("gradients.json", function(data) {
        gradients = data;
        canvas.trigger('gradientsLoaded');
      });
    }


    function _updateGradient() {

      var newGradient = gradients[gradientIndex];

      var from = newGradient.colour1;
      var to   = newGradient.colour2;

      var gradientObject = {
          'background-color': '#fff',
          'background-image': [
            '-webkit-linear-gradient(left,'+from+','+to+')',
            '-moz-linear-gradient(left,'+from+','+to+')',
            '-o-linear-gradient(left,'+from+','+to+')',
            'linear-gradient(left,'+from+','+to+')'
          ]
      };

      canvas.stop().animate( {opacity: 0.5}, 100, function(){
        $(this).cssMap(gradientObject).animate( {opacity: 1}, {duration:100} );
      });

    }


    function _updateInfobox() {

      var newGradient = gradients[gradientIndex];

      var gradientInfo = Mustache.to_html(infoTemplate, newGradient);

      $('#infobox').stop().animate( {opacity: 0.5}, 100, function(){
        $(this).html(gradientInfo).animate( {opacity: 1}, {duration:100} );
      });

    }



    function _updateCodeBox() {

      var newGradient = gradients[gradientIndex];

      var gradientInfo = Mustache.to_html(codeTemplate, newGradient);

      $('#codebox').stop().animate( {opacity: 0.9}, 100, function(){
        $(this).html(gradientInfo).animate( {opacity: 1}, {duration:100} );
      });

    }



    function _renderDisplay( direction ) {

      // Making direction an optional variable
      direction = (typeof direction === "undefined") ? "no direction set" : direction;

      if (direction == "up") {
        gradientIndex++;
        gradientIndex = ( gradientIndex >= gradients.length ) ? 0 : gradientIndex;
      } else if(direction == "down") {
        gradientIndex--;
        gradientIndex = ( gradientIndex <= -1 ) ? gradients.length - 1 : gradientIndex;
      }

      _updateGradient();
      _updateInfobox();
      _updateCodeBox();

    }

    function _bootstrap() {

      canvas.on("gradientsLoaded", function() {

        var randomIndex = Math.floor(Math.random() * ((gradients.length - 1) - 0 + 1)) + 0;
        gradientIndex = randomIndex;
        _renderDisplay();

      });

    }


    function _bindEvents() {
      canvas.on("changeUp", function() {
        _renderDisplay("up");
      });

      canvas.on("changeDown", function() {
        _renderDisplay("down");
      });
    }


    function init() {
      _loadGradients();
      _bindEvents();
      _bootstrap();
    }


    function getGradients() {
      console.table(gradients);
    }

    return {
      init: init,                     // Loads the gradient data from gradients.json
      getGradients: getGradients      // Logs the gradients on screen;
    };

  })();

  // Initiating the events
  window.uiGradients.Gradients.init();

})( window, document, $ );
