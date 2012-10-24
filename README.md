sizeyThingy
===========

Demo: http://weare2ndfloor.com/sizeythingy/

Just a quick way of seeing what size your browser width is, helps with Responsive design

Just include the jQuery library (http://jquery.com)

Then this file (jquery.sizeythingy.js)

in your HTML e.g.

    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.js"></script> 
    <script src="assets/js/plugins/jquery.sizeythingy.js"></script> 

Then in your usual document.ready...


    jQuery(document).ready(function() {

    jQuery.sizeyThingy(); 
    
    });

There are only 5 options...

message: "Browser width..." - This preceeds measurement message

sizeyThingyMessage: "W: " - This is just for the start of the information bar.

sizeyThingyRelative: false -This is to say "I want this to sit within the flow of html, e.g. at top, not overlaying anything".

sizeyForMobileRelative: true - If you're using a mobile/smart phone/tablet this allows you to switch off fixed positioning just for know mobile devices.

messageWidth: "W: " - This is just for the start of the information bar.

relativePosition: false - This is to say "I want this to sit within the flow of html, e.g. at top, not overlaying anything".

mobileRelative: true - If you're using a mobile/smart phone/tablet this allows you to switch off fixed positioning just for know mobile devices.

dark: true - Would you like a white bar with dark text or a dark bar with white text, false for white bar, true for dark bar

That's it - happy responsive designing, resize your browser to see the value updating :)