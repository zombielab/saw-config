"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _helpers = require("saw-support/lib/helpers");

var $repository = {};

class Repository {
    has(key) {
        return (0, _helpers.object_has)($repository, key);
    }

    get(key, defaultValue) {
        return (0, _helpers.object_get)($repository, key, defaultValue);
    }

    set(key, value) {
        (0, _helpers.object_set)($repository, key, value);
    }

    forget(key) {
        (0, _helpers.object_forget)($repository, key);
    }

    fill(data) {
        $repository = data;
    }

    all() {
        return $repository;
    }
}

exports.default = Repository;
//# sourceMappingURL=index.js.map