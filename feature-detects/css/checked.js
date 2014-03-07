/*!
{
  "name": "CSS :checked pseudo-selector",
  "caniuse": "css-sel3",
  "property": "checked",
  "tags": ["css"],
  "notes": [{
    "name": "Related Github Issue",
    "href": "https://github.com/Modernizr/Modernizr/pull/879"
  }]
}
!*/
define(['Modernizr', 'createElement', 'insertStyles'], function( Modernizr, createElement, insertStyles ) {
  Modernizr.addTest('checked', {
    setUp: function ( elem ) {
      var cssText = '#e!{position:absolute}#e! input{margin-left:10px}#e! :checked{margin-left:20px;display:block}';
      var checkbox = createElement('input');

      insertStyles(cssText, elem);

      checkbox.setAttribute('type', 'checkbox');
      checkbox.setAttribute('checked', 'checked');
      elem.appendChild(checkbox);
    },
    test: function ( elem ) {
      var checkbox = elem.children[1];
      return checkbox.offsetLeft === 20;
    }
  });
});
