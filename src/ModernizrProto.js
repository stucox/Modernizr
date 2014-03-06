define(['tests', 'is'], function ( tests, is ) {
  var ModernizrProto = {
    // The current version, dummy
    _version: 'v3.0.0pre',

    // Any settings that don't work as separate modules
    // can go in here as configuration.
    _config: {
      classPrefix : '',
      enableClasses : true,
      usePrefixes : true
    },

    // Queue of tests
    _q: [],

    // Stub these for people who are listening
    on: function( test, cb ) {
      // I don't really think people should do this, but we can
      // safe guard it a bit.
      // -- NOTE:: this gets WAY overridden in src/addTest for
      // actual async tests. This is in case people listen to
      // synchronous tests. I would leave it out, but the code
      // to *disallow* sync tests in the real version of this
      // function is actually larger than this.
      setTimeout(function() {
        cb(this[test]);
      }, 0);
    },

    addTest: function( name, test, options ) {
      // `test` may be an object, a function or a straight-up boolean;
      // – object: split out `setUp` and `test phases
      // – function: assume it’s the `test` phase
      // – boolean: wrap as a function for consistency
      if (is(test, 'object')) {
        tests.push({
          name: name,
          setUp: test.setUp,
          test: test.test,
          options: options
        });
      }
      else if (is(test, 'function')) {
        tests.push({
          name: name,
          test: test,
          options: options
        });
      }
      else {
        tests.push({
          name: name,
          test: function () { return test; },
          options : options
        });
      }
    },

    addAsyncTest: function (test) {
      tests.push({
        name: null,
        test: test
      });
    }
  };

  return ModernizrProto;
});
