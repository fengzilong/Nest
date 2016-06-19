(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["nest"] = factory();
	else
		root["nest"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(3);

	__webpack_require__(9);

	__webpack_require__(18);

	__webpack_require__(21);

	__webpack_require__(24);

	__webpack_require__(27);

	__webpack_require__(30);

	__webpack_require__(33);

	__webpack_require__(36);

	__webpack_require__(39);

	__webpack_require__(42);

	__webpack_require__(45);

	__webpack_require__(46);

	__webpack_require__(49);

	__webpack_require__(52);

	__webpack_require__(55);

	__webpack_require__(56);

	__webpack_require__(59);

	__webpack_require__(62);

	__webpack_require__(65);

	__webpack_require__(68);

	__webpack_require__(71);

	__webpack_require__(74);

	__webpack_require__(77);

	__webpack_require__(80);

	__webpack_require__(83);

	__webpack_require__(86);

/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _classnames = __webpack_require__(4);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _uiButton = __webpack_require__(5);
	
	var _uiButton2 = _interopRequireDefault(_uiButton);
	
	__webpack_require__(9);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	riot.tag2('ui-button', '<button onclick="{onClick}" class="{uiCls} {opts.disabled ? styles.disabled : \'\'}"> <ui-icon type="loading" if="{opts.loading}" class="{styles.loading}"></ui-icon> <yield></yield> </button>', '', '', function (opts) {
		var _classNames,
		    _this = this;
	
		this.styles = _uiButton2.default;
	
		var isUndefined = function isUndefined(v) {
			return typeof v === 'undefined';
		};
	
		this.uiCls = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, _uiButton2.default.base, true), _defineProperty(_classNames, _uiButton2.default.basic, isUndefined(this.opts.primary) && isUndefined(this.opts.success) && isUndefined(this.opts.warning) && isUndefined(this.opts.danger)), _defineProperty(_classNames, _uiButton2.default.link, !isUndefined(this.opts.link)), _defineProperty(_classNames, _uiButton2.default.primary, !isUndefined(this.opts.primary)), _defineProperty(_classNames, _uiButton2.default.success, !isUndefined(this.opts.success)), _defineProperty(_classNames, _uiButton2.default.warning, !isUndefined(this.opts.warning)), _defineProperty(_classNames, _uiButton2.default.danger, !isUndefined(this.opts.danger)), _defineProperty(_classNames, _uiButton2.default.outline, !isUndefined(this.opts.outline)), _defineProperty(_classNames, _uiButton2.default.lg, !isUndefined(this.opts.lg)), _defineProperty(_classNames, _uiButton2.default.md, isUndefined(this.opts.lg) && isUndefined(this.opts.sm)), _defineProperty(_classNames, _uiButton2.default.sm, !isUndefined(this.opts.sm)), _classNames));
	
		this.onClick = function () {
			if (_this.opts.__disabled) {
				return;
			}
	
			_this.opts.onClick && _this.opts.onClick();
		};
	}, '{ }');

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 5 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"base":"ui-button__base--23f2b","basic":"ui-button__basic--81e3e","primary":"ui-button__primary--55b06","success":"ui-button__success--a5daa","warning":"ui-button__warning--099ac","danger":"ui-button__danger--0c2f4","outline":"ui-button__outline--fa861","link":"ui-button__link--90952","sm":"ui-button__sm--586c1","md":"ui-button__md--dd1dc","lg":"ui-button__lg--aa436","disabled":"ui-button__disabled--a6225","loading":"ui-button__loading--df6bb"};

/***/ },
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(10);
	
	__webpack_require__(16);
	
	riot.tag2('ui-icon', '<span class="iconfont">{icon}</span>', '', '', function (opts) {
		var _this = this;
	
		var iconset = {
			'arrow-left': '&#xe600;',
			'arrow-right': '&#xe601;',
			loading: '&#xe602;',
			info: '&#xe608;',
			'caret-right': '&#xe603;',
			'caret-down': '&#xe604;'
		};
	
		var convert = function convert(str) {
			str = str.replace(/(\\u)(\w{4})/gi, function ($0) {
				return String.fromCharCode(parseInt(escape($0).replace(/(%5Cu)(\w{4})/g, "$2"), 16));
			});
			str = str.replace(/(&#x)(\w{4});/gi, function ($0) {
				return String.fromCharCode(parseInt(escape($0).replace(/(%26%23x)(\w{4})(%3B)/g, "$2"), 16));
			});
			return str;
		};
	
		this.one('update', function () {
			_this.icon = _this.opts.icon;
			if (!_this.opts.icon && iconset[_this.opts.type]) {
				_this.icon = convert(iconset[_this.opts.type]);
			}
		});
	}, '{ }');

/***/ },
/* 10 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 17 */,
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _uiBadge = __webpack_require__(19);
	
	var _uiBadge2 = _interopRequireDefault(_uiBadge);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	riot.tag2('ui-badge', '<span class="{styles.base}"> <yield></yield> <sup if="{parseInt( opts.count ) > 0}" class="{styles.count} {!countStr || opts.dot === true ? styles.dot : \'\'}">{!countStr || opts.dot === true ? \'\' : countStr}</sup> </span>', '', '', function (opts) {
		var _this = this;
	
		this.styles = _uiBadge2.default;
	
		this.on('mount', function () {
			// TODO: add animation
		});
	
		this.on('update', function () {
			var overflowCount = _this.opts.max;
			overflowCount = parseInt(overflowCount);
			if (isNaN(overflowCount)) {
				overflowCount = Infinity;
			}
	
			var count = _this.opts.count;
			count = parseInt(count);
			if (!isNaN(count)) {
				var countStr = count;
				if (count > overflowCount) {
					countStr = overflowCount + '+';
				}
	
				_this.countStr = countStr;
			} else {
				// 不合法的count，替换为dot
	
			}
		});
	}, '{ }');

/***/ },
/* 19 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"base":"ui-badge__base--b9cfc","count":"ui-badge__count--a0dab","dot":"ui-badge__dot--084f1"};

/***/ },
/* 20 */,
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _uiLink = __webpack_require__(22);
	
	var _classnames = __webpack_require__(4);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	riot.tag2('ui-link', '<a href="{opts.href || \'javascript:;\'}" class="{classnames}" onclick="{opts.onclick}"> <yield></yield> </a>', '', '', function (opts) {
		var _classNames;
	
		var isUndefined = function isUndefined(obj) {
			return typeof obj === 'undefined';
		};
		this.classnames = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, _uiLink.base, true), _defineProperty(_classNames, _uiLink.primary, true), _defineProperty(_classNames, _uiLink.success, !isUndefined(this.opts.success)), _defineProperty(_classNames, _uiLink.warning, !isUndefined(this.opts.warning)), _defineProperty(_classNames, _uiLink.danger, !isUndefined(this.opts.danger)), _classNames));
	}, '{ }');

/***/ },
/* 22 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"base":"ui-link__base--00da4","primary":"ui-link__primary--d23d5","success":"ui-link__success--0d6b1","warning":"ui-link__warning--e931b","danger":"ui-link__danger--ba7fa"};

/***/ },
/* 23 */,
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(25);
	
	riot.tag2('ui-input-nao', '<span class="input input--nao {input--filled : hasValue}" name="container"> <input class="input__field input__field--nao" type="text" onchange="{onChange}"> <label class="input__label input__label--nao"> <span class="input__label-content input__label-content--nao">{opts.placeholder}</span> </label> <svg class="graphic graphic--nao" width="300%" height="100%" viewbox="0 0 1200 60" preserveaspectratio="none"> <path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"></path> </svg> </span>', '', '', function (opts) {
			var _this = this;
	
			var v = this.opts.value;
			this.hasValue = !(typeof v === 'undefined' || v === '');
	
			this.onChange = function (e) {
					var v = e.target.value;
					_this.hasValue = !(typeof v === 'undefined' || v === '');
			};
	}, '{ }');

