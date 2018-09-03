"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var handlebars = require("handlebars");
function generateHandlebar(templateDir, data) {
    return new Promise(function (resolve, reject) {
        try {
            var classTemplate = fs.readFileSync(templateDir, 'utf8');
            var compile = handlebars.compile(classTemplate);
            var result = compile(data);
            resolve(result);
        }
        catch (err) {
            reject(err);
        }
    });
}
exports.generateHandlebar = generateHandlebar;
