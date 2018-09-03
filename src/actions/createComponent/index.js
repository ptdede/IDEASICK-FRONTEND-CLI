"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer = require("inquirer");
var fs = require("fs");
var fse = require("fs-extra");
var chalk_1 = require("chalk");
var handlebar_1 = require("../../helpers/handlebar");
var questions_1 = require("./questions");
var constants_1 = require("./constants");
var createComponent = function () { return __awaiter(_this, void 0, void 0, function () {
    var answer, COMPONENT_NAME, COMPONENT_TEST, COMPONENT_STYLED;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, inquirer.prompt(questions_1.default)];
            case 1:
                answer = _a.sent();
                COMPONENT_NAME = answer.COMPONENT_NAME, COMPONENT_TEST = answer.COMPONENT_TEST, COMPONENT_STYLED = answer.COMPONENT_STYLED;
                doCreateComponent(COMPONENT_NAME, {
                    isTestIncluded: COMPONENT_TEST,
                    isStyledComponentIncluded: COMPONENT_STYLED,
                });
                return [2 /*return*/];
        }
    });
}); };
function helper(pureFilename, output, pathInFilename, result, cb) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            try {
                fs.writeFile(constants_1.DEFAULT_PATH + "/" + pathInFilename + "/" + pureFilename + "/" + output, result, function (err) {
                    if (err) {
                        console.log(chalk_1.default.red("error happen when creating file"), err);
                    }
                    else {
                        cb();
                    }
                });
            }
            catch (err) {
                console.log(chalk_1.default.red("oh no, error happen!"), err);
            }
            return [2 /*return*/];
        });
    });
}
var doCreateComponent = function (filename, configs) { return __awaiter(_this, void 0, void 0, function () {
    var templatePath, templateTestPath, templateStyledPath, splitFilename, pureFilename, pathInFilename, result, err_1, result, err_2, result, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                templatePath = __dirname + '/templates/class.tsx.hbs';
                templateTestPath = __dirname + '/templates/test.tsx.hbs';
                templateStyledPath = __dirname + '/templates/styled.ts.hbs';
                splitFilename = filename.split("/");
                pureFilename = splitFilename[splitFilename.length - 1];
                splitFilename.splice(-1, 1);
                pathInFilename = splitFilename.join("/");
                return [4 /*yield*/, fse.mkdirp(constants_1.DEFAULT_PATH + "/" + pathInFilename + "/" + pureFilename)];
            case 1:
                _a.sent();
                _a.label = 2;
            case 2:
                _a.trys.push([2, 5, , 6]);
                return [4 /*yield*/, handlebar_1.generateHandlebar(templatePath, { name: pureFilename })];
            case 3:
                result = _a.sent();
                return [4 /*yield*/, helper(pureFilename, pureFilename + ".tsx", pathInFilename, result, function () {
                        console.log(chalk_1.default.green("Component has been created!"));
                    })];
            case 4:
                _a.sent();
                return [3 /*break*/, 6];
            case 5:
                err_1 = _a.sent();
                console.log(chalk_1.default.red("oh no, error happen!"), err_1);
                return [3 /*break*/, 6];
            case 6:
                if (!configs.isTestIncluded) return [3 /*break*/, 11];
                _a.label = 7;
            case 7:
                _a.trys.push([7, 10, , 11]);
                return [4 /*yield*/, handlebar_1.generateHandlebar(templateTestPath, { name: pureFilename })];
            case 8:
                result = _a.sent();
                return [4 /*yield*/, helper(pureFilename, pureFilename + ".test.tsx", pathInFilename, result, function () {
                        console.log(chalk_1.default.green("Test has been created!"));
                    })];
            case 9:
                _a.sent();
                return [3 /*break*/, 11];
            case 10:
                err_2 = _a.sent();
                console.log(chalk_1.default.red("oh no, error happen!"), err_2);
                return [3 /*break*/, 11];
            case 11:
                if (!configs.isStyledComponentIncluded) return [3 /*break*/, 16];
                _a.label = 12;
            case 12:
                _a.trys.push([12, 15, , 16]);
                return [4 /*yield*/, handlebar_1.generateHandlebar(templateStyledPath, { name: pureFilename })];
            case 13:
                result = _a.sent();
                return [4 /*yield*/, helper(pureFilename, "Styled" + pureFilename + ".ts", pathInFilename, result, function () {
                        console.log(chalk_1.default.green("Styled component has been created!"));
                    })];
            case 14:
                _a.sent();
                return [3 /*break*/, 16];
            case 15:
                err_3 = _a.sent();
                console.log(chalk_1.default.red("oh no, error happen!"), err_3);
                return [3 /*break*/, 16];
            case 16: return [2 /*return*/];
        }
    });
}); };
exports.doCreateComponent = doCreateComponent;
exports.default = createComponent;
