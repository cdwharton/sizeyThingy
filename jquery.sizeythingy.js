/**
 * jQuery sizeyThingy v1.1
 * Copyright (C) 2012 Chris Wharton (chris@weare2ndfloor.com)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * THIS SOFTWARE AND DOCUMENTATION IS PROVIDED "AS IS," AND COPYRIGHT
 * HOLDERS MAKE NO REPRESENTATIONS OR WARRANTIES, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO, WARRANTIES OF MERCHANTABILITY OR
 * FITNESS FOR ANY PARTICULAR PURPOSE OR THAT THE USE OF THE SOFTWARE
 * OR DOCUMENTATION WILL NOT INFRINGE ANY THIRD PARTY PATENTS,
 * COPYRIGHTS, TRADEMARKS OR OTHER RIGHTS.COPYRIGHT HOLDERS WILL NOT
 * BE LIABLE FOR ANY DIRECT, INDIRECT, SPECIAL OR CONSEQUENTIAL
 * DAMAGES ARISING OUT OF ANY USE OF THE SOFTWARE OR DOCUMENTATION.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://gnu.org/licenses/>.
 
 */
(function ($) {
    $.sizeyThingy = function (options) {
        var defaults = {
        	message: "Browser size... ",
            messageWidth: "W: ",
            messageHeight: "H: ",
            relativePosition: false,
            mobileRelative: true,
            dark: true
        };
        var options = $.extend(defaults, options);
        message = options.message;
        messageWidth = options.messageWidth;
        messageHeight = options.messageHeight;
        relativePosition = options.relativePosition;
        mobileRelative = options.mobileRelative;
        dark = options.dark;
        //detect known mobile/tablet usage
        if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i)) || (navigator.userAgent.match(/Android/i)) || (navigator.userAgent.match(/Blackberry/i)) || (navigator.userAgent.match(/Windows Phone/i))) {
            var isMobile = true;
        }
        if (dark) {
            sizeyColour = "background:#333;color:#fff;"
        } else {
            sizeyColour = "background:#fff;color:#333;"
        }
        sizeyThingyWidth = jQuery(window).width();
        sizeyThingyHeight = jQuery(window).height();
        jQuery('body').prepend('<div id="sizeythingy" style="position:fixed;top:0;left:0;width:90%;padding:15px 5%;'+sizeyColour+'font-size:17px;z-index:999;" />');
        jQuery('#sizeythingy').html(message + messageWidth + sizeyThingyWidth + "px | " + messageHeight + sizeyThingyHeight + "px");
        jQuery(window).resize(function () {
            sizeyThingyWidth = jQuery(window).width();
            sizeyThingyHeight = jQuery(window).height();
            jQuery('#sizeythingy').html(message + messageWidth + sizeyThingyWidth + "px | " + messageHeight + sizeyThingyHeight + "px");
        });
        if (((isMobile) && (mobileRelative)) || (relativePosition)) {
            jQuery('#sizeythingy').css("position", "relative")
        }
       
    };
})(jQuery);