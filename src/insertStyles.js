define(['createElement'], function ( createElement ) {
  // Inserts a style tag with the given cssText into an element
  // The shorthand syntax `#e!` can be used to target the element itself
  // if it has an ID
  var insertStyles = function ( cssText, elem ) {
    var style = createElement('style');

    if (elem.id) {
      cssText = cssText.replace(/#e!/g, '#' + elem.id);
    }

    if (style.styleSheet){
      style.styleSheet.cssText = cssText;
    } else {
      style.appendChild(document.createTextNode(cssText));
    }
    elem.appendChild(style);
  };

  return insertStyles;
});
