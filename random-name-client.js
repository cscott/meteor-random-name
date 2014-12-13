// Stub implementation that doesn't require a large client-side database.
RandomName = function(options) {
    options = options || {};
    if (options.first || options.male || options.female) {
        return "Pat";
    }
    if (options.last) {
        return "Smith";
    }
    return "Pat Smith";
};
