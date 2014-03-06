/*!
{
  "name": "input[type=\"number\"] Localization",
  "property": "localizednumber",
  "tags": ["forms", "localization", "attribute"],
  "authors": ["Peter Janes"],
  "notes": [{
    "name": "Webkit Bug Tracker Listing",
    "href": "https://bugs.webkit.org/show_bug.cgi?id=42484"
  },{
    "name": "Based on This",
    "href": "http://trac.webkit.org/browser/trunk/LayoutTests/fast/forms/script-tests/input-number-keyoperation.js?rev=80096#L9"
  }]
}
!*/
/* DOC
Detects whether input type="number" is capable of receiving and
displaying localized numbers, e.g. with comma separator
*/
define(['Modernizr'], function( Modernizr ) {
  Modernizr.addTest('localizednumber', {

    setUp: function ( elem ) {
      var input;

      elem.innerHTML = '<input type="number" value="1.0" step="0.1"/>';
      input = elem.childNodes[0];
      input.focus();

      try {
        document.execCommand('InsertText', false, '1,1');
      }
      catch(e) { } // prevent warnings in IE
    },

    test: function ( elem ) {
      var input = elem.childNodes[0];
      var diff = input.type === 'number' &&
          input.valueAsNumber === 1.1 &&
          input.checkValidity();
      return diff;
    }

  });
});