/***/ },
/* 25 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 26 */,
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _classnames = __webpack_require__(4);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _uiInput = __webpack_require__(28);
	
	var _uiInput2 = _interopRequireDefault(_uiInput);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	riot.tag2('ui-input', '<input class="{uiCls} {stateCls}" type="{opts.type || \'text\'}" placeholder="{opts.placeholder}" onchange="{onChange}" oninput="{onInput}" onfocus="{onFocus}" onblur="{onBlur}" __disabled="{opts.__disabled === true}" value="{opts.value}">', '', '', function (opts) {
		var _classNames,
		    _this = this;
	
		var isUndefined = function isUndefined(v) {
			return typeof v === 'undefined';
		};
	
		this.uiCls = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, _uiInput2.default.base, true), _defineProperty(_classNames, _uiInput2.default.sm, !isUndefined(this.opts.sm)), _defineProperty(_classNames, _uiInput2.default.lg, !isUndefined(this.opts.lg)), _classNames));
	
		this.on('update', function () {
			_this.stateCls = (0, _classnames2.default)(_defineProperty({}, _uiInput2.default.disabled, opts.__disabled === true));
		});
	
		this.onChange = function () {
			_this.opts.onChange && _this.opts.onChange();
		};
	
		this.onInput = function () {
			_this.opts.onInput && _this.opts.onInput();
		};
	
		this.onFocus = function () {
			_this.opts.onFocus && _this.opts.onFocus();
		};
	
		this.onBlur = function () {
			_this.opts.onBlur && _this.opts.onBlur();
		};
	}, '{ }');

/***/ },
/* 28 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"base":"ui-input__base--d9c63","sm":"ui-input__sm--d8ab3","lg":"ui-input__lg--5db49","disabled":"ui-input__disabled--2541c"};

/***/ },
/* 29 */,
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _uiRadio = __webpack_require__(31);
	
	var _uiRadio2 = _interopRequireDefault(_uiRadio);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	riot.tag2('ui-radio', '<span class="{styles.base} {checked ? styles.checked : \'\'}"></span> <span> <yield></yield> </span>', '', '', function (opts) {
		var _this = this;
	
		this.styles = _uiRadio2.default;
		this.checked = this.opts.__checked || false;
	
		var onToggle = function onToggle() {
			if (!_this.checked) {
				_this.opts.onChange && _this.opts.onChange(_this.checked);
				_this.trigger('change');
			}
		};
	
		this.on('mount', function () {
			_this.root.addEventListener('click', onToggle, false);
		});
	
		this.on('unmount', function () {
			_this.root.removeEventListener('click', onToggle, false);
		});
	}, '{ }');

/***/ },
/* 31 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"base":"ui-radio__base--99842","checked":"ui-radio__checked--83367"};

/***/ },
/* 32 */,
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _uiRadioButton = __webpack_require__(34);
	
	var _uiRadioButton2 = _interopRequireDefault(_uiRadioButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	riot.tag2('ui-radio-button', '<span class="{styles.base} {checked ? styles.checked : \'\'}"> <yield></yield> </span>', '', '', function (opts) {
		var _this = this;
	
		this.styles = _uiRadioButton2.default;
		this.checked = false;
	
		var onClick = function onClick() {
			if (!_this.checked) {
				_this.opts.onChange && _this.opts.onChange();
				_this.trigger('change');
			}
		};
		this.on('mount', function () {
			_this.root.addEventListener('click', onClick, false);
		});
		this.on('unmount', function () {
			_this.root.removeEventListener('click', onClick, false);
		});
	}, '{ }');

/***/ },
/* 34 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"base":"ui-radio-button__base--de77c","checked":"ui-radio-button__checked--a2fc6"};

/***/ },
/* 35 */,
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(37);
	
	riot.tag2('ui-radio-group', '<yield></yield>', '', '', function (opts) {
		var _this = this;
	
		this.on('mount', function () {
			var radioElements = [];
			var radios = _this.tags['ui-radio'];
			var radioButtons = _this.tags['ui-radio-button'];
	
			if (!radios) {
				radios = [];
			}
	
			if (typeof radios.length === 'undefined') {
				radios = [radios];
			}
	
			if (!radioButtons) {
				radioButtons = [];
			}
	
			if (typeof radioButtons.length === 'undefined') {
				radioButtons = [radioButtons];
			}
	
			radioElements.push.apply(radioElements, radios);
			radioElements.push.apply(radioElements, radioButtons);
	
			var check = function check(idx) {
				for (var i = 0, len = radioElements.length; i < len; i++) {
					if (idx === i) {
						radioElements[i].checked = true;
					} else {
						radioElements[i].checked = false;
					}
				}
				_this.update();
			};
	
			var lastChecked = _this.opts.value;
	
			var onChange = _this.opts.onChange || function () {};
	
			var _loop = function _loop(i, len) {
				if (_this.opts.value && radioElements[i].opts.value === _this.opts.value) {
					check(i);
				}
				radioElements[i].on('change', function () {
					check(i);
	
					if (i !== lastChecked) {
						lastChecked = i;
						onChange(radioElements[i].opts.value, i);
					}
				});
			};
	
			for (var i = 0, len = radioElements.length; i < len; i++) {
				_loop(i, len);
			}
		});
	});

/***/ },
/* 37 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 38 */,
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _uiCheckbox = __webpack_require__(40);
	
	var _uiCheckbox2 = _interopRequireDefault(_uiCheckbox);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	riot.tag2('ui-checkbox', '<span class="{styles.base} {checked ? styles.checked : \'\'}"></span> <span> <yield></yield> </span>', '', '', function (opts) {
		var _this = this;
	
		this.styles = _uiCheckbox2.default;
		this.checked = this.opts.checked || false;
	
		var onClick = function onClick() {
			_this.checked = !_this.checked;
			_this.update();
			_this.opts.onChange && _this.opts.onChange(_this.checked);
			_this.trigger('change');
		};
	
		this.on('mount', function () {
			_this.root.addEventListener('click', onClick, false);
		});
	
		this.on('unmount', function () {
			_this.root.removeEventListener('click', onClick, false);
		});
	}, '{ }');

/***/ },
/* 40 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"base":"ui-checkbox__base--c3df2","checked":"ui-checkbox__checked--35331"};

/***/ },
/* 41 */,
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(43);
	
	riot.tag2('ui-checkbox-group', '<yield></yield>', '', '', function (opts) {
		var _this = this;
	
		this.on('mount', function () {
			var checkboxes = _this.tags['ui-checkbox'];
	
			if (!checkboxes) {
				return;
			}
	
			if (!checkboxes.length) {
				checkboxes = [checkboxes];
			}
	
			var getChecked = function getChecked() {
				var tmp = {
					keys: [],
					values: []
				};
	
				for (var i = 0; i < checkboxes.length; i++) {
					if (checkboxes[i].checked) {
						tmp.keys.push(i);
						tmp.values.push(checkboxes[i].opts.value);
					}
				}
	
				return tmp;
			};
	
			var values = _this.opts.value;
			var onChange = _this.opts.onChange || function () {};
			for (var i = 0, len = checkboxes.length; i < len; i++) {
				if (~values.indexOf(checkboxes[i].opts.value)) {
					checkboxes[i].checked = true;
					checkboxes[i].update();
				}
				checkboxes[i].on('change', function () {
					var checked = getChecked();
					onChange(checked.values, checked.keys);
				});
			}
		});
	});

/***/ },
/* 43 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 44 */,
/* 45 */
/***/ function(module, exports) {

	'use strict';
	
	riot.tag2('ui-breadcrumb', '<yield></yield>', '', '', function (opts) {});

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _uiBreadcrumbItem = __webpack_require__(47);
	
	var _uiBreadcrumbItem2 = _interopRequireDefault(_uiBreadcrumbItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	riot.tag2('ui-breadcrumb-item', '<yield></yield> <span class="{styles.sep}">{sep}</span>', '', '', function (opts) {
			this.styles = _uiBreadcrumbItem2.default;
			this.sep = '/';
	}, '{ }');

/***/ },
/* 47 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"sep":"ui-breadcrumb-item__sep--f28eb"};

/***/ },
/* 48 */,
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _uiTag = __webpack_require__(50);
	
	var _uiTag2 = _interopRequireDefault(_uiTag);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	riot.tag2('ui-tag', '<yield></yield>', '', '', function (opts) {
			this.styles = _uiTag2.default;
	});

