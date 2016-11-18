"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _MaterialFactory = require("grimoirejs-fundamental/ref/Material/MaterialFactory");

var _MaterialFactory2 = _interopRequireDefault(_MaterialFactory);

var _grimoirejs = require("grimoirejs");

var _grimoirejs2 = _interopRequireDefault(_grimoirejs);

var _sepia = require("raw!./sepia.sort");

var _sepia2 = _interopRequireDefault(_sepia);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator.throw(value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};

exports.default = function () {
    _grimoirejs2.default.register(function () {
        return __awaiter(undefined, void 0, void 0, regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _MaterialFactory2.default.addSORTMaterial("sepia", _sepia2.default);

                        case 1:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));
    });
};