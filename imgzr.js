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
  var defaults = {
      resolutions:{
        small:{min:0, max:480},
        medium:{min:480, max:768},
        large:{min:768, max:10000}
      }
    },
    getScreenWidth = function() {
      if (window.orientation && (window.orientation == 90 || window.orientation == -90)) {
        return screen.height;
      }
      return screen.width;
    };
  $.fn.imgzr = function(options) {
    var settings = $.extend({}, defaults, options),
      screenWidth = getScreenWidth();
    alert(screenWidth);
    for (var i in settings.resolutions) {
      if(settings.resolutions.hasOwnProperty(i)) {
        if (settings.resolutions[i].min <= screenWidth && screenWidth <= settings.resolutions[i].max) {
          $(this).find('img').each(function() {
            $(this).attr('src', $(this).data(i));
          });
        }
      }
    }
    return this;
  };
})(jQuery);