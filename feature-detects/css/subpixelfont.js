/*!
{
  "name": "CSS Subpixel Fonts",
  "property": "subpixelfont",
  "tags": ["css"],
  "authors": [
    "@derSchepp",
    "@gerritvanaaken",
    "@rodneyrehm",
    "@yatil",
    "@ryanseddon"
  ],
  "notes": [{
    "name": "Origin Test",
    "href": "https://github.com/gerritvanaaken/subpixeldetect"
  }]
}
!*/
define(['Modernizr', 'insertStyles', 'createElement'], function( Modernizr, insertStyles, createElement ) {
  /*
   * (to infer if GDI or DirectWrite is used on Windows)
   */
  Modernizr.addTest('subpixelfont', {
    setUp: function ( elem ) {
      var cssText = '#e!{position: absolute; top: -10em; visibility:hidden; font: normal 10px arial;}#e! div{float: left; font-size: 33.3333%;}';
      var subpixel = createElement('div');

      subpixel.innerHTML = 'This is a text written in Arial';
      elem.appendChild(subpixel);
      insertStyles(cssText, elem);
    },
    test: function ( elem ) {
      var subpixel = elem.children[0];
      return window.getComputedStyle ? window.getComputedStyle(subpixel, null).getPropertyValue('width') !== '44px'
                                     : false;
    }
  });
});
