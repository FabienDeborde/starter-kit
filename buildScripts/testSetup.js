// This file isn'T transpiled so must use ES5 and CommonJS

// Register babel to transpile before our tests run.
require('babel-register')();

// Disable webpack features that Mocha doesn't understand.
require.extensions['css'] = function() {};
