/*!
{
  "name": "CSS vmin unit",
  "property": "cssvminunit",
  "caniuse": "viewport-units",
  "tags": ["css"],
  "notes": [{
    "name": "Related Modernizr Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/572"
  },{
    "name": "JSFiddle Example",
    "href": "http://jsfiddle.net/glsee/JRmdq/8/"
  }]
}
!*/
define(['Modernizr', 'docElement', 'insertStyles'], function( Modernizr, docElement, insertStyles ) {
  Modernizr.addTest('cssvminunit', {
    setUp: function ( elem ) {
      var cssText = '#e!{width:50vmin;}';
      insertStyles(cssText, elem);
    },
    test: function ( elem ) {
      var one_vw = docElement.clientWidth/100;
      var one_vh = docElement.clientHeight/100;
      var compWidth = parseInt((window.getComputedStyle ?
                                getComputedStyle(elem, null) :
                                elem.currentStyle).width, 10);
      return parseInt(Math.min(one_vw, one_vh) * 50, 10) == compWidth;
    }
  });
});
