define(['Modernizr', 'addTest', 'docElement'], function( Modernizr, addTest, docElement ) {
    // Detects a hover-capable input device:
    // - Is `undefined` until it witnesses a hover-capable device being used,
    //   when it becomes `true`
    // - If a user doesn't ever interact with the window with their hover
    //   device, result remains `undefined`
    // - If a user stops using or disconnects the device, remains latched at
    //   `true`
    // - Can never detect the *lack* of presence of such a device; and hence
    //   will never be `false`
    // - Is asynchronous (see #622)

    // This test needs to support old IE event handlers:
    var addListener = function( el, event, handler ) {
        if(el.addEventListener) {
            el.addEventListener(event, handler, false);
        }
        else {
            el.attachEvent('on' + event, handler);
        }
    };
    var removeEvent = function( el, event, handler ) {
        if(el.removeEventListener) {
            el.removeEventListener(event, handler, false);
        }
        else {
            el.detachEvent('on' + event, handler);
        }
    };

    // We look for 2 consecutive `mousemove` events without an intervening
    // `mousedown`; this excludes touchscreen tap events
    var onMouseDown = function () {
        hadMouseOver = false;
    };
    var onMouseMove = function () {
        if(hadMouseOver) {
            addTest('mouselike', true);
            removeEvent(docElement, 'mousedown', onMouseDown);
            removeEvent(docElement, 'mousemove', onMouseMove);
        }
        hadMouseOver = true;
    };

    var hadMouseOver = false;
    addListener(docElement, 'mousedown', onMouseDown);
    addListener(docElement, 'mousemove', onMouseMove);
});
