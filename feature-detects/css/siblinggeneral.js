/*!
{
  "name": "CSS general sibling selector",
  "caniuse": "css-sel3",
  "property": "siblinggeneral",
  "tags": ["css"],
  "notes": [{
    "name": "Related Github Issue",
    "href": "https://github.com/Modernizr/Modernizr/pull/889"
  }]
}
!*/
define(['Modernizr', 'insertStyles', 'createElement'], function( Modernizr, insertStyles, createElement ) {
  Modernizr.addTest('siblinggeneral', {
    setUp: function ( elem ) {
      var cssText = '#e! div {width:100px} #e! div ~ div {width:200px;display:block}';
      insertStyles(cssText, elem);
      elem.appendChild(createElement('div'));
      elem.appendChild(createElement('div'));
    },
    test: function ( elem ) {
      return elem.lastChild.offsetWidth == 200;
    }
  });
});
