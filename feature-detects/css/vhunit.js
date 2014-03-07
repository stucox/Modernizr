/*!
{
  "name": "CSS vh unit",
  "property": "cssvhunit",
  "caniuse": "viewport-units",
  "tags": ["css"],
  "notes": [{
    "name": "Related Modernizr Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/572"
  },{
    "name": "Similar JSFiddle",
    "href": "http://jsfiddle.net/FWeinb/etnYC/"
  }]
}
!*/
define(['Modernizr', 'insertStyles'], function( Modernizr, insertStyles ) {
  Modernizr.addTest('cssvhunit', {
    setUp: function ( elem ) {
      var cssText = '#e!{height:50vh;}';
      insertStyles(cssText, elem);
    },
    test: function ( elem ) {
      var height = parseInt(window.innerHeight/2,10);
      var compStyle = parseInt((window.getComputedStyle ?
                                getComputedStyle(elem, null) :
                                elem.currentStyle).height, 10);
      return compStyle == height;
    }
  });
});
