/*!
{
  "name": "CSS Generated Content Transitions",
  "property": "csspseudotransitions",
  "tags": ["css"]
}
!*/
define(['Modernizr', 'insertStyles', 'prefixes', 'test/css/transitions'], function ( Modernizr, insertStyles, prefixes ) {
  Modernizr.addTest('csspseudotransitions', {
    setUp: function ( elem ) {
      var cssText =
        '#e!:before { content:" "; font-size:5px;' + prefixes.join('transition:0s 100s;') + '}' +
        '#e!.trigger:before { font-size:10px; }';

      insertStyles(cssText, elem);
    },
    test: function ( elem ) {
      // Quick exit if no CSS transitions & window.getComputedStyle support
      if (!Modernizr.csstransitions || !window.getComputedStyle) {
        return false;
      }

      // This test used to force DOM rendering here, but in object format this
      // isn’t necessary because rendering is forced between `setUp` and `test`
      // anyway
      elem.className = 'trigger';
      // pseudo transitions supported if `font-size` *doesn’t* change
      return window.getComputedStyle(elem, ':before').getPropertyValue('font-size') === '5px';
    }
  });
});
