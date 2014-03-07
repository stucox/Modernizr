/*!
{
  "name": "details Element",
  "caniuse": "details",
  "property": "details",
  "tags": ["elem"],
  "authors": ["@mathias"],
  "notes": [{
    "name": "Mathias' Original",
    "href": "http://mths.be/axh"
  }]
}
!*/
define(['Modernizr', 'createElement', 'insertStyles'], function( Modernizr, createElement, insertStyles ) {
  Modernizr.addTest('details', {
    setUp: function ( elem ) {
      var cssText = '#e! details{display:block}';
      var details = createElement('details');

      details.innerHTML = '<summary>a</summary>b';
      elem.appendChild(details);

      insertStyles(cssText, elem);
    },
    test: function ( elem ) {
      var details = elem.children[0];
      var height;

      // return early if possible; thanks @aFarkas!
      if (!('open' in details)) {
        return false;
      }

      // Otherwise, we’re looking for a change in height when
      // details is opened
      // TODO: Can we do this without DOM read-write-read?
      height = details.offsetHeight;
      details.open = true;
      return height != details.offsetHeight;
    }
  });
});
