/*!
{
  "name": "CSS vw unit",
  "property": "cssvwunit",
  "caniuse": "viewport-units",
  "tags": ["css"],
  "notes": [{
    "name": "Related Modernizr Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/572"
  },{
    "name": "JSFiddle Example",
    "href": "http://jsfiddle.net/FWeinb/etnYC/"
  }]
}
!*/
define(['Modernizr', 'insertStyles'], function( Modernizr, insertStyles ) {
  Modernizr.addTest('cssvwunit', {
    setUp: function ( elem ) {
      var cssText = '#e!{width:50vw}';
      insertStyles(cssText, elem);
    },
    test: function ( elem ) {
      var width = parseInt(window.innerWidth/2,10);
      var compStyle = parseInt((window.getComputedStyle ?
                                getComputedStyle(elem, null) :
                                elem.currentStyle).width, 10);
      return compStyle == width;
    }
  });
});
