/*!
{
  "name": "CSS Generated Content Animations",
  "property": "csspseudoanimations",
  "tags": ["css"]
}
!*/
define(['Modernizr', 'insertStyles', 'prefixes', 'test/css/animations'], function ( Modernizr, insertStyles, prefixes ) {
  Modernizr.addTest('csspseudoanimations', {
    setUp: function ( elem ) {
      var cssText = [
        '@', prefixes.join('keyframes csspseudoanimations { from { font-size: 10px; } }@').replace(/\@$/,''),
        '#e!:before { content:" "; font-size:5px;',
        prefixes.join('animation:csspseudoanimations 1ms infinite;'),
        '}'
      ].join('');

      insertStyles(cssText, elem);
    },
    test: function ( elem ) {
      // Quick exit if no CSS animations & window.getComputedStyle support
      if (!Modernizr.cssanimations || !window.getComputedStyle) {
        return false;
      }

      return window.getComputedStyle(elem, ':before').getPropertyValue('font-size') === '10px';
    }
  });
});
