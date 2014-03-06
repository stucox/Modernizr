/*!
{
  "name": "CSS Generated Content",
  "property": "generatedcontent",
  "tags": ["css"],
  "warnings": ["Android won't return correct height for anything below 7px #738"]
}
!*/
define(['Modernizr', 'createElement'], function( Modernizr, createElement ) {
  Modernizr.addTest('generatedcontent', {
    setUp: function ( elem ) {
      var style = createElement('style');
      style.innerHTML = '#' + elem.id + '{font:0/0 a}#' + elem.id + ':after{content:":)";visibility:hidden;font:7px/1 a}';
      elem.appendChild(style);
    },
    test: function ( elem ) {
      return elem.offsetHeight >= 7;
    }
  });
});