/***/ },
/* 50 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 51 */,
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _uiJsonTree = __webpack_require__(53);
	
	var _uiJsonTree2 = _interopRequireDefault(_uiJsonTree);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	riot.tag2('ui-json-tree', '', '', '', function (opts) {
		var _this = this;
	
		var hasOwn = Object.hasOwnProperty;
		var each = function each(obj, fn) {
			if (Array.isArray(obj)) {
				for (var i = 0, len = obj.length; i < len; i++) {
					fn(obj[i], i);
				}
			} else {
				for (var i in obj) {
					if (hasOwn.call(obj, i)) {
						fn(obj[i], i);
					}
				}
			}
		};
		var buildStart = function buildStart() {
			return '\n\t\t\t<div class="node">\n\t\t\t';
		};
		var buildEnd = function buildEnd() {
			return '\n\t\t\t</div>\n\t\t\t';
		};
		var build = function build(k, v) {
			var hasCaret = false;
			var type = typeof v === 'undefined' ? 'undefined' : _typeof(v);
			if (typeof v === 'string') {
				v = '"' + v + '"';
			} else if (Array.isArray(v)) {
				v = 'Array[' + v.length + ']';
				hasCaret = true;
			} else if (type === 'object') {
				v = 'Object';
				hasCaret = true;
			}
			return '\n\t\t\t<div class="title">' + (hasCaret ? '<div class="iconfont caret caret-right">&#xe603;</div><div class="iconfont caret caret-down">&#xe604;</div>' : '<div class="iconfont caret"></div>') + ('\n\t\t\t\t<div>\n\t\t\t\t\t<span class="key">' + k + ':</span>\n\t\t\t\t\t<span class="' + type + '">' + v + '</span>\n\t\t\t\t</div>\n\t\t\t</div>');
		};
		var buildChildrenStart = function buildChildrenStart() {
			return '\n\t\t\t<div class="children">\n\t\t\t';
		};
		var buildChildrenEnd = function buildChildrenEnd() {
			return '\n\t\t\t</div>\n\t\t\t';
		};
		var buildJsonTree = function buildJsonTree(json) {
			var tmp = '';
			each(json, function (v, k) {
				tmp += buildStart();
				if (typeof v === 'number') {
					// console.log( k, '->', v );
					tmp = tmp + build(k, v);
				} else if (typeof v === 'string') {
					// console.log( k, '->', v );
					tmp = tmp + build(k, v);
				} else if (typeof v === 'boolean') {
					// console.log( k, '->', v );
					tmp = tmp + build(k, v);
				} else if (Array.isArray(v)) {
					// console.log( k, '->' );
					tmp += build(k, v);
					tmp += buildChildrenStart();
					tmp += buildJsonTree(v);
					tmp += buildChildrenEnd();
				} else if ((typeof v === 'undefined' ? 'undefined' : _typeof(v)) === 'object') {
					// console.log( k, '->' );
					tmp += build(k, v);
					tmp += buildChildrenStart();
					tmp += buildJsonTree(v);
					tmp += buildChildrenEnd();
				}
				tmp += buildEnd();
			});
			return tmp;
		};
	
		var last = undefined;
		this.on('updated', function () {
			if (_this.opts.json !== last) {
				var result = buildJsonTree(_this.opts.json);
				_this.root.innerHTML = result;
				// bind
				var nodes = _this.root.querySelectorAll('.title');
				nodes && Array.prototype.slice.call(nodes).forEach(function (node) {
					node.addEventListener('click', function () {
						if (!node.nextElementSibling) {
							return;
						}
	
						var parent = node.parentNode;
						if (parent.classList.contains('open')) {
							parent.classList.remove('open');
						} else {
							parent.classList.add('open');
						}
					}, false);
				});
				last = _this.opts.json;
			}
		});
	
		this.on('mount', function () {});
	});

/***/ },
/* 53 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 54 */,
/* 55 */
/***/ function(module, exports) {

	'use strict';
	
	riot.tag2('ui-tree', '<yield></yield>', '', '', function (opts) {
		var _this = this;
	
		var STATUS = {
			CHECKED: 0,
			UNCHECKED: 1,
			HALF_CHECKED: 2
		};
	
		this.nodes = {};
		this.one('update', function () {
			var treeNodes = _this.tags['ui-tree-node'];
			if (!treeNodes) {
				treeNodes = [];
			} else if (typeof treeNodes.length === 'undefined') {
				treeNodes = [treeNodes];
			}
	
			for (var i = 0, len = treeNodes.length; i < len; i++) {
				treeNodes[i].treeNodeId = i + '';
			}
		});
	
		this.on('tree-node-change', function (id) {
			var nodes = _this.nodes;
	
			// 修改当前节点
	
			if (nodes[id].status !== STATUS.CHECKED) {
				nodes[id].status = STATUS.CHECKED;
			} else {
				nodes[id].status = STATUS.UNCHECKED;
			}
	
			// 修改子孙节点
	
			if (nodes[id].status === STATUS.CHECKED) {
				for (var i in nodes) {
					if (i !== id && i.startsWith(id)) {
						nodes[i].status = STATUS.CHECKED;
						nodes[i].update();
					}
				}
			} else {
				for (var i in nodes) {
					if (i !== id && i.startsWith(id)) {
						nodes[i].status = STATUS.UNCHECKED;
						nodes[i].update();
					}
				}
			}
	
			// 修改祖先节点
	
			if (nodes[id].status === STATUS.CHECKED) {
				var parentId = id.slice(0, -1);
				var hasChildNotChecked = false;
				// 非根节点
				while (parentId.length > 0) {
					// 父节点的子孙节点中存在半选或者未选，则父节点是半选(当前节点选中了)
					if (!hasChildNotChecked) {
						for (var i in nodes) {
							if (i !== parentId && i.startsWith(parentId)) {
								if (nodes[i].status !== STATUS.CHECKED) {
									hasChildNotChecked = true;
									break;
								}
							}
						}
					}
	
					if (hasChildNotChecked) {
						nodes[parentId].status = STATUS.HALF_CHECKED;
					} else {
						nodes[parentId].status = STATUS.CHECKED;
					}
					nodes[parentId].update();
	
					parentId = parentId.slice(0, -1);
				}
			} else {
				var parentId = id.slice(0, -1);
				var hasChildChecked = false;
				// 非根节点
				while (parentId.length > 0) {
					// 父节点的子孙节点中存在选中状态，则父节点是半选(或者全未选)
					if (!hasChildChecked) {
						for (var i in nodes) {
							if (i !== parentId && i.startsWith(parentId)) {
								if (nodes[i].status === STATUS.CHECKED) {
									hasChildChecked = true;
									break;
								}
							}
						}
					}
	
					if (hasChildChecked) {
						nodes[parentId].status = STATUS.HALF_CHECKED;
					} else {
						nodes[parentId].status = STATUS.UNCHECKED;
					}
					nodes[parentId].update();
	
					parentId = parentId.slice(0, -1);
				}
			}
		});
	});

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _uiTreeNode = __webpack_require__(57);
	
	var _uiTreeNode2 = _interopRequireDefault(_uiTreeNode);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	riot.tag2('ui-tree-node', '<span class="{styles.state}">{this.statusIcon()}</span> <span class="{styles.title}" onclick="{onCheckChange}">{opts.title}</span> <div class="{styles.children}"> <yield></yield> </div>', '', '', function (opts) {
		var _this = this;
	
		var STATUS = {
			CHECKED: 0,
			UNCHECKED: 1,
			HALF_CHECKED: 2
		};
	
		this.styles = _uiTreeNode2.default;
		this.STATUS = STATUS;
		this.status = STATUS.UNCHECKED;
		this.statusIcon = function () {
			var icon = '';
			switch (_this.status) {
				case STATUS.CHECKED:
					icon = 'v';
					break;
				case STATUS.UNCHECKED:
					icon = '口';
					break;
				case STATUS.HALF_CHECKED:
					icon = '曰';
					break;
			}
			return icon;
		};
	
		this.on('mount', function () {
			var parent = _this.parent;
			if (parent.root.tagName === 'UI-TREE') {
				_this.tree = parent;
			} else if (parent.tree) {
				_this.tree = parent.tree;
			}
	
			_this.tree.nodes[_this.treeNodeId] = _this;
	
			var currentTreeNodeId = _this.treeNodeId || '';
	
			var treeNodes = _this.tags['ui-tree-node'];
			if (!treeNodes) {
				treeNodes = [];
			} else if (typeof treeNodes.length === 'undefined') {
				treeNodes = [treeNodes];
			}
	
			for (var i = 0, len = treeNodes.length; i < len; i++) {
				treeNodes[i].treeNodeId = currentTreeNodeId + i + '';
			}
		});
	
		this.onCheckChange = function () {
			_this.tree.trigger('tree-node-change', _this.treeNodeId);
		};
	}, '{ }');

/***/ },
/* 57 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"title":"ui-tree-node__title--6b761","children":"ui-tree-node__children--eda21"};

/***/ },
/* 58 */,
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _uiMenu = __webpack_require__(60);
	
	var _classnames = __webpack_require__(4);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	riot.tag2('ui-menu', '<yield></yield>', '', '', function (opts) {
		this.on('update', function () {});
	});

