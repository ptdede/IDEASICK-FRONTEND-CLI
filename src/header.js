"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = require("chalk");
var figlet = require("figlet");
var initHeader = function () {
    console.log(chalk_1.default.green(figlet.textSync("IDEASICK")));
};
exports.default = initHeader;
