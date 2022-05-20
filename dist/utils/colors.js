"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.error = exports.warn = exports.success = exports.info = void 0;
const chalk_1 = __importDefault(require("chalk"));
exports.info = {
    text: chalk_1.default.bold.hex('#6198FF'),
    heading: chalk_1.default.whiteBright.bold.bgHex('#6198FF'),
};
exports.success = {
    text: chalk_1.default.greenBright.bold,
    heading: chalk_1.default.whiteBright.bold.bgGreen,
};
exports.warn = {
    text: chalk_1.default.bold.hex('#FFA500'),
    heading: chalk_1.default.whiteBright.bold.bgHex('#FFA500'),
};
exports.error = {
    text: chalk_1.default.redBright.bold,
    heading: chalk_1.default.whiteBright.bold.bgRedBright,
};
