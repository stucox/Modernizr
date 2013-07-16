define(['ModernizrProto', 'prefixed', 'domToHyphenated'], function( ModernizrProto, prefixed, domToHyphenated ) {
    // Modernizr.prefixedHyphenated() returns the prefixed or nonprefixed property name variant of your input in hyphenated format
    // Modernizr.prefixedHyphenated('transition') // 'MozTransition'

    // Properties must be passed as dom-style camelcase.
    // Return values will be the hyphenated variant
    var prefixedHyphenated = ModernizrProto.prefixedHyphenated = function(prop) {
        return domToHyphenated(prefixed(prop));
    };
    return prefixedHyphenated;
});
