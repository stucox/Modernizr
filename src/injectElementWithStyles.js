define(['ModernizrProto', 'docElement', 'createElement', 'getBody'], function( ModernizrProto, docElement, createElement, getBody ) {
  // Inject element with style element and some CSS rules
  function injectElementWithStyles( rule, callback, nodes, testnames ) {
    var mod = 'modernizr';
    var style;
    var ret;
    var node;
    var div = createElement('div');

    // IE6 will false positive on some tests due to the style element inside the test div somehow interfering offsetHeight;
    // Opera will act all quirky when injecting elements in documentElement when page is served as xml;
    // – so we use a fake body, if the body hasn’t loaded yet. #270
    var body = getBody();

    if ( parseInt(nodes, 10) ) {
      // In order not to give false positives we create a node for each test
      // This also allows the method to scale for unspecified uses
      while ( nodes-- ) {
        node = createElement('div');
        node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
        div.appendChild(node);
      }
    }

    // <style> elements in IE6-9 are considered 'NoScope' elements and therefore will be removed
    // when injected with innerHTML. To get around this you need to prepend the 'NoScope' element
    // with a 'scoped' element, in our case the soft-hyphen entity as it won't mess with our measurements.
    // msdn.microsoft.com/en-us/library/ms533897%28VS.85%29.aspx
    // Documents served as xml will throw if using &shy; so use xml friendly encoded version. See issue #277
    style = ['&#173;','<style id="s', mod, '">', rule, '</style>'].join('');
    div.id = mod;
    div.innerHTML += style;
    body.appendChild(div);

    // Fake body’s offset magic (which used to be here) is now set up by `getBody()`

    ret = callback(div, rule);

    // Fake body will be removed by testRunner (rather than here), if needed
    // TODO: `getBody()` & `cleanBody()` could count calls, so they set up
    // on the first and clean up on the last calls?

    return !!ret;

  }

  return injectElementWithStyles;
});
