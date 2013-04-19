define(['docElement', 'is'], function( docElement, is ) {
  // Adapted from http://snipplr.com/view/13523/
  // Properties should be hyphenated (e.g. `box-shadow`)
  var getStyle = function( node, prop, pseudo ) {

    // Use the document's default view (if supported... IE9+) for correct scoping
    var win = document.defaultView || window;
    var re = /(\-([a-z]){1})/g;

    // Modern browsers
    if (win.getComputedStyle) {
      return win.getComputedStyle(node, pseudo).getPropertyValue(prop);
    }

    // Old IE
    else {
      if (prop == 'float') {
        prop = 'styleFloat';
      }
      // Properties need to be specified in camelCase
      if (re.test(prop)) {
        prop = prop.replace(re, function () {
            return arguments[2].toUpperCase();
        });
      }
      return (prop in node.currentStyle) ? node.currentStyle[prop] : null;
    }

  };
  return getStyle;
});
