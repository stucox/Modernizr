/*!
{
  "name": "CSS :nth-child pseudo-selector",
  "caniuse": "css-sel3",
  "property": "nthchild",
  "tags": ["css"],
  "notes": [
    {
      "name": "Related Github Issue",
      "href": "https://github.com/Modernizr/Modernizr/pull/685"
    },
    {
      "name": "Sitepoint :nth-child documentation",
      "href": "http://reference.sitepoint.com/css/pseudoclass-nthchild"
    }
  ],
  "authors": ["@emilchristensen"],
  "warnings": ["Known false negative in Safari 3.1 and Safari 3.2.2"]
}
!*/
/* DOC
Detects support for the ':nth-child()' CSS pseudo-selector.
*/
define(['Modernizr', 'insertStyles', 'createElement'], function( Modernizr, insertStyles, createElement ) {
  Modernizr.addTest('nthchild', {
    // 5 `<div>` elements with `1px` width are created.
    // Then every other element has its `width` set to `2px`.
    // A Javascript loop then tests if the `<div>`s have the expected width
    // using the modulus operator.
    setUp: function ( elem ) {
      var cssText = '#e! div {width:1px} #e! div:nth-child(2n) {width:2px;}';
      for (var i = 0; i < 5; i++) {
        elem.appendChild(createElement('div'));
      }
      insertStyles(cssText, elem);
    },
    test: function ( elem ) {
      var result = true;
      for (var i = 0; i < 5; i++) {
        result = result && elem.children[i].offsetWidth === i % 2 + 1;
      }
      return result;
    }
  });
});
