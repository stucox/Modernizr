/*!
{
  "name": "CSS Generated Content",
  "property": "generatedcontent",
  "tags": ["css"],
  "warnings": ["Android won't return correct height for anything below 7px #738"]
}
!*/
define(['Modernizr', 'insertStyles'], function( Modernizr, insertStyles ) {
  Modernizr.addTest('generatedcontent', {
    setUp: function ( elem ) {
      var cssText = '#e!{font:0/0 a}#e!:after{content:":)";visibility:hidden;font:7px/1 a}';
      insertStyles(cssText, elem);
    },
    test: function ( elem ) {
      return elem.offsetHeight >= 7;
    }
  });
});
