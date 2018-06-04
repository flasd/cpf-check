(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["CPF"] = factory();
	else
		root["CPF"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isFalsePositive;
/**
 * Because of how CPF's validity is calculated, number like 11111111111 are valid.
 * To prevent users from abusing this quirk, we check if CPF string follows this
 * pattern and we invalidade if so.
 * @private
 * @param {Array<number>} data Array containing user provided CPF.
 * @returns {boolean} Wether of not the CPF is a false positive.
 */
function isFalsePositive(data) {
  return data.every(function (value) {
    return value === data[0];
  });
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getVerifier;
/**
 * Do some math to check CPF verifier digits.
 * @private
 * @param {Array<number>} data CPF digits, with 9 or 10 numbers.
 * @param {number} verifier Wether to check the first or second verifiers.
 * @returns {number} The verifier digit.
 */
function getVerifier(data, verifier) {
    if (data.length < 9 || data.length > 10) {
        return -1;
    } else if (data.length === 9 && verifier === 2) {
        return -1;
    } else if (data.length === 10 && verifier === 1) {
        return -1;
    }

    var mappings = [10, 9, 8, 7, 6, 5, 4, 3, 2];

    if (verifier === 2) {
        mappings.unshift(11);
    }

    var _defined3 = function _defined3(value, index) {
        return value * data[index];
    };

    var _defined = new Array(mappings.length);

    for (var _i4 = 0; _i4 <= mappings.length - 1; _i4++) {
        _defined[_i4] = _defined3(mappings[_i4], _i4, mappings);
    }

    var _defined2 = function _defined2(accumulator, value) {
        return accumulator + value;
    };

    var _acc = 0;

    for (var _i3 = 0; _i3 <= _defined.length - 1; _i3++) {
        _acc = _defined2(_acc, _defined[_i3], _i3, _defined);
    }

    var sum = _acc;

    var reminder = sum % 11;

    if (reminder < 2) {
        return 0;
    }

    return 11 - reminder;
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var CPF_REGEX = exports.CPF_REGEX = /^(\d{3})(.|-)?(\d{3})(.|-)?(\d{3})(.|-)?(\d{2})$/;

// Error codes
var INVALID_CODE = exports.INVALID_CODE = 'INVALID';
var LENGTH_CODE = exports.LENGTH_CODE = 'LENGTH';
var VALID_CODE = exports.VALID_CODE = 'VALID';

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = assert;
/**
 * Asserts given condition.
 * @private
 * @param {boolean} condition The condition to assert validity of.
 * @param {string|undefined} message The error message to display during development.
 * @param {string} code The error code.
 */
function assert(condition, message, code) {
    if (!condition) {
        var errorMessage =  true ? 'cpf-check error. Use dev environment for the full error message.' : undefined;

        var error = new Error(errorMessage);
        error.code = code;
        error.isCpfCheck = true;

        throw error;
    }
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.strip = strip;
exports.validate = validate;
exports.format = format;
exports.generate = generate;

var _assert = __webpack_require__(3);

var _assert2 = _interopRequireDefault(_assert);

var _constants = __webpack_require__(2);

var _getVerifier = __webpack_require__(1);

var _getVerifier2 = _interopRequireDefault(_getVerifier);

var _isFalsePositive = __webpack_require__(0);

var _isFalsePositive2 = _interopRequireDefault(_isFalsePositive);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @typedef {Object} ValidationResult
 * @property {boolean} error Wether there were any erros during validation.
 * @property {boolean} valid Wether the provided CPF is valid.
 * @property {string} code Error or success code.
 */

/**
 * Strip '-', '.', and anything that is not a digit from the provided input.
 * @public
 * @param      {string}  raw The text input.
 * @return     {string}  Striped down input.
 */
function strip(raw) {
    (0, _assert2.default)(Object.prototype.toString.call(raw) === '[object String]', 'Expected String but instead got ' + (typeof raw === 'undefined' ? 'undefined' : _typeof(raw)), _constants.INVALID_CODE);

    return raw.replace(/[^\d]/g, '').trim();
}

/**
 * Validates CPF's
 * @public
 * @param {any} rawString Value to validate.
 * @returns {ValidationResult} The result of a given validation.
 */
function validate(rawString) {
    (0, _assert2.default)(Object.prototype.toString.call(rawString) === '[object String]', 'Expected CPF to be a string insead got ' + (typeof rawString === 'undefined' ? 'undefined' : _typeof(rawString)));

    try {
        (0, _assert2.default)(rawString.length === 11, 'Expected CPF to have length of 11 instead got ' + rawString.length, _constants.LENGTH_CODE);

        var _defined = rawString.replace(_constants.CPF_REGEX, '$1$3$5$7').split('');

        var _defined2 = function _defined2(string) {
            return parseInt(string, 10);
        };

        var numbers = new Array(_defined.length);

        for (var _i4 = 0; _i4 <= _defined.length - 1; _i4++) {
            numbers[_i4] = _defined2(_defined[_i4], _i4, _defined);
        }

        var _defined3 = function _defined3(value) {
            (0, _assert2.default)(!Number.isNaN(value), 'Expected CPF to have only digits but instead got ' + value, _constants.INVALID_CODE);
        };

        for (var _i3 = 0; _i3 <= numbers.length - 1; _i3++) {
            _defined3(numbers[_i3], _i3, numbers);
        }

        (0, _assert2.default)(!(0, _isFalsePositive2.default)(numbers), 'Provided CPF is a false positive.', _constants.INVALID_CODE);

        var userVerifiers = numbers.slice(9);

        (0, _assert2.default)(userVerifiers[0] === (0, _getVerifier2.default)(numbers.slice(0, 9), 1), 'Provided CPF is invalid.', _constants.INVALID_CODE);

        (0, _assert2.default)(userVerifiers[1] === (0, _getVerifier2.default)(numbers.slice(0, 10), 2), 'Provided CPF is invalid.', _constants.INVALID_CODE);

        return {
            error: false,
            valid: true,
            code: _constants.VALID_CODE
        };
    } catch (error) {
        if (error.isCpfCheck) {
            return {
                error: true,
                valid: false,
                code: error.code
            };
        }

        throw error;
    }
}

/**
 * Format a given cpf. For example '00000000000' will result in
 * '000.000.000-00'.
 * @public
 * @param      {string}  raw The unformated CPF.
 * @return     {string}  The formated CPF.
 */
function format(raw) {
    var _validate = validate(raw),
        valid = _validate.valid;

    (0, _assert2.default)(valid, 'Cannot format invalid CPF strings.', _constants.INVALID_CODE);

    return strip(raw).replace(_constants.CPF_REGEX, '$1.$3.$5-$7');
}

/**
 * Generate new random valid CPF.
 * @public
 * @param {?boolean} formatted Wether or not to format the output;
 * @returns {string} A random valid CPF string.
 */
function generate() {
    var formatted = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    (0, _assert2.default)(Object.prototype.toString.call(formatted) === '[object Boolean]', 'Expected generate argument to be boolean instead got ' + (typeof formatted === 'undefined' ? 'undefined' : _typeof(formatted)) + '.', _constants.INVALID_CODE);

    var _defined4 = Array(9).fill(0);

    var _defined5 = function _defined5() {
        return Math.floor(Math.random() * (9 - (1 + 1))) + 1;
    };

    var prefix = new Array(_defined4.length);

    for (var _i6 = 0; _i6 <= _defined4.length - 1; _i6++) {
        prefix[_i6] = _defined5(_defined4[_i6], _i6, _defined4);
    }

    var firstVerifier = (0, _getVerifier2.default)(prefix, 1);
    var secondVerifier = (0, _getVerifier2.default)(prefix.concat(firstVerifier), 2);

    var finalString = '' + prefix.join('') + firstVerifier + secondVerifier;

    return formatted ? format(finalString) : finalString;
}

exports.default = Object.defineProperties(validate, {
    strip: { value: strip },
    format: { value: format },
    validate: { value: validate },
    generate: { value: generate }
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ })
/******/ ]);
});
//# sourceMappingURL=cpf.js.map