define(['getBody', 'docElement'], function( getBody, docElement ) {
  // Cleans up a fake body, if there is one
  function cleanBody() {
    var body = getBody();

    if(body.fake) {
      body.parentNode.removeChild(body);
      // Ah, someone kindly left `body.docOverflow` for us to use
      docElement.style.overflow = body.docOverflow;
      // Trigger layout so kinetic scrolling isn't disabled in iOS6+ (#707)
      docElement.offsetHeight;
    }
  }

  return cleanBody;
});
