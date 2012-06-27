/**
 * jQuery sizeyThingy v1.0
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
            sizeyThingyMessage: "W: ",
            sizeyThingyRelative: false,
            sizeyForMobileRelative: true,
            sizeyThingyLight: true
        };
        var options = $.extend(defaults, options);
        sizeyThingyMessage = options.sizeyThingyMessage;
        sizeyThingyRelative = options.sizeyThingyRelative;
        sizeyForMobileRelative = options.sizeyForMobileRelative;
        sizeyThingyLight = options.sizeyThingyLight;
        //detect known mobile/tablet usage
        if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i)) || (navigator.userAgent.match(/Android/i)) || (navigator.userAgent.match(/Blackberry/i)) || (navigator.userAgent.match(/Windows Phone/i))) {
            var isMobile = true;
        }
        if (sizeyThingyLight) {
            sizeyColour = "background:#fff;background:rgba(255,255,255,0.6);color:#000;"
        } else {
            sizeyColour = "background:#000;background:rgba(0,0,0,0.6);color:#fff;"
        }
        sizeyThingyWidth = jQuery(window).width();
        jQuery('body').prepend('<div id="sizeythingy" style="position:fixed;top:0;left:0;width:90%;padding:4px 5%;'+sizeyColour+'font-size:12px;z-index:999;" />');
        jQuery('#sizeythingy').html(sizeyThingyMessage + sizeyThingyWidth + "px");
        jQuery(window).resize(function () {
            sizeyThingyWidth = jQuery(window).width();
            jQuery('#sizeythingy').html(sizeyThingyMessage + sizeyThingyWidth + "px");
        });
        if (((isMobile) && (sizeyForMobileRelative)) || (sizeyThingyRelative)) {
            jQuery('#sizeythingy').css("position", "relative")
        }
       
    };
})(jQuery);