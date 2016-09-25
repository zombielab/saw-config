"use strict";

import {object_has, object_get, object_set, object_forget} from "saw-support/lib/helpers";

var $repository = {};

class Repository {
    has(key) {
        return object_has($repository, key);
    }

    get(key, defaultValue) {
        return object_get($repository, key, defaultValue);
    }

    set(key, value) {
        object_set($repository, key, value);
    }

    forget(key) {
        object_forget($repository, key);
    }

    fill(data) {
        $repository = data;
    }

    all() {
        return $repository;
    }
}

export default Repository;