/***/ },
/* 60 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 61 */,
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _uiSubmenu = __webpack_require__(63);
	
	riot.tag2('ui-submenu', '{opts.text} <div class="{styles.items}"> <yield></yield> </div>', '', '', function (opts) {
		this.styles = {
			items: _uiSubmenu.items
		};
	}, '{ }');

/***/ },
/* 63 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"items":"ui-submenu__items--f47d9"};

/***/ },
/* 64 */,
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _uiMenuItem = __webpack_require__(66);
	
	var _classnames = __webpack_require__(4);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	riot.tag2('ui-menu-item', '<div class="{classnames}"> {opts.text} </div>', '', '', function (opts) {
		var _this = this;
	
		this.on('mount', function () {});
	
		this.on('update', function () {
			_this.classnames = (0, _classnames2.default)(_defineProperty({}, _uiMenuItem.base, true));
		});
	}, '{ }');

/***/ },
/* 66 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"base":"ui-menu-item__base--46135"};

/***/ },
/* 67 */,
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _classnames = __webpack_require__(4);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _uiSwitch = __webpack_require__(69);
	
	var _uiSwitch2 = _interopRequireDefault(_uiSwitch);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	riot.tag2('ui-switch', '<div class="{uiCls} {stateCls}" onclick="{root.$toggle}"></div>', '', '', function (opts) {
		var _classNames,
		    _this = this;
	
		this.disabled = this.opts.disabled || false;
		var isOn = !!this.opts.checked;
	
		this.styles = _uiSwitch2.default;
		this.uiCls = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, _uiSwitch2.default.base, true), _defineProperty(_classNames, _uiSwitch2.default.sm, typeof this.opts.sm !== 'undefined'), _defineProperty(_classNames, _uiSwitch2.default.lg, typeof this.opts.lg !== 'undefined'), _classNames));
	
		this.root.$toggle = function (e) {
			if (_this.disabled) {
				return;
			}
			isOn = !isOn;
			if (!e) {
				_this.update();
			}
			_this.onChange && _this.onChange(isOn);
		};
	
		this.root.$check = function () {
			isOn = true;
			_this.update();
			_this.onChange && _this.onChange(isOn);
		};
	
		this.root.$uncheck = function () {
			isOn = false;
			_this.update();
			_this.onChange && _this.onChange(isOn);
		};
	
		this.root.$enable = function () {
			_this.disabled = false;
			_this.update();
		};
	
		this.root.$disable = function () {
			_this.disabled = true;
			_this.update();
		};
	
		this.on('update', function () {
			var _classNames2;
	
			_this.stateCls = (0, _classnames2.default)((_classNames2 = {}, _defineProperty(_classNames2, _uiSwitch2.default.on, isOn), _defineProperty(_classNames2, _uiSwitch2.default.off, !isOn), _defineProperty(_classNames2, _uiSwitch2.default.disabled, _this.disabled), _classNames2));
		});
	}, '{ }');

/***/ },
/* 69 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"base":"ui-switch__base--e2fac","off":"ui-switch__off--b66a6","on":"ui-switch__on--17e70","sm":"ui-switch__sm--c01c5","lg":"ui-switch__lg--3d195","disabled":"ui-switch__disabled--64b78"};

/***/ },
/* 70 */,
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _uiProgressBar = __webpack_require__(72);
	
	var _uiProgressBar2 = _interopRequireDefault(_uiProgressBar);
	
	var _classnames = __webpack_require__(4);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	riot.tag2('ui-progress-bar', '<div class="{styles.outter}"> <div class="{styles.inner} {colorCls}" riot-style="width: {opts.value}%;"></div> </div> <div if="{typeof opts.label !== \'undefined\'}" class="{styles.label}"> {this.opts.value}% </div>', '', '', function (opts) {
		var _classNames;
	
		this.styles = _uiProgressBar2.default;
		this.colorCls = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, _uiProgressBar2.default.primary, true), _defineProperty(_classNames, _uiProgressBar2.default.success, typeof this.opts.success !== 'undefined'), _defineProperty(_classNames, _uiProgressBar2.default.warning, typeof this.opts.warning !== 'undefined'), _defineProperty(_classNames, _uiProgressBar2.default.danger, typeof this.opts.danger !== 'undefined'), _classNames));
	}, '{ }');

/***/ },
/* 72 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"outter":"ui-progress-bar__outter--b19c7","inner":"ui-progress-bar__inner--c7cc3","label":"ui-progress-bar__label--5cad3","primary":"ui-progress-bar__primary--fc241","success":"ui-progress-bar__success--8db4a","warning":"ui-progress-bar__warning--f4465","danger":"ui-progress-bar__danger--0ed62"};

/***/ },
/* 73 */,
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _uiPopover = __webpack_require__(75);
	
	var _uiPopover2 = _interopRequireDefault(_uiPopover);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	riot.tag2('ui-popover', '<yield></yield> <div class="{styles.popover}"> 悬浮 </div>', '', '', function (opts) {
		var _this = this;
	
		this.styles = _uiPopover2.default;
	
		this.on('mount', function () {
			_this.root.addEventListener('mouseenter', function () {
				console.log('enter');
			}, false);
		});
	}, '{ }');

/***/ },
/* 75 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"popover":"ui-popover__popover--2cd67"};

/***/ },
/* 76 */,
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _uiMessage = __webpack_require__(78);
	
	var _uiMessage2 = _interopRequireDefault(_uiMessage);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	riot.tag2('ui-message', '<ui-icon type="info" class="{styles.icon}"></ui-icon> <div>{opts.content}<yield></yield></div>', '', '', function (opts) {
			this.styles = _uiMessage2.default;
	}, '{ }');

/***/ },
/* 78 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"icon":"ui-message__icon--82d2e"};

/***/ },
/* 79 */,
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _uiCollapse = __webpack_require__(81);
	
	var _uiCollapse2 = _interopRequireDefault(_uiCollapse);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	riot.tag2('ui-collapse', '<yield></yield>', '', '', function (opts) {
			this.styles = _uiCollapse2.default;
	
			this.on('mount', function () {});
	});

/***/ },
/* 81 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 82 */,
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _uiCollapsePanel = __webpack_require__(84);
	
	var _uiCollapsePanel2 = _interopRequireDefault(_uiCollapsePanel);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	riot.tag2('ui-collapse-panel', '<div class="{styles.title}"> <div class="{styles[ \'title-inner\' ]}"> <ui-icon type="caret-right"></ui-icon> {opts.title} </div> </div> <div class="{styles.content} {expand ? styles[ \'content-active\' ] : styles[ \'content-inactive\' ]}"> <div class="{styles[ \'content-box\' ]}"> <yield></yield> </div> </div>', '', '', function (opts) {
		var _this = this;
	
		this.styles = _uiCollapsePanel2.default;
		this.expand = false;
	
		var onToggle = function onToggle() {
			_this.expand = !_this.expand;
			_this.update();
		};
		this.on('mount', function () {
			_this.root.addEventListener('click', onToggle, false);
		});
		this.on('unmount', function () {
			_this.root.removeEventListener('click', onToggle, false);
		});
	}, '{ }');

