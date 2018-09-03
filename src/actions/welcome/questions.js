"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
var questions = [
    {
        name: "ACTIONS",
        type: "list",
        message: "Hi! What do you wanna do?",
        choices: [
            {
                name: "Create a Component",
                value: constants_1.COMPONENT
            },
            {
                name: "Create a Container",
                value: constants_1.CONTAINER
            },
            {
                name: "Just say Hi!",
                value: constants_1.SAY_HI
            }
        ],
    }
];
exports.default = questions;
