"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
var question = [
    {
        name: constants_1.COMPONENT_NAME,
        type: "input",
        message: "Your component name: ",
        validate: function (ans) {
            if (ans !== '')
                return true;
            return false;
        }
    },
    {
        name: constants_1.COMPONENT_TEST,
        type: "confirm",
        message: "Include test file?",
        default: true,
    }
];
exports.default = question;
