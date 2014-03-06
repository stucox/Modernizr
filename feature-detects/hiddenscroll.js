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
define(['Modernizr', 'createElement'], function( Modernizr, createElement ) {
  Modernizr.addTest('hiddenscroll', {
    setUp: function ( elem ) {
      var style = createElement('style');
      style.innerHTML = '#' + elem.id + '{width:100px;height:100px;overflow:scroll}';
      elem.appendChild(style);
    },
    test: function ( elem ) {
      return elem.offsetWidth === elem.clientWidth;
    }
  });
});
