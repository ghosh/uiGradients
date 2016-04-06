/**
 * The Main Popup module. Responsible for the behavoiur
 * of the 'Add Gradient' and 'Copy Code' popups.
 *
 * @author Indrashish Ghosh (@_ighosh)
 */

// Main Namespace
window.uiGradients = window.uiGradients || {};

// Sub Namespace
uiGradients.Popup = uiGradients.Popup || {};


// Module
(function( window, document, $ ){

  "use strict";


  // Higher level abstraction of all popups
  uiGradients.Popup.reset = function(){
    $('.popup').removeClass('is-active');
  }


  /**
   * -------------------------------------------
   * The 'Add gradient' popop
   * -------------------------------------------
   */
  uiGradients.Popup.Github = (function () {

    var pallete = $("#pallete"),
        popup = $('#popup-github'),
        popupTrigger = $("#do-show-github-popup");

    function show() {
      if ( pallete.hasClass('is-active') ) {
        return;
      };
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
              uiGradients.Popup.reset();
              ga('send', 'event', 'footer-buttons', 'keydown', 'add new gradient');
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
      init: init
    };

  })();

  // Initiating the events
  window.uiGradients.Popup.Github.init();



  /**
   * -------------------------------------------
   * The 'Copy Code' popop
   * -------------------------------------------
   */
    uiGradients.Popup.Code = (function () {

    var pallete = $("#pallete"),
        popup = $('#popup--code'),
        popupTrigger = $("#do-show-code-popup");

    function show() {
      if ( pallete.hasClass('is-active') ) {
        return;
      };
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

            case 13: // enter
              uiGradients.Popup.reset();
              ga('send', 'event', 'footer-buttons', 'keydown', 'copy gradient code');
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
      // close: close
    };

  })();

  // Initiating the events
  window.uiGradients.Popup.Code.init();

})( window, document, $ );
