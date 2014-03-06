define(['is'], function ( is ) {
  // Creates an object-based definition of a test, from a test object,
  // function or boolean
  var createTestObject = function ( name, testDefn, options ) {
    var testObj = {
      name: name,
      options: options
    };

    // `testDefn` may be an object, a function or a straight-up boolean;
    // – object: split out `setUp` and `test phases
    // – function: assume it’s the `test` phase
    // – boolean: wrap as a function for consistency
    // TODO: copy across any other properties set on `testDefn`?
    if (is(testDefn, 'object')) {
      testObj.setUp = testDefn.setUp;
      testObj.test = testDefn.test;
      testObj.tearDown = testDefn.tearDown;
    }
    else if (is(testDefn, 'function')) {
      testObj.test = testDefn;
    }
    else {
      testObj.test = function () { return testDefn; };
    }

    return testObj;
  };

  return createTestObject;
});
