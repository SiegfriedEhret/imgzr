/**
            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE 
                    Version 2, December 2004 

 Copyright (C) 2004 Sam Hocevar <sam@hocevar.net> 

 Everyone is permitted to copy and distribute verbatim or modified 
 copies of this license document, and changing it is allowed as long 
 as the name is changed. 

            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE 
   TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION 

  0. You just DO WHAT THE FUCK YOU WANT TO. 
*/

(function($){
  var version = '0.2',
    settings = {},
    defaults = {
      resolutions:{
        small:{min:0, max:480},
        medium:{min:481, max:768},
        large:{min:769, max:10000}
      }
    },
    getScreenWidth = function() {
      if (!isNaN(window.orientation)) {
        if (window.orientation == 90 || window.orientation == -90) return screen.height;
        return screen.width;
      }
      return $(document).width();
    },
    doTheMagic = function(element, settings) {
      for (var i in settings.resolutions) {
        if(settings.resolutions.hasOwnProperty(i)) {
          if (settings.resolutions[i].min <= settings.screenWidth && settings.screenWidth <= settings.resolutions[i].max) {
            $(element).find('img').each(function() {
              $(this).attr('src', $(this).data(i));
            });
            return;
          }
        }
      }
    }
  $.fn.imgzr = function(options) {
    var leThis = this, eventType = window.onorientationchange ? 'onorientationchange' : 'smartresize';
    settings = $.extend({}, defaults, options);
    $(window)
      .bind(eventType, function( event ) {
        settings.screenWidth = getScreenWidth();
        doTheMagic(leThis, settings);
      })
      .trigger(eventType);
    return this;
  };
})(jQuery);