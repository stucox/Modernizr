/*!
{
  "name": "CSS Stylable Scrollbars",
  "property": "cssscrollbar",
  "tags": ["css"]
}
!*/
define(['Modernizr', 'insertStyles', 'prefixes'], function( Modernizr, insertStyles, prefixes ) {
  Modernizr.addTest('cssscrollbar', {
    setUp: function ( elem ) {
      var cssText = '#e!{overflow: scroll; width: 40px; height: 40px; }#' + prefixes
        .join('scrollbar{width:0px}'+' #e!::')
        .split('#')
        .slice(1)
        .join('#') + 'scrollbar{width:0px}';
      insertStyles(cssText, elem);
    },
    test: function ( elem ) {
      return elem.scrollWidth == 40;
    }
  });
});
