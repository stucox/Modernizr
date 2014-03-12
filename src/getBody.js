define(['createElement', 'docElement'], function( createElement, docElement ) {
  function getBody() {
    // After page load injecting a fake body doesn't work so check if body exists
    var body = document.body;

    if(!body) {
      // Can't use the real body create a fake one.
      body = createElement('body');
      body.fake = true;

      //avoid crashing IE8, if background image is used
      body.style.background = '';
      //Safari 5.13/5.1.4 OSX stops loading if ::-webkit-scrollbar is used and scrollbars are visible (#524)
      body.style.overflow = 'hidden';
      // Just gonna be cheeky and hide this here, so it’s easy to retrieve later
      body.docOverflow = docElement.style.overflow;
      docElement.style.overflow = 'hidden';
      docElement.appendChild(body);
    }

    return body;
  }

  return getBody;
});
