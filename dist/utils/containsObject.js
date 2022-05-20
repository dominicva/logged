"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function containsObject(data) {
    return data.some(value => value instanceof Object);
}
exports.default = containsObject;
