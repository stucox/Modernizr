/*!
{
  "name": "CSS :last-child pseudo-selector",
  "caniuse": "css-sel3",
  "property": "lastchild",
  "tags": ["css"],
  "notes": [{
    "name": "Related Github Issue",
    "href": "https://github.com/Modernizr/Modernizr/pull/304"
  }]
}
!*/
define(['Modernizr', 'insertStyles', 'createElement'], function( Modernizr, insertStyles, createElement ) {
  Modernizr.addTest('lastchild', {
    setUp: function ( elem ) {
      var cssText = '#e! div {width:100px} #e! :last-child{width:200px;display:block}';
      insertStyles(cssText, elem);
      elem.appendChild(createElement('div'));
      elem.appendChild(createElement('div'));
    },
    test: function ( elem ) {
      return elem.lastChild.offsetWidth > elem.firstChild.offsetWidth;
    }
  });
});
