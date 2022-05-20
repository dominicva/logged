"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.titleCase = exports.lowerCase = void 0;
const lowerCase = s => s.toLowerCase();
exports.lowerCase = lowerCase;
const titleCase = s => `${s[0].toUpperCase()}${s.slice(1).toLowerCase()}`;
exports.titleCase = titleCase;
