/*!
{
  "name": "CSS Display table",
  "property": "displaytable",
  "caniuse": "css-table",
  "authors": ["scottjehl"],
  "tags": ["css"],
  "notes": [{
    "name": "All additional table display values",
    "href": "http://pastebin.com/Gk9PeVaQ"
  }]
}
!*/
/* DOC
`display: table` and `table-cell` test. (both are tested under one name `table-cell` )

All additional table display values are here: http://pastebin.com/Gk9PeVaQ though Scott
has seen some IE false positives with that sort of weak detection.
More testing neccessary perhaps.
*/
define(['Modernizr', 'insertStyles', 'createElement'], function( Modernizr, insertStyles, createElement ) {
  Modernizr.addTest('displaytable', {
    setUp: function ( elem ) {
      // If a document is in rtl mode this test will fail so we force ltr mode on the injeced
      // element https://github.com/Modernizr/Modernizr/issues/716
      var cssText = '#e!{display: table; direction: ltr}#e! div{display: table-cell; padding: 10px}';
      elem.appendChild(createElement('div'));
      elem.appendChild(createElement('div'));
      insertStyles(cssText, elem);
    },
    test: function ( elem ) {
      return elem.children[0].offsetLeft < elem.children[1].offsetLeft;
    }
  }, { aliases: ['display-table'] });
});
