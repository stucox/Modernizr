define(['createElement'], function ( createElement ) {
  // Inserts a style tag with the given cssText into an element
  var insertStyles = function ( cssText, elem ) {
    var style = createElement('style');
    if (style.styleSheet){
      style.styleSheet.cssText = cssText;
    } else {
      style.appendChild(document.createTextNode(cssText));
    }
    elem.appendChild(style);
  };

  return insertStyles;
});
