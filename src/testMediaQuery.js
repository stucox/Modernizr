define(['injectElementWithStyles', 'getStyle'], function( injectElementWithStyles, getStyle ) {
  // adapted from matchMedia polyfill
  // by Scott Jehl and Paul Irish
  // gist.github.com/786768
  var testMediaQuery = function( mq ) {
    var matchMedia = window.matchMedia || window.msMatchMedia;
    var bool;
    if ( matchMedia ) {
      return matchMedia(mq) && matchMedia(mq).matches || false;
    }

    injectElementWithStyles('@media ' + mq + ' { #modernizr { position: absolute; } }', function( node ) {
      bool = getStyle(node, 'position') == 'absolute';
    });

    return bool;
  };

  return testMediaQuery;
});
