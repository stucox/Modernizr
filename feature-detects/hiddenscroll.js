/*!
{
  "name": "Hidden Scrollbar",
  "property": "hiddenscroll",
  "authors": ["Oleg Korsunsky"]
}
!*/
/* DOC
Detects whether scrollbars on overflowed blocks are hidden (a-la iPhone)
*/
define(['Modernizr', 'insertStyles'], function( Modernizr, insertStyles ) {
  Modernizr.addTest('hiddenscroll', {
    setUp: function ( elem ) {
      var cssText = '#e!{width:100px;height:100px;overflow:scroll}';
      insertStyles(cssText, elem);
    },
    test: function ( elem ) {
      return elem.offsetWidth === elem.clientWidth;
    }
  });
});
