"use strict";

// compiled dir/files are meant to be removed as soon as node handle es2015 modules
// until then we'll do this way.
var Repository = require("./lib/index");

module.exports = new (Repository.default)();