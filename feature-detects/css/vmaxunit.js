/*!
{
  "name": "CSS vmax unit",
  "property": "cssvmaxunit",
  "caniuse": "viewport-units",
  "tags": ["css"],
  "notes": [{
    "name": "Related Modernizr Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/572"
  },{
    "name": "JSFiddle Example",
    "href": "http://jsfiddle.net/glsee/JDsWQ/4/"
  }]
}
!*/
define(['Modernizr', 'docElement', 'insertStyles'], function( Modernizr, docElement, insertStyles ) {
  Modernizr.addTest('cssvmaxunit', {
    setUp: function ( elem ) {
      var cssText = '#e!{width:50vmax;}';
      insertStyles(cssText, elem);
    },
    test: function ( elem ) {
      var one_vw = docElement.clientWidth/100;
      var one_vh = docElement.clientHeight/100;
      var compWidth = parseInt((window.getComputedStyle ?
                                getComputedStyle(elem, null) :
                                elem.currentStyle).width, 10);
      return parseInt(Math.max(one_vw, one_vh) * 50, 10) == compWidth;
    }
  });
});
