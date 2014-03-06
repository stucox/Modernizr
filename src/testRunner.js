define(['tests', 'Modernizr', 'classes', 'createElement', 'getBody'], function( tests, Modernizr, classes, createElement, getBody ) {
  // Run through all tests and detect their support in the current UA.
  function testRunner() {
    var featureNames;
    var feature;
    var aliasIdx;
    var result;
    var nameIdx;
    var featureName;
    var featureNameSplit;
    var featureIdx;
    var body = getBody();
    var root = createElement('div');

    body.appendChild(root);

    // SETUP EACH TEST:
    // Create an element for each test to play with & run its setup fn (if it has one)
    for ( featureIdx in tests ) {
      feature = tests[featureIdx];
      feature.elem = createElement('div');

      // Some tests require the element to be in the body, so we just
      // guarantee *all* tests will run in the body (even if it’s a
      // fake one)
      root.appendChild(feature.elem);

      if (feature.setUp) {
        feature.setUp(feature.elem);
      }
    }

    // RUN EACH TEST
    // With the elements we created earlier, storing the result on the Modernizr obj
    for ( featureIdx in tests ) {
      featureNames = [];
      feature = tests[featureIdx];
      // run the test, throw the return value into the Modernizr,
      //   then based on that boolean, define an appropriate className
      //   and push it into an array of classes we'll join later.
      //
      //   If there is no name, it's an 'async' test that is run,
      //   but not directly added to the object. That should
      //   be done with a post-run addTest call.
      if ( feature.name ) {
        featureNames.push(feature.name.toLowerCase());

        if (feature.options && feature.options.aliases && feature.options.aliases.length) {
          // Add all the aliases into the names list
          for (aliasIdx = 0; aliasIdx < feature.options.aliases.length; aliasIdx++) {
            featureNames.push(feature.options.aliases[aliasIdx].toLowerCase());
          }
        }
      }

      // Run the test
      result = feature.test(feature.elem);

      // Set each of the names on the Modernizr object
      for (nameIdx = 0; nameIdx < featureNames.length; nameIdx++) {
        featureName = featureNames[nameIdx];
        // Support dot properties as sub tests. We don't do checking to make sure
        // that the implied parent tests have been added. You must call them in
        // order (either in the test, or make the parent test a dependency).
        //
        // Cap it to TWO to make the logic simple and because who needs that kind of subtesting
        // hashtag famous last words
        featureNameSplit = featureName.split('.');

        if (featureNameSplit.length === 1) {
          Modernizr[featureNameSplit[0]] = result;
        }
        else if (featureNameSplit.length === 2) {
          Modernizr[featureNameSplit[0]][featureNameSplit[1]] = result;
        }

        classes.push((result ? '' : 'no-') + featureNameSplit.join('-'));
      }
    }

    // TEAR DOWN
    // Feature tests may define a `tearDown` method
    for ( featureIdx in tests ) {
      feature = tests[featureIdx];
      if (feature.tearDown) {
        feature.tearDown(feature.elem);
      }
    }
    // But in any case we need to remove the stuff we left in the DOM
    if (body.fake) {
      body.parentNode.removeChild(body);
    }
    else {
      root.parentNode.removeChild(root);
    }
  }

  return testRunner;
});
