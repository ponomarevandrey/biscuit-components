/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "./";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_reset_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _src_reset_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_reset_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_text_text_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _src_text_text_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_text_text_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_heading_heading_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _src_heading_heading_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_heading_heading_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_list_list_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _src_list_list_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_src_list_list_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_btn_btn_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _src_btn_btn_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_src_btn_btn_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_btn_btn_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var _src_btn_btn_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_src_btn_btn_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _src_link_link_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
/* harmony import */ var _src_link_link_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_src_link_link_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _src_pagination_pagination_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8);
/* harmony import */ var _src_pagination_pagination_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_src_pagination_pagination_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _src_comment_comment_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9);
/* harmony import */ var _src_comment_comment_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_src_comment_comment_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _src_grid_forms_grid_forms_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(10);
/* harmony import */ var _src_grid_forms_grid_forms_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_src_grid_forms_grid_forms_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _src_img_raster_img_raster_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(11);
/* harmony import */ var _src_img_raster_img_raster_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_src_img_raster_img_raster_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _src_tooltip_tooltip_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(12);
/* harmony import */ var _src_tooltip_tooltip_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_src_tooltip_tooltip_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _src_icons_icons_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(13);
/* harmony import */ var _src_icons_icons_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_src_icons_icons_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _src_breadcrumb_breadcrumb_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(16);
/* harmony import */ var _src_breadcrumb_breadcrumb_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_src_breadcrumb_breadcrumb_scss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _src_badge_badge_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(17);
/* harmony import */ var _src_badge_badge_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_src_badge_badge_scss__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _src_blockquote_blockquote_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(18);
/* harmony import */ var _src_blockquote_blockquote_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_src_blockquote_blockquote_scss__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _src_code_code_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(19);
/* harmony import */ var _src_code_code_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_src_code_code_scss__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _src_hr_hr_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(20);
/* harmony import */ var _src_hr_hr_scss__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_src_hr_hr_scss__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _src_label_label_scss__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(21);
/* harmony import */ var _src_label_label_scss__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_src_label_label_scss__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _src_embed_embed_scss__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(22);
/* harmony import */ var _src_embed_embed_scss__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_src_embed_embed_scss__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _src_table_table_scss__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(23);
/* harmony import */ var _src_table_table_scss__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_src_table_table_scss__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _src_loader_loader_scss__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(24);
/* harmony import */ var _src_loader_loader_scss__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_src_loader_loader_scss__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _src_control_control_scss__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(25);
/* harmony import */ var _src_control_control_scss__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_src_control_control_scss__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _src_form_group_form_group_scss__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(26);
/* harmony import */ var _src_form_group_form_group_scss__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_src_form_group_form_group_scss__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _src_nav_nav_scss__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(27);
/* harmony import */ var _src_nav_nav_scss__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_src_nav_nav_scss__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _src_nav_nav_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(28);
/* harmony import */ var _src_nav_nav_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_src_nav_nav_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _src_nav_fixed_nav_fixed_scss__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(29);
/* harmony import */ var _src_nav_fixed_nav_fixed_scss__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_src_nav_fixed_nav_fixed_scss__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _src_select_select_scss__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(30);
/* harmony import */ var _src_select_select_scss__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_src_select_select_scss__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _src_accordion_accordion_scss__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(31);
/* harmony import */ var _src_accordion_accordion_scss__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_src_accordion_accordion_scss__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _src_accordion_accordion_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(32);
/* harmony import */ var _src_accordion_accordion_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_src_accordion_accordion_js__WEBPACK_IMPORTED_MODULE_29__);
/************
 * GRAPHICS *
 ************/
// function for requiring images:
function requireFiles(r) {
  r.keys().forEach(r);
}
/*************
 * CSS RESET *
 *************/



/**********
 * BLOCKS *
 **********/

/* To control the CSS cascade and inheritance while importing blocks into the project, all blocks divided into two main groups:

   1. **Parent blocks** (these blocks usually, although it's not obligatory, serve as parent containers for "Child blocks")
   2. **Child blocks** (usually, you don't put anything inside these blocks, except text. Being imported last, rules in these blocks may override rules declared earlier in "Parent blocks")

**Don't change the order of blocks!** Although, all blocks are self-sufficient and don't rely on cascade and inheritance, in some rare cases reordering of their imports may break minor details like link color or font-size, so to be safe try to maintain the current blocks' order. If you don't need a block in your bundle, comment it out, don't delete it from this file, you might need it in the future */

