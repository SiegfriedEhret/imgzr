(function($){
  var defaults = {
    resolutions:{
      small:{min:0, max:480},
      medium:{min:480, max:810},
      large:{min:810, max:1600}
    }
  }
  $.fn.imgzr = function(options) {
    var settings = $.extend({}, defaults, options);
    for (var i in settings.resolutions) {
      if(settings.resolutions.hasOwnProperty(i)) {
        if (settings.resolutions[i].min <= screen.width && screen.width <= settings.resolutions[i].max) {
          $(this).find('img').each(function() {
            $(this).attr('src', $(this).data(i));
          });
        }
      }
    }
    return this;
  };
})(jQuery);