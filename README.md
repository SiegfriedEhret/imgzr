# imgzr.js
jQuery image selector based on screen width

# how to use
Include jquery.  
Include this file.  
<pre>
$(function () {
  $('body').each(function() { $(this).imgzr(); });
});
</pre>

# configuration
Prepare your images like this : 
<pre>
<img src="./img/small.jpg" alt="" 
  data-small="./img/small.jpg" 
  data-medium="./img/medium.jpg"
  data-large="./img/large.jpg" />
</pre>
Your image should have the small image in src to prevent bandwith overcharging.
Add data-<size> with the image

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
Please write "img2base64" or something in your subject.