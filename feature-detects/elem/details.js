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
      var details1 = createElement('details');
      var details2 = createElement('details');

      // return early if possible; thanks @aFarkas!
      if (!('open' in details1)) {
        // TODO: use this.resolve() once implemented
        return;
      }

      details1.innerHTML = '<summary>a</summary>b';
      details2.innerHTML = '<summary>a</summary>b';
      details2.open = true;

      elem.appendChild(details1);
      elem.appendChild(details2);

      insertStyles(cssText, elem);
    },
    test: function ( elem ) {
      var details1 = elem.children[0];
      var details2 = elem.children[1];

      // Otherwise, details1 and details2 will be different heights
      // if the `open` property has had an effect
      return details1.offsetHeight != details2.offsetHeight;
    }
  });
});
