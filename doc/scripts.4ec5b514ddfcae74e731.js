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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_blocks_reset_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _src_blocks_reset_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_blocks_reset_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_doc_doc_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26);
/* harmony import */ var _src_doc_doc_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_doc_doc_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_doc_doc_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27);
/* harmony import */ var _src_doc_doc_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_doc_doc_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_blocks_page_page_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28);
/* harmony import */ var _src_blocks_page_page_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_src_blocks_page_page_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_blocks_page_page_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29);
/* harmony import */ var _src_blocks_page_page_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_src_blocks_page_page_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_blocks_header_header_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(30);
/* harmony import */ var _src_blocks_header_header_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_src_blocks_header_header_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _src_blocks_main_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(31);
/* harmony import */ var _src_blocks_main_main_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_src_blocks_main_main_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _src_blocks_footer_footer_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(32);
/* harmony import */ var _src_blocks_footer_footer_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_src_blocks_footer_footer_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _src_blocks_text_text_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(33);
/* harmony import */ var _src_blocks_text_text_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_src_blocks_text_text_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _src_blocks_heading_heading_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(34);
/* harmony import */ var _src_blocks_heading_heading_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_src_blocks_heading_heading_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _src_blocks_list_list_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(35);
/* harmony import */ var _src_blocks_list_list_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_src_blocks_list_list_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _src_blocks_btn_btn_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(36);
/* harmony import */ var _src_blocks_btn_btn_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_src_blocks_btn_btn_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _src_blocks_btn_back_to_top_btn_back_to_top_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(37);
/* harmony import */ var _src_blocks_btn_back_to_top_btn_back_to_top_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_src_blocks_btn_back_to_top_btn_back_to_top_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _src_blocks_btn_back_to_top_btn_back_to_top_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(38);
/* harmony import */ var _src_blocks_btn_back_to_top_btn_back_to_top_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_src_blocks_btn_back_to_top_btn_back_to_top_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _src_blocks_link_link_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(39);
/* harmony import */ var _src_blocks_link_link_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_src_blocks_link_link_scss__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _src_blocks_pagination_pagination_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(40);
/* harmony import */ var _src_blocks_pagination_pagination_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_src_blocks_pagination_pagination_scss__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _src_blocks_comment_comment_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(41);
/* harmony import */ var _src_blocks_comment_comment_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_src_blocks_comment_comment_scss__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _src_blocks_grid_forms_grid_forms_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(42);
/* harmony import */ var _src_blocks_grid_forms_grid_forms_scss__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_src_blocks_grid_forms_grid_forms_scss__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _src_blocks_grid_page_layout2_grid_page_layout2_scss__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(43);
/* harmony import */ var _src_blocks_grid_page_layout2_grid_page_layout2_scss__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_src_blocks_grid_page_layout2_grid_page_layout2_scss__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _src_blocks_grid_page_layout1_grid_page_layout1_scss__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(44);
/* harmony import */ var _src_blocks_grid_page_layout1_grid_page_layout1_scss__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_src_blocks_grid_page_layout1_grid_page_layout1_scss__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _src_blocks_grid_gallery_grid_gallery_scss__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(45);
/* harmony import */ var _src_blocks_grid_gallery_grid_gallery_scss__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_src_blocks_grid_gallery_grid_gallery_scss__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _src_blocks_grid_simple_grid_simple_scss__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(46);
/* harmony import */ var _src_blocks_grid_simple_grid_simple_scss__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_src_blocks_grid_simple_grid_simple_scss__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _src_blocks_fullscreen_bg_fullscreen_bg_scss__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(47);
/* harmony import */ var _src_blocks_fullscreen_bg_fullscreen_bg_scss__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_src_blocks_fullscreen_bg_fullscreen_bg_scss__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _src_blocks_img_raster_img_raster_scss__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(48);
/* harmony import */ var _src_blocks_img_raster_img_raster_scss__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_src_blocks_img_raster_img_raster_scss__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _src_blocks_img_svg_img_svg_scss__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(49);
/* harmony import */ var _src_blocks_img_svg_img_svg_scss__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_src_blocks_img_svg_img_svg_scss__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _src_blocks_icons_icons_scss__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(50);
/* harmony import */ var _src_blocks_icons_icons_scss__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_src_blocks_icons_icons_scss__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _src_blocks_breadcrumbs_breadcrumbs_scss__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(53);
/* harmony import */ var _src_blocks_breadcrumbs_breadcrumbs_scss__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_src_blocks_breadcrumbs_breadcrumbs_scss__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _src_blocks_badge_badge_scss__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(54);
/* harmony import */ var _src_blocks_badge_badge_scss__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_src_blocks_badge_badge_scss__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _src_blocks_blockquote_blockquote_scss__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(55);
/* harmony import */ var _src_blocks_blockquote_blockquote_scss__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_src_blocks_blockquote_blockquote_scss__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _src_blocks_code_code_scss__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(56);
/* harmony import */ var _src_blocks_code_code_scss__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_src_blocks_code_code_scss__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _src_blocks_hr_hr_scss__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(57);
/* harmony import */ var _src_blocks_hr_hr_scss__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_src_blocks_hr_hr_scss__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _src_blocks_label_label_scss__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(58);
/* harmony import */ var _src_blocks_label_label_scss__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_src_blocks_label_label_scss__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _src_blocks_embed_embed_scss__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(59);
/* harmony import */ var _src_blocks_embed_embed_scss__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(_src_blocks_embed_embed_scss__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _src_blocks_table_table_scss__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(60);
/* harmony import */ var _src_blocks_table_table_scss__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(_src_blocks_table_table_scss__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var _src_blocks_loader_loader_scss__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(61);
/* harmony import */ var _src_blocks_loader_loader_scss__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(_src_blocks_loader_loader_scss__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var _src_blocks_control_control_scss__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(62);
/* harmony import */ var _src_blocks_control_control_scss__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(_src_blocks_control_control_scss__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var _src_blocks_form_group_form_group_scss__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(63);
/* harmony import */ var _src_blocks_form_group_form_group_scss__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(_src_blocks_form_group_form_group_scss__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var _src_blocks_select_select_scss__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(0);
/* harmony import */ var _src_blocks_select_select_scss__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(_src_blocks_select_select_scss__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var _src_blocks_accordion_accordion_scss__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(64);
/* harmony import */ var _src_blocks_accordion_accordion_scss__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(_src_blocks_accordion_accordion_scss__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var _src_blocks_accordion_accordion_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(65);
/* harmony import */ var _src_blocks_accordion_accordion_js__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(_src_blocks_accordion_accordion_js__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var _src_blocks_lightbox_lightbox_scss__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(66);
/* harmony import */ var _src_blocks_lightbox_lightbox_scss__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(_src_blocks_lightbox_lightbox_scss__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var _src_blocks_lightbox_lightbox_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(67);
/* harmony import */ var _src_blocks_lightbox_lightbox_js__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(_src_blocks_lightbox_lightbox_js__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var _src_blocks_hamburger_hamburger_scss__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(68);
/* harmony import */ var _src_blocks_hamburger_hamburger_scss__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(_src_blocks_hamburger_hamburger_scss__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var _src_blocks_hamburger_hamburger_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(69);
/* harmony import */ var _src_blocks_hamburger_hamburger_js__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(_src_blocks_hamburger_hamburger_js__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var _src_blocks_modal_modal_scss__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(70);
/* harmony import */ var _src_blocks_modal_modal_scss__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(_src_blocks_modal_modal_scss__WEBPACK_IMPORTED_MODULE_44__);
/* harmony import */ var _src_blocks_modal_modal_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(71);
/* harmony import */ var _src_blocks_modal_modal_js__WEBPACK_IMPORTED_MODULE_45___default = /*#__PURE__*/__webpack_require__.n(_src_blocks_modal_modal_js__WEBPACK_IMPORTED_MODULE_45__);
/* harmony import */ var _src_blocks_select_select_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(72);
/* harmony import */ var _src_blocks_select_select_js__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(_src_blocks_select_select_js__WEBPACK_IMPORTED_MODULE_46__);
/*
 * HELPER FUNCTIONS
 */
// function for requiring images:
function requireFiles(r) {
  r.keys().forEach(r);
}

requireFiles(__webpack_require__(2));
/*
 * CSS RESET
 */


/*
 *  DOCUMENTATION STYLES
 */



/*
 * BLOCKS
 */

/* To control the CSS cascade and inheritance while importing blocks into the project, all blocks divided into two main groups:

   1. **Parent blocks** (these blocks usually, although it's not obligatory, serve as parent containers for "Child blocks")
   2. **Child blocks** (usually, you don't put anything inside these blocks, except text. Being imported last, rules in these blocks may override rules declared earlier in "Parent blocks")

**Don't change the order of blocks!** Although, all blocks are self-sufficient and don't rely on cascade and inheritance, in some rare cases reordering of their imports may break minor details like link color or font-size, so to be safe try to maintain the current blocks' order. If you don't need a block in your bundle, comment it out, don't delete it from this file, you might need it in the future */
// Parent blocks




















 // Child blocks




requireFiles(__webpack_require__(51));























/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./animals_landscape_lg.jpg": 3,
	"./animals_landscape_md.jpg": 4,
	"./animals_landscape_sm.jpg": 5,
	"./animals_landscape_xl.jpg": 6,
	"./animals_landscape_xxl.jpg": 7,
	"./animals_landscape_xxxl.jpg": 8,
	"./biscuit-logo-black.svg": 9,
	"./biscuit-logo-white.svg": 10,
	"./biscuit-symbol.svg": 11,
	"./cookie.svg": 12,
	"./fullscreen-image.jpg": 13,
	"./lightbox-img1-preview.jpg": 14,
	"./lightbox-img1.jpg": 15,
	"./lightbox-img2-preview.jpg": 16,
	"./lightbox-img2.jpg": 17,
	"./lightbox-img3-preview.jpg": 18,
	"./lightbox-img3.jpg": 19,
	"./lightbox-img4-preview.jpg": 20,
	"./lightbox-img4.jpg": 21,
	"./logo.svg": 22,
	"./logos.svg": 23,
	"./user-pic.svg": 24
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
webpackContext.id = 2;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/animals_landscape_lg.jpg";

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/animals_landscape_md.jpg";

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/animals_landscape_sm.jpg";

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/animals_landscape_xl.jpg";

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/animals_landscape_xxl.jpg";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/animals_landscape_xxxl.jpg";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/biscuit-logo-black.svg";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/biscuit-logo-white.svg";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/biscuit-symbol.svg";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/cookie.svg";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/fullscreen-image.jpg";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/lightbox-img1-preview.jpg";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/lightbox-img1.jpg";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/lightbox-img2-preview.jpg";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/lightbox-img2.jpg";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/lightbox-img3-preview.jpg";

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/lightbox-img3.jpg";

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/lightbox-img4-preview.jpg";

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/lightbox-img4.jpg";

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.svg";

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logos.svg";

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/user-pic.svg";

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
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Hamburger =
/*#__PURE__*/
function () {
  function Hamburger(config) {
    _classCallCheck(this, Hamburger);

    this._config = config;
    this._btnEl = document.querySelector(".".concat(this._config.classes.btn));
    this._menuEl = document.querySelector(".".concat(this._config.classes.menu));
  }

  _createClass(Hamburger, [{
    key: "handleEvent",
    value: function handleEvent(e) {
      if ((e.target.classList.contains("doc-nav__link") || e.target.parentElement.classList.contains("doc-nav__icon") || e.target === this._btnEl) && document.documentElement.clientWidth < 768) {
        this._menuEl.classList.toggle("".concat(this._config.classes.activeMenu));

        this._menuEl.classList.toggle("".concat(this._config.classes.animateBtn));
      }
    }
  }]);

  return Hamburger;
}();

var config = {
  classes: {
    menu: "doc-nav",
    btn: "doc-nav__icon",
    activeMenu: "doc-nav_active",
    animateBtn: "doc-nav__icon_animate"
  }
};
window.addEventListener("load", function () {
  var menu = document.querySelector(".".concat(config.classes.menu));
  var btn = new Hamburger(config);
  menu.addEventListener("click", btn);
});

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 29 */
/***/ (function(module, exports) {

var page__preload = document.querySelector(".page__preload");
window.addEventListener("load", function () {
  if (page__preload) page__preload.classList.remove("page__preload");
}, false);

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

// extracted by mini-css-extract-plugin

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 38 */
/***/ (function(module, exports) {

window.addEventListener("load", function (e) {
  var backToTopBtn = document.querySelector(".btn-back-to-top");

  if (backToTopBtn) {
    window.addEventListener("scroll", function () {
      if (window.scrollY >= 60 || document.body.scrollTop >= 60) {
        backToTopBtn.style.display = "block";
      } else backToTopBtn.style.display = "none";
    });
    backToTopBtn.addEventListener("click", function () {
      document.body.scrollTop = 0; // for Safari

      window.scrollTo(0, 0);
    });
  }
});

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./sprite.svg": 52
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
webpackContext.id = 51;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sprite.svg";

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 65 */
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

    var headers = document.querySelectorAll(".accordion .accordion__header");

    if (headers.length > 0) {
      if (single) {
        headers.forEach(function (header) {
          header.addEventListener("click", _this.singleOpen);
          header.addEventListener("focus", _this.singleOpen);
        });
      } else {
        headers.forEach(function (header) {
          header.addEventListener("click", _this.open);
          header.addEventListener("keyup", _this.open);
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
      if (eventObj.keyCode === 13 || eventObj.type === "click") {
        var content = this.nextElementSibling;
        if (content.style.maxHeight) content.style.maxHeight = "";else content.style.maxHeight = "".concat(content.scrollHeight, "px");
        this.classList.toggle("accordion__header_active");
      }
    }
    /* fires when user clicks on a header and
       'init' invoked with 'true': init(true) */

  }, {
    key: "singleOpen",
    value: function singleOpen() {
      // reset state of all panels:
      // 1) close all panels:
      var contents = this.parentElement.querySelectorAll(".accordion__content");

      if (contents.length > 0) {
        contents.forEach(function (content) {
          return content.style.maxHeight = "";
        });
      } // 2) reset color of all panels:


      var headers = this.parentElement.querySelectorAll(".accordion__header");

      if (headers.length > 0) {
        headers.forEach(function (header) {
          if (header.classList.contains("accordion__header_active")) {
            header.classList.remove("accordion__header_active");
          }
        });
      } // open the current panel:
      // 1) get content under current header


      var content = this.nextElementSibling;
      if (content.style.maxHeight) content.style.maxHeight = "";else content.style.maxHeight = "".concat(content.scrollHeight, "px"); // 2) change opened header color:

      this.classList.toggle("accordion__header_active");
    }
  }]);

  return Accordion;
}();

window.addEventListener("load", function () {
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

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 67 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Lightbox =
/*#__PURE__*/
function () {
  function Lightbox(config) {
    var _this = this;

    _classCallCheck(this, Lightbox);

    this._config = config;
    this._backdrop = document.querySelector(".".concat(this._config.classes.backdrop));
    this._closeBtn = document.querySelector(".".concat(this._config.classes.closeBtn));
    this._slides = document.querySelectorAll(".lightbox__dialog");
    this._counter = 0;
    this._amount = this._slides.length;
    var prevBtn = document.querySelector("#".concat(this._config.classes.prevBtn));
    var nextBtn = document.querySelector("#".concat(this._config.classes.nextBtn));
    prevBtn.addEventListener("click", function (e) {
      return _this.navigate(e, -1);
    });
    nextBtn.addEventListener("click", function (e) {
      return _this.navigate(e, 1);
    });
    document.addEventListener("click", function (e) {
      return _this.onClick(e);
    });
    document.addEventListener("keydown", function (e) {
      return _this.onKeydown(e);
    });
  }

  _createClass(Lightbox, [{
    key: "getElemIndex",
    value: function getElemIndex(elem) {
      if (elem.dataset.lightbox) return elem.dataset.lightbox.match(/\d/)[0];
    }
  }, {
    key: "navigate",
    value: function navigate(e, direction) {
      this.hideDialog(this._current);
      this._counter = this._counter + direction;
      if (direction === -1 && this._counter < 0) this._counter = this._amount - 1;
      if (direction === 1 && !this._slides[this._counter]) this._counter = 0;
      this._current = this._slides[this._counter];
      this.showDialog(this._current);
    }
  }, {
    key: "openLightbox",
    value: function openLightbox(clickedEl) {
      var newDialog = document.querySelector("#".concat(clickedEl.dataset.lightbox));
      var visibleDialog = document.querySelector(".".concat(this._config.classes.dialogStateModifier));
      this.toggleBackdrop();
      if (visibleDialog) this.hideDialog(visibleDialog);
      this.showDialog(newDialog);
      this._openedDialog = newDialog;
      document.body.style.overflow = "hidden";
    }
  }, {
    key: "closeLightbox",
    value: function closeLightbox() {
      this.toggleBackdrop();
      delete this._openedDialog;
      document.body.style.overflow = "";
      return;
    }
  }, {
    key: "onClick",
    value: function onClick(e) {
      var clickedEl = e.target;

      if (clickedEl === this._backdrop || clickedEl === this._closeBtn) {
        this.closeLightbox();
      }

      if (clickedEl.dataset.lightbox) {
        e.preventDefault();
        this._counter = Number(this.getElemIndex(clickedEl));
        this._current = this._slides[this._counter];
        this.openLightbox(clickedEl);
      }
    }
  }, {
    key: "onKeydown",
    value: function onKeydown(e) {
      if (this._openedDialog && e.code === "Escape") {
        this.toggleBackdrop();
        delete this._openedDialog;
        document.body.style.overflow = "";
        return;
      }
    }
  }, {
    key: "showDialog",
    value: function showDialog(dialog) {
      dialog.classList.add(this._config.classes.dialogStateModifier);
    }
  }, {
    key: "hideDialog",
    value: function hideDialog(dialog) {
      dialog.classList.remove(this._config.classes.dialogStateModifier);
    }
  }, {
    key: "toggleBackdrop",
    value: function toggleBackdrop() {
      this._backdrop.classList.toggle(this._config.classes.backdropStateModifier);
    }
  }]);

  return Lightbox;
}();

window.addEventListener("load", function (e) {
  new Lightbox({
    // class names used in HTML related to Lightbox window component:
    classes: {
      backdrop: "lightbox",
      backdropStateModifier: "lightbox_visible",
      dialogStateModifier: "lightbox__dialog_visible",
      closeBtn: "lightbox__close-btn",
      prevBtn: "lightbox-btn-prev",
      nextBtn: "lightbox-btn-next",
      video: "embed"
    }
  });
});

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 69 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
FIX/TODO:

If you'll encounter any troubles, change the value "5000" in the "handleEvent" method to a smaller value, equal to standard screen sizes (768, 992, ...). 

But this hack should be fixed, rewrite this method
*/
var config = {
  classes: {
    container: "hamburger",
    menu: "hamburger__menu",
    btn: "hamburger__btn",
    activeMenu: "hamburger_active",
    animateBtn: "hamburger__btn_animate"
  },
  menuItems: [{
    title: "Home",
    url: "/",
    children: []
  }, {
    title: "About",
    url: "/about",
    children: [{
      title: "About Sub 1",
      utl: "/about-sub1",
      children: [{
        title: "About Sub 1 Sub 1",
        url: "/about-sub1-sub1",
        children: []
      }, {
        title: "About Sub 1 Sub 2",
        url: "/about-sub1-sub2",
        children: []
      }]
    }, {
      title: "About Sub 2",
      url: "/about-sub2",
      children: []
    }]
  }, {
    title: "Contacts",
    url: "https://github.com/ponomarevandrey",
    children: []
  }]
}; //

var Hamburger =
/*#__PURE__*/
function () {
  function Hamburger(config) {
    _classCallCheck(this, Hamburger);

    this._config = config;
    this._btnEl = document.querySelector(".".concat(this._config.classes.btn));
    this._containerEl = document.querySelector(".".concat(this._config.classes.container));
  }

  _createClass(Hamburger, [{
    key: "handleEvent",
    value: function handleEvent(e) {
      /*
      const divWidth = parseInt(getComputedStyle(document.querySelector(".hamburger")).width;
      if (divWidth <= 768) {}
      */
      // TODO: fix this slopy "if" condition
      if ((e.target.classList.contains("hamburger__link") || e.target.parentElement.classList.contains("hamburger__btn") || e.target === this._btnEl) && document.documentElement.clientWidth < 5000) {
        this._containerEl.classList.toggle("".concat(this._config.classes.activeMenu));

        this._containerEl.classList.toggle("".concat(this._config.classes.animateBtn));
      }
    }
  }]);

  return Hamburger;
}();

window.addEventListener("load", function () {
  function populateMenu(items) {
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      var linkEl = document.createElement("a");
      linkEl.href = item.url;
      linkEl.textContent = item.title;
      linkEl.classList.add("hamburger__link");
      menu.append(linkEl);

      if (item.children.length > 0) {
        populateMenu(item.children);
      }
    }
  }

  var container = document.querySelector(".".concat(config.classes.container));
  var btn = new Hamburger(config);
  container.addEventListener("click", btn);
  var menu = document.querySelector(".".concat(config.classes.menu));
  populateMenu(config.menuItems);
});

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 71 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Btn =
/*#__PURE__*/
function () {
  function Btn(_ref) {
    var btnEl = _ref.btnEl,
        modal = _ref.modal;

    _classCallCheck(this, Btn);

    this._btnEl = btnEl;
    this._modal = modal;
  }

  _createClass(Btn, [{
    key: "handleEvent",
    value: function handleEvent(e) {
      if (e.type === "click") {
        e.preventDefault();

        this._modal.openModal(this._modal.dialog);
      }
    }
  }]);

  return Btn;
}();

var Modal =
/*#__PURE__*/
function () {
  function Modal(_ref2) {
    var _this = this;

    var IDs = _ref2.IDs,
        classes = _ref2.classes;

    _classCallCheck(this, Modal);

    this._IDs = IDs;
    this._classes = classes;
    this._backdrop = document.querySelector(".".concat(this._classes.backdrop));
    this._opened = false;
    this._closeBtn = document.querySelector(".".concat(this._classes.backdrop, " .").concat(this._classes.closeBtn));
    this.dialog = document.querySelector("#".concat(this._IDs.dialog));
    document.addEventListener("keydown", function (e) {
      return _this.onKeydown(e);
    });
    document.addEventListener("click", function (e) {
      return _this.onClick(e);
    });
  } // confirm order moda:


  _createClass(Modal, [{
    key: "onClick",
    value: function onClick(e) {
      var clickedEl = e.target;

      if (clickedEl === this._backdrop || clickedEl === this._closeBtn) {
        this.closeModal(this.dialog); // webinar signup modal: this.closeModal();
      }
    }
  }, {
    key: "onKeydown",
    value: function onKeydown(e) {
      if (this._openedDialog && e.code === "Escape") {
        var videoInModal = this._openedDialog.querySelector(".".concat(this._classes.video));

        if (videoInModal) this.stopVideo(videoInModal);
        this.toggleBackdrop();
        this._opened = false;
        document.body.style.overflow = "";
        return;
      }
    }
  }, {
    key: "toggleBackdrop",
    value: function toggleBackdrop() {
      this._backdrop.classList.toggle(this._classes.backdropStateModifier);
    }
  }, {
    key: "openModal",
    value: function openModal(dialog) {
      var newDialog = document.querySelector("#".concat(dialog.id));
      var visibleDialog = document.querySelector(".".concat(this._classes.dialogStateModifier));
      this._opened = !this._opened;
      this.toggleBackdrop();
      if (visibleDialog) this.hideDialog(visibleDialog);
      this.showDialog(newDialog);
      this._openedDialog = newDialog;
      document.body.style.overflow = "hidden";
    }
  }, {
    key: "closeModal",
    value: function closeModal(el) {
      if (this._opened) {
        // handle video:
        var videoBlock = this._openedDialog && this._openedDialog.querySelector(".".concat(this._classes.video));

        if (videoBlock) this.stopVideo(videoBlock); //

        this._opened = !this._opened;
        this.toggleBackdrop();
        delete this._openedDialog;
        this.hideDialog(el);
        document.body.style.overflow = "";
        return;
      }
    }
  }, {
    key: "hideDialog",
    value: function hideDialog(dialog) {
      dialog.classList.remove(this._classes.dialogStateModifier);
    }
  }, {
    key: "showDialog",
    value: function showDialog(dialog) {
      dialog.classList.add(this._classes.dialogStateModifier);
    }
  }, {
    key: "stopVideo",
    value: function stopVideo(element) {
      /* Stop an iframe or HTML5 <video> from playing.
       param { element} - the element that contains the video */
      var iframe = element.querySelector("iframe");
      var video = element.querySelector("video");

      if (iframe) {
        var iframeSrc = iframe.src;
        iframe.src = iframeSrc;
      }

      if (video) video.pause();
    }
  }]);

  return Modal;
}(); //


var modal = new Modal({
  IDs: {
    dialog: "test-dialog"
  },

  /* all class names used in HTML related to modal window component: */
  classes: {
    backdrop: "modal_backdrop",
    backdropStateModifier: "modal_visible",
    dialogStateModifier: "modal__dialog_visible",
    closeBtn: "modal__close-btn"
  }
}); //

var btnEl = document.querySelector("#modal-trigger");
var btn = new Btn({
  btn: btnEl,
  modal: modal
});
btnEl.addEventListener("click", btn);

/***/ }),
/* 72 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var config = {
  IDs: {
    container: "select-example"
  },
  classes: {
    systemSelect: "select__system",
    options: "select__options",
    hideOptions: "select__options_hidden",
    selectedOption: "select__selected-option",
    arrowUp: "select__arrow_up",
    arrowDown: "select__arrow_down"
  },
  defaultValue: "Select option",
  optionList: ["Easy", "Moderate", "Difficult"]
}; //

var Select =
/*#__PURE__*/
function () {
  function Select(_ref) {
    var _this = this;

    var IDs = _ref.IDs,
        classes = _ref.classes,
        defaultValue = _ref.defaultValue,
        optionList = _ref.optionList;

    _classCallCheck(this, Select);

    this._IDs = IDs;
    this._classes = classes;
    this._optionList = optionList;
    this._containerEl = document.querySelector("#".concat(this._IDs.container));
    this._systemSelectMenuEl = this.systemSelectMenuEl(defaultValue);
    this._selectedEl = this.selectedEl(this.cached.value || defaultValue);
    this._menuEl = this.menuEl(); // Render select box.

    this._containerEl.append(this._systemSelectMenuEl, this._selectedEl, this._menuEl); //


    this._selectedEl.addEventListener("click", function (e) {
      e.stopPropagation();

      _this.toggleMenuEl();
    });

    this._menuEl.addEventListener("click", function (e) {
      if (e.target.classList.contains("section__option")) {
        _this.updatecontainer(e.target);
      }
    });

    document.addEventListener("click", function () {
      if (!_this.isMenuElHidden()) _this.toggleMenuEl();
    });
  }

  _createClass(Select, [{
    key: "systemSelectMenuEl",
    value: function systemSelectMenuEl(defaultOption) {
      var selectEl = document.createElement("select");
      selectEl.classList.add(this._classes.systemSelect);

      this._optionList.forEach(function (optionName) {
        var optionEl = document.createElement("option");
        var str = optionName.toLowerCase().replace(/\s/g, "-");
        optionEl.setAttribute("value", str);
        optionEl.textContent = optionName;

        if (optionName === defaultOption) {
          // console.log("Default option set");
          optionEl.setAttribute("selected", "");
        }

        selectEl.append(optionEl);
      });

      return selectEl;
    }
  }, {
    key: "selectedEl",
    value: function selectedEl(defaultOption) {
      var selectEl = document.createElement("div");
      selectEl.classList.add("".concat(this._classes.selectedOption));
      selectEl.classList.add("".concat(this._classes.arrowDown));
      selectEl.append(defaultOption);
      return selectEl;
    }
  }, {
    key: "menuEl",
    value: function menuEl() {
      var optionsContainerEl = document.createElement("div");
      optionsContainerEl.classList.add("".concat(this._classes.options), "".concat(this._classes.hideOptions));
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this._systemSelectMenuEl.options[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var systemOptionEl = _step.value;
          var optionEl = document.createElement("div");
          optionEl.classList.add("section__option");
          optionEl.textContent = systemOptionEl.textContent;
          optionsContainerEl.appendChild(optionEl);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return optionsContainerEl;
    }
  }, {
    key: "toggleArrow",
    value: function toggleArrow() {
      var arrowUpClassName = this._classes.arrowUp;
      var arrowDownClassName = this._classes.arrowDown;

      if (this._selectedEl.classList.contains(arrowUpClassName)) {
        this._selectedEl.classList.remove(arrowUpClassName);

        this._selectedEl.classList.add(arrowDownClassName);
      } else {
        this._selectedEl.classList.add(arrowUpClassName);

        this._selectedEl.classList.remove(arrowDownClassName);
      }
    }
  }, {
    key: "toggleMenuEl",
    value: function toggleMenuEl() {
      this._menuEl.classList.toggle("".concat(this._classes.hideOptions));

      this.toggleArrow();
    }
  }, {
    key: "isMenuElHidden",
    value: function isMenuElHidden() {
      if (this._menuEl.classList.contains("".concat(this._classes.hideOptions))) {
        return true;
      }
    }
  }, {
    key: "updateSystemSelectedAttr",
    value: function updateSystemSelectedAttr(newSelected) {
      var currentlySelected = document.querySelector("option:checked");

      if (currentlySelected) {
        currentlySelected.removeAttribute("selected");
        newSelected.setAttribute("selected", "");
      }
    }
  }, {
    key: "setSystemSelectedEl",
    value: function setSystemSelectedEl(customSelectedEl) {
      var _this2 = this;

      var systemOptionEls = Array.from(this._systemSelectMenuEl);
      systemOptionEls.forEach(function (systemOptionEl, index) {
        if (systemOptionEl.textContent === customSelectedEl.textContent) {
          systemOptionEls.selectedIndex = index;

          _this2.updateSystemSelectedAttr(systemOptionEls[systemOptionEls.selectedIndex]);
        }
      });
    }
  }, {
    key: "setCustomSelectedEl",
    value: function setCustomSelectedEl(customSelectedEl) {
      this._selectedEl.textContent = customSelectedEl.textContent;
    }
  }, {
    key: "updatecontainer",
    value: function updatecontainer(customSelectedEl) {
      var _this3 = this;

      var systemOptionEls = Array.from(this._systemSelectMenuEl);
      systemOptionEls.forEach(function (systemOptionEl, index) {
        if (systemOptionEl.textContent === customSelectedEl.textContent) {
          var _index = systemOptionEls.selectedIndex = _this3.cached.index;

          if (systemOptionEls[_index]) {
            _this3.updateSystemSelectedAttr(systemOptionEls[_index]);
          }

          _this3._selectedEl.textContent = customSelectedEl.textContent;

          _this3.setCustomSelectedEl(customSelectedEl);

          _this3.setSystemSelectedEl(customSelectedEl);

          _this3.cacheSelected(_index, customSelectedEl);
        }
      });
      this.toggleMenuEl();
    }
  }, {
    key: "cacheSelected",
    value: function cacheSelected(index, selectedEl) {
      // Create object to store selected option. Object structure:
      // selectedItem = { <select container ID>: { index: 2
      //                                           value: moderate } }
      var selectedOption = {};
      var key = this._IDs.container;
      var value = selectedEl.textContent;
      selectedOption[key] = {
        index: index,
        value: value
      };
      localStorage.setItem("select", JSON.stringify(selectedOption));
    }
  }, {
    key: "cached",
    get: function get() {
      if (localStorage.getItem("select") !== null) {
        // console.log("Retrieved from localStorage");
        return JSON.parse(localStorage.getItem("select"))[this._IDs.container];
      } else return false;
    }
  }]);

  return Select;
}();

window.addEventListener("load", function () {
  var containerEl = document.querySelector("#".concat(config.IDs.container));
  var customSelect = new Select(config);
  containerEl.addEventListener("click", customSelect);
});

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9zZWxlY3QvX3NlbGVjdC5zY3NzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9kb2MvaW1nIHN5bmMgKHN2Z3xwbmd8anBnKSQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvYy9pbWcvYW5pbWFsc19sYW5kc2NhcGVfbGcuanBnIiwid2VicGFjazovLy8uL3NyYy9kb2MvaW1nL2FuaW1hbHNfbGFuZHNjYXBlX21kLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9jL2ltZy9hbmltYWxzX2xhbmRzY2FwZV9zbS5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvYy9pbWcvYW5pbWFsc19sYW5kc2NhcGVfeGwuanBnIiwid2VicGFjazovLy8uL3NyYy9kb2MvaW1nL2FuaW1hbHNfbGFuZHNjYXBlX3h4bC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvYy9pbWcvYW5pbWFsc19sYW5kc2NhcGVfeHh4bC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvYy9pbWcvYmlzY3VpdC1sb2dvLWJsYWNrLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9jL2ltZy9iaXNjdWl0LWxvZ28td2hpdGUuc3ZnIiwid2VicGFjazovLy8uL3NyYy9kb2MvaW1nL2Jpc2N1aXQtc3ltYm9sLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9jL2ltZy9jb29raWUuc3ZnIiwid2VicGFjazovLy8uL3NyYy9kb2MvaW1nL2Z1bGxzY3JlZW4taW1hZ2UuanBnIiwid2VicGFjazovLy8uL3NyYy9kb2MvaW1nL2xpZ2h0Ym94LWltZzEtcHJldmlldy5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvYy9pbWcvbGlnaHRib3gtaW1nMS5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvYy9pbWcvbGlnaHRib3gtaW1nMi1wcmV2aWV3LmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9jL2ltZy9saWdodGJveC1pbWcyLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9jL2ltZy9saWdodGJveC1pbWczLXByZXZpZXcuanBnIiwid2VicGFjazovLy8uL3NyYy9kb2MvaW1nL2xpZ2h0Ym94LWltZzMuanBnIiwid2VicGFjazovLy8uL3NyYy9kb2MvaW1nL2xpZ2h0Ym94LWltZzQtcHJldmlldy5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvYy9pbWcvbGlnaHRib3gtaW1nNC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvYy9pbWcvbG9nby5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvYy9pbWcvbG9nb3Muc3ZnIiwid2VicGFjazovLy8uL3NyYy9kb2MvaW1nL3VzZXItcGljLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL19yZXNldC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9kb2MvX2RvYy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9kb2MvZG9jLmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvcGFnZS9fcGFnZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvcGFnZS9wYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvaGVhZGVyL19oZWFkZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL21haW4vX21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2Zvb3Rlci9fZm9vdGVyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy90ZXh0L190ZXh0LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9oZWFkaW5nL19oZWFkaW5nLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9saXN0L19saXN0LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9idG4vX2J0bi5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvYnRuLWJhY2stdG8tdG9wL19idG4tYmFjay10by10b3Auc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2J0bi1iYWNrLXRvLXRvcC9idG4tYmFjay10by10b3AuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9saW5rL19saW5rLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9wYWdpbmF0aW9uL19wYWdpbmF0aW9uLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9jb21tZW50L19jb21tZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9ncmlkLWZvcm1zL19ncmlkLWZvcm1zLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9ncmlkLXBhZ2UtbGF5b3V0Mi9fZ3JpZC1wYWdlLWxheW91dDIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2dyaWQtcGFnZS1sYXlvdXQxL19ncmlkLXBhZ2UtbGF5b3V0MS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvZ3JpZC1nYWxsZXJ5L19ncmlkLWdhbGxlcnkuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2dyaWQtc2ltcGxlL19ncmlkLXNpbXBsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvZnVsbHNjcmVlbi1iZy9fZnVsbHNjcmVlbi1iZy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvaW1nLXJhc3Rlci9faW1nLXJhc3Rlci5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvaW1nLXN2Zy9faW1nLXN2Zy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvaWNvbnMvX2ljb25zLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9pY29ucyBzeW5jIChzdmd8cG5nfGpwZykkIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvaWNvbnMvc3ByaXRlLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2JyZWFkY3J1bWJzL19icmVhZGNydW1icy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvYmFkZ2UvX2JhZGdlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9ibG9ja3F1b3RlL19ibG9ja3F1b3RlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9jb2RlL19jb2RlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9oci9faHIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2xhYmVsL19sYWJlbC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvZW1iZWQvX2VtYmVkLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy90YWJsZS9fdGFibGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2xvYWRlci9fbG9hZGVyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9jb250cm9sL19jb250cm9sLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9mb3JtLWdyb3VwL19mb3JtLWdyb3VwLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9hY2NvcmRpb24vX2FjY29yZGlvbi5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvYWNjb3JkaW9uL2FjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2xpZ2h0Ym94L19saWdodGJveC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvbGlnaHRib3gvbGlnaHRib3guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9oYW1idXJnZXIvX2hhbWJ1cmdlci5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvaGFtYnVyZ2VyL2hhbWJ1cmdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL21vZGFsL19tb2RhbC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvbW9kYWwvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9zZWxlY3Qvc2VsZWN0LmpzIl0sIm5hbWVzIjpbInJlcXVpcmVGaWxlcyIsInIiLCJrZXlzIiwiZm9yRWFjaCIsInJlcXVpcmUiLCJIYW1idXJnZXIiLCJjb25maWciLCJfY29uZmlnIiwiX2J0bkVsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NlcyIsImJ0biIsIl9tZW51RWwiLCJtZW51IiwiZSIsInRhcmdldCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicGFyZW50RWxlbWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwidG9nZ2xlIiwiYWN0aXZlTWVudSIsImFuaW1hdGVCdG4iLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicGFnZV9fcHJlbG9hZCIsInJlbW92ZSIsImJhY2tUb1RvcEJ0biIsInNjcm9sbFkiLCJib2R5Iiwic2Nyb2xsVG9wIiwic3R5bGUiLCJkaXNwbGF5Iiwic2Nyb2xsVG8iLCJBY2NvcmRpb24iLCJzaW5nbGUiLCJoZWFkZXJzIiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsImhlYWRlciIsInNpbmdsZU9wZW4iLCJvcGVuIiwiZXZlbnRPYmoiLCJrZXlDb2RlIiwidHlwZSIsImNvbnRlbnQiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJtYXhIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJjb250ZW50cyIsIkxpZ2h0Ym94IiwiX2JhY2tkcm9wIiwiYmFja2Ryb3AiLCJfY2xvc2VCdG4iLCJjbG9zZUJ0biIsIl9zbGlkZXMiLCJfY291bnRlciIsIl9hbW91bnQiLCJwcmV2QnRuIiwibmV4dEJ0biIsIm5hdmlnYXRlIiwib25DbGljayIsIm9uS2V5ZG93biIsImVsZW0iLCJkYXRhc2V0IiwibGlnaHRib3giLCJtYXRjaCIsImRpcmVjdGlvbiIsImhpZGVEaWFsb2ciLCJfY3VycmVudCIsInNob3dEaWFsb2ciLCJjbGlja2VkRWwiLCJuZXdEaWFsb2ciLCJ2aXNpYmxlRGlhbG9nIiwiZGlhbG9nU3RhdGVNb2RpZmllciIsInRvZ2dsZUJhY2tkcm9wIiwiX29wZW5lZERpYWxvZyIsIm92ZXJmbG93IiwiY2xvc2VMaWdodGJveCIsInByZXZlbnREZWZhdWx0IiwiTnVtYmVyIiwiZ2V0RWxlbUluZGV4Iiwib3BlbkxpZ2h0Ym94IiwiY29kZSIsImRpYWxvZyIsImFkZCIsImJhY2tkcm9wU3RhdGVNb2RpZmllciIsInZpZGVvIiwiY29udGFpbmVyIiwibWVudUl0ZW1zIiwidGl0bGUiLCJ1cmwiLCJjaGlsZHJlbiIsInV0bCIsIl9jb250YWluZXJFbCIsInBvcHVsYXRlTWVudSIsIml0ZW1zIiwiaSIsIml0ZW0iLCJsaW5rRWwiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsInRleHRDb250ZW50IiwiYXBwZW5kIiwiQnRuIiwiYnRuRWwiLCJtb2RhbCIsIl9tb2RhbCIsIm9wZW5Nb2RhbCIsIk1vZGFsIiwiSURzIiwiX0lEcyIsIl9jbGFzc2VzIiwiX29wZW5lZCIsImNsb3NlTW9kYWwiLCJ2aWRlb0luTW9kYWwiLCJzdG9wVmlkZW8iLCJpZCIsImVsIiwidmlkZW9CbG9jayIsImVsZW1lbnQiLCJpZnJhbWUiLCJpZnJhbWVTcmMiLCJzcmMiLCJwYXVzZSIsInN5c3RlbVNlbGVjdCIsIm9wdGlvbnMiLCJoaWRlT3B0aW9ucyIsInNlbGVjdGVkT3B0aW9uIiwiYXJyb3dVcCIsImFycm93RG93biIsImRlZmF1bHRWYWx1ZSIsIm9wdGlvbkxpc3QiLCJTZWxlY3QiLCJfb3B0aW9uTGlzdCIsIl9zeXN0ZW1TZWxlY3RNZW51RWwiLCJzeXN0ZW1TZWxlY3RNZW51RWwiLCJfc2VsZWN0ZWRFbCIsInNlbGVjdGVkRWwiLCJjYWNoZWQiLCJ2YWx1ZSIsIm1lbnVFbCIsInN0b3BQcm9wYWdhdGlvbiIsInRvZ2dsZU1lbnVFbCIsInVwZGF0ZWNvbnRhaW5lciIsImlzTWVudUVsSGlkZGVuIiwiZGVmYXVsdE9wdGlvbiIsInNlbGVjdEVsIiwib3B0aW9uTmFtZSIsIm9wdGlvbkVsIiwic3RyIiwidG9Mb3dlckNhc2UiLCJyZXBsYWNlIiwic2V0QXR0cmlidXRlIiwib3B0aW9uc0NvbnRhaW5lckVsIiwic3lzdGVtT3B0aW9uRWwiLCJhcHBlbmRDaGlsZCIsImFycm93VXBDbGFzc05hbWUiLCJhcnJvd0Rvd25DbGFzc05hbWUiLCJ0b2dnbGVBcnJvdyIsIm5ld1NlbGVjdGVkIiwiY3VycmVudGx5U2VsZWN0ZWQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJjdXN0b21TZWxlY3RlZEVsIiwic3lzdGVtT3B0aW9uRWxzIiwiQXJyYXkiLCJmcm9tIiwiaW5kZXgiLCJzZWxlY3RlZEluZGV4IiwidXBkYXRlU3lzdGVtU2VsZWN0ZWRBdHRyIiwic2V0Q3VzdG9tU2VsZWN0ZWRFbCIsInNldFN5c3RlbVNlbGVjdGVkRWwiLCJjYWNoZVNlbGVjdGVkIiwia2V5IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZXRJdGVtIiwicGFyc2UiLCJjb250YWluZXJFbCIsImN1c3RvbVNlbGVjdCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7OztBQ2xGQSx1Qzs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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Q0EsVUFBTW9ELEtBQUssR0FBR0YsVUFBVSxDQUFDcEMsV0FBekI7QUFDQTBCLG9CQUFjLENBQUM2QyxHQUFELENBQWQsR0FBc0I7QUFDcEJOLGFBQUssRUFBTEEsS0FEb0I7QUFFcEIzQixhQUFLLEVBQUVBO0FBRmEsT0FBdEI7QUFJQWtDLGtCQUFZLENBQUNDLE9BQWIsQ0FBcUIsUUFBckIsRUFBK0JDLElBQUksQ0FBQ0MsU0FBTCxDQUFlakQsY0FBZixDQUEvQjtBQUNEOzs7d0JBNUlZO0FBQ1gsVUFBSThDLFlBQVksQ0FBQ0ksT0FBYixDQUFxQixRQUFyQixNQUFtQyxJQUF2QyxFQUE2QztBQUMzQztBQUNBLGVBQU9GLElBQUksQ0FBQ0csS0FBTCxDQUFXTCxZQUFZLENBQUNJLE9BQWIsQ0FBcUIsUUFBckIsQ0FBWCxFQUEyQyxLQUFLbkUsSUFBTCxDQUFVdkIsU0FBckQsQ0FBUDtBQUNELE9BSEQsTUFHTyxPQUFPLEtBQVA7QUFDUjs7Ozs7O0FBMElIakUsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixNQUF4QixFQUFnQyxZQUFNO0FBQ3BDLE1BQU00SixXQUFXLEdBQUc3SyxRQUFRLENBQUNDLGFBQVQsWUFBMkJKLE1BQU0sQ0FBQzBHLEdBQVAsQ0FBV3RCLFNBQXRDLEVBQXBCO0FBRUEsTUFBTTZGLFlBQVksR0FBRyxJQUFJaEQsTUFBSixDQUFXakksTUFBWCxDQUFyQjtBQUNBZ0wsYUFBVyxDQUFDNUosZ0JBQVosQ0FBNkIsT0FBN0IsRUFBc0M2SixZQUF0QztBQUNELENBTEQsRSIsImZpbGUiOiJzY3JpcHRzLjRlYzViNTE0ZGRmY2FlNzRlNzMxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvKlxuICogSEVMUEVSIEZVTkNUSU9OU1xuICovXG5cbi8vIGZ1bmN0aW9uIGZvciByZXF1aXJpbmcgaW1hZ2VzOlxuZnVuY3Rpb24gcmVxdWlyZUZpbGVzKHIpIHtcbiAgci5rZXlzKCkuZm9yRWFjaChyKTtcbn1cblxucmVxdWlyZUZpbGVzKHJlcXVpcmUuY29udGV4dChcIi4vc3JjL2RvYy9pbWcvXCIsIHRydWUsIC8oc3ZnfHBuZ3xqcGcpJC8pKTtcblxuLypcbiAqIENTUyBSRVNFVFxuICovXG5cbmltcG9ydCBcIi4vc3JjL2Jsb2Nrcy9fcmVzZXQuc2Nzc1wiO1xuXG4vKlxuICogIERPQ1VNRU5UQVRJT04gU1RZTEVTXG4gKi9cblxuaW1wb3J0IFwiLi9zcmMvZG9jL19kb2Muc2Nzc1wiO1xuaW1wb3J0IFwiLi9zcmMvZG9jL2RvYy5qc1wiO1xuXG4vKlxuICogQkxPQ0tTXG4gKi9cblxuLyogVG8gY29udHJvbCB0aGUgQ1NTIGNhc2NhZGUgYW5kIGluaGVyaXRhbmNlIHdoaWxlIGltcG9ydGluZyBibG9ja3MgaW50byB0aGUgcHJvamVjdCwgYWxsIGJsb2NrcyBkaXZpZGVkIGludG8gdHdvIG1haW4gZ3JvdXBzOlxuXG4gICAxLiAqKlBhcmVudCBibG9ja3MqKiAodGhlc2UgYmxvY2tzIHVzdWFsbHksIGFsdGhvdWdoIGl0J3Mgbm90IG9ibGlnYXRvcnksIHNlcnZlIGFzIHBhcmVudCBjb250YWluZXJzIGZvciBcIkNoaWxkIGJsb2Nrc1wiKVxuICAgMi4gKipDaGlsZCBibG9ja3MqKiAodXN1YWxseSwgeW91IGRvbid0IHB1dCBhbnl0aGluZyBpbnNpZGUgdGhlc2UgYmxvY2tzLCBleGNlcHQgdGV4dC4gQmVpbmcgaW1wb3J0ZWQgbGFzdCwgcnVsZXMgaW4gdGhlc2UgYmxvY2tzIG1heSBvdmVycmlkZSBydWxlcyBkZWNsYXJlZCBlYXJsaWVyIGluIFwiUGFyZW50IGJsb2Nrc1wiKVxuXG4qKkRvbid0IGNoYW5nZSB0aGUgb3JkZXIgb2YgYmxvY2tzISoqIEFsdGhvdWdoLCBhbGwgYmxvY2tzIGFyZSBzZWxmLXN1ZmZpY2llbnQgYW5kIGRvbid0IHJlbHkgb24gY2FzY2FkZSBhbmQgaW5oZXJpdGFuY2UsIGluIHNvbWUgcmFyZSBjYXNlcyByZW9yZGVyaW5nIG9mIHRoZWlyIGltcG9ydHMgbWF5IGJyZWFrIG1pbm9yIGRldGFpbHMgbGlrZSBsaW5rIGNvbG9yIG9yIGZvbnQtc2l6ZSwgc28gdG8gYmUgc2FmZSB0cnkgdG8gbWFpbnRhaW4gdGhlIGN1cnJlbnQgYmxvY2tzJyBvcmRlci4gSWYgeW91IGRvbid0IG5lZWQgYSBibG9jayBpbiB5b3VyIGJ1bmRsZSwgY29tbWVudCBpdCBvdXQsIGRvbid0IGRlbGV0ZSBpdCBmcm9tIHRoaXMgZmlsZSwgeW91IG1pZ2h0IG5lZWQgaXQgaW4gdGhlIGZ1dHVyZSAqL1xuXG4vLyBQYXJlbnQgYmxvY2tzXG5cbmltcG9ydCBcIi4vc3JjL2Jsb2Nrcy9wYWdlL19wYWdlLnNjc3NcIjtcbmltcG9ydCBcIi4vc3JjL2Jsb2Nrcy9wYWdlL3BhZ2UuanNcIjtcblxuaW1wb3J0IFwiLi9zcmMvYmxvY2tzL2hlYWRlci9faGVhZGVyLnNjc3NcIjtcblxuaW1wb3J0IFwiLi9zcmMvYmxvY2tzL21haW4vX21haW4uc2Nzc1wiO1xuXG5pbXBvcnQgXCIuL3NyYy9ibG9ja3MvZm9vdGVyL19mb290ZXIuc2Nzc1wiO1xuXG5pbXBvcnQgXCIuL3NyYy9ibG9ja3MvdGV4dC9fdGV4dC5zY3NzXCI7XG5cbmltcG9ydCBcIi4vc3JjL2Jsb2Nrcy9oZWFkaW5nL19oZWFkaW5nLnNjc3NcIjtcblxuaW1wb3J0IFwiLi9zcmMvYmxvY2tzL2xpc3QvX2xpc3Quc2Nzc1wiO1xuXG5pbXBvcnQgXCIuL3NyYy9ibG9ja3MvYnRuL19idG4uc2Nzc1wiO1xuXG5pbXBvcnQgXCIuL3NyYy9ibG9ja3MvYnRuLWJhY2stdG8tdG9wL19idG4tYmFjay10by10b3Auc2Nzc1wiO1xuaW1wb3J0IFwiLi9zcmMvYmxvY2tzL2J0bi1iYWNrLXRvLXRvcC9idG4tYmFjay10by10b3AuanNcIjtcblxuaW1wb3J0IFwiLi9zcmMvYmxvY2tzL2xpbmsvX2xpbmsuc2Nzc1wiO1xuXG5pbXBvcnQgXCIuL3NyYy9ibG9ja3MvcGFnaW5hdGlvbi9fcGFnaW5hdGlvbi5zY3NzXCI7XG5cbmltcG9ydCBcIi4vc3JjL2Jsb2Nrcy9jb21tZW50L19jb21tZW50LnNjc3NcIjtcblxuaW1wb3J0IFwiLi9zcmMvYmxvY2tzL2dyaWQtZm9ybXMvX2dyaWQtZm9ybXMuc2Nzc1wiO1xuXG5pbXBvcnQgXCIuL3NyYy9ibG9ja3MvZ3JpZC1wYWdlLWxheW91dDIvX2dyaWQtcGFnZS1sYXlvdXQyLnNjc3NcIjtcblxuaW1wb3J0IFwiLi9zcmMvYmxvY2tzL2dyaWQtcGFnZS1sYXlvdXQxL19ncmlkLXBhZ2UtbGF5b3V0MS5zY3NzXCI7XG5cbmltcG9ydCBcIi4vc3JjL2Jsb2Nrcy9ncmlkLWdhbGxlcnkvX2dyaWQtZ2FsbGVyeS5zY3NzXCI7XG5cbmltcG9ydCBcIi4vc3JjL2Jsb2Nrcy9ncmlkLXNpbXBsZS9fZ3JpZC1zaW1wbGUuc2Nzc1wiO1xuXG5pbXBvcnQgXCIuL3NyYy9ibG9ja3MvZnVsbHNjcmVlbi1iZy9fZnVsbHNjcmVlbi1iZy5zY3NzXCI7XG5cbi8vIENoaWxkIGJsb2Nrc1xuXG5pbXBvcnQgXCIuL3NyYy9ibG9ja3MvaW1nLXJhc3Rlci9faW1nLXJhc3Rlci5zY3NzXCI7XG5cbmltcG9ydCBcIi4vc3JjL2Jsb2Nrcy9pbWctc3ZnL19pbWctc3ZnLnNjc3NcIjtcblxuaW1wb3J0IFwiLi9zcmMvYmxvY2tzL2ljb25zL19pY29ucy5zY3NzXCI7XG5yZXF1aXJlRmlsZXMocmVxdWlyZS5jb250ZXh0KFwiLi9zcmMvYmxvY2tzL2ljb25zL1wiLCB0cnVlLCAvKHN2Z3xwbmd8anBnKSQvKSk7XG5cbmltcG9ydCBcIi4vc3JjL2Jsb2Nrcy9icmVhZGNydW1icy9fYnJlYWRjcnVtYnMuc2Nzc1wiO1xuXG5pbXBvcnQgXCIuL3NyYy9ibG9ja3MvYmFkZ2UvX2JhZGdlLnNjc3NcIjtcblxuaW1wb3J0IFwiLi9zcmMvYmxvY2tzL2Jsb2NrcXVvdGUvX2Jsb2NrcXVvdGUuc2Nzc1wiO1xuXG5pbXBvcnQgXCIuL3NyYy9ibG9ja3MvY29kZS9fY29kZS5zY3NzXCI7XG5cbmltcG9ydCBcIi4vc3JjL2Jsb2Nrcy9oci9faHIuc2Nzc1wiO1xuXG5pbXBvcnQgXCIuL3NyYy9ibG9ja3MvbGFiZWwvX2xhYmVsLnNjc3NcIjtcblxuaW1wb3J0IFwiLi9zcmMvYmxvY2tzL2VtYmVkL19lbWJlZC5zY3NzXCI7XG5cbmltcG9ydCBcIi4vc3JjL2Jsb2Nrcy90YWJsZS9fdGFibGUuc2Nzc1wiO1xuXG5pbXBvcnQgXCIuL3NyYy9ibG9ja3MvbG9hZGVyL19sb2FkZXIuc2Nzc1wiO1xuXG5pbXBvcnQgXCIuL3NyYy9ibG9ja3MvY29udHJvbC9fY29udHJvbC5zY3NzXCI7XG5cbmltcG9ydCBcIi4vc3JjL2Jsb2Nrcy9mb3JtLWdyb3VwL19mb3JtLWdyb3VwLnNjc3NcIjtcblxuaW1wb3J0IFwiLi9zcmMvYmxvY2tzL3NlbGVjdC9fc2VsZWN0LnNjc3NcIjtcblxuaW1wb3J0IFwiLi9zcmMvYmxvY2tzL2FjY29yZGlvbi9fYWNjb3JkaW9uLnNjc3NcIjtcbmltcG9ydCBcIi4vc3JjL2Jsb2Nrcy9hY2NvcmRpb24vYWNjb3JkaW9uLmpzXCI7XG5cbmltcG9ydCBcIi4vc3JjL2Jsb2Nrcy9saWdodGJveC9fbGlnaHRib3guc2Nzc1wiO1xuaW1wb3J0IFwiLi9zcmMvYmxvY2tzL2xpZ2h0Ym94L2xpZ2h0Ym94LmpzXCI7XG5cbmltcG9ydCBcIi4vc3JjL2Jsb2Nrcy9oYW1idXJnZXIvX2hhbWJ1cmdlci5zY3NzXCI7XG5pbXBvcnQgXCIuL3NyYy9ibG9ja3MvaGFtYnVyZ2VyL2hhbWJ1cmdlci5qc1wiO1xuXG5pbXBvcnQgXCIuL3NyYy9ibG9ja3MvbW9kYWwvX21vZGFsLnNjc3NcIjtcbmltcG9ydCBcIi4vc3JjL2Jsb2Nrcy9tb2RhbC9tb2RhbC5qc1wiO1xuXG5pbXBvcnQgXCIuL3NyYy9ibG9ja3Mvc2VsZWN0L19zZWxlY3Quc2Nzc1wiO1xuaW1wb3J0IFwiLi9zcmMvYmxvY2tzL3NlbGVjdC9zZWxlY3QuanNcIjtcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9hbmltYWxzX2xhbmRzY2FwZV9sZy5qcGdcIjogMyxcblx0XCIuL2FuaW1hbHNfbGFuZHNjYXBlX21kLmpwZ1wiOiA0LFxuXHRcIi4vYW5pbWFsc19sYW5kc2NhcGVfc20uanBnXCI6IDUsXG5cdFwiLi9hbmltYWxzX2xhbmRzY2FwZV94bC5qcGdcIjogNixcblx0XCIuL2FuaW1hbHNfbGFuZHNjYXBlX3h4bC5qcGdcIjogNyxcblx0XCIuL2FuaW1hbHNfbGFuZHNjYXBlX3h4eGwuanBnXCI6IDgsXG5cdFwiLi9iaXNjdWl0LWxvZ28tYmxhY2suc3ZnXCI6IDksXG5cdFwiLi9iaXNjdWl0LWxvZ28td2hpdGUuc3ZnXCI6IDEwLFxuXHRcIi4vYmlzY3VpdC1zeW1ib2wuc3ZnXCI6IDExLFxuXHRcIi4vY29va2llLnN2Z1wiOiAxMixcblx0XCIuL2Z1bGxzY3JlZW4taW1hZ2UuanBnXCI6IDEzLFxuXHRcIi4vbGlnaHRib3gtaW1nMS1wcmV2aWV3LmpwZ1wiOiAxNCxcblx0XCIuL2xpZ2h0Ym94LWltZzEuanBnXCI6IDE1LFxuXHRcIi4vbGlnaHRib3gtaW1nMi1wcmV2aWV3LmpwZ1wiOiAxNixcblx0XCIuL2xpZ2h0Ym94LWltZzIuanBnXCI6IDE3LFxuXHRcIi4vbGlnaHRib3gtaW1nMy1wcmV2aWV3LmpwZ1wiOiAxOCxcblx0XCIuL2xpZ2h0Ym94LWltZzMuanBnXCI6IDE5LFxuXHRcIi4vbGlnaHRib3gtaW1nNC1wcmV2aWV3LmpwZ1wiOiAyMCxcblx0XCIuL2xpZ2h0Ym94LWltZzQuanBnXCI6IDIxLFxuXHRcIi4vbG9nby5zdmdcIjogMjIsXG5cdFwiLi9sb2dvcy5zdmdcIjogMjMsXG5cdFwiLi91c2VyLXBpYy5zdmdcIjogMjRcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSAyOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9hbmltYWxzX2xhbmRzY2FwZV9sZy5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvYW5pbWFsc19sYW5kc2NhcGVfbWQuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2FuaW1hbHNfbGFuZHNjYXBlX3NtLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9hbmltYWxzX2xhbmRzY2FwZV94bC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvYW5pbWFsc19sYW5kc2NhcGVfeHhsLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9hbmltYWxzX2xhbmRzY2FwZV94eHhsLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9iaXNjdWl0LWxvZ28tYmxhY2suc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2Jpc2N1aXQtbG9nby13aGl0ZS5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvYmlzY3VpdC1zeW1ib2wuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2Nvb2tpZS5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvZnVsbHNjcmVlbi1pbWFnZS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvbGlnaHRib3gtaW1nMS1wcmV2aWV3LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9saWdodGJveC1pbWcxLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9saWdodGJveC1pbWcyLXByZXZpZXcuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2xpZ2h0Ym94LWltZzIuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2xpZ2h0Ym94LWltZzMtcHJldmlldy5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvbGlnaHRib3gtaW1nMy5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvbGlnaHRib3gtaW1nNC1wcmV2aWV3LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9saWdodGJveC1pbWc0LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9sb2dvLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9sb2dvcy5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvdXNlci1waWMuc3ZnXCI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiY2xhc3MgSGFtYnVyZ2VyIHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICAgIHRoaXMuX2J0bkVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGhpcy5fY29uZmlnLmNsYXNzZXMuYnRufWApO1xuICAgIHRoaXMuX21lbnVFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RoaXMuX2NvbmZpZy5jbGFzc2VzLm1lbnV9YCk7XG4gIH1cblxuICBoYW5kbGVFdmVudChlKSB7XG4gICAgaWYgKFxuICAgICAgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImRvYy1uYXZfX2xpbmtcIikgfHxcbiAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJkb2MtbmF2X19pY29uXCIpIHx8XG4gICAgICAgIGUudGFyZ2V0ID09PSB0aGlzLl9idG5FbCkgJiZcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCA8IDc2OFxuICAgICkge1xuICAgICAgdGhpcy5fbWVudUVsLmNsYXNzTGlzdC50b2dnbGUoYCR7dGhpcy5fY29uZmlnLmNsYXNzZXMuYWN0aXZlTWVudX1gKTtcbiAgICAgIHRoaXMuX21lbnVFbC5jbGFzc0xpc3QudG9nZ2xlKGAke3RoaXMuX2NvbmZpZy5jbGFzc2VzLmFuaW1hdGVCdG59YCk7XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGNvbmZpZyA9IHtcbiAgY2xhc3Nlczoge1xuICAgIG1lbnU6IFwiZG9jLW5hdlwiLFxuICAgIGJ0bjogXCJkb2MtbmF2X19pY29uXCIsXG4gICAgYWN0aXZlTWVudTogXCJkb2MtbmF2X2FjdGl2ZVwiLFxuICAgIGFuaW1hdGVCdG46IFwiZG9jLW5hdl9faWNvbl9hbmltYXRlXCIsXG4gIH0sXG59O1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xuICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y29uZmlnLmNsYXNzZXMubWVudX1gKTtcbiAgY29uc3QgYnRuID0gbmV3IEhhbWJ1cmdlcihjb25maWcpO1xuICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBidG4pO1xufSk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJjb25zdCBwYWdlX19wcmVsb2FkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYWdlX19wcmVsb2FkXCIpO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcbiAgXCJsb2FkXCIsXG4gICgpID0+IHtcbiAgICBpZiAocGFnZV9fcHJlbG9hZCkgcGFnZV9fcHJlbG9hZC5jbGFzc0xpc3QucmVtb3ZlKFwicGFnZV9fcHJlbG9hZFwiKTtcbiAgfSxcbiAgZmFsc2Vcbik7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24oZSkge1xuICBjb25zdCBiYWNrVG9Ub3BCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1iYWNrLXRvLXRvcFwiKTtcblxuICBpZiAoYmFja1RvVG9wQnRuKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xuICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZID49IDYwIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID49IDYwKSB7XG4gICAgICAgIGJhY2tUb1RvcEJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgfSBlbHNlIGJhY2tUb1RvcEJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfSk7XG5cbiAgICBiYWNrVG9Ub3BCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gMDsgLy8gZm9yIFNhZmFyaVxuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgIH0pO1xuICB9XG59KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsInZhciBtYXAgPSB7XG5cdFwiLi9zcHJpdGUuc3ZnXCI6IDUyXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gNTE7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL3Nwcml0ZS5zdmdcIjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJcInVzZSBzdHJpY3RcIjtcbi8qIEFjY29yZGlvbiB2MiAqL1xuXG5jbGFzcyBBY2NvcmRpb24ge1xuICBjb25zdHJ1Y3RvcihzaW5nbGUgPSBmYWxzZSkge1xuICAgIGxldCBoZWFkZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hY2NvcmRpb24gLmFjY29yZGlvbl9faGVhZGVyXCIpO1xuXG4gICAgaWYgKGhlYWRlcnMubGVuZ3RoID4gMCkge1xuICAgICAgaWYgKHNpbmdsZSkge1xuICAgICAgICBoZWFkZXJzLmZvckVhY2goaGVhZGVyID0+IHtcbiAgICAgICAgICBoZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuc2luZ2xlT3Blbik7XG4gICAgICAgICAgaGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCB0aGlzLnNpbmdsZU9wZW4pO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhlYWRlcnMuZm9yRWFjaChoZWFkZXIgPT4ge1xuICAgICAgICAgIGhlYWRlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5vcGVuKTtcbiAgICAgICAgICBoZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHRoaXMub3Blbik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qIGZpcmVzIHdoZW4gdXNlciBjbGlja3Mgb24gYSBoZWFkZXIgYW5kXG4gICAgICdpbml0JyBpbnZva2VkIHdpdGggZGVmYXVsdCB2YWx1ZSAnZmFsc2UnOiBpbml0KCkgKi9cbiAgb3BlbihldmVudE9iaikge1xuICAgIC8vIGlmIHdlIHByZXNzICdFbnRlcicgb3IgaWYgd2UgY2xpY2s6XG4gICAgaWYgKGV2ZW50T2JqLmtleUNvZGUgPT09IDEzIHx8IGV2ZW50T2JqLnR5cGUgPT09IFwiY2xpY2tcIikge1xuICAgICAgbGV0IGNvbnRlbnQgPSB0aGlzLm5leHRFbGVtZW50U2libGluZztcblxuICAgICAgaWYgKGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0KSBjb250ZW50LnN0eWxlLm1heEhlaWdodCA9IFwiXCI7XG4gICAgICBlbHNlIGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gYCR7Y29udGVudC5zY3JvbGxIZWlnaHR9cHhgO1xuXG4gICAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoXCJhY2NvcmRpb25fX2hlYWRlcl9hY3RpdmVcIik7XG4gICAgfVxuICB9XG5cbiAgLyogZmlyZXMgd2hlbiB1c2VyIGNsaWNrcyBvbiBhIGhlYWRlciBhbmRcbiAgICAgJ2luaXQnIGludm9rZWQgd2l0aCAndHJ1ZSc6IGluaXQodHJ1ZSkgKi9cbiAgc2luZ2xlT3BlbigpIHtcbiAgICAvLyByZXNldCBzdGF0ZSBvZiBhbGwgcGFuZWxzOlxuXG4gICAgLy8gMSkgY2xvc2UgYWxsIHBhbmVsczpcbiAgICBsZXQgY29udGVudHMgPSB0aGlzLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hY2NvcmRpb25fX2NvbnRlbnRcIik7XG5cbiAgICBpZiAoY29udGVudHMubGVuZ3RoID4gMCkge1xuICAgICAgY29udGVudHMuZm9yRWFjaChjb250ZW50ID0+IChjb250ZW50LnN0eWxlLm1heEhlaWdodCA9IFwiXCIpKTtcbiAgICB9XG5cbiAgICAvLyAyKSByZXNldCBjb2xvciBvZiBhbGwgcGFuZWxzOlxuICAgIGxldCBoZWFkZXJzID0gdGhpcy5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWNjb3JkaW9uX19oZWFkZXJcIik7XG4gICAgaWYgKGhlYWRlcnMubGVuZ3RoID4gMCkge1xuICAgICAgaGVhZGVycy5mb3JFYWNoKGhlYWRlciA9PiB7XG4gICAgICAgIGlmIChoZWFkZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWNjb3JkaW9uX19oZWFkZXJfYWN0aXZlXCIpKSB7XG4gICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJhY2NvcmRpb25fX2hlYWRlcl9hY3RpdmVcIik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIG9wZW4gdGhlIGN1cnJlbnQgcGFuZWw6XG5cbiAgICAvLyAxKSBnZXQgY29udGVudCB1bmRlciBjdXJyZW50IGhlYWRlclxuICAgIGxldCBjb250ZW50ID0gdGhpcy5uZXh0RWxlbWVudFNpYmxpbmc7XG5cbiAgICBpZiAoY29udGVudC5zdHlsZS5tYXhIZWlnaHQpIGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gXCJcIjtcbiAgICBlbHNlIGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gYCR7Y29udGVudC5zY3JvbGxIZWlnaHR9cHhgO1xuXG4gICAgLy8gMikgY2hhbmdlIG9wZW5lZCBoZWFkZXIgY29sb3I6XG4gICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKFwiYWNjb3JkaW9uX19oZWFkZXJfYWN0aXZlXCIpO1xuICB9XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbigpIHtcbiAgbmV3IEFjY29yZGlvbih0cnVlKTtcbn0pO1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qXG5jbGFzcyBBbmltYWwge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5zcGVlZCA9IDA7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuICBydW4oc3BlZWQpIHtcbiAgICB0aGlzLnNwZWVkICs9IHNwZWVkO1xuICAgIGNvbnNvbGUubG9nKGAke3RoaXMubmFtZX0gcnVucyB3aXRoIHNwZWVkICR7dGhpcy5zcGVlZH0uYCk7XG4gIH1cbiAgc3RvcCgpIHtcbiAgICB0aGlzLnNwZWVkID0gMDtcbiAgICBjb25zb2xlLmxvZyhgJHt0aGlzLm5hbWV9IHN0YW5kcyBzdGlsbC5gKTtcbiAgfVxufVxuXG4vLyBJbmhlcml0IGZyb20gQW5pbWFsIGJ5IHNwZWNpZnlpbmcgXCJleHRlbmRzIEFuaW1hbFwiXG5jbGFzcyBSYWJiaXQgZXh0ZW5kcyBBbmltYWwge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBlYXJMZW5ndGgpIHtcbiAgICBzdXBlcihuYW1lKTtcbiAgICB0aGlzLmVhckxlbmd0aCA9IGVhckxlbmd0aDtcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgY29uc29sZS5sb2coYCR7dGhpcy5uYW1lfSBoaWRlcyFgKTtcbiAgfVxuXG4gIHN0b3AoKSB7XG4gICAgc3VwZXIuc3RvcCgpO1xuICAgIHRoaXMuaGlkZSgpO1xuICB9XG59XG5cbmxldCByYWJiaXQgPSBuZXcgUmFiYml0KFwiV2hpdGUgUmFiYml0XCIsIDEwKTtcblxuY29uc29sZS5sb2cocmFiYml0Lm5hbWUpXG5jb25zb2xlLmxvZyhyYWJiaXQuZWFyTGVuZ3RoKTtcbnJhYmJpdC5ydW4oNSk7IC8vIFdoaXRlIFJhYmJpdCBydW5zIHdpdGggc3BlZWQgNS5cbnJhYmJpdC5zdG9wKCk7XG5cbmNvbnNvbGUubG9nKFJhYmJpdC5fX3Byb3RvX18gPT09IEFuaW1hbCk7XG5jb25zb2xlLmxvZyhSYWJiaXQucHJvdG90eXBlLl9fcHJvdG9fXyA9PT0gQW5pbWFsLnByb3RvdHlwZSlcblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5zYXlIZWxsbygpLy8g0LLRi9C00LDRgdGCINGC0L7Qu9GM0LrQviAnSGVsbG8hJy4g0J/QvtGH0LXQvNGDPyDQoNCw0YHRgdC60LDQt9GDINC+0LEg0Y3RgtC+0Lwg0Lgg0L/QvtGB0LLRj9GJ0ZHQvSDQtNCw0L3QvdGL0Lkg0L/RgNC40LzQtdGALlxuIFxuZnVuY3Rpb24gc2F5SGVsbG8gKCkge1xuICAgIHZhciBoZWxsbztcbiAgICBcbiAgICBmdW5jdGlvbiBoZWxsbyAoKSB7ICAgICAgIC8vIGxleGljYWwgZW52aXJvbm1lbnQ6IGhlbGxvID0gZnVuY3Rpb25cbiAgICAgICAgY29uc29sZS5sb2coJ0hleSEnKVxuICAgIH1cbiAgICBoZWxsbygpXG59XG5cblxuXG5cbmZ1bmN0aW9uIFRoZWF0cmVTZWF0cygpIHtcbiAgdmFyIHNlYXRzID0gW107XG5cbiAgdGhpcy5wbGFjZVBlcnNvbiA9IGZ1bmN0aW9uKHBlcnNvbikge1xuICAgIHNlYXRzLnB1c2gocGVyc29uKTtcbiAgICBjb25zb2xlLmxvZyhzZWF0cyk7XG4gIH07XG59XG5cbmxldCB0ID0gbmV3IFRoZWF0cmVTZWF0cygpO1xudC5wbGFjZVBlcnNvbignSm9obicpO1xudC5wbGFjZVBlcnNvbignQm9iJyk7XG5cblxuXG5cbmxldCBzdHVkZW50ID0gbmV3IE9iamVjdCgpO1xuXG5zdHVkZW50LmZOYW1lID0gJ0pvaG4nO1xuc3R1ZGVudC5sTmFtZSA9ICdTbWl0aCc7XG5zdHVkZW50LmlkID0gNTtcbnN0dWRlbnQubWFya0UgPSA3NjtcbnN0dWRlbnQubWFya00gPSA5OTtcbnN0dWRlbnQubWFya1MgPSA4NztcbnN0dWRlbnQuY2FsY3VsYXRlQXZlcmFnZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gKHN0dWRlbnQubWFya0UgKyBzdHVkZW50Lm1hcmtNICsgc3R1ZGVudC5tYXJrUykgLyAzO1xufTtcblxuc3R1ZGVudC5kaXNwbGF5RGV0YWlscyA9IGZ1bmN0aW9uKCkge1xuICBkb2N1bWVudC53cml0ZSgnU3R1ZGVudCBJRDogJyArIHN0dWRlbnQuaWQgKyAnPGJyPicpO1xuICBkb2N1bWVudC53cml0ZSgnTmFtZTogJyArIHN0dWRlbnQuZk5hbWUgKyAnICcgKyBzdHVkZW50LmxOYW1lICsgJzxicj4nKTtcbiAgbGV0IGF2ZyA9IHN0dWRlbnQuY2FsY3VsYXRlQXZlcmFnZSgpO1xuICBkb2N1bWVudC53cml0ZSgnQXZlcmFnZSBtYXJrczogJyArIGF2Zyk7XG59XG5cbnN0dWRlbnQuZGlzcGxheURldGFpbHMoKTtcblxuZm9yIChsZXQgcHJvcCBpbiBzdHVkZW50KSB7XG4gIGRvY3VtZW50LndyaXRlKHByb3AgKyAnICcgKyBzdHVkZW50W3Byb3BdICsgJzxicj4nKTtcbn1cblxuKi9cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImNsYXNzIExpZ2h0Ym94IHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuXG4gICAgdGhpcy5fYmFja2Ryb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYC4ke3RoaXMuX2NvbmZpZy5jbGFzc2VzLmJhY2tkcm9wfWBcbiAgICApO1xuICAgIHRoaXMuX2Nsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAuJHt0aGlzLl9jb25maWcuY2xhc3Nlcy5jbG9zZUJ0bn1gXG4gICAgKTtcblxuICAgIHRoaXMuX3NsaWRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGlnaHRib3hfX2RpYWxvZ1wiKTtcbiAgICB0aGlzLl9jb3VudGVyID0gMDtcbiAgICB0aGlzLl9hbW91bnQgPSB0aGlzLl9zbGlkZXMubGVuZ3RoO1xuXG4gICAgY29uc3QgcHJldkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3RoaXMuX2NvbmZpZy5jbGFzc2VzLnByZXZCdG59YCk7XG4gICAgY29uc3QgbmV4dEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3RoaXMuX2NvbmZpZy5jbGFzc2VzLm5leHRCdG59YCk7XG4gICAgcHJldkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB0aGlzLm5hdmlnYXRlKGUsIC0xKSk7XG4gICAgbmV4dEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB0aGlzLm5hdmlnYXRlKGUsIDEpKTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHRoaXMub25DbGljayhlKSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZSA9PiB0aGlzLm9uS2V5ZG93bihlKSk7XG4gIH1cblxuICBnZXRFbGVtSW5kZXgoZWxlbSkge1xuICAgIGlmIChlbGVtLmRhdGFzZXQubGlnaHRib3gpIHJldHVybiBlbGVtLmRhdGFzZXQubGlnaHRib3gubWF0Y2goL1xcZC8pWzBdO1xuICB9XG5cbiAgbmF2aWdhdGUoZSwgZGlyZWN0aW9uKSB7XG4gICAgdGhpcy5oaWRlRGlhbG9nKHRoaXMuX2N1cnJlbnQpO1xuXG4gICAgdGhpcy5fY291bnRlciA9IHRoaXMuX2NvdW50ZXIgKyBkaXJlY3Rpb247XG5cbiAgICBpZiAoZGlyZWN0aW9uID09PSAtMSAmJiB0aGlzLl9jb3VudGVyIDwgMCkgdGhpcy5fY291bnRlciA9IHRoaXMuX2Ftb3VudCAtIDE7XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gMSAmJiAhdGhpcy5fc2xpZGVzW3RoaXMuX2NvdW50ZXJdKSB0aGlzLl9jb3VudGVyID0gMDtcblxuICAgIHRoaXMuX2N1cnJlbnQgPSB0aGlzLl9zbGlkZXNbdGhpcy5fY291bnRlcl07XG4gICAgdGhpcy5zaG93RGlhbG9nKHRoaXMuX2N1cnJlbnQpO1xuICB9XG5cbiAgb3BlbkxpZ2h0Ym94KGNsaWNrZWRFbCkge1xuICAgIGNvbnN0IG5ld0RpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2NsaWNrZWRFbC5kYXRhc2V0LmxpZ2h0Ym94fWApO1xuICAgIGNvbnN0IHZpc2libGVEaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYC4ke3RoaXMuX2NvbmZpZy5jbGFzc2VzLmRpYWxvZ1N0YXRlTW9kaWZpZXJ9YFxuICAgICk7XG5cbiAgICB0aGlzLnRvZ2dsZUJhY2tkcm9wKCk7XG4gICAgaWYgKHZpc2libGVEaWFsb2cpIHRoaXMuaGlkZURpYWxvZyh2aXNpYmxlRGlhbG9nKTtcblxuICAgIHRoaXMuc2hvd0RpYWxvZyhuZXdEaWFsb2cpO1xuICAgIHRoaXMuX29wZW5lZERpYWxvZyA9IG5ld0RpYWxvZztcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcbiAgfVxuXG4gIGNsb3NlTGlnaHRib3goKSB7XG4gICAgdGhpcy50b2dnbGVCYWNrZHJvcCgpO1xuICAgIGRlbGV0ZSB0aGlzLl9vcGVuZWREaWFsb2c7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiXCI7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgb25DbGljayhlKSB7XG4gICAgY29uc3QgY2xpY2tlZEVsID0gZS50YXJnZXQ7XG5cbiAgICBpZiAoY2xpY2tlZEVsID09PSB0aGlzLl9iYWNrZHJvcCB8fCBjbGlja2VkRWwgPT09IHRoaXMuX2Nsb3NlQnRuKSB7XG4gICAgICB0aGlzLmNsb3NlTGlnaHRib3goKTtcbiAgICB9XG5cbiAgICBpZiAoY2xpY2tlZEVsLmRhdGFzZXQubGlnaHRib3gpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuX2NvdW50ZXIgPSBOdW1iZXIodGhpcy5nZXRFbGVtSW5kZXgoY2xpY2tlZEVsKSk7XG4gICAgICB0aGlzLl9jdXJyZW50ID0gdGhpcy5fc2xpZGVzW3RoaXMuX2NvdW50ZXJdO1xuICAgICAgdGhpcy5vcGVuTGlnaHRib3goY2xpY2tlZEVsKTtcbiAgICB9XG4gIH1cblxuICBvbktleWRvd24oZSkge1xuICAgIGlmICh0aGlzLl9vcGVuZWREaWFsb2cgJiYgZS5jb2RlID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICB0aGlzLnRvZ2dsZUJhY2tkcm9wKCk7XG4gICAgICBkZWxldGUgdGhpcy5fb3BlbmVkRGlhbG9nO1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiXCI7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgc2hvd0RpYWxvZyhkaWFsb2cpIHtcbiAgICBkaWFsb2cuY2xhc3NMaXN0LmFkZCh0aGlzLl9jb25maWcuY2xhc3Nlcy5kaWFsb2dTdGF0ZU1vZGlmaWVyKTtcbiAgfVxuXG4gIGhpZGVEaWFsb2coZGlhbG9nKSB7XG4gICAgZGlhbG9nLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fY29uZmlnLmNsYXNzZXMuZGlhbG9nU3RhdGVNb2RpZmllcik7XG4gIH1cblxuICB0b2dnbGVCYWNrZHJvcCgpIHtcbiAgICB0aGlzLl9iYWNrZHJvcC5jbGFzc0xpc3QudG9nZ2xlKHRoaXMuX2NvbmZpZy5jbGFzc2VzLmJhY2tkcm9wU3RhdGVNb2RpZmllcik7XG4gIH1cbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uKGUpIHtcbiAgbmV3IExpZ2h0Ym94KHtcbiAgICAvLyBjbGFzcyBuYW1lcyB1c2VkIGluIEhUTUwgcmVsYXRlZCB0byBMaWdodGJveCB3aW5kb3cgY29tcG9uZW50OlxuICAgIGNsYXNzZXM6IHtcbiAgICAgIGJhY2tkcm9wOiBcImxpZ2h0Ym94XCIsXG4gICAgICBiYWNrZHJvcFN0YXRlTW9kaWZpZXI6IFwibGlnaHRib3hfdmlzaWJsZVwiLFxuICAgICAgZGlhbG9nU3RhdGVNb2RpZmllcjogXCJsaWdodGJveF9fZGlhbG9nX3Zpc2libGVcIixcbiAgICAgIGNsb3NlQnRuOiBcImxpZ2h0Ym94X19jbG9zZS1idG5cIixcbiAgICAgIHByZXZCdG46IFwibGlnaHRib3gtYnRuLXByZXZcIixcbiAgICAgIG5leHRCdG46IFwibGlnaHRib3gtYnRuLW5leHRcIixcbiAgICAgIHZpZGVvOiBcImVtYmVkXCIsXG4gICAgfSxcbiAgfSk7XG59KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8qXG5GSVgvVE9ETzpcblxuSWYgeW91J2xsIGVuY291bnRlciBhbnkgdHJvdWJsZXMsIGNoYW5nZSB0aGUgdmFsdWUgXCI1MDAwXCIgaW4gdGhlIFwiaGFuZGxlRXZlbnRcIiBtZXRob2QgdG8gYSBzbWFsbGVyIHZhbHVlLCBlcXVhbCB0byBzdGFuZGFyZCBzY3JlZW4gc2l6ZXMgKDc2OCwgOTkyLCAuLi4pLiBcblxuQnV0IHRoaXMgaGFjayBzaG91bGQgYmUgZml4ZWQsIHJld3JpdGUgdGhpcyBtZXRob2RcbiovXG5cbmNvbnN0IGNvbmZpZyA9IHtcbiAgY2xhc3Nlczoge1xuICAgIGNvbnRhaW5lcjogXCJoYW1idXJnZXJcIixcbiAgICBtZW51OiBcImhhbWJ1cmdlcl9fbWVudVwiLFxuICAgIGJ0bjogXCJoYW1idXJnZXJfX2J0blwiLFxuICAgIGFjdGl2ZU1lbnU6IFwiaGFtYnVyZ2VyX2FjdGl2ZVwiLFxuICAgIGFuaW1hdGVCdG46IFwiaGFtYnVyZ2VyX19idG5fYW5pbWF0ZVwiLFxuICB9LFxuICBtZW51SXRlbXM6IFtcbiAgICB7XG4gICAgICB0aXRsZTogXCJIb21lXCIsXG4gICAgICB1cmw6IFwiL1wiLFxuICAgICAgY2hpbGRyZW46IFtdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiQWJvdXRcIixcbiAgICAgIHVybDogXCIvYWJvdXRcIixcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogXCJBYm91dCBTdWIgMVwiLFxuICAgICAgICAgIHV0bDogXCIvYWJvdXQtc3ViMVwiLFxuICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRpdGxlOiBcIkFib3V0IFN1YiAxIFN1YiAxXCIsXG4gICAgICAgICAgICAgIHVybDogXCIvYWJvdXQtc3ViMS1zdWIxXCIsXG4gICAgICAgICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRpdGxlOiBcIkFib3V0IFN1YiAxIFN1YiAyXCIsXG4gICAgICAgICAgICAgIHVybDogXCIvYWJvdXQtc3ViMS1zdWIyXCIsXG4gICAgICAgICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiBcIkFib3V0IFN1YiAyXCIsXG4gICAgICAgICAgdXJsOiBcIi9hYm91dC1zdWIyXCIsXG4gICAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIkNvbnRhY3RzXCIsXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL3Bvbm9tYXJldmFuZHJleVwiLFxuICAgICAgY2hpbGRyZW46IFtdLFxuICAgIH0sXG4gIF0sXG59O1xuXG4vL1xuXG5jbGFzcyBIYW1idXJnZXIge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gICAgdGhpcy5fYnRuRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0aGlzLl9jb25maWcuY2xhc3Nlcy5idG59YCk7XG4gICAgdGhpcy5fY29udGFpbmVyRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYC4ke3RoaXMuX2NvbmZpZy5jbGFzc2VzLmNvbnRhaW5lcn1gXG4gICAgKTtcbiAgfVxuXG4gIGhhbmRsZUV2ZW50KGUpIHtcbiAgICAvKlxuICAgIGNvbnN0IGRpdldpZHRoID0gcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhhbWJ1cmdlclwiKSkud2lkdGg7XG4gICAgaWYgKGRpdldpZHRoIDw9IDc2OCkge31cbiAgICAqL1xuICAgIC8vIFRPRE86IGZpeCB0aGlzIHNsb3B5IFwiaWZcIiBjb25kaXRpb25cbiAgICBpZiAoXG4gICAgICAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGFtYnVyZ2VyX19saW5rXCIpIHx8XG4gICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGFtYnVyZ2VyX19idG5cIikgfHxcbiAgICAgICAgZS50YXJnZXQgPT09IHRoaXMuX2J0bkVsKSAmJlxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIDwgNTAwMFxuICAgICkge1xuICAgICAgdGhpcy5fY29udGFpbmVyRWwuY2xhc3NMaXN0LnRvZ2dsZShgJHt0aGlzLl9jb25maWcuY2xhc3Nlcy5hY3RpdmVNZW51fWApO1xuICAgICAgdGhpcy5fY29udGFpbmVyRWwuY2xhc3NMaXN0LnRvZ2dsZShgJHt0aGlzLl9jb25maWcuY2xhc3Nlcy5hbmltYXRlQnRufWApO1xuICAgIH1cbiAgfVxufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xuICBmdW5jdGlvbiBwb3B1bGF0ZU1lbnUoaXRlbXMpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgaXRlbSA9IGl0ZW1zW2ldO1xuXG4gICAgICBjb25zdCBsaW5rRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgIGxpbmtFbC5ocmVmID0gaXRlbS51cmw7XG4gICAgICBsaW5rRWwudGV4dENvbnRlbnQgPSBpdGVtLnRpdGxlO1xuICAgICAgbGlua0VsLmNsYXNzTGlzdC5hZGQoXCJoYW1idXJnZXJfX2xpbmtcIik7XG5cbiAgICAgIG1lbnUuYXBwZW5kKGxpbmtFbCk7XG5cbiAgICAgIGlmIChpdGVtLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcG9wdWxhdGVNZW51KGl0ZW0uY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2NvbmZpZy5jbGFzc2VzLmNvbnRhaW5lcn1gKTtcbiAgY29uc3QgYnRuID0gbmV3IEhhbWJ1cmdlcihjb25maWcpO1xuICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGJ0bik7XG5cbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2NvbmZpZy5jbGFzc2VzLm1lbnV9YCk7XG4gIHBvcHVsYXRlTWVudShjb25maWcubWVudUl0ZW1zKTtcbn0pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiY2xhc3MgQnRuIHtcbiAgY29uc3RydWN0b3IoeyBidG5FbCwgbW9kYWwgfSkge1xuICAgIHRoaXMuX2J0bkVsID0gYnRuRWw7XG4gICAgdGhpcy5fbW9kYWwgPSBtb2RhbDtcbiAgfVxuXG4gIGhhbmRsZUV2ZW50KGUpIHtcbiAgICBpZiAoZS50eXBlID09PSBcImNsaWNrXCIpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgdGhpcy5fbW9kYWwub3Blbk1vZGFsKHRoaXMuX21vZGFsLmRpYWxvZyk7XG4gICAgfVxuICB9XG59XG5cbmNsYXNzIE1vZGFsIHtcbiAgY29uc3RydWN0b3IoeyBJRHMsIGNsYXNzZXMgfSkge1xuICAgIHRoaXMuX0lEcyA9IElEcztcbiAgICB0aGlzLl9jbGFzc2VzID0gY2xhc3NlcztcblxuICAgIHRoaXMuX2JhY2tkcm9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGhpcy5fY2xhc3Nlcy5iYWNrZHJvcH1gKTtcbiAgICB0aGlzLl9vcGVuZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9jbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLiR7dGhpcy5fY2xhc3Nlcy5iYWNrZHJvcH0gLiR7dGhpcy5fY2xhc3Nlcy5jbG9zZUJ0bn1gXG4gICAgKTtcbiAgICB0aGlzLmRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3RoaXMuX0lEcy5kaWFsb2d9YCk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBlID0+IHRoaXMub25LZXlkb3duKGUpKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB0aGlzLm9uQ2xpY2soZSkpO1xuICB9XG5cbiAgLy8gY29uZmlybSBvcmRlciBtb2RhOlxuICBvbkNsaWNrKGUpIHtcbiAgICBjb25zdCBjbGlja2VkRWwgPSBlLnRhcmdldDtcblxuICAgIGlmIChjbGlja2VkRWwgPT09IHRoaXMuX2JhY2tkcm9wIHx8IGNsaWNrZWRFbCA9PT0gdGhpcy5fY2xvc2VCdG4pIHtcbiAgICAgIHRoaXMuY2xvc2VNb2RhbCh0aGlzLmRpYWxvZyk7IC8vIHdlYmluYXIgc2lnbnVwIG1vZGFsOiB0aGlzLmNsb3NlTW9kYWwoKTtcbiAgICB9XG4gIH1cblxuICBvbktleWRvd24oZSkge1xuICAgIGlmICh0aGlzLl9vcGVuZWREaWFsb2cgJiYgZS5jb2RlID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICBjb25zdCB2aWRlb0luTW9kYWwgPSB0aGlzLl9vcGVuZWREaWFsb2cucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYC4ke3RoaXMuX2NsYXNzZXMudmlkZW99YFxuICAgICAgKTtcbiAgICAgIGlmICh2aWRlb0luTW9kYWwpIHRoaXMuc3RvcFZpZGVvKHZpZGVvSW5Nb2RhbCk7XG4gICAgICB0aGlzLnRvZ2dsZUJhY2tkcm9wKCk7XG4gICAgICB0aGlzLl9vcGVuZWQgPSBmYWxzZTtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcIlwiO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZUJhY2tkcm9wKCkge1xuICAgIHRoaXMuX2JhY2tkcm9wLmNsYXNzTGlzdC50b2dnbGUodGhpcy5fY2xhc3Nlcy5iYWNrZHJvcFN0YXRlTW9kaWZpZXIpO1xuICB9XG5cbiAgb3Blbk1vZGFsKGRpYWxvZykge1xuICAgIGNvbnN0IG5ld0RpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2RpYWxvZy5pZH1gKTtcbiAgICBjb25zdCB2aXNpYmxlRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAuJHt0aGlzLl9jbGFzc2VzLmRpYWxvZ1N0YXRlTW9kaWZpZXJ9YFxuICAgICk7XG4gICAgdGhpcy5fb3BlbmVkID0gIXRoaXMuX29wZW5lZDtcblxuICAgIHRoaXMudG9nZ2xlQmFja2Ryb3AoKTtcblxuICAgIGlmICh2aXNpYmxlRGlhbG9nKSB0aGlzLmhpZGVEaWFsb2codmlzaWJsZURpYWxvZyk7XG5cbiAgICB0aGlzLnNob3dEaWFsb2cobmV3RGlhbG9nKTtcbiAgICB0aGlzLl9vcGVuZWREaWFsb2cgPSBuZXdEaWFsb2c7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG4gIH1cblxuICBjbG9zZU1vZGFsKGVsKSB7XG4gICAgaWYgKHRoaXMuX29wZW5lZCkge1xuICAgICAgLy8gaGFuZGxlIHZpZGVvOlxuICAgICAgY29uc3QgdmlkZW9CbG9jayA9XG4gICAgICAgIHRoaXMuX29wZW5lZERpYWxvZyAmJlxuICAgICAgICB0aGlzLl9vcGVuZWREaWFsb2cucXVlcnlTZWxlY3RvcihgLiR7dGhpcy5fY2xhc3Nlcy52aWRlb31gKTtcbiAgICAgIGlmICh2aWRlb0Jsb2NrKSB0aGlzLnN0b3BWaWRlbyh2aWRlb0Jsb2NrKTtcbiAgICAgIC8vXG5cbiAgICAgIHRoaXMuX29wZW5lZCA9ICF0aGlzLl9vcGVuZWQ7XG5cbiAgICAgIHRoaXMudG9nZ2xlQmFja2Ryb3AoKTtcbiAgICAgIGRlbGV0ZSB0aGlzLl9vcGVuZWREaWFsb2c7XG4gICAgICB0aGlzLmhpZGVEaWFsb2coZWwpO1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiXCI7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgaGlkZURpYWxvZyhkaWFsb2cpIHtcbiAgICBkaWFsb2cuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9jbGFzc2VzLmRpYWxvZ1N0YXRlTW9kaWZpZXIpO1xuICB9XG4gIHNob3dEaWFsb2coZGlhbG9nKSB7XG4gICAgZGlhbG9nLmNsYXNzTGlzdC5hZGQodGhpcy5fY2xhc3Nlcy5kaWFsb2dTdGF0ZU1vZGlmaWVyKTtcbiAgfVxuXG4gIHN0b3BWaWRlbyhlbGVtZW50KSB7XG4gICAgLyogU3RvcCBhbiBpZnJhbWUgb3IgSFRNTDUgPHZpZGVvPiBmcm9tIHBsYXlpbmcuXG4gICAgIHBhcmFtIHsgZWxlbWVudH0gLSB0aGUgZWxlbWVudCB0aGF0IGNvbnRhaW5zIHRoZSB2aWRlbyAqL1xuICAgIGNvbnN0IGlmcmFtZSA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihcImlmcmFtZVwiKTtcbiAgICBjb25zdCB2aWRlbyA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihcInZpZGVvXCIpO1xuXG4gICAgaWYgKGlmcmFtZSkge1xuICAgICAgY29uc3QgaWZyYW1lU3JjID0gaWZyYW1lLnNyYztcbiAgICAgIGlmcmFtZS5zcmMgPSBpZnJhbWVTcmM7XG4gICAgfVxuXG4gICAgaWYgKHZpZGVvKSB2aWRlby5wYXVzZSgpO1xuICB9XG59XG5cbi8vXG5cbmNvbnN0IG1vZGFsID0gbmV3IE1vZGFsKHtcbiAgSURzOiB7XG4gICAgZGlhbG9nOiBcInRlc3QtZGlhbG9nXCIsXG4gIH0sXG4gIC8qIGFsbCBjbGFzcyBuYW1lcyB1c2VkIGluIEhUTUwgcmVsYXRlZCB0byBtb2RhbCB3aW5kb3cgY29tcG9uZW50OiAqL1xuICBjbGFzc2VzOiB7XG4gICAgYmFja2Ryb3A6IFwibW9kYWxfYmFja2Ryb3BcIixcbiAgICBiYWNrZHJvcFN0YXRlTW9kaWZpZXI6IFwibW9kYWxfdmlzaWJsZVwiLFxuICAgIGRpYWxvZ1N0YXRlTW9kaWZpZXI6IFwibW9kYWxfX2RpYWxvZ192aXNpYmxlXCIsXG4gICAgY2xvc2VCdG46IFwibW9kYWxfX2Nsb3NlLWJ0blwiLFxuICB9LFxufSk7XG5cbi8vXG5cbmNvbnN0IGJ0bkVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2RhbC10cmlnZ2VyXCIpO1xuXG5jb25zdCBidG4gPSBuZXcgQnRuKHtcbiAgYnRuOiBidG5FbCxcbiAgbW9kYWw6IG1vZGFsLFxufSk7XG5cbmJ0bkVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBidG4pO1xuIiwiY29uc3QgY29uZmlnID0ge1xuICBJRHM6IHtcbiAgICBjb250YWluZXI6IFwic2VsZWN0LWV4YW1wbGVcIixcbiAgfSxcbiAgY2xhc3Nlczoge1xuICAgIHN5c3RlbVNlbGVjdDogXCJzZWxlY3RfX3N5c3RlbVwiLFxuICAgIG9wdGlvbnM6IFwic2VsZWN0X19vcHRpb25zXCIsXG4gICAgaGlkZU9wdGlvbnM6IFwic2VsZWN0X19vcHRpb25zX2hpZGRlblwiLFxuICAgIHNlbGVjdGVkT3B0aW9uOiBcInNlbGVjdF9fc2VsZWN0ZWQtb3B0aW9uXCIsXG4gICAgYXJyb3dVcDogXCJzZWxlY3RfX2Fycm93X3VwXCIsXG4gICAgYXJyb3dEb3duOiBcInNlbGVjdF9fYXJyb3dfZG93blwiLFxuICB9LFxuICBkZWZhdWx0VmFsdWU6IFwiU2VsZWN0IG9wdGlvblwiLFxuICBvcHRpb25MaXN0OiBbXCJFYXN5XCIsIFwiTW9kZXJhdGVcIiwgXCJEaWZmaWN1bHRcIl0sXG59O1xuXG4vL1xuXG5jbGFzcyBTZWxlY3Qge1xuICBjb25zdHJ1Y3Rvcih7IElEcywgY2xhc3NlcywgZGVmYXVsdFZhbHVlLCBvcHRpb25MaXN0IH0pIHtcbiAgICB0aGlzLl9JRHMgPSBJRHM7XG4gICAgdGhpcy5fY2xhc3NlcyA9IGNsYXNzZXM7XG4gICAgdGhpcy5fb3B0aW9uTGlzdCA9IG9wdGlvbkxpc3Q7XG5cbiAgICB0aGlzLl9jb250YWluZXJFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3RoaXMuX0lEcy5jb250YWluZXJ9YCk7XG4gICAgdGhpcy5fc3lzdGVtU2VsZWN0TWVudUVsID0gdGhpcy5zeXN0ZW1TZWxlY3RNZW51RWwoZGVmYXVsdFZhbHVlKTtcblxuICAgIHRoaXMuX3NlbGVjdGVkRWwgPSB0aGlzLnNlbGVjdGVkRWwodGhpcy5jYWNoZWQudmFsdWUgfHwgZGVmYXVsdFZhbHVlKTtcbiAgICB0aGlzLl9tZW51RWwgPSB0aGlzLm1lbnVFbCgpO1xuXG4gICAgLy8gUmVuZGVyIHNlbGVjdCBib3guXG4gICAgdGhpcy5fY29udGFpbmVyRWwuYXBwZW5kKFxuICAgICAgdGhpcy5fc3lzdGVtU2VsZWN0TWVudUVsLFxuICAgICAgdGhpcy5fc2VsZWN0ZWRFbCxcbiAgICAgIHRoaXMuX21lbnVFbFxuICAgICk7XG4gICAgLy9cblxuICAgIHRoaXMuX3NlbGVjdGVkRWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHRoaXMudG9nZ2xlTWVudUVsKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9tZW51RWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInNlY3Rpb25fX29wdGlvblwiKSkge1xuICAgICAgICB0aGlzLnVwZGF0ZWNvbnRhaW5lcihlLnRhcmdldCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmlzTWVudUVsSGlkZGVuKCkpIHRoaXMudG9nZ2xlTWVudUVsKCk7XG4gICAgfSk7XG4gIH1cblxuICBnZXQgY2FjaGVkKCkge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNlbGVjdFwiKSAhPT0gbnVsbCkge1xuICAgICAgLy8gY29uc29sZS5sb2coXCJSZXRyaWV2ZWQgZnJvbSBsb2NhbFN0b3JhZ2VcIik7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNlbGVjdFwiKSlbdGhpcy5fSURzLmNvbnRhaW5lcl07XG4gICAgfSBlbHNlIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN5c3RlbVNlbGVjdE1lbnVFbChkZWZhdWx0T3B0aW9uKSB7XG4gICAgY29uc3Qgc2VsZWN0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIHNlbGVjdEVsLmNsYXNzTGlzdC5hZGQodGhpcy5fY2xhc3Nlcy5zeXN0ZW1TZWxlY3QpO1xuXG4gICAgdGhpcy5fb3B0aW9uTGlzdC5mb3JFYWNoKG9wdGlvbk5hbWUgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuXG4gICAgICBjb25zdCBzdHIgPSBvcHRpb25OYW1lLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxzL2csIFwiLVwiKTtcbiAgICAgIG9wdGlvbkVsLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIHN0cik7XG5cbiAgICAgIG9wdGlvbkVsLnRleHRDb250ZW50ID0gb3B0aW9uTmFtZTtcblxuICAgICAgaWYgKG9wdGlvbk5hbWUgPT09IGRlZmF1bHRPcHRpb24pIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJEZWZhdWx0IG9wdGlvbiBzZXRcIik7XG4gICAgICAgIG9wdGlvbkVsLnNldEF0dHJpYnV0ZShcInNlbGVjdGVkXCIsIFwiXCIpO1xuICAgICAgfVxuXG4gICAgICBzZWxlY3RFbC5hcHBlbmQob3B0aW9uRWwpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNlbGVjdEVsO1xuICB9XG5cbiAgc2VsZWN0ZWRFbChkZWZhdWx0T3B0aW9uKSB7XG4gICAgY29uc3Qgc2VsZWN0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNlbGVjdEVsLmNsYXNzTGlzdC5hZGQoYCR7dGhpcy5fY2xhc3Nlcy5zZWxlY3RlZE9wdGlvbn1gKTtcbiAgICBzZWxlY3RFbC5jbGFzc0xpc3QuYWRkKGAke3RoaXMuX2NsYXNzZXMuYXJyb3dEb3dufWApO1xuICAgIHNlbGVjdEVsLmFwcGVuZChkZWZhdWx0T3B0aW9uKTtcblxuICAgIHJldHVybiBzZWxlY3RFbDtcbiAgfVxuXG4gIG1lbnVFbCgpIHtcbiAgICBjb25zdCBvcHRpb25zQ29udGFpbmVyRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG9wdGlvbnNDb250YWluZXJFbC5jbGFzc0xpc3QuYWRkKFxuICAgICAgYCR7dGhpcy5fY2xhc3Nlcy5vcHRpb25zfWAsXG4gICAgICBgJHt0aGlzLl9jbGFzc2VzLmhpZGVPcHRpb25zfWBcbiAgICApO1xuXG4gICAgZm9yIChsZXQgc3lzdGVtT3B0aW9uRWwgb2YgdGhpcy5fc3lzdGVtU2VsZWN0TWVudUVsLm9wdGlvbnMpIHtcbiAgICAgIGNvbnN0IG9wdGlvbkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIG9wdGlvbkVsLmNsYXNzTGlzdC5hZGQoXCJzZWN0aW9uX19vcHRpb25cIik7XG4gICAgICBvcHRpb25FbC50ZXh0Q29udGVudCA9IHN5c3RlbU9wdGlvbkVsLnRleHRDb250ZW50O1xuXG4gICAgICBvcHRpb25zQ29udGFpbmVyRWwuYXBwZW5kQ2hpbGQob3B0aW9uRWwpO1xuICAgIH1cblxuICAgIHJldHVybiBvcHRpb25zQ29udGFpbmVyRWw7XG4gIH1cblxuICB0b2dnbGVBcnJvdygpIHtcbiAgICBjb25zdCBhcnJvd1VwQ2xhc3NOYW1lID0gdGhpcy5fY2xhc3Nlcy5hcnJvd1VwO1xuICAgIGNvbnN0IGFycm93RG93bkNsYXNzTmFtZSA9IHRoaXMuX2NsYXNzZXMuYXJyb3dEb3duO1xuXG4gICAgaWYgKHRoaXMuX3NlbGVjdGVkRWwuY2xhc3NMaXN0LmNvbnRhaW5zKGFycm93VXBDbGFzc05hbWUpKSB7XG4gICAgICB0aGlzLl9zZWxlY3RlZEVsLmNsYXNzTGlzdC5yZW1vdmUoYXJyb3dVcENsYXNzTmFtZSk7XG4gICAgICB0aGlzLl9zZWxlY3RlZEVsLmNsYXNzTGlzdC5hZGQoYXJyb3dEb3duQ2xhc3NOYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc2VsZWN0ZWRFbC5jbGFzc0xpc3QuYWRkKGFycm93VXBDbGFzc05hbWUpO1xuICAgICAgdGhpcy5fc2VsZWN0ZWRFbC5jbGFzc0xpc3QucmVtb3ZlKGFycm93RG93bkNsYXNzTmFtZSk7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlTWVudUVsKCkge1xuICAgIHRoaXMuX21lbnVFbC5jbGFzc0xpc3QudG9nZ2xlKGAke3RoaXMuX2NsYXNzZXMuaGlkZU9wdGlvbnN9YCk7XG4gICAgdGhpcy50b2dnbGVBcnJvdygpO1xuICB9XG5cbiAgaXNNZW51RWxIaWRkZW4oKSB7XG4gICAgaWYgKHRoaXMuX21lbnVFbC5jbGFzc0xpc3QuY29udGFpbnMoYCR7dGhpcy5fY2xhc3Nlcy5oaWRlT3B0aW9uc31gKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlU3lzdGVtU2VsZWN0ZWRBdHRyKG5ld1NlbGVjdGVkKSB7XG4gICAgY29uc3QgY3VycmVudGx5U2VsZWN0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwib3B0aW9uOmNoZWNrZWRcIik7XG5cbiAgICBpZiAoY3VycmVudGx5U2VsZWN0ZWQpIHtcbiAgICAgIGN1cnJlbnRseVNlbGVjdGVkLnJlbW92ZUF0dHJpYnV0ZShcInNlbGVjdGVkXCIpO1xuICAgICAgbmV3U2VsZWN0ZWQuc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIiwgXCJcIik7XG4gICAgfVxuICB9XG5cbiAgc2V0U3lzdGVtU2VsZWN0ZWRFbChjdXN0b21TZWxlY3RlZEVsKSB7XG4gICAgY29uc3Qgc3lzdGVtT3B0aW9uRWxzID0gQXJyYXkuZnJvbSh0aGlzLl9zeXN0ZW1TZWxlY3RNZW51RWwpO1xuXG4gICAgc3lzdGVtT3B0aW9uRWxzLmZvckVhY2goKHN5c3RlbU9wdGlvbkVsLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKHN5c3RlbU9wdGlvbkVsLnRleHRDb250ZW50ID09PSBjdXN0b21TZWxlY3RlZEVsLnRleHRDb250ZW50KSB7XG4gICAgICAgIHN5c3RlbU9wdGlvbkVscy5zZWxlY3RlZEluZGV4ID0gaW5kZXg7XG4gICAgICAgIHRoaXMudXBkYXRlU3lzdGVtU2VsZWN0ZWRBdHRyKFxuICAgICAgICAgIHN5c3RlbU9wdGlvbkVsc1tzeXN0ZW1PcHRpb25FbHMuc2VsZWN0ZWRJbmRleF1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNldEN1c3RvbVNlbGVjdGVkRWwoY3VzdG9tU2VsZWN0ZWRFbCkge1xuICAgIHRoaXMuX3NlbGVjdGVkRWwudGV4dENvbnRlbnQgPSBjdXN0b21TZWxlY3RlZEVsLnRleHRDb250ZW50O1xuICB9XG5cbiAgdXBkYXRlY29udGFpbmVyKGN1c3RvbVNlbGVjdGVkRWwpIHtcbiAgICBjb25zdCBzeXN0ZW1PcHRpb25FbHMgPSBBcnJheS5mcm9tKHRoaXMuX3N5c3RlbVNlbGVjdE1lbnVFbCk7XG5cbiAgICBzeXN0ZW1PcHRpb25FbHMuZm9yRWFjaCgoc3lzdGVtT3B0aW9uRWwsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoc3lzdGVtT3B0aW9uRWwudGV4dENvbnRlbnQgPT09IGN1c3RvbVNlbGVjdGVkRWwudGV4dENvbnRlbnQpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSAoc3lzdGVtT3B0aW9uRWxzLnNlbGVjdGVkSW5kZXggPSB0aGlzLmNhY2hlZC5pbmRleCk7XG5cbiAgICAgICAgaWYgKHN5c3RlbU9wdGlvbkVsc1tpbmRleF0pIHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVN5c3RlbVNlbGVjdGVkQXR0cihzeXN0ZW1PcHRpb25FbHNbaW5kZXhdKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zZWxlY3RlZEVsLnRleHRDb250ZW50ID0gY3VzdG9tU2VsZWN0ZWRFbC50ZXh0Q29udGVudDtcblxuICAgICAgICB0aGlzLnNldEN1c3RvbVNlbGVjdGVkRWwoY3VzdG9tU2VsZWN0ZWRFbCk7XG4gICAgICAgIHRoaXMuc2V0U3lzdGVtU2VsZWN0ZWRFbChjdXN0b21TZWxlY3RlZEVsKTtcbiAgICAgICAgdGhpcy5jYWNoZVNlbGVjdGVkKGluZGV4LCBjdXN0b21TZWxlY3RlZEVsKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMudG9nZ2xlTWVudUVsKCk7XG4gIH1cblxuICBjYWNoZVNlbGVjdGVkKGluZGV4LCBzZWxlY3RlZEVsKSB7XG4gICAgLy8gQ3JlYXRlIG9iamVjdCB0byBzdG9yZSBzZWxlY3RlZCBvcHRpb24uIE9iamVjdCBzdHJ1Y3R1cmU6XG4gICAgLy8gc2VsZWN0ZWRJdGVtID0geyA8c2VsZWN0IGNvbnRhaW5lciBJRD46IHsgaW5kZXg6IDJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbW9kZXJhdGUgfSB9XG4gICAgY29uc3Qgc2VsZWN0ZWRPcHRpb24gPSB7fTtcbiAgICBjb25zdCBrZXkgPSB0aGlzLl9JRHMuY29udGFpbmVyO1xuICAgIGNvbnN0IHZhbHVlID0gc2VsZWN0ZWRFbC50ZXh0Q29udGVudDtcbiAgICBzZWxlY3RlZE9wdGlvbltrZXldID0ge1xuICAgICAgaW5kZXgsXG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgfTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNlbGVjdFwiLCBKU09OLnN0cmluZ2lmeShzZWxlY3RlZE9wdGlvbikpO1xuICB9XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Y29uZmlnLklEcy5jb250YWluZXJ9YCk7XG5cbiAgY29uc3QgY3VzdG9tU2VsZWN0ID0gbmV3IFNlbGVjdChjb25maWcpO1xuICBjb250YWluZXJFbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3VzdG9tU2VsZWN0KTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==