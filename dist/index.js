"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = exports.error = exports.warn = exports.success = exports.info = void 0;
const genLogger_1 = require("./utils/genLogger");
exports.info = (0, genLogger_1.genLogger)('info');
exports.success = (0, genLogger_1.genLogger)('success');
exports.warn = (0, genLogger_1.genLogger)('warn');
exports.error = (0, genLogger_1.genLogger)('error');
exports.log = console.log;
