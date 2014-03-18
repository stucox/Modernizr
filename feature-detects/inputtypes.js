/*!
{
  "name": "Form input types",
  "property": "inputtypes",
  "caniuse": "forms",
  "tags": ["forms"],
  "authors": ["Mike Taylor"],
  "polyfills": [
    "jquerytools",
    "webshims",
    "h5f",
    "webforms2",
    "nwxforms",
    "fdslider",
    "html5slider",
    "galleryhtml5forms",
    "jscolor",
    "html5formshim",
    "jqueryformshim",
    "selectedoptionsjs",
    "formvalidationjs"
  ]
}
!*/
/* DOC
Detects support for HTML5 form input types and exposes Boolean subproperties with the results:

```javascript
Modernizr.inputtypes.color
Modernizr.inputtypes.date
Modernizr.inputtypes.datetime
Modernizr.inputtypes['datetime-local']
Modernizr.inputtypes.email
Modernizr.inputtypes.month
Modernizr.inputtypes.number
Modernizr.inputtypes.range
Modernizr.inputtypes.search
Modernizr.inputtypes.tel
Modernizr.inputtypes.time
Modernizr.inputtypes.url
Modernizr.inputtypes.week
```
*/
define(['Modernizr', 'createElement', 'inputtypes', 'smile'], function( Modernizr, createElement, inputtypes, smile ) {
  // Run through HTML5's new input types to see if the UA understands any.
  //   This is put behind the tests runloop because it doesn't return a
  //   true/false like all the other tests; instead, it returns an object
  //   containing each input type with its corresponding true/false value

  // Big thanks to @miketaylr for the html5 forms expertise. miketaylr.com/
  Modernizr.addTest('inputtypes', {
    setUp: function ( elem ) {
      var inputElem;
      var inputElemType;
      this.elems = [];

      for ( var i = 0; i < inputtypes.length; i++ ) {
        inputElem = createElement('input');
        inputElemType = inputtypes[i];

        inputElem.setAttribute('type', inputElemType);
        inputElem.value         = smile;
        inputElem.style.cssText = 'position:absolute;visibility:hidden;';

        this.elems.push(inputElem);

        // Only [type=range] needs to be in the DOM, and only if WebKit
        // so we can target a false-positive in Safari 2-4 (see below)
        if (/^range$/.test(inputElemType) && inputElem.style.WebkitAppearance !== undefined) {
          elem.appendChild(inputElem);
        }
      }
    },

    test: function () {
      var inputElem;
      var inputElemType;
      var defaultView;
      var bool;
      var results = {};

      for ( var i = 0; i < inputtypes.length; i++ ) {

        inputElem = this.elems[i];
        inputElemType = inputElem.type;

        // We first check to see if the type we gave it stuck..
        // If the type does, we check our textual value (smile), which shouldn't be valid.
        // If the value doesn't stick, we know there's input sanitization which infers a custom UI
        bool = inputElem.type !== 'text';

        if ( bool ) {

          if ( /^range$/.test(inputElemType) && inputElem.style.WebkitAppearance !== undefined ) {

            defaultView = document.defaultView;

            // Safari 2-4 allows the smiley as a value, despite making a slider
            bool =  defaultView.getComputedStyle &&
              defaultView.getComputedStyle(inputElem, null).WebkitAppearance !== 'textfield' &&
              // Mobile android web browser has false positive, so must
              // check the height to see if the widget is actually there.
              (inputElem.offsetHeight !== 0);

          }
          else if ( /^(search|tel)$/.test(inputElemType) ) {
            // Spec doesn't define any special parsing or detectable UI
            //   behaviors so we pass these through as true

            // Interestingly, opera fails the earlier test, so it doesn't
            //  even make it here.

          }
          else if ( /^(url|email)$/.test(inputElemType) ) {
            // Real url and email support comes with prebaked validation.
            bool = inputElem.checkValidity && inputElem.checkValidity() === false;

          }
          else {
            // If the upgraded input compontent rejects the :) text, we got a winner
            bool = inputElem.value != smile;
          }
        }

        results[ inputtypes[i] ] = !!bool;
      }
      return results;
    }
  });
});