/***/ },
/* 84 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"title":"ui-collapse-panel__title--47429","title-inner":"ui-collapse-panel__title-inner--2cde4","content":"ui-collapse-panel__content--d7b6a","content-box":"ui-collapse-panel__content-box--d8edc","content-inactive":"ui-collapse-panel__content-inactive--9eaf4","content-active":"ui-collapse-panel__content-active--4dad8"};

/***/ },
/* 85 */,
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _uiTooltip = __webpack_require__(87);
	
	var _uiTooltip2 = _interopRequireDefault(_uiTooltip);
	
	var _domAlign = __webpack_require__(89);
	
	var _domAlign2 = _interopRequireDefault(_domAlign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	riot.tag2('ui-tooltip', '<div name="t" class="{styles.target}"> <yield></yield> </div> <div if="{triggered}" name="s" class="{styles.base} {styles[ opts.placement ]}"> <div class="{styles.arrow}"></div> <div class="{styles.content}"> {opts.title} </div> </div>', '', '', function (opts) {
		var _this = this;
	
		this.styles = _uiTooltip2.default;
		this.placement = this.opts.placement;
		this.triggered = false;
	
		var points = ['tc', 'bc'];
		var offset = [0, 0];
		switch (this.placement) {
			case 'top':
				points = ['bc', 'tc'];
				offset = [0, -1];
				break;
			case 'bottom':
				points = ['tc', 'bc'];
				offset = [0, 1];
				break;
			case 'left':
				points = ['cr', 'cl'];
				offset = [-2, 0];
				break;
			case 'right':
				points = ['cl', 'cr'];
				offset = [2, 0];
				break;
		}
	
		var show = function show() {
			_this.triggered = true;
			_this.update();
			(0, _domAlign2.default)(_this.s, _this.t, {
				points: points,
				offset: offset
			});
		};
	
		var hide = function hide() {
			_this.triggered = false;
			_this.update();
		};
	
		this.on('mount', function () {
			_this.t.addEventListener('mouseenter', show, false);
			_this.t.addEventListener('mouseleave', hide, false);
		});
	
		this.on('unmount', function () {
			_this.t.removeEventListener('mouseenter', show, false);
			_this.t.removeEventListener('mouseleave', hide, false);
		});
	}, '{ }');

/***/ },
/* 87 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"target":"ui-tooltip__target--0dfc9","base":"ui-tooltip__base--c0de7","arrow":"ui-tooltip__arrow--64d91","content":"ui-tooltip__content--87471","bottom":"ui-tooltip__bottom--a907e","top":"ui-tooltip__top--b5177","left":"ui-tooltip__left--51825","right":"ui-tooltip__right--70a0b"};

/***/ },
/* 88 */,
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * align dom node flexibly
	 * @author yiminghe@gmail.com
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _utils = __webpack_require__(90);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _getOffsetParent = __webpack_require__(91);
	
	var _getOffsetParent2 = _interopRequireDefault(_getOffsetParent);
	
	var _getVisibleRectForElement = __webpack_require__(92);
	
	var _getVisibleRectForElement2 = _interopRequireDefault(_getVisibleRectForElement);
	
	var _adjustForViewport = __webpack_require__(93);
	
	var _adjustForViewport2 = _interopRequireDefault(_adjustForViewport);
	
	var _getRegion = __webpack_require__(94);
	
	var _getRegion2 = _interopRequireDefault(_getRegion);
	
	var _getElFuturePos = __webpack_require__(95);
	
	var _getElFuturePos2 = _interopRequireDefault(_getElFuturePos);
	
	// http://yiminghe.iteye.com/blog/1124720
	
	function isFailX(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.left < visibleRect.left || elFuturePos.left + elRegion.width > visibleRect.right;
	}
	
	function isFailY(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.top < visibleRect.top || elFuturePos.top + elRegion.height > visibleRect.bottom;
	}
	
	function isCompleteFailX(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.left > visibleRect.right || elFuturePos.left + elRegion.width < visibleRect.left;
	}
	
	function isCompleteFailY(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.top > visibleRect.bottom || elFuturePos.top + elRegion.height < visibleRect.top;
	}
	
	function flip(points, reg, map) {
	  var ret = [];
	  _utils2['default'].each(points, function (p) {
	    ret.push(p.replace(reg, function (m) {
	      return map[m];
	    }));
	  });
	  return ret;
	}
	
	function flipOffset(offset, index) {
	  offset[index] = -offset[index];
	  return offset;
	}
	
	function convertOffset(str, offsetLen) {
	  var n = undefined;
	  if (/%$/.test(str)) {
	    n = parseInt(str.substring(0, str.length - 1), 10) / 100 * offsetLen;
	  } else {
	    n = parseInt(str, 10);
	  }
	  return n || 0;
	}
	
	function normalizeOffset(offset, el) {
	  offset[0] = convertOffset(offset[0], el.width);
	  offset[1] = convertOffset(offset[1], el.height);
	}
	
	function domAlign(el, refNode, align) {
	  var points = align.points;
	  var offset = align.offset || [0, 0];
	  var targetOffset = align.targetOffset || [0, 0];
	  var overflow = align.overflow;
	  var target = align.target || refNode;
	  var source = align.source || el;
	  offset = [].concat(offset);
	  targetOffset = [].concat(targetOffset);
	  overflow = overflow || {};
	  var newOverflowCfg = {};
	
	  var fail = 0;
	  // 当前节点可以被放置的显示区域
	  var visibleRect = (0, _getVisibleRectForElement2['default'])(source);
	  // 当前节点所占的区域, left/top/width/height
	  var elRegion = (0, _getRegion2['default'])(source);
	  // 参照节点所占的区域, left/top/width/height
	  var refNodeRegion = (0, _getRegion2['default'])(target);
	  // 将 offset 转换成数值，支持百分比
	  normalizeOffset(offset, elRegion);
	  normalizeOffset(targetOffset, refNodeRegion);
	  // 当前节点将要被放置的位置
	  var elFuturePos = (0, _getElFuturePos2['default'])(elRegion, refNodeRegion, points, offset, targetOffset);
	  // 当前节点将要所处的区域
	  var newElRegion = _utils2['default'].merge(elRegion, elFuturePos);
	
	  // 如果可视区域不能完全放置当前节点时允许调整
	  if (visibleRect && (overflow.adjustX || overflow.adjustY)) {
	    if (overflow.adjustX) {
	      // 如果横向不能放下
	      if (isFailX(elFuturePos, elRegion, visibleRect)) {
	        // 对齐位置反下
	        var newPoints = flip(points, /[lr]/ig, {
	          l: 'r',
	          r: 'l'
	        });
	        // 偏移量也反下
	        var newOffset = flipOffset(offset, 0);
	        var newTargetOffset = flipOffset(targetOffset, 0);
	        var newElFuturePos = (0, _getElFuturePos2['default'])(elRegion, refNodeRegion, newPoints, newOffset, newTargetOffset);
	        if (!isCompleteFailX(newElFuturePos, elRegion, visibleRect)) {
	          fail = 1;
	          points = newPoints;
	          offset = newOffset;
	          targetOffset = newTargetOffset;
	        }
	      }
	    }
	
	    if (overflow.adjustY) {
	      // 如果纵向不能放下
	      if (isFailY(elFuturePos, elRegion, visibleRect)) {
	        // 对齐位置反下
	        var newPoints = flip(points, /[tb]/ig, {
	          t: 'b',
	          b: 't'
	        });
	        // 偏移量也反下
	        var newOffset = flipOffset(offset, 1);
	        var newTargetOffset = flipOffset(targetOffset, 1);
	        var newElFuturePos = (0, _getElFuturePos2['default'])(elRegion, refNodeRegion, newPoints, newOffset, newTargetOffset);
	        if (!isCompleteFailY(newElFuturePos, elRegion, visibleRect)) {
	          fail = 1;
	          points = newPoints;
	          offset = newOffset;
	          targetOffset = newTargetOffset;
	        }
	      }
	    }
	
	    // 如果失败，重新计算当前节点将要被放置的位置
	    if (fail) {
	      elFuturePos = (0, _getElFuturePos2['default'])(elRegion, refNodeRegion, points, offset, targetOffset);
	      _utils2['default'].mix(newElRegion, elFuturePos);
	    }
	
	    // 检查反下后的位置是否可以放下了
	    // 如果仍然放不下只有指定了可以调整当前方向才调整
	    newOverflowCfg.adjustX = overflow.adjustX && isFailX(elFuturePos, elRegion, visibleRect);
	
	    newOverflowCfg.adjustY = overflow.adjustY && isFailY(elFuturePos, elRegion, visibleRect);
	
	    // 确实要调整，甚至可能会调整高度宽度
	    if (newOverflowCfg.adjustX || newOverflowCfg.adjustY) {
	      newElRegion = (0, _adjustForViewport2['default'])(elFuturePos, elRegion, visibleRect, newOverflowCfg);
	    }
	  }
	
	  // need judge to in case set fixed with in css on height auto element
	  if (newElRegion.width !== elRegion.width) {
	    _utils2['default'].css(source, 'width', source.width() + newElRegion.width - elRegion.width);
	  }
	
	  if (newElRegion.height !== elRegion.height) {
	    _utils2['default'].css(source, 'height', source.height() + newElRegion.height - elRegion.height);
	  }
	
	  // https://github.com/kissyteam/kissy/issues/190
	  // http://localhost:8888/kissy/src/overlay/demo/other/relative_align/align.html
	  // 相对于屏幕位置没变，而 left/top 变了
	  // 例如 <div 'relative'><el absolute></div>
	  _utils2['default'].offset(source, {
	    left: newElRegion.left,
	    top: newElRegion.top
	  }, {
	    useCssRight: align.useCssRight,
	    useCssBottom: align.useCssBottom
	  });
	
	  return {
	    points: points,
	    offset: offset,
	    targetOffset: targetOffset,
	    overflow: newOverflowCfg
	  };
	}
	
	domAlign.__getOffsetParent = _getOffsetParent2['default'];
	
	domAlign.__getVisibleRectForElement = _getVisibleRectForElement2['default'];
	
	exports['default'] = domAlign;
	
	/**
	 *  2012-04-26 yiminghe@gmail.com
	 *   - 优化智能对齐算法
	 *   - 慎用 resizeXX
	 *
	 *  2011-07-13 yiminghe@gmail.com note:
	 *   - 增加智能对齐，以及大小调整选项
	 **/
	module.exports = exports['default'];

