# imgzr.js
jQuery image selector based on screen width

# how to use
Include jquery.  
Include [jquery smartresize](https://github.com/louisremi/jquery-smartresize/).  
Include this file.  
<pre>
$(function () {
  $('body').imgzr();
});
</pre>
It will look into the given element (here "body") for image and change the src if needed.

# configuration
Prepare your images !
Your image should have the small image in src to prevent bandwith overcharging.
Add data-<size> with the well sized image.
Example : 
<pre>
img src="./img/small.jpg" alt="" 
  data-small="./img/small.jpg" 
  data-medium="./img/medium.jpg"
  data-large="./img/large.jpg"
</pre>
(Sorry, I dropped the "<" & "/>" because of the pre tag)

The default configuration is the following :
<pre>
resolutions:{
  small:{min:0, max:480},
  medium:{min:480, max:768},
  large:{min:768, max:10000}
}
</pre>
You can change this passing a new configuration to the function call :
<pre>
$(function () {
  var config = {
    resolutions:{
      small:{min:0, max:1000},
      medium:{min:1000, max:10000},
      large:{min:10000, max:100000}
    }
  };
  $('body').imgzr(config);
});
</pre>

# license
This script is licensed under the terms of the WTF Public License (see [here](http://en.wikipedia.org/wiki/WTFPL) and [here](http://sam.zoy.org/wtfpl/)) :
<pre>
            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE 
                    Version 2, December 2004 

 Copyright (C) 2004 Sam Hocevar <sam@hocevar.net> 

 Everyone is permitted to copy and distribute verbatim or modified 
 copies of this license document, and changing it is allowed as long 
 as the name is changed. 

            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE 
   TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION 

  0. You just DO WHAT THE FUCK YOU WANT TO. 
</pre>

# Contact
You can contact me at siegfried.ehretATgmail.com
(replace AT with @)
Please write "imgzr" or something in your subject.