/***************** Redefinition level 'blocks.biscuit-lib' *******************/
// Parent blocks









 // Child blocks




requireFiles(__webpack_require__(14));


















/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports) {

var backToTopBtn = document.querySelector('.btn_type_back-to-top');

if (backToTopBtn) {
  window.addEventListener('scroll', function () {
    if (window.scrollY >= 60 || document.body.scrollTop >= 60) {
      backToTopBtn.style.display = 'block';
    } else backToTopBtn.style.display = 'none';
  });
  backToTopBtn.addEventListener('click', function () {
    document.body.scrollTop = 0; // for Safari

    window.scrollTo(0, 0);
  });
}
/* else throw new Error('There is no ".backToTopBtn" class in your HTML document'); */

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./sprite.svg": 15
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 14;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sprite.svg";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 28 */
/***/ (function(module, exports) {



/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* Accordion v2 */

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Accordion =
/*#__PURE__*/
function () {
  function Accordion() {
    var _this = this;

    var single = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    _classCallCheck(this, Accordion);

    var headers = document.querySelectorAll('.accordion .accordion__header');

    if (headers.length > 0) {
      if (single) {
        headers.forEach(function (header) {
          header.addEventListener('click', _this.singleOpen);
          header.addEventListener('focus', _this.singleOpen);
        });
      } else {
        headers.forEach(function (header) {
          header.addEventListener('click', _this.open);
          header.addEventListener('keyup', _this.open);
        });
      }
    }
  }
  /* fires when user clicks on a header and
     'init' invoked with default value 'false': init() */


  _createClass(Accordion, [{
    key: "open",
    value: function open(eventObj) {
      // if we press 'Enter' or if we click:
      if (eventObj.keyCode === 13 || eventObj.type === 'click') {
        var content = this.nextElementSibling;
        if (content.style.maxHeight) content.style.maxHeight = '';else content.style.maxHeight = "".concat(content.scrollHeight, "px");
        this.classList.toggle('accordion__header_active');
      }
    }
    /* fires when user clicks on a header and
       'init' invoked with 'true': init(true) */

  }, {
    key: "singleOpen",
    value: function singleOpen() {
      // reset state of all panels:
      // 1) close all panels:
      var contents = this.parentElement.querySelectorAll('.accordion__content');

      if (contents.length > 0) {
        contents.forEach(function (content) {
          return content.style.maxHeight = '';
        });
      } // 2) reset color of all panels:


      var headers = this.parentElement.querySelectorAll('.accordion__header');

      if (headers.length > 0) {
        headers.forEach(function (header) {
          if (header.classList.contains('accordion__header_active')) {
            header.classList.remove('accordion__header_active');
          }
        });
      } // open the current panel:
      // 1) get content under current header


      var content = this.nextElementSibling;
      if (content.style.maxHeight) content.style.maxHeight = '';else content.style.maxHeight = "".concat(content.scrollHeight, "px"); // 2) change opened header color:

      this.classList.toggle('accordion__header_active');
    }
  }]);

  return Accordion;
}();

window.addEventListener('load', function () {
  new Accordion(true);
});
/* ---------------------------------------------------------------- */

/*
class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed += speed;
    console.log(`${this.name} runs with speed ${this.speed}.`);
  }
  stop() {
    this.speed = 0;
    console.log(`${this.name} stands still.`);
  }
}

// Inherit from Animal by specifying "extends Animal"
class Rabbit extends Animal {
  constructor(name, earLength) {
    super(name);
    this.earLength = earLength;
  }

  hide() {
    console.log(`${this.name} hides!`);
  }

  stop() {
    super.stop();
    this.hide();
  }
}

let rabbit = new Rabbit("White Rabbit", 10);

console.log(rabbit.name)
console.log(rabbit.earLength);
rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.stop();

console.log(Rabbit.__proto__ === Animal);
console.log(Rabbit.prototype.__proto__ === Animal.prototype)

//--------------------------

sayHello()// выдаст только 'Hello!'. Почему? Рассказу об этом и посвящён данный пример.
 
function sayHello () {
    var hello;
    
    function hello () {       // lexical environment: hello = function
        console.log('Hey!')
    }
    hello()
}




function TheatreSeats() {
  var seats = [];

  this.placePerson = function(person) {
    seats.push(person);
    console.log(seats);
  };
}

let t = new TheatreSeats();
t.placePerson('John');
t.placePerson('Bob');




let student = new Object();

student.fName = 'John';
student.lName = 'Smith';
student.id = 5;
student.markE = 76;
student.markM = 99;
student.markS = 87;
student.calculateAverage = function() {
  return (student.markE + student.markM + student.markS) / 3;
};

student.displayDetails = function() {
  document.write('Student ID: ' + student.id + '<br>');
  document.write('Name: ' + student.fName + ' ' + student.lName + '<br>');
  let avg = student.calculateAverage();
  document.write('Average marks: ' + avg);
}

student.displayDetails();

for (let prop in student) {
  document.write(prop + ' ' + student[prop] + '<br>');
}

*/

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19yZXNldC5zY3NzIiwid2VicGFjazovLy8uL3NyYy90ZXh0L190ZXh0LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlYWRpbmcvX2hlYWRpbmcuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlzdC9fbGlzdC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9idG4vX2J0bi5zY3NzIiwid2VicGFjazovLy8uL3NyYy9idG4vYnRuLmpzIiwid2VicGFjazovLy8uL3NyYy9saW5rL19saW5rLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2luYXRpb24vX3BhZ2luYXRpb24uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbWVudC9fY29tbWVudC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ncmlkLWZvcm1zL19ncmlkLWZvcm1zLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy1yYXN0ZXIvX2ltZy1yYXN0ZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdG9vbHRpcC9fdG9vbHRpcC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9pY29ucy9faWNvbnMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvaWNvbnMgc3luYyAoc3ZnfHBuZ3xqcGcpJCIsIndlYnBhY2s6Ly8vLi9zcmMvaWNvbnMvc3ByaXRlLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYnJlYWRjcnVtYi9fYnJlYWRjcnVtYi5zY3NzIiwid2VicGFjazovLy8uL3NyYy9iYWRnZS9fYmFkZ2Uuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2txdW90ZS9fYmxvY2txdW90ZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb2RlL19jb2RlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hyL19oci5zY3NzIiwid2VicGFjazovLy8uL3NyYy9sYWJlbC9fbGFiZWwuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW1iZWQvX2VtYmVkLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RhYmxlL190YWJsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9sb2FkZXIvX2xvYWRlci5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sL19jb250cm9sLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zvcm0tZ3JvdXAvX2Zvcm0tZ3JvdXAuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvbmF2L19uYXYuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvbmF2LWZpeGVkL19uYXYtZml4ZWQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VsZWN0L19zZWxlY3Quc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWNjb3JkaW9uL19hY2NvcmRpb24uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWNjb3JkaW9uL2FjY29yZGlvbi5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlRmlsZXMiLCJyIiwia2V5cyIsImZvckVhY2giLCJyZXF1aXJlIiwiYmFja1RvVG9wQnRuIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbFkiLCJib2R5Iiwic2Nyb2xsVG9wIiwic3R5bGUiLCJkaXNwbGF5Iiwic2Nyb2xsVG8iLCJBY2NvcmRpb24iLCJzaW5nbGUiLCJoZWFkZXJzIiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsImhlYWRlciIsInNpbmdsZU9wZW4iLCJvcGVuIiwiZXZlbnRPYmoiLCJrZXlDb2RlIiwidHlwZSIsImNvbnRlbnQiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJtYXhIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJjb250ZW50cyIsInBhcmVudEVsZW1lbnQiLCJjb250YWlucyIsInJlbW92ZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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QSxVQUFJRCxPQUFPLENBQUNkLEtBQVIsQ0FBY2dCLFNBQWxCLEVBQTZCRixPQUFPLENBQUNkLEtBQVIsQ0FBY2dCLFNBQWQsR0FBMEIsRUFBMUIsQ0FBN0IsS0FDS0YsT0FBTyxDQUFDZCxLQUFSLENBQWNnQixTQUFkLGFBQTZCRixPQUFPLENBQUNHLFlBQXJDLFFBMUJNLENBNEJYOztBQUNBLFdBQUtDLFNBQUwsQ0FBZUMsTUFBZixDQUFzQiwwQkFBdEI7QUFDRDs7Ozs7O0FBR0h4QixNQUFNLENBQUNDLGdCQUFQLENBQXdCLE1BQXhCLEVBQWdDLFlBQVc7QUFDekMsTUFBSU8sU0FBSixDQUFjLElBQWQ7QUFDRCxDQUZEO0FBSUE7O0FBRUEiLCJmaWxlIjoic2NyaXB0cy5mODViNDI1MjdlNDdhZTgwYzZhMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiLi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLyoqKioqKioqKioqKlxuICogR1JBUEhJQ1MgKlxuICoqKioqKioqKioqKi9cbi8vIGZ1bmN0aW9uIGZvciByZXF1aXJpbmcgaW1hZ2VzOlxuZnVuY3Rpb24gcmVxdWlyZUZpbGVzKHIpIHtcbiAgci5rZXlzKCkuZm9yRWFjaChyKTtcbn1cblxuLyoqKioqKioqKioqKipcbiAqIENTUyBSRVNFVCAqXG4gKioqKioqKioqKioqKi9cbmltcG9ydCAnLi9zcmMvX3Jlc2V0LnNjc3MnO1xuXG4vKioqKioqKioqKlxuICogQkxPQ0tTICpcbiAqKioqKioqKioqL1xuLyogVG8gY29udHJvbCB0aGUgQ1NTIGNhc2NhZGUgYW5kIGluaGVyaXRhbmNlIHdoaWxlIGltcG9ydGluZyBibG9ja3MgaW50byB0aGUgcHJvamVjdCwgYWxsIGJsb2NrcyBkaXZpZGVkIGludG8gdHdvIG1haW4gZ3JvdXBzOlxuXG4gICAxLiAqKlBhcmVudCBibG9ja3MqKiAodGhlc2UgYmxvY2tzIHVzdWFsbHksIGFsdGhvdWdoIGl0J3Mgbm90IG9ibGlnYXRvcnksIHNlcnZlIGFzIHBhcmVudCBjb250YWluZXJzIGZvciBcIkNoaWxkIGJsb2Nrc1wiKVxuICAgMi4gKipDaGlsZCBibG9ja3MqKiAodXN1YWxseSwgeW91IGRvbid0IHB1dCBhbnl0aGluZyBpbnNpZGUgdGhlc2UgYmxvY2tzLCBleGNlcHQgdGV4dC4gQmVpbmcgaW1wb3J0ZWQgbGFzdCwgcnVsZXMgaW4gdGhlc2UgYmxvY2tzIG1heSBvdmVycmlkZSBydWxlcyBkZWNsYXJlZCBlYXJsaWVyIGluIFwiUGFyZW50IGJsb2Nrc1wiKVxuXG4qKkRvbid0IGNoYW5nZSB0aGUgb3JkZXIgb2YgYmxvY2tzISoqIEFsdGhvdWdoLCBhbGwgYmxvY2tzIGFyZSBzZWxmLXN1ZmZpY2llbnQgYW5kIGRvbid0IHJlbHkgb24gY2FzY2FkZSBhbmQgaW5oZXJpdGFuY2UsIGluIHNvbWUgcmFyZSBjYXNlcyByZW9yZGVyaW5nIG9mIHRoZWlyIGltcG9ydHMgbWF5IGJyZWFrIG1pbm9yIGRldGFpbHMgbGlrZSBsaW5rIGNvbG9yIG9yIGZvbnQtc2l6ZSwgc28gdG8gYmUgc2FmZSB0cnkgdG8gbWFpbnRhaW4gdGhlIGN1cnJlbnQgYmxvY2tzJyBvcmRlci4gSWYgeW91IGRvbid0IG5lZWQgYSBibG9jayBpbiB5b3VyIGJ1bmRsZSwgY29tbWVudCBpdCBvdXQsIGRvbid0IGRlbGV0ZSBpdCBmcm9tIHRoaXMgZmlsZSwgeW91IG1pZ2h0IG5lZWQgaXQgaW4gdGhlIGZ1dHVyZSAqL1xuXG4vKioqKioqKioqKioqKioqKiogUmVkZWZpbml0aW9uIGxldmVsICdibG9ja3MuYmlzY3VpdC1saWInICoqKioqKioqKioqKioqKioqKiovXG5cbi8vIFBhcmVudCBibG9ja3NcblxuaW1wb3J0ICcuL3NyYy90ZXh0L190ZXh0LnNjc3MnO1xuXG5pbXBvcnQgJy4vc3JjL2hlYWRpbmcvX2hlYWRpbmcuc2Nzcyc7XG5cbmltcG9ydCAnLi9zcmMvbGlzdC9fbGlzdC5zY3NzJztcblxuaW1wb3J0ICcuL3NyYy9idG4vX2J0bi5zY3NzJztcbmltcG9ydCAnLi9zcmMvYnRuL2J0bi5qcyc7XG5cbmltcG9ydCAnLi9zcmMvbGluay9fbGluay5zY3NzJztcblxuaW1wb3J0ICcuL3NyYy9wYWdpbmF0aW9uL19wYWdpbmF0aW9uLnNjc3MnO1xuXG5pbXBvcnQgJy4vc3JjL2NvbW1lbnQvX2NvbW1lbnQuc2Nzcyc7XG5cbmltcG9ydCAnLi9zcmMvZ3JpZC1mb3Jtcy9fZ3JpZC1mb3Jtcy5zY3NzJztcblxuLy8gQ2hpbGQgYmxvY2tzXG5cbmltcG9ydCAnLi9zcmMvaW1nLXJhc3Rlci9faW1nLXJhc3Rlci5zY3NzJztcblxuaW1wb3J0ICcuL3NyYy90b29sdGlwL190b29sdGlwLnNjc3MnO1xuXG5pbXBvcnQgJy4vc3JjL2ljb25zL19pY29ucy5zY3NzJztcbnJlcXVpcmVGaWxlcyhyZXF1aXJlLmNvbnRleHQoJy4vc3JjL2ljb25zLycsIHRydWUsIC8oc3ZnfHBuZ3xqcGcpJC8pKTtcblxuaW1wb3J0ICcuL3NyYy9icmVhZGNydW1iL19icmVhZGNydW1iLnNjc3MnO1xuXG5pbXBvcnQgJy4vc3JjL2JhZGdlL19iYWRnZS5zY3NzJztcblxuaW1wb3J0ICcuL3NyYy9ibG9ja3F1b3RlL19ibG9ja3F1b3RlLnNjc3MnO1xuXG5pbXBvcnQgJy4vc3JjL2NvZGUvX2NvZGUuc2Nzcyc7XG5cbmltcG9ydCAnLi9zcmMvaHIvX2hyLnNjc3MnO1xuXG5pbXBvcnQgJy4vc3JjL2xhYmVsL19sYWJlbC5zY3NzJztcblxuaW1wb3J0ICcuL3NyYy9lbWJlZC9fZW1iZWQuc2Nzcyc7XG5cbmltcG9ydCAnLi9zcmMvdGFibGUvX3RhYmxlLnNjc3MnO1xuXG5pbXBvcnQgJy4vc3JjL2xvYWRlci9fbG9hZGVyLnNjc3MnO1xuXG5pbXBvcnQgJy4vc3JjL2NvbnRyb2wvX2NvbnRyb2wuc2Nzcyc7XG5cbmltcG9ydCAnLi9zcmMvZm9ybS1ncm91cC9fZm9ybS1ncm91cC5zY3NzJztcblxuaW1wb3J0ICcuL3NyYy9uYXYvX25hdi5zY3NzJztcbmltcG9ydCAnLi9zcmMvbmF2L25hdi5qcyc7XG5cbmltcG9ydCAnLi9zcmMvbmF2LWZpeGVkL19uYXYtZml4ZWQuc2Nzcyc7XG5cbmltcG9ydCAnLi9zcmMvc2VsZWN0L19zZWxlY3Quc2Nzcyc7XG5cbmltcG9ydCAnLi9zcmMvYWNjb3JkaW9uL19hY2NvcmRpb24uc2Nzcyc7XG5pbXBvcnQgJy4vc3JjL2FjY29yZGlvbi9hY2NvcmRpb24uanMnO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiY29uc3QgYmFja1RvVG9wQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bl90eXBlX2JhY2stdG8tdG9wJyk7XG5cbmlmIChiYWNrVG9Ub3BCdG4pIHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcbiAgICBpZiAod2luZG93LnNjcm9sbFkgPj0gNjAgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPj0gNjApIHtcbiAgICAgIGJhY2tUb1RvcEJ0bi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9IGVsc2UgYmFja1RvVG9wQnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH0pO1xuXG4gIGJhY2tUb1RvcEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IDA7IC8vIGZvciBTYWZhcmlcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gIH0pO1xufSAvKiBlbHNlIHRocm93IG5ldyBFcnJvcignVGhlcmUgaXMgbm8gXCIuYmFja1RvVG9wQnRuXCIgY2xhc3MgaW4geW91ciBIVE1MIGRvY3VtZW50Jyk7ICovXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vc3ByaXRlLnN2Z1wiOiAxNVxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IDE0OyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9zcHJpdGUuc3ZnXCI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiJ3VzZSBzdHJpY3QnO1xuLyogQWNjb3JkaW9uIHYyICovXG5cbmNsYXNzIEFjY29yZGlvbiB7XG4gIGNvbnN0cnVjdG9yKHNpbmdsZSA9IGZhbHNlKSB7XG4gICAgbGV0IGhlYWRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3JkaW9uIC5hY2NvcmRpb25fX2hlYWRlcicpO1xuXG4gICAgaWYgKGhlYWRlcnMubGVuZ3RoID4gMCkge1xuICAgICAgaWYgKHNpbmdsZSkge1xuICAgICAgICBoZWFkZXJzLmZvckVhY2goaGVhZGVyID0+IHtcbiAgICAgICAgICBoZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnNpbmdsZU9wZW4pO1xuICAgICAgICAgIGhlYWRlci5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuc2luZ2xlT3Blbik7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGVhZGVycy5mb3JFYWNoKGhlYWRlciA9PiB7XG4gICAgICAgICAgaGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vcGVuKTtcbiAgICAgICAgICBoZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLm9wZW4pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiBmaXJlcyB3aGVuIHVzZXIgY2xpY2tzIG9uIGEgaGVhZGVyIGFuZFxuICAgICAnaW5pdCcgaW52b2tlZCB3aXRoIGRlZmF1bHQgdmFsdWUgJ2ZhbHNlJzogaW5pdCgpICovXG4gIG9wZW4oZXZlbnRPYmopIHtcbiAgICAvLyBpZiB3ZSBwcmVzcyAnRW50ZXInIG9yIGlmIHdlIGNsaWNrOlxuICAgIGlmIChldmVudE9iai5rZXlDb2RlID09PSAxMyB8fCBldmVudE9iai50eXBlID09PSAnY2xpY2snKSB7XG4gICAgICBsZXQgY29udGVudCA9IHRoaXMubmV4dEVsZW1lbnRTaWJsaW5nO1xuXG4gICAgICBpZiAoY29udGVudC5zdHlsZS5tYXhIZWlnaHQpIGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gJyc7XG4gICAgICBlbHNlIGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gYCR7Y29udGVudC5zY3JvbGxIZWlnaHR9cHhgO1xuXG4gICAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoJ2FjY29yZGlvbl9faGVhZGVyX2FjdGl2ZScpO1xuICAgIH1cbiAgfVxuXG4gIC8qIGZpcmVzIHdoZW4gdXNlciBjbGlja3Mgb24gYSBoZWFkZXIgYW5kXG4gICAgICdpbml0JyBpbnZva2VkIHdpdGggJ3RydWUnOiBpbml0KHRydWUpICovXG4gIHNpbmdsZU9wZW4oKSB7XG4gICAgLy8gcmVzZXQgc3RhdGUgb2YgYWxsIHBhbmVsczpcblxuICAgIC8vIDEpIGNsb3NlIGFsbCBwYW5lbHM6XG4gICAgbGV0IGNvbnRlbnRzID0gdGhpcy5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY2NvcmRpb25fX2NvbnRlbnQnKTtcblxuICAgIGlmIChjb250ZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICBjb250ZW50cy5mb3JFYWNoKGNvbnRlbnQgPT4gKGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gJycpKTtcbiAgICB9XG5cbiAgICAvLyAyKSByZXNldCBjb2xvciBvZiBhbGwgcGFuZWxzOlxuICAgIGxldCBoZWFkZXJzID0gdGhpcy5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY2NvcmRpb25fX2hlYWRlcicpO1xuICAgIGlmIChoZWFkZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIGhlYWRlcnMuZm9yRWFjaChoZWFkZXIgPT4ge1xuICAgICAgICBpZiAoaGVhZGVyLmNsYXNzTGlzdC5jb250YWlucygnYWNjb3JkaW9uX19oZWFkZXJfYWN0aXZlJykpIHtcbiAgICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWNjb3JkaW9uX19oZWFkZXJfYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIG9wZW4gdGhlIGN1cnJlbnQgcGFuZWw6XG5cbiAgICAvLyAxKSBnZXQgY29udGVudCB1bmRlciBjdXJyZW50IGhlYWRlclxuICAgIGxldCBjb250ZW50ID0gdGhpcy5uZXh0RWxlbWVudFNpYmxpbmc7XG5cbiAgICBpZiAoY29udGVudC5zdHlsZS5tYXhIZWlnaHQpIGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gJyc7XG4gICAgZWxzZSBjb250ZW50LnN0eWxlLm1heEhlaWdodCA9IGAke2NvbnRlbnQuc2Nyb2xsSGVpZ2h0fXB4YDtcblxuICAgIC8vIDIpIGNoYW5nZSBvcGVuZWQgaGVhZGVyIGNvbG9yOlxuICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZSgnYWNjb3JkaW9uX19oZWFkZXJfYWN0aXZlJyk7XG4gIH1cbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpIHtcbiAgbmV3IEFjY29yZGlvbih0cnVlKTtcbn0pO1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qXG5jbGFzcyBBbmltYWwge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5zcGVlZCA9IDA7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuICBydW4oc3BlZWQpIHtcbiAgICB0aGlzLnNwZWVkICs9IHNwZWVkO1xuICAgIGNvbnNvbGUubG9nKGAke3RoaXMubmFtZX0gcnVucyB3aXRoIHNwZWVkICR7dGhpcy5zcGVlZH0uYCk7XG4gIH1cbiAgc3RvcCgpIHtcbiAgICB0aGlzLnNwZWVkID0gMDtcbiAgICBjb25zb2xlLmxvZyhgJHt0aGlzLm5hbWV9IHN0YW5kcyBzdGlsbC5gKTtcbiAgfVxufVxuXG4vLyBJbmhlcml0IGZyb20gQW5pbWFsIGJ5IHNwZWNpZnlpbmcgXCJleHRlbmRzIEFuaW1hbFwiXG5jbGFzcyBSYWJiaXQgZXh0ZW5kcyBBbmltYWwge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBlYXJMZW5ndGgpIHtcbiAgICBzdXBlcihuYW1lKTtcbiAgICB0aGlzLmVhckxlbmd0aCA9IGVhckxlbmd0aDtcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgY29uc29sZS5sb2coYCR7dGhpcy5uYW1lfSBoaWRlcyFgKTtcbiAgfVxuXG4gIHN0b3AoKSB7XG4gICAgc3VwZXIuc3RvcCgpO1xuICAgIHRoaXMuaGlkZSgpO1xuICB9XG59XG5cbmxldCByYWJiaXQgPSBuZXcgUmFiYml0KFwiV2hpdGUgUmFiYml0XCIsIDEwKTtcblxuY29uc29sZS5sb2cocmFiYml0Lm5hbWUpXG5jb25zb2xlLmxvZyhyYWJiaXQuZWFyTGVuZ3RoKTtcbnJhYmJpdC5ydW4oNSk7IC8vIFdoaXRlIFJhYmJpdCBydW5zIHdpdGggc3BlZWQgNS5cbnJhYmJpdC5zdG9wKCk7XG5cbmNvbnNvbGUubG9nKFJhYmJpdC5fX3Byb3RvX18gPT09IEFuaW1hbCk7XG5jb25zb2xlLmxvZyhSYWJiaXQucHJvdG90eXBlLl9fcHJvdG9fXyA9PT0gQW5pbWFsLnByb3RvdHlwZSlcblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5zYXlIZWxsbygpLy8g0LLRi9C00LDRgdGCINGC0L7Qu9GM0LrQviAnSGVsbG8hJy4g0J/QvtGH0LXQvNGDPyDQoNCw0YHRgdC60LDQt9GDINC+0LEg0Y3RgtC+0Lwg0Lgg0L/QvtGB0LLRj9GJ0ZHQvSDQtNCw0L3QvdGL0Lkg0L/RgNC40LzQtdGALlxuIFxuZnVuY3Rpb24gc2F5SGVsbG8gKCkge1xuICAgIHZhciBoZWxsbztcbiAgICBcbiAgICBmdW5jdGlvbiBoZWxsbyAoKSB7ICAgICAgIC8vIGxleGljYWwgZW52aXJvbm1lbnQ6IGhlbGxvID0gZnVuY3Rpb25cbiAgICAgICAgY29uc29sZS5sb2coJ0hleSEnKVxuICAgIH1cbiAgICBoZWxsbygpXG59XG5cblxuXG5cbmZ1bmN0aW9uIFRoZWF0cmVTZWF0cygpIHtcbiAgdmFyIHNlYXRzID0gW107XG5cbiAgdGhpcy5wbGFjZVBlcnNvbiA9IGZ1bmN0aW9uKHBlcnNvbikge1xuICAgIHNlYXRzLnB1c2gocGVyc29uKTtcbiAgICBjb25zb2xlLmxvZyhzZWF0cyk7XG4gIH07XG59XG5cbmxldCB0ID0gbmV3IFRoZWF0cmVTZWF0cygpO1xudC5wbGFjZVBlcnNvbignSm9obicpO1xudC5wbGFjZVBlcnNvbignQm9iJyk7XG5cblxuXG5cbmxldCBzdHVkZW50ID0gbmV3IE9iamVjdCgpO1xuXG5zdHVkZW50LmZOYW1lID0gJ0pvaG4nO1xuc3R1ZGVudC5sTmFtZSA9ICdTbWl0aCc7XG5zdHVkZW50LmlkID0gNTtcbnN0dWRlbnQubWFya0UgPSA3NjtcbnN0dWRlbnQubWFya00gPSA5OTtcbnN0dWRlbnQubWFya1MgPSA4NztcbnN0dWRlbnQuY2FsY3VsYXRlQXZlcmFnZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gKHN0dWRlbnQubWFya0UgKyBzdHVkZW50Lm1hcmtNICsgc3R1ZGVudC5tYXJrUykgLyAzO1xufTtcblxuc3R1ZGVudC5kaXNwbGF5RGV0YWlscyA9IGZ1bmN0aW9uKCkge1xuICBkb2N1bWVudC53cml0ZSgnU3R1ZGVudCBJRDogJyArIHN0dWRlbnQuaWQgKyAnPGJyPicpO1xuICBkb2N1bWVudC53cml0ZSgnTmFtZTogJyArIHN0dWRlbnQuZk5hbWUgKyAnICcgKyBzdHVkZW50LmxOYW1lICsgJzxicj4nKTtcbiAgbGV0IGF2ZyA9IHN0dWRlbnQuY2FsY3VsYXRlQXZlcmFnZSgpO1xuICBkb2N1bWVudC53cml0ZSgnQXZlcmFnZSBtYXJrczogJyArIGF2Zyk7XG59XG5cbnN0dWRlbnQuZGlzcGxheURldGFpbHMoKTtcblxuZm9yIChsZXQgcHJvcCBpbiBzdHVkZW50KSB7XG4gIGRvY3VtZW50LndyaXRlKHByb3AgKyAnICcgKyBzdHVkZW50W3Byb3BdICsgJzxicj4nKTtcbn1cblxuKi9cbiJdLCJzb3VyY2VSb290IjoiIn0=