/***/ },
/* 90 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;
	
	var getComputedStyleX = undefined;
	
	function css(el, name, v) {
	  var value = v;
	  if (typeof name === 'object') {
	    for (var i in name) {
	      if (name.hasOwnProperty(i)) {
	        css(el, i, name[i]);
	      }
	    }
	    return undefined;
	  }
	  if (typeof value !== 'undefined') {
	    if (typeof value === 'number') {
	      value = value + 'px';
	    }
	    el.style[name] = value;
	    return undefined;
	  }
	  return getComputedStyleX(el, name);
	}
	
	function getClientPosition(elem) {
	  var box = undefined;
	  var x = undefined;
	  var y = undefined;
	  var doc = elem.ownerDocument;
	  var body = doc.body;
	  var docElem = doc && doc.documentElement;
	  // 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式
	  box = elem.getBoundingClientRect();
	
	  // 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
	  // 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
	  // 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin
	
	  x = box.left;
	  y = box.top;
	
	  // In IE, most of the time, 2 extra pixels are added to the top and left
	  // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
	  // IE6 standards mode, this border can be overridden by setting the
	  // document element's border to zero -- thus, we cannot rely on the
	  // offset always being 2 pixels.
	
	  // In quirks mode, the offset can be determined by querying the body's
	  // clientLeft/clientTop, but in standards mode, it is found by querying
	  // the document element's clientLeft/clientTop.  Since we already called
	  // getClientBoundingRect we have already forced a reflow, so it is not
	  // too expensive just to query them all.
	
	  // ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
	  // 窗口边框标准是设 documentElement ,quirks 时设置 body
	  // 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
	  // 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
	  // 标准 ie 下 docElem.clientTop 就是 border-top
	  // ie7 html 即窗口边框改变不了。永远为 2
	  // 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0
	
	  x -= docElem.clientLeft || body.clientLeft || 0;
	  y -= docElem.clientTop || body.clientTop || 0;
	
	  return { left: x, top: y };
	}
	
	function getScroll(w, top) {
	  var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
	  var method = 'scroll' + (top ? 'Top' : 'Left');
	  if (typeof ret !== 'number') {
	    var d = w.document;
	    // ie6,7,8 standard mode
	    ret = d.documentElement[method];
	    if (typeof ret !== 'number') {
	      // quirks mode
	      ret = d.body[method];
	    }
	  }
	  return ret;
	}
	
	function getScrollLeft(w) {
	  return getScroll(w);
	}
	
	function getScrollTop(w) {
	  return getScroll(w, true);
	}
	
	function getOffset(el) {
	  var pos = getClientPosition(el);
	  var doc = el.ownerDocument;
	  var w = doc.defaultView || doc.parentWindow;
	  pos.left += getScrollLeft(w);
	  pos.top += getScrollTop(w);
	  return pos;
	}
	function _getComputedStyle(elem, name, cs) {
	  var computedStyle = cs;
	  var val = '';
	  var d = elem.ownerDocument;
	  computedStyle = computedStyle || d.defaultView.getComputedStyle(elem, null);
	
	  // https://github.com/kissyteam/kissy/issues/61
	  if (computedStyle) {
	    val = computedStyle.getPropertyValue(name) || computedStyle[name];
	  }
	
	  return val;
	}
	
	var _RE_NUM_NO_PX = new RegExp('^(' + RE_NUM + ')(?!px)[a-z%]+$', 'i');
	var RE_POS = /^(top|right|bottom|left)$/;
	var CURRENT_STYLE = 'currentStyle';
	var RUNTIME_STYLE = 'runtimeStyle';
	var LEFT = 'left';
	var PX = 'px';
	
	function _getComputedStyleIE(elem, name) {
	  // currentStyle maybe null
	  // http://msdn.microsoft.com/en-us/library/ms535231.aspx
	  var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name];
	
	  // 当 width/height 设置为百分比时，通过 pixelLeft 方式转换的 width/height 值
	  // 一开始就处理了! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook 解决@2011-08-19
	  // 在 ie 下不对，需要直接用 offset 方式
	  // borderWidth 等值也有问题，但考虑到 borderWidth 设为百分比的概率很小，这里就不考虑了
	
	  // From the awesome hack by Dean Edwards
	  // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
	  // If we're not dealing with a regular pixel number
	  // but a number that has a weird ending, we need to convert it to pixels
	  // exclude left right for relativity
	  if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
	    // Remember the original values
	    var style = elem.style;
	    var left = style[LEFT];
	    var rsLeft = elem[RUNTIME_STYLE][LEFT];
	
	    // prevent flashing of content
	    elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT];
	
	    // Put in the new values to get a computed value out
	    style[LEFT] = name === 'fontSize' ? '1em' : ret || 0;
	    ret = style.pixelLeft + PX;
	
	    // Revert the changed values
	    style[LEFT] = left;
	
	    elem[RUNTIME_STYLE][LEFT] = rsLeft;
	  }
	  return ret === '' ? 'auto' : ret;
	}
	
	if (typeof window !== 'undefined') {
	  getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
	}
	
	function getOffsetDirection(dir, option) {
	  if (dir === 'left') {
	    return option.useCssRight ? 'right' : dir;
	  }
	  return option.useCssBottom ? 'bottom' : dir;
	}
	
	function oppositeOffsetDirection(dir) {
	  if (dir === 'left') {
	    return 'right';
	  } else if (dir === 'right') {
	    return 'left';
	  } else if (dir === 'top') {
	    return 'bottom';
	  } else if (dir === 'bottom') {
	    return 'top';
	  }
	}
	
	// 设置 elem 相对 elem.ownerDocument 的坐标
	function setOffset(elem, offset, option) {
	  // set position first, in-case top/left are set even on static elem
	  if (css(elem, 'position') === 'static') {
	    elem.style.position = 'relative';
	  }
	  var presetH = -999;
	  var presetV = -999;
	  var horizontalProperty = getOffsetDirection('left', option);
	  var verticalProperty = getOffsetDirection('top', option);
	  var oppositeHorizontalProperty = oppositeOffsetDirection(horizontalProperty);
	  var oppositeVerticalProperty = oppositeOffsetDirection(verticalProperty);
	
	  if (horizontalProperty !== 'left') {
	    presetH = 999;
	  }
	
	  if (verticalProperty !== 'top') {
	    presetV = 999;
	  }
	
	  if ('left' in offset) {
	    elem.style[oppositeHorizontalProperty] = '';
	    elem.style[horizontalProperty] = presetH + 'px';
	  }
	  if ('top' in offset) {
	    elem.style[oppositeVerticalProperty] = '';
	    elem.style[verticalProperty] = presetV + 'px';
	  }
	  var old = getOffset(elem);
	  var ret = {};
	  var key = undefined;
	  for (key in offset) {
	    if (offset.hasOwnProperty(key)) {
	      var dir = getOffsetDirection(key, option);
	      var preset = key === 'left' ? presetH : presetV;
	      if (dir === key) {
	        ret[dir] = preset + offset[key] - old[key];
	      } else {
	        ret[dir] = preset + old[key] - offset[key];
	      }
	    }
	  }
	  css(elem, ret);
	}
	
	function each(arr, fn) {
	  for (var i = 0; i < arr.length; i++) {
	    fn(arr[i]);
	  }
	}
	
	function isBorderBoxFn(elem) {
	  return getComputedStyleX(elem, 'boxSizing') === 'border-box';
	}
	
	var BOX_MODELS = ['margin', 'border', 'padding'];
	var CONTENT_INDEX = -1;
	var PADDING_INDEX = 2;
	var BORDER_INDEX = 1;
	var MARGIN_INDEX = 0;
	
	function swap(elem, options, callback) {
	  var old = {};
	  var style = elem.style;
	  var name = undefined;
	
	  // Remember the old values, and insert the new ones
	  for (name in options) {
	    if (options.hasOwnProperty(name)) {
	      old[name] = style[name];
	      style[name] = options[name];
	    }
	  }
	
	  callback.call(elem);
	
	  // Revert the old values
	  for (name in options) {
	    if (options.hasOwnProperty(name)) {
	      style[name] = old[name];
	    }
	  }
	}
	
	function getPBMWidth(elem, props, which) {
	  var value = 0;
	  var prop = undefined;
	  var j = undefined;
	  var i = undefined;
	  for (j = 0; j < props.length; j++) {
	    prop = props[j];
	    if (prop) {
	      for (i = 0; i < which.length; i++) {
	        var cssProp = undefined;
	        if (prop === 'border') {
	          cssProp = prop + which[i] + 'Width';
	        } else {
	          cssProp = prop + which[i];
	        }
	        value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
	      }
	    }
	  }
	  return value;
	}
	
	/**
	 * A crude way of determining if an object is a window
	 * @member util
	 */
	function isWindow(obj) {
	  // must use == for ie8
	  /* eslint eqeqeq:0 */
	  return obj !== null && obj !== undefined && obj == obj.window;
	}
	
	var domUtils = {};
	
	each(['Width', 'Height'], function (name) {
	  domUtils['doc' + name] = function (refWin) {
	    var d = refWin.document;
	    return Math.max(
	    // firefox chrome documentElement.scrollHeight< body.scrollHeight
	    // ie standard mode : documentElement.scrollHeight> body.scrollHeight
	    d.documentElement['scroll' + name],
	    // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
	    d.body['scroll' + name], domUtils['viewport' + name](d));
	  };
	
	  domUtils['viewport' + name] = function (win) {
	    // pc browser includes scrollbar in window.innerWidth
	    var prop = 'client' + name;
	    var doc = win.document;
	    var body = doc.body;
	    var documentElement = doc.documentElement;
	    var documentElementProp = documentElement[prop];
	    // 标准模式取 documentElement
	    // backcompat 取 body
	    return doc.compatMode === 'CSS1Compat' && documentElementProp || body && body[prop] || documentElementProp;
	  };
	});
	
	/*
	 得到元素的大小信息
	 @param elem
	 @param name
	 @param {String} [extra]  'padding' : (css width) + padding
	 'border' : (css width) + padding + border
	 'margin' : (css width) + padding + border + margin
	 */
	function getWH(elem, name, ex) {
	  var extra = ex;
	  if (isWindow(elem)) {
	    return name === 'width' ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
	  } else if (elem.nodeType === 9) {
	    return name === 'width' ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
	  }
	  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
	  var borderBoxValue = name === 'width' ? elem.offsetWidth : elem.offsetHeight;
	  var computedStyle = getComputedStyleX(elem);
	  var isBorderBox = isBorderBoxFn(elem, computedStyle);
	  var cssBoxValue = 0;
	  if (borderBoxValue === null || borderBoxValue === undefined || borderBoxValue <= 0) {
	    borderBoxValue = undefined;
	    // Fall back to computed then un computed css if necessary
	    cssBoxValue = getComputedStyleX(elem, name);
	    if (cssBoxValue === null || cssBoxValue === undefined || Number(cssBoxValue) < 0) {
	      cssBoxValue = elem.style[name] || 0;
	    }
	    // Normalize '', auto, and prepare for extra
	    cssBoxValue = parseFloat(cssBoxValue) || 0;
	  }
	  if (extra === undefined) {
	    extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
	  }
	  var borderBoxValueOrIsBorderBox = borderBoxValue !== undefined || isBorderBox;
	  var val = borderBoxValue || cssBoxValue;
	  if (extra === CONTENT_INDEX) {
	    if (borderBoxValueOrIsBorderBox) {
	      return val - getPBMWidth(elem, ['border', 'padding'], which, computedStyle);
	    }
	    return cssBoxValue;
	  } else if (borderBoxValueOrIsBorderBox) {
	    if (extra === BORDER_INDEX) {
	      return val;
	    }
	    return val + (extra === PADDING_INDEX ? -getPBMWidth(elem, ['border'], which, computedStyle) : getPBMWidth(elem, ['margin'], which, computedStyle));
	  }
	  return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which, computedStyle);
	}
	
	var cssShow = { position: 'absolute', visibility: 'hidden', display: 'block' };
	
	// fix #119 : https://github.com/kissyteam/kissy/issues/119
	function getWHIgnoreDisplay() {
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }
	
	  var val = undefined;
	  var elem = args[0];
	  // in case elem is window
	  // elem.offsetWidth === undefined
	  if (elem.offsetWidth !== 0) {
	    val = getWH.apply(undefined, args);
	  } else {
	    swap(elem, cssShow, function () {
	      val = getWH.apply(undefined, args);
	    });
	  }
	  return val;
	}
	
	each(['width', 'height'], function (name) {
	  var first = name.charAt(0).toUpperCase() + name.slice(1);
	  domUtils['outer' + first] = function (el, includeMargin) {
	    return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
	  };
	  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
	
	  domUtils[name] = function (elem, v) {
	    var val = v;
	    if (val !== undefined) {
	      if (elem) {
	        var computedStyle = getComputedStyleX(elem);
	        var isBorderBox = isBorderBoxFn(elem);
	        if (isBorderBox) {
	          val += getPBMWidth(elem, ['padding', 'border'], which, computedStyle);
	        }
	        return css(elem, name, val);
	      }
	      return undefined;
	    }
	    return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
	  };
	});
	
	function mix(to, from) {
	  for (var i in from) {
	    if (from.hasOwnProperty(i)) {
	      to[i] = from[i];
	    }
	  }
	  return to;
	}
	
	var utils = {
	  getWindow: function getWindow(node) {
	    if (node && node.document && node.setTimeout) {
	      return node;
	    }
	    var doc = node.ownerDocument || node;
	    return doc.defaultView || doc.parentWindow;
	  },
	  offset: function offset(el, value, option) {
	    if (typeof value !== 'undefined') {
	      setOffset(el, value, option || {});
	    } else {
	      return getOffset(el);
	    }
	  },
	  isWindow: isWindow,
	  each: each,
	  css: css,
	  clone: function clone(obj) {
	    var i = undefined;
	    var ret = {};
	    for (i in obj) {
	      if (obj.hasOwnProperty(i)) {
	        ret[i] = obj[i];
	      }
	    }
	    var overflow = obj.overflow;
	    if (overflow) {
	      for (i in obj) {
	        if (obj.hasOwnProperty(i)) {
	          ret.overflow[i] = obj.overflow[i];
	        }
	      }
	    }
	    return ret;
	  },
	  mix: mix,
	  getWindowScrollLeft: function getWindowScrollLeft(w) {
	    return getScrollLeft(w);
	  },
	  getWindowScrollTop: function getWindowScrollTop(w) {
	    return getScrollTop(w);
	  },
	  merge: function merge() {
	    var ret = {};
	
	    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }
	
	    for (var i = 0; i < args.length; i++) {
	      utils.mix(ret, args[i]);
	    }
	    return ret;
	  },
	  viewportWidth: 0,
	  viewportHeight: 0
	};
	
	mix(utils, domUtils);
	
	exports['default'] = utils;
	module.exports = exports['default'];

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _utils = __webpack_require__(90);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	/**
	 * 得到会导致元素显示不全的祖先元素
	 */
	
	function getOffsetParent(element) {
	  // ie 这个也不是完全可行
	  /*
	   <div style="width: 50px;height: 100px;overflow: hidden">
	   <div style="width: 50px;height: 100px;position: relative;" id="d6">
	   元素 6 高 100px 宽 50px<br/>
	   </div>
	   </div>
	   */
	  // element.offsetParent does the right thing in ie7 and below. Return parent with layout!
	  //  In other browsers it only includes elements with position absolute, relative or
	  // fixed, not elements with overflow set to auto or scroll.
	  //        if (UA.ie && ieMode < 8) {
	  //            return element.offsetParent;
	  //        }
	  // 统一的 offsetParent 方法
	  var doc = element.ownerDocument;
	  var body = doc.body;
	  var parent = undefined;
	  var positionStyle = _utils2['default'].css(element, 'position');
	  var skipStatic = positionStyle === 'fixed' || positionStyle === 'absolute';
	
	  if (!skipStatic) {
	    return element.nodeName.toLowerCase() === 'html' ? null : element.parentNode;
	  }
	
	  for (parent = element.parentNode; parent && parent !== body; parent = parent.parentNode) {
	    positionStyle = _utils2['default'].css(parent, 'position');
	    if (positionStyle !== 'static') {
	      return parent;
	    }
	  }
	  return null;
	}
	
	exports['default'] = getOffsetParent;
	module.exports = exports['default'];

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _utils = __webpack_require__(90);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _getOffsetParent = __webpack_require__(91);
	
	var _getOffsetParent2 = _interopRequireDefault(_getOffsetParent);
	
	/**
	 * 获得元素的显示部分的区域
	 */
	function getVisibleRectForElement(element) {
	  var visibleRect = {
	    left: 0,
	    right: Infinity,
	    top: 0,
	    bottom: Infinity
	  };
	  var el = (0, _getOffsetParent2['default'])(element);
	  var scrollX = undefined;
	  var scrollY = undefined;
	  var winSize = undefined;
	  var doc = element.ownerDocument;
	  var win = doc.defaultView || doc.parentWindow;
	  var body = doc.body;
	  var documentElement = doc.documentElement;
	
	  // Determine the size of the visible rect by climbing the dom accounting for
	  // all scrollable containers.
	  while (el) {
	    // clientWidth is zero for inline block elements in ie.
	    if ((navigator.userAgent.indexOf('MSIE') === -1 || el.clientWidth !== 0) &&
	    // body may have overflow set on it, yet we still get the entire
	    // viewport. In some browsers, el.offsetParent may be
	    // document.documentElement, so check for that too.
	    el !== body && el !== documentElement && _utils2['default'].css(el, 'overflow') !== 'visible') {
	      var pos = _utils2['default'].offset(el);
	      // add border
	      pos.left += el.clientLeft;
	      pos.top += el.clientTop;
	      visibleRect.top = Math.max(visibleRect.top, pos.top);
	      visibleRect.right = Math.min(visibleRect.right,
	      // consider area without scrollBar
	      pos.left + el.clientWidth);
	      visibleRect.bottom = Math.min(visibleRect.bottom, pos.top + el.clientHeight);
	      visibleRect.left = Math.max(visibleRect.left, pos.left);
	    } else if (el === body || el === documentElement) {
	      break;
	    }
	    el = (0, _getOffsetParent2['default'])(el);
	  }
	
	  // Clip by window's viewport.
	  scrollX = _utils2['default'].getWindowScrollLeft(win);
	  scrollY = _utils2['default'].getWindowScrollTop(win);
	  visibleRect.left = Math.max(visibleRect.left, scrollX);
	  visibleRect.top = Math.max(visibleRect.top, scrollY);
	  winSize = {
	    width: _utils2['default'].viewportWidth(win),
	    height: _utils2['default'].viewportHeight(win)
	  };
	  visibleRect.right = Math.min(visibleRect.right, scrollX + winSize.width);
	  visibleRect.bottom = Math.min(visibleRect.bottom, scrollY + winSize.height);
	  return visibleRect.top >= 0 && visibleRect.left >= 0 && visibleRect.bottom > visibleRect.top && visibleRect.right > visibleRect.left ? visibleRect : null;
	}
	
	exports['default'] = getVisibleRectForElement;
	module.exports = exports['default'];

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _utils = __webpack_require__(90);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function adjustForViewport(elFuturePos, elRegion, visibleRect, overflow) {
	  var pos = _utils2['default'].clone(elFuturePos);
	  var size = {
	    width: elRegion.width,
	    height: elRegion.height
	  };
	
	  if (overflow.adjustX && pos.left < visibleRect.left) {
	    pos.left = visibleRect.left;
	  }
	
	  // Left edge inside and right edge outside viewport, try to resize it.
	  if (overflow.resizeWidth && pos.left >= visibleRect.left && pos.left + size.width > visibleRect.right) {
	    size.width -= pos.left + size.width - visibleRect.right;
	  }
	
	  // Right edge outside viewport, try to move it.
	  if (overflow.adjustX && pos.left + size.width > visibleRect.right) {
	    // 保证左边界和可视区域左边界对齐
	    pos.left = Math.max(visibleRect.right - size.width, visibleRect.left);
	  }
	
	  // Top edge outside viewport, try to move it.
	  if (overflow.adjustY && pos.top < visibleRect.top) {
	    pos.top = visibleRect.top;
	  }
	
	  // Top edge inside and bottom edge outside viewport, try to resize it.
	  if (overflow.resizeHeight && pos.top >= visibleRect.top && pos.top + size.height > visibleRect.bottom) {
	    size.height -= pos.top + size.height - visibleRect.bottom;
	  }
	
	  // Bottom edge outside viewport, try to move it.
	  if (overflow.adjustY && pos.top + size.height > visibleRect.bottom) {
	    // 保证上边界和可视区域上边界对齐
	    pos.top = Math.max(visibleRect.bottom - size.height, visibleRect.top);
	  }
	
	  return _utils2['default'].mix(pos, size);
	}
	
	exports['default'] = adjustForViewport;
	module.exports = exports['default'];

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _utils = __webpack_require__(90);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function getRegion(node) {
	  var offset = undefined;
	  var w = undefined;
	  var h = undefined;
	  if (!_utils2['default'].isWindow(node) && node.nodeType !== 9) {
	    offset = _utils2['default'].offset(node);
	    w = _utils2['default'].outerWidth(node);
	    h = _utils2['default'].outerHeight(node);
	  } else {
	    var win = _utils2['default'].getWindow(node);
	    offset = {
	      left: _utils2['default'].getWindowScrollLeft(win),
	      top: _utils2['default'].getWindowScrollTop(win)
	    };
	    w = _utils2['default'].viewportWidth(win);
	    h = _utils2['default'].viewportHeight(win);
	  }
	  offset.width = w;
	  offset.height = h;
	  return offset;
	}
	
	exports['default'] = getRegion;
	module.exports = exports['default'];

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _getAlignOffset = __webpack_require__(96);
	
	var _getAlignOffset2 = _interopRequireDefault(_getAlignOffset);
	
	function getElFuturePos(elRegion, refNodeRegion, points, offset, targetOffset) {
	  var xy = undefined;
	  var diff = undefined;
	  var p1 = undefined;
	  var p2 = undefined;
	
	  xy = {
	    left: elRegion.left,
	    top: elRegion.top
	  };
	
	  p1 = (0, _getAlignOffset2['default'])(refNodeRegion, points[1]);
	  p2 = (0, _getAlignOffset2['default'])(elRegion, points[0]);
	
	  diff = [p2.left - p1.left, p2.top - p1.top];
	
	  return {
	    left: xy.left - diff[0] + offset[0] - targetOffset[0],
	    top: xy.top - diff[1] + offset[1] - targetOffset[1]
	  };
	}
	
	exports['default'] = getElFuturePos;
	module.exports = exports['default'];

/***/ },
/* 96 */
/***/ function(module, exports) {

	/**
	 * 获取 node 上的 align 对齐点 相对于页面的坐标
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	function getAlignOffset(region, align) {
	  var V = align.charAt(0);
	  var H = align.charAt(1);
	  var w = region.width;
	  var h = region.height;
	  var x = undefined;
	  var y = undefined;
	
	  x = region.left;
	  y = region.top;
	
	  if (V === 'c') {
	    y += h / 2;
	  } else if (V === 'b') {
	    y += h;
	  }
	
	  if (H === 'c') {
	    x += w / 2;
	  } else if (H === 'r') {
	    x += w;
	  }
	
	  return {
	    left: x,
	    top: y
	  };
	}
	
	exports['default'] = getAlignOffset;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=nest.js.map