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

If you'll encounter any troubles, change the value "1800" in the "handleEvent" method to a smaller value, equal to standard screen sizes (768, 992, ...). 

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
      if ((e.target.classList.contains("hamburger__link") || e.target.parentElement.classList.contains("hamburger__btn") || e.target === this._btnEl) && document.documentElement.clientWidth < 1800) {
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
      // selectedItem = { select-difficulty: { index: 2
      //                                       value: moderate } }
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
}(); //


window.addEventListener("load", function () {
  var containerEl = document.querySelector("#".concat(config.IDs.container));
  var customSelect = new Select(config);
  containerEl.addEventListener("click", customSelect);
});

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9zZWxlY3QvX3NlbGVjdC5zY3NzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9kb2MvaW1nIHN5bmMgKHN2Z3xwbmd8anBnKSQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvYy9pbWcvYW5pbWFsc19sYW5kc2NhcGVfbGcuanBnIiwid2VicGFjazovLy8uL3NyYy9kb2MvaW1nL2FuaW1hbHNfbGFuZHNjYXBlX21kLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9jL2ltZy9hbmltYWxzX2xhbmRzY2FwZV9zbS5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvYy9pbWcvYW5pbWFsc19sYW5kc2NhcGVfeGwuanBnIiwid2VicGFjazovLy8uL3NyYy9kb2MvaW1nL2FuaW1hbHNfbGFuZHNjYXBlX3h4bC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvYy9pbWcvYW5pbWFsc19sYW5kc2NhcGVfeHh4bC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvYy9pbWcvYmlzY3VpdC1sb2dvLWJsYWNrLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9jL2ltZy9iaXNjdWl0LWxvZ28td2hpdGUuc3ZnIiwid2VicGFjazovLy8uL3NyYy9kb2MvaW1nL2Jpc2N1aXQtc3ltYm9sLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9jL2ltZy9jb29raWUuc3ZnIiwid2VicGFjazovLy8uL3NyYy9kb2MvaW1nL2Z1bGxzY3JlZW4taW1hZ2UuanBnIiwid2VicGFjazovLy8uL3NyYy9kb2MvaW1nL2xpZ2h0Ym94LWltZzEtcHJldmlldy5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvYy9pbWcvbGlnaHRib3gtaW1nMS5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvYy9pbWcvbGlnaHRib3gtaW1nMi1wcmV2aWV3LmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9jL2ltZy9saWdodGJveC1pbWcyLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9jL2ltZy9saWdodGJveC1pbWczLXByZXZpZXcuanBnIiwid2VicGFjazovLy8uL3NyYy9kb2MvaW1nL2xpZ2h0Ym94LWltZzMuanBnIiwid2VicGFjazovLy8uL3NyYy9kb2MvaW1nL2xpZ2h0Ym94LWltZzQtcHJldmlldy5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvYy9pbWcvbGlnaHRib3gtaW1nNC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvYy9pbWcvbG9nby5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvYy9pbWcvbG9nb3Muc3ZnIiwid2VicGFjazovLy8uL3NyYy9kb2MvaW1nL3VzZXItcGljLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL19yZXNldC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9kb2MvX2RvYy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9kb2MvZG9jLmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvcGFnZS9fcGFnZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvcGFnZS9wYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvaGVhZGVyL19oZWFkZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL21haW4vX21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2Zvb3Rlci9fZm9vdGVyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy90ZXh0L190ZXh0LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9oZWFkaW5nL19oZWFkaW5nLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9saXN0L19saXN0LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9idG4vX2J0bi5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvYnRuLWJhY2stdG8tdG9wL19idG4tYmFjay10by10b3Auc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2J0bi1iYWNrLXRvLXRvcC9idG4tYmFjay10by10b3AuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9saW5rL19saW5rLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9wYWdpbmF0aW9uL19wYWdpbmF0aW9uLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9jb21tZW50L19jb21tZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9ncmlkLWZvcm1zL19ncmlkLWZvcm1zLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9ncmlkLXBhZ2UtbGF5b3V0Mi9fZ3JpZC1wYWdlLWxheW91dDIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2dyaWQtcGFnZS1sYXlvdXQxL19ncmlkLXBhZ2UtbGF5b3V0MS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvZ3JpZC1nYWxsZXJ5L19ncmlkLWdhbGxlcnkuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2dyaWQtc2ltcGxlL19ncmlkLXNpbXBsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvZnVsbHNjcmVlbi1iZy9fZnVsbHNjcmVlbi1iZy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvaW1nLXJhc3Rlci9faW1nLXJhc3Rlci5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvaW1nLXN2Zy9faW1nLXN2Zy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvaWNvbnMvX2ljb25zLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9pY29ucyBzeW5jIChzdmd8cG5nfGpwZykkIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvaWNvbnMvc3ByaXRlLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2JyZWFkY3J1bWJzL19icmVhZGNydW1icy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvYmFkZ2UvX2JhZGdlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9ibG9ja3F1b3RlL19ibG9ja3F1b3RlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9jb2RlL19jb2RlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9oci9faHIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2xhYmVsL19sYWJlbC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvZW1iZWQvX2VtYmVkLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy90YWJsZS9fdGFibGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2xvYWRlci9fbG9hZGVyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9jb250cm9sL19jb250cm9sLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9mb3JtLWdyb3VwL19mb3JtLWdyb3VwLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9hY2NvcmRpb24vX2FjY29yZGlvbi5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvYWNjb3JkaW9uL2FjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2xpZ2h0Ym94L19saWdodGJveC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvbGlnaHRib3gvbGlnaHRib3guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9oYW1idXJnZXIvX2hhbWJ1cmdlci5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvaGFtYnVyZ2VyL2hhbWJ1cmdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL21vZGFsL19tb2RhbC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvbW9kYWwvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9zZWxlY3Qvc2VsZWN0LmpzIl0sIm5hbWVzIjpbInJlcXVpcmVGaWxlcyIsInIiLCJrZXlzIiwiZm9yRWFjaCIsInJlcXVpcmUiLCJIYW1idXJnZXIiLCJjb25maWciLCJfY29uZmlnIiwiX2J0bkVsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NlcyIsImJ0biIsIl9tZW51RWwiLCJtZW51IiwiZSIsInRhcmdldCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicGFyZW50RWxlbWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwidG9nZ2xlIiwiYWN0aXZlTWVudSIsImFuaW1hdGVCdG4iLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicGFnZV9fcHJlbG9hZCIsInJlbW92ZSIsImJhY2tUb1RvcEJ0biIsInNjcm9sbFkiLCJib2R5Iiwic2Nyb2xsVG9wIiwic3R5bGUiLCJkaXNwbGF5Iiwic2Nyb2xsVG8iLCJBY2NvcmRpb24iLCJzaW5nbGUiLCJoZWFkZXJzIiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsImhlYWRlciIsInNpbmdsZU9wZW4iLCJvcGVuIiwiZXZlbnRPYmoiLCJrZXlDb2RlIiwidHlwZSIsImNvbnRlbnQiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJtYXhIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJjb250ZW50cyIsIkxpZ2h0Ym94IiwiX2JhY2tkcm9wIiwiYmFja2Ryb3AiLCJfY2xvc2VCdG4iLCJjbG9zZUJ0biIsIl9zbGlkZXMiLCJfY291bnRlciIsIl9hbW91bnQiLCJwcmV2QnRuIiwibmV4dEJ0biIsIm5hdmlnYXRlIiwib25DbGljayIsIm9uS2V5ZG93biIsImVsZW0iLCJkYXRhc2V0IiwibGlnaHRib3giLCJtYXRjaCIsImRpcmVjdGlvbiIsImhpZGVEaWFsb2ciLCJfY3VycmVudCIsInNob3dEaWFsb2ciLCJjbGlja2VkRWwiLCJuZXdEaWFsb2ciLCJ2aXNpYmxlRGlhbG9nIiwiZGlhbG9nU3RhdGVNb2RpZmllciIsInRvZ2dsZUJhY2tkcm9wIiwiX29wZW5lZERpYWxvZyIsIm92ZXJmbG93IiwiY2xvc2VMaWdodGJveCIsInByZXZlbnREZWZhdWx0IiwiTnVtYmVyIiwiZ2V0RWxlbUluZGV4Iiwib3BlbkxpZ2h0Ym94IiwiY29kZSIsImRpYWxvZyIsImFkZCIsImJhY2tkcm9wU3RhdGVNb2RpZmllciIsInZpZGVvIiwiY29udGFpbmVyIiwibWVudUl0ZW1zIiwidGl0bGUiLCJ1cmwiLCJjaGlsZHJlbiIsInV0bCIsIl9jb250YWluZXJFbCIsInBvcHVsYXRlTWVudSIsIml0ZW1zIiwiaSIsIml0ZW0iLCJsaW5rRWwiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsInRleHRDb250ZW50IiwiYXBwZW5kIiwiQnRuIiwiYnRuRWwiLCJtb2RhbCIsIl9tb2RhbCIsIm9wZW5Nb2RhbCIsIk1vZGFsIiwiSURzIiwiX0lEcyIsIl9jbGFzc2VzIiwiX29wZW5lZCIsImNsb3NlTW9kYWwiLCJ2aWRlb0luTW9kYWwiLCJzdG9wVmlkZW8iLCJpZCIsImVsIiwidmlkZW9CbG9jayIsImVsZW1lbnQiLCJpZnJhbWUiLCJpZnJhbWVTcmMiLCJzcmMiLCJwYXVzZSIsInN5c3RlbVNlbGVjdCIsIm9wdGlvbnMiLCJoaWRlT3B0aW9ucyIsInNlbGVjdGVkT3B0aW9uIiwiYXJyb3dVcCIsImFycm93RG93biIsImRlZmF1bHRWYWx1ZSIsIm9wdGlvbkxpc3QiLCJTZWxlY3QiLCJfb3B0aW9uTGlzdCIsIl9zeXN0ZW1TZWxlY3RNZW51RWwiLCJzeXN0ZW1TZWxlY3RNZW51RWwiLCJfc2VsZWN0ZWRFbCIsInNlbGVjdGVkRWwiLCJjYWNoZWQiLCJ2YWx1ZSIsIm1lbnVFbCIsInN0b3BQcm9wYWdhdGlvbiIsInRvZ2dsZU1lbnVFbCIsInVwZGF0ZWNvbnRhaW5lciIsImlzTWVudUVsSGlkZGVuIiwiZGVmYXVsdE9wdGlvbiIsInNlbGVjdEVsIiwib3B0aW9uTmFtZSIsIm9wdGlvbkVsIiwic3RyIiwidG9Mb3dlckNhc2UiLCJyZXBsYWNlIiwic2V0QXR0cmlidXRlIiwib3B0aW9uc0NvbnRhaW5lckVsIiwic3lzdGVtT3B0aW9uRWwiLCJhcHBlbmRDaGlsZCIsImFycm93VXBDbGFzc05hbWUiLCJhcnJvd0Rvd25DbGFzc05hbWUiLCJ0b2dnbGVBcnJvdyIsIm5ld1NlbGVjdGVkIiwiY3VycmVudGx5U2VsZWN0ZWQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJjdXN0b21TZWxlY3RlZEVsIiwic3lzdGVtT3B0aW9uRWxzIiwiQXJyYXkiLCJmcm9tIiwiaW5kZXgiLCJzZWxlY3RlZEluZGV4IiwidXBkYXRlU3lzdGVtU2VsZWN0ZWRBdHRyIiwic2V0Q3VzdG9tU2VsZWN0ZWRFbCIsInNldFN5c3RlbVNlbGVjdGVkRWwiLCJjYWNoZVNlbGVjdGVkIiwia2V5IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZXRJdGVtIiwicGFyc2UiLCJjb250YWluZXJFbCIsImN1c3RvbVNlbGVjdCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7OztBQ2xGQSx1Qzs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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Q0EsVUFBTW9ELEtBQUssR0FBR0YsVUFBVSxDQUFDcEMsV0FBekI7QUFDQTBCLG9CQUFjLENBQUM2QyxHQUFELENBQWQsR0FBc0I7QUFDcEJOLGFBQUssRUFBTEEsS0FEb0I7QUFFcEIzQixhQUFLLEVBQUVBO0FBRmEsT0FBdEI7QUFJQWtDLGtCQUFZLENBQUNDLE9BQWIsQ0FBcUIsUUFBckIsRUFBK0JDLElBQUksQ0FBQ0MsU0FBTCxDQUFlakQsY0FBZixDQUEvQjtBQUNEOzs7d0JBNUlZO0FBQ1gsVUFBSThDLFlBQVksQ0FBQ0ksT0FBYixDQUFxQixRQUFyQixNQUFtQyxJQUF2QyxFQUE2QztBQUMzQztBQUNBLGVBQU9GLElBQUksQ0FBQ0csS0FBTCxDQUFXTCxZQUFZLENBQUNJLE9BQWIsQ0FBcUIsUUFBckIsQ0FBWCxFQUEyQyxLQUFLbkUsSUFBTCxDQUFVdkIsU0FBckQsQ0FBUDtBQUNELE9BSEQsTUFHTyxPQUFPLEtBQVA7QUFDUjs7OztLQTBJSDs7O0FBRUFqRSxNQUFNLENBQUNDLGdCQUFQLENBQXdCLE1BQXhCLEVBQWdDLFlBQU07QUFDcEMsTUFBTTRKLFdBQVcsR0FBRzdLLFFBQVEsQ0FBQ0MsYUFBVCxZQUEyQkosTUFBTSxDQUFDMEcsR0FBUCxDQUFXdEIsU0FBdEMsRUFBcEI7QUFFQSxNQUFNNkYsWUFBWSxHQUFHLElBQUloRCxNQUFKLENBQVdqSSxNQUFYLENBQXJCO0FBQ0FnTCxhQUFXLENBQUM1SixnQkFBWixDQUE2QixPQUE3QixFQUFzQzZKLFlBQXRDO0FBQ0QsQ0FMRCxFIiwiZmlsZSI6InNjcmlwdHMuODEzNGFlODVjNjQ5YjA4MGJmNGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi4vXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8qXG4gKiBIRUxQRVIgRlVOQ1RJT05TXG4gKi9cblxuLy8gZnVuY3Rpb24gZm9yIHJlcXVpcmluZyBpbWFnZXM6XG5mdW5jdGlvbiByZXF1aXJlRmlsZXMocikge1xuICByLmtleXMoKS5mb3JFYWNoKHIpO1xufVxuXG5yZXF1aXJlRmlsZXMocmVxdWlyZS5jb250ZXh0KFwiLi9zcmMvZG9jL2ltZy9cIiwgdHJ1ZSwgLyhzdmd8cG5nfGpwZykkLykpO1xuXG4vKlxuICogQ1NTIFJFU0VUXG4gKi9cblxuaW1wb3J0IFwiLi9zcmMvYmxvY2tzL19yZXNldC5zY3NzXCI7XG5cbi8qXG4gKiAgRE9DVU1FTlRBVElPTiBTVFlMRVNcbiAqL1xuXG5pbXBvcnQgXCIuL3NyYy9kb2MvX2RvYy5zY3NzXCI7XG5pbXBvcnQgXCIuL3NyYy9kb2MvZG9jLmpzXCI7XG5cbi8qXG4gKiBCTE9DS1NcbiAqL1xuXG4vKiBUbyBjb250cm9sIHRoZSBDU1MgY2FzY2FkZSBhbmQgaW5oZXJpdGFuY2Ugd2hpbGUgaW1wb3J0aW5nIGJsb2NrcyBpbnRvIHRoZSBwcm9qZWN0LCBhbGwgYmxvY2tzIGRpdmlkZWQgaW50byB0d28gbWFpbiBncm91cHM6XG5cbiAgIDEuICoqUGFyZW50IGJsb2NrcyoqICh0aGVzZSBibG9ja3MgdXN1YWxseSwgYWx0aG91Z2ggaXQncyBub3Qgb2JsaWdhdG9yeSwgc2VydmUgYXMgcGFyZW50IGNvbnRhaW5lcnMgZm9yIFwiQ2hpbGQgYmxvY2tzXCIpXG4gICAyLiAqKkNoaWxkIGJsb2NrcyoqICh1c3VhbGx5LCB5b3UgZG9uJ3QgcHV0IGFueXRoaW5nIGluc2lkZSB0aGVzZSBibG9ja3MsIGV4Y2VwdCB0ZXh0LiBCZWluZyBpbXBvcnRlZCBsYXN0LCBydWxlcyBpbiB0aGVzZSBibG9ja3MgbWF5IG92ZXJyaWRlIHJ1bGVzIGRlY2xhcmVkIGVhcmxpZXIgaW4gXCJQYXJlbnQgYmxvY2tzXCIpXG5cbioqRG9uJ3QgY2hhbmdlIHRoZSBvcmRlciBvZiBibG9ja3MhKiogQWx0aG91Z2gsIGFsbCBibG9ja3MgYXJlIHNlbGYtc3VmZmljaWVudCBhbmQgZG9uJ3QgcmVseSBvbiBjYXNjYWRlIGFuZCBpbmhlcml0YW5jZSwgaW4gc29tZSByYXJlIGNhc2VzIHJlb3JkZXJpbmcgb2YgdGhlaXIgaW1wb3J0cyBtYXkgYnJlYWsgbWlub3IgZGV0YWlscyBsaWtlIGxpbmsgY29sb3Igb3IgZm9udC1zaXplLCBzbyB0byBiZSBzYWZlIHRyeSB0byBtYWludGFpbiB0aGUgY3VycmVudCBibG9ja3MnIG9yZGVyLiBJZiB5b3UgZG9uJ3QgbmVlZCBhIGJsb2NrIGluIHlvdXIgYnVuZGxlLCBjb21tZW50IGl0IG91dCwgZG9uJ3QgZGVsZXRlIGl0IGZyb20gdGhpcyBmaWxlLCB5b3UgbWlnaHQgbmVlZCBpdCBpbiB0aGUgZnV0dXJlICovXG5cbi8vIFBhcmVudCBibG9ja3NcblxuaW1wb3J0IFwiLi9zcmMvYmxvY2tzL3BhZ2UvX3BhZ2Uuc2Nzc1wiO1xuaW1wb3J0IFwiLi9zcmMvYmxvY2tzL3BhZ2UvcGFnZS5qc1wiO1xuXG5pbXBvcnQgXCIuL3NyYy9ibG9ja3MvaGVhZGVyL19oZWFkZXIuc2Nzc1wiO1xuXG5pbXBvcnQgXCIuL3NyYy9ibG9ja3MvbWFpbi9fbWFpbi5zY3NzXCI7XG5cbmltcG9ydCBcIi4vc3JjL2Jsb2Nrcy9mb290ZXIvX2Zvb3Rlci5zY3NzXCI7XG5cbmltcG9ydCBcIi4vc3JjL2Jsb2Nrcy90ZXh0L190ZXh0LnNjc3NcIjtcblxuaW1wb3J0IFwiLi9zcmMvYmxvY2tzL2hlYWRpbmcvX2hlYWRpbmcuc2Nzc1wiO1xuXG5pbXBvcnQgXCIuL3NyYy9ibG9ja3MvbGlzdC9fbGlzdC5zY3NzXCI7XG5cbmltcG9ydCBcIi4vc3JjL2Jsb2Nrcy9idG4vX2J0bi5zY3NzXCI7XG5cbmltcG9ydCBcIi4vc3JjL2Jsb2Nrcy9idG4tYmFjay10by10b3AvX2J0bi1iYWNrLXRvLXRvcC5zY3NzXCI7XG5pbXBvcnQgXCIuL3NyYy9ibG9ja3MvYnRuLWJhY2stdG8tdG9wL2J0bi1iYWNrLXRvLXRvcC5qc1wiO1xuXG5pbXBvcnQgXCIuL3NyYy9ibG9ja3MvbGluay9fbGluay5zY3NzXCI7XG5cbmltcG9ydCBcIi4vc3JjL2Jsb2Nrcy9wYWdpbmF0aW9uL19wYWdpbmF0aW9uLnNjc3NcIjtcblxuaW1wb3J0IFwiLi9zcmMvYmxvY2tzL2NvbW1lbnQvX2NvbW1lbnQuc2Nzc1wiO1xuXG5pbXBvcnQgXCIuL3NyYy9ibG9ja3MvZ3JpZC1mb3Jtcy9fZ3JpZC1mb3Jtcy5zY3NzXCI7XG5cbmltcG9ydCBcIi4vc3JjL2Jsb2Nrcy9ncmlkLXBhZ2UtbGF5b3V0Mi9fZ3JpZC1wYWdlLWxheW91dDIuc2Nzc1wiO1xuXG5pbXBvcnQgXCIuL3NyYy9ibG9ja3MvZ3JpZC1wYWdlLWxheW91dDEvX2dyaWQtcGFnZS1sYXlvdXQxLnNjc3NcIjtcblxuaW1wb3J0IFwiLi9zcmMvYmxvY2tzL2dyaWQtZ2FsbGVyeS9fZ3JpZC1nYWxsZXJ5LnNjc3NcIjtcblxuaW1wb3J0IFwiLi9zcmMvYmxvY2tzL2dyaWQtc2ltcGxlL19ncmlkLXNpbXBsZS5zY3NzXCI7XG5cbmltcG9ydCBcIi4vc3JjL2Jsb2Nrcy9mdWxsc2NyZWVuLWJnL19mdWxsc2NyZWVuLWJnLnNjc3NcIjtcblxuLy8gQ2hpbGQgYmxvY2tzXG5cbmltcG9ydCBcIi4vc3JjL2Jsb2Nrcy9pbWctcmFzdGVyL19pbWctcmFzdGVyLnNjc3NcIjtcblxuaW1wb3J0IFwiLi9zcmMvYmxvY2tzL2ltZy1zdmcvX2ltZy1zdmcuc2Nzc1wiO1xuXG5pbXBvcnQgXCIuL3NyYy9ibG9ja3MvaWNvbnMvX2ljb25zLnNjc3NcIjtcbnJlcXVpcmVGaWxlcyhyZXF1aXJlLmNvbnRleHQoXCIuL3NyYy9ibG9ja3MvaWNvbnMvXCIsIHRydWUsIC8oc3ZnfHBuZ3xqcGcpJC8pKTtcblxuaW1wb3J0IFwiLi9zcmMvYmxvY2tzL2JyZWFkY3J1bWJzL19icmVhZGNydW1icy5zY3NzXCI7XG5cbmltcG9ydCBcIi4vc3JjL2Jsb2Nrcy9iYWRnZS9fYmFkZ2Uuc2Nzc1wiO1xuXG5pbXBvcnQgXCIuL3NyYy9ibG9ja3MvYmxvY2txdW90ZS9fYmxvY2txdW90ZS5zY3NzXCI7XG5cbmltcG9ydCBcIi4vc3JjL2Jsb2Nrcy9jb2RlL19jb2RlLnNjc3NcIjtcblxuaW1wb3J0IFwiLi9zcmMvYmxvY2tzL2hyL19oci5zY3NzXCI7XG5cbmltcG9ydCBcIi4vc3JjL2Jsb2Nrcy9sYWJlbC9fbGFiZWwuc2Nzc1wiO1xuXG5pbXBvcnQgXCIuL3NyYy9ibG9ja3MvZW1iZWQvX2VtYmVkLnNjc3NcIjtcblxuaW1wb3J0IFwiLi9zcmMvYmxvY2tzL3RhYmxlL190YWJsZS5zY3NzXCI7XG5cbmltcG9ydCBcIi4vc3JjL2Jsb2Nrcy9sb2FkZXIvX2xvYWRlci5zY3NzXCI7XG5cbmltcG9ydCBcIi4vc3JjL2Jsb2Nrcy9jb250cm9sL19jb250cm9sLnNjc3NcIjtcblxuaW1wb3J0IFwiLi9zcmMvYmxvY2tzL2Zvcm0tZ3JvdXAvX2Zvcm0tZ3JvdXAuc2Nzc1wiO1xuXG5pbXBvcnQgXCIuL3NyYy9ibG9ja3Mvc2VsZWN0L19zZWxlY3Quc2Nzc1wiO1xuXG5pbXBvcnQgXCIuL3NyYy9ibG9ja3MvYWNjb3JkaW9uL19hY2NvcmRpb24uc2Nzc1wiO1xuaW1wb3J0IFwiLi9zcmMvYmxvY2tzL2FjY29yZGlvbi9hY2NvcmRpb24uanNcIjtcblxuaW1wb3J0IFwiLi9zcmMvYmxvY2tzL2xpZ2h0Ym94L19saWdodGJveC5zY3NzXCI7XG5pbXBvcnQgXCIuL3NyYy9ibG9ja3MvbGlnaHRib3gvbGlnaHRib3guanNcIjtcblxuaW1wb3J0IFwiLi9zcmMvYmxvY2tzL2hhbWJ1cmdlci9faGFtYnVyZ2VyLnNjc3NcIjtcbmltcG9ydCBcIi4vc3JjL2Jsb2Nrcy9oYW1idXJnZXIvaGFtYnVyZ2VyLmpzXCI7XG5cbmltcG9ydCBcIi4vc3JjL2Jsb2Nrcy9tb2RhbC9fbW9kYWwuc2Nzc1wiO1xuaW1wb3J0IFwiLi9zcmMvYmxvY2tzL21vZGFsL21vZGFsLmpzXCI7XG5cbmltcG9ydCBcIi4vc3JjL2Jsb2Nrcy9zZWxlY3QvX3NlbGVjdC5zY3NzXCI7XG5pbXBvcnQgXCIuL3NyYy9ibG9ja3Mvc2VsZWN0L3NlbGVjdC5qc1wiO1xuIiwidmFyIG1hcCA9IHtcblx0XCIuL2FuaW1hbHNfbGFuZHNjYXBlX2xnLmpwZ1wiOiAzLFxuXHRcIi4vYW5pbWFsc19sYW5kc2NhcGVfbWQuanBnXCI6IDQsXG5cdFwiLi9hbmltYWxzX2xhbmRzY2FwZV9zbS5qcGdcIjogNSxcblx0XCIuL2FuaW1hbHNfbGFuZHNjYXBlX3hsLmpwZ1wiOiA2LFxuXHRcIi4vYW5pbWFsc19sYW5kc2NhcGVfeHhsLmpwZ1wiOiA3LFxuXHRcIi4vYW5pbWFsc19sYW5kc2NhcGVfeHh4bC5qcGdcIjogOCxcblx0XCIuL2Jpc2N1aXQtbG9nby1ibGFjay5zdmdcIjogOSxcblx0XCIuL2Jpc2N1aXQtbG9nby13aGl0ZS5zdmdcIjogMTAsXG5cdFwiLi9iaXNjdWl0LXN5bWJvbC5zdmdcIjogMTEsXG5cdFwiLi9jb29raWUuc3ZnXCI6IDEyLFxuXHRcIi4vZnVsbHNjcmVlbi1pbWFnZS5qcGdcIjogMTMsXG5cdFwiLi9saWdodGJveC1pbWcxLXByZXZpZXcuanBnXCI6IDE0LFxuXHRcIi4vbGlnaHRib3gtaW1nMS5qcGdcIjogMTUsXG5cdFwiLi9saWdodGJveC1pbWcyLXByZXZpZXcuanBnXCI6IDE2LFxuXHRcIi4vbGlnaHRib3gtaW1nMi5qcGdcIjogMTcsXG5cdFwiLi9saWdodGJveC1pbWczLXByZXZpZXcuanBnXCI6IDE4LFxuXHRcIi4vbGlnaHRib3gtaW1nMy5qcGdcIjogMTksXG5cdFwiLi9saWdodGJveC1pbWc0LXByZXZpZXcuanBnXCI6IDIwLFxuXHRcIi4vbGlnaHRib3gtaW1nNC5qcGdcIjogMjEsXG5cdFwiLi9sb2dvLnN2Z1wiOiAyMixcblx0XCIuL2xvZ29zLnN2Z1wiOiAyMyxcblx0XCIuL3VzZXItcGljLnN2Z1wiOiAyNFxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IDI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2FuaW1hbHNfbGFuZHNjYXBlX2xnLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9hbmltYWxzX2xhbmRzY2FwZV9tZC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvYW5pbWFsc19sYW5kc2NhcGVfc20uanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2FuaW1hbHNfbGFuZHNjYXBlX3hsLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9hbmltYWxzX2xhbmRzY2FwZV94eGwuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2FuaW1hbHNfbGFuZHNjYXBlX3h4eGwuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2Jpc2N1aXQtbG9nby1ibGFjay5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvYmlzY3VpdC1sb2dvLXdoaXRlLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9iaXNjdWl0LXN5bWJvbC5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvY29va2llLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9mdWxsc2NyZWVuLWltYWdlLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9saWdodGJveC1pbWcxLXByZXZpZXcuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2xpZ2h0Ym94LWltZzEuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2xpZ2h0Ym94LWltZzItcHJldmlldy5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvbGlnaHRib3gtaW1nMi5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvbGlnaHRib3gtaW1nMy1wcmV2aWV3LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9saWdodGJveC1pbWczLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9saWdodGJveC1pbWc0LXByZXZpZXcuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2xpZ2h0Ym94LWltZzQuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2xvZ28uc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2xvZ29zLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy91c2VyLXBpYy5zdmdcIjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJjbGFzcyBIYW1idXJnZXIge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gICAgdGhpcy5fYnRuRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0aGlzLl9jb25maWcuY2xhc3Nlcy5idG59YCk7XG4gICAgdGhpcy5fbWVudUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGhpcy5fY29uZmlnLmNsYXNzZXMubWVudX1gKTtcbiAgfVxuXG4gIGhhbmRsZUV2ZW50KGUpIHtcbiAgICBpZiAoXG4gICAgICAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZG9jLW5hdl9fbGlua1wiKSB8fFxuICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImRvYy1uYXZfX2ljb25cIikgfHxcbiAgICAgICAgZS50YXJnZXQgPT09IHRoaXMuX2J0bkVsKSAmJlxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIDwgNzY4XG4gICAgKSB7XG4gICAgICB0aGlzLl9tZW51RWwuY2xhc3NMaXN0LnRvZ2dsZShgJHt0aGlzLl9jb25maWcuY2xhc3Nlcy5hY3RpdmVNZW51fWApO1xuICAgICAgdGhpcy5fbWVudUVsLmNsYXNzTGlzdC50b2dnbGUoYCR7dGhpcy5fY29uZmlnLmNsYXNzZXMuYW5pbWF0ZUJ0bn1gKTtcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgY29uZmlnID0ge1xuICBjbGFzc2VzOiB7XG4gICAgbWVudTogXCJkb2MtbmF2XCIsXG4gICAgYnRuOiBcImRvYy1uYXZfX2ljb25cIixcbiAgICBhY3RpdmVNZW51OiBcImRvYy1uYXZfYWN0aXZlXCIsXG4gICAgYW5pbWF0ZUJ0bjogXCJkb2MtbmF2X19pY29uX2FuaW1hdGVcIixcbiAgfSxcbn07XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtjb25maWcuY2xhc3Nlcy5tZW51fWApO1xuICBjb25zdCBidG4gPSBuZXcgSGFtYnVyZ2VyKGNvbmZpZyk7XG4gIG1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGJ0bik7XG59KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImNvbnN0IHBhZ2VfX3ByZWxvYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhZ2VfX3ByZWxvYWRcIik7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxuICBcImxvYWRcIixcbiAgKCkgPT4ge1xuICAgIGlmIChwYWdlX19wcmVsb2FkKSBwYWdlX19wcmVsb2FkLmNsYXNzTGlzdC5yZW1vdmUoXCJwYWdlX19wcmVsb2FkXCIpO1xuICB9LFxuICBmYWxzZVxuKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbihlKSB7XG4gIGNvbnN0IGJhY2tUb1RvcEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLWJhY2stdG8tdG9wXCIpO1xuXG4gIGlmIChiYWNrVG9Ub3BCdG4pIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XG4gICAgICBpZiAod2luZG93LnNjcm9sbFkgPj0gNjAgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPj0gNjApIHtcbiAgICAgICAgYmFja1RvVG9wQnRuLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICB9IGVsc2UgYmFja1RvVG9wQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9KTtcblxuICAgIGJhY2tUb1RvcEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSAwOyAvLyBmb3IgU2FmYXJpXG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgfSk7XG4gIH1cbn0pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwidmFyIG1hcCA9IHtcblx0XCIuL3Nwcml0ZS5zdmdcIjogNTJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSA1MTsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvc3ByaXRlLnN2Z1wiOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIlwidXNlIHN0cmljdFwiO1xuLyogQWNjb3JkaW9uIHYyICovXG5cbmNsYXNzIEFjY29yZGlvbiB7XG4gIGNvbnN0cnVjdG9yKHNpbmdsZSA9IGZhbHNlKSB7XG4gICAgbGV0IGhlYWRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFjY29yZGlvbiAuYWNjb3JkaW9uX19oZWFkZXJcIik7XG5cbiAgICBpZiAoaGVhZGVycy5sZW5ndGggPiAwKSB7XG4gICAgICBpZiAoc2luZ2xlKSB7XG4gICAgICAgIGhlYWRlcnMuZm9yRWFjaChoZWFkZXIgPT4ge1xuICAgICAgICAgIGhlYWRlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5zaW5nbGVPcGVuKTtcbiAgICAgICAgICBoZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIHRoaXMuc2luZ2xlT3Blbik7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGVhZGVycy5mb3JFYWNoKGhlYWRlciA9PiB7XG4gICAgICAgICAgaGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLm9wZW4pO1xuICAgICAgICAgIGhlYWRlci5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5vcGVuKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyogZmlyZXMgd2hlbiB1c2VyIGNsaWNrcyBvbiBhIGhlYWRlciBhbmRcbiAgICAgJ2luaXQnIGludm9rZWQgd2l0aCBkZWZhdWx0IHZhbHVlICdmYWxzZSc6IGluaXQoKSAqL1xuICBvcGVuKGV2ZW50T2JqKSB7XG4gICAgLy8gaWYgd2UgcHJlc3MgJ0VudGVyJyBvciBpZiB3ZSBjbGljazpcbiAgICBpZiAoZXZlbnRPYmoua2V5Q29kZSA9PT0gMTMgfHwgZXZlbnRPYmoudHlwZSA9PT0gXCJjbGlja1wiKSB7XG4gICAgICBsZXQgY29udGVudCA9IHRoaXMubmV4dEVsZW1lbnRTaWJsaW5nO1xuXG4gICAgICBpZiAoY29udGVudC5zdHlsZS5tYXhIZWlnaHQpIGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gXCJcIjtcbiAgICAgIGVsc2UgY29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSBgJHtjb250ZW50LnNjcm9sbEhlaWdodH1weGA7XG5cbiAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShcImFjY29yZGlvbl9faGVhZGVyX2FjdGl2ZVwiKTtcbiAgICB9XG4gIH1cblxuICAvKiBmaXJlcyB3aGVuIHVzZXIgY2xpY2tzIG9uIGEgaGVhZGVyIGFuZFxuICAgICAnaW5pdCcgaW52b2tlZCB3aXRoICd0cnVlJzogaW5pdCh0cnVlKSAqL1xuICBzaW5nbGVPcGVuKCkge1xuICAgIC8vIHJlc2V0IHN0YXRlIG9mIGFsbCBwYW5lbHM6XG5cbiAgICAvLyAxKSBjbG9zZSBhbGwgcGFuZWxzOlxuICAgIGxldCBjb250ZW50cyA9IHRoaXMucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFjY29yZGlvbl9fY29udGVudFwiKTtcblxuICAgIGlmIChjb250ZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICBjb250ZW50cy5mb3JFYWNoKGNvbnRlbnQgPT4gKGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gXCJcIikpO1xuICAgIH1cblxuICAgIC8vIDIpIHJlc2V0IGNvbG9yIG9mIGFsbCBwYW5lbHM6XG4gICAgbGV0IGhlYWRlcnMgPSB0aGlzLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hY2NvcmRpb25fX2hlYWRlclwiKTtcbiAgICBpZiAoaGVhZGVycy5sZW5ndGggPiAwKSB7XG4gICAgICBoZWFkZXJzLmZvckVhY2goaGVhZGVyID0+IHtcbiAgICAgICAgaWYgKGhlYWRlci5jbGFzc0xpc3QuY29udGFpbnMoXCJhY2NvcmRpb25fX2hlYWRlcl9hY3RpdmVcIikpIHtcbiAgICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZShcImFjY29yZGlvbl9faGVhZGVyX2FjdGl2ZVwiKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gb3BlbiB0aGUgY3VycmVudCBwYW5lbDpcblxuICAgIC8vIDEpIGdldCBjb250ZW50IHVuZGVyIGN1cnJlbnQgaGVhZGVyXG4gICAgbGV0IGNvbnRlbnQgPSB0aGlzLm5leHRFbGVtZW50U2libGluZztcblxuICAgIGlmIChjb250ZW50LnN0eWxlLm1heEhlaWdodCkgY29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSBcIlwiO1xuICAgIGVsc2UgY29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSBgJHtjb250ZW50LnNjcm9sbEhlaWdodH1weGA7XG5cbiAgICAvLyAyKSBjaGFuZ2Ugb3BlbmVkIGhlYWRlciBjb2xvcjpcbiAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoXCJhY2NvcmRpb25fX2hlYWRlcl9hY3RpdmVcIik7XG4gIH1cbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uKCkge1xuICBuZXcgQWNjb3JkaW9uKHRydWUpO1xufSk7XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLypcbmNsYXNzIEFuaW1hbCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLnNwZWVkID0gMDtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG4gIHJ1bihzcGVlZCkge1xuICAgIHRoaXMuc3BlZWQgKz0gc3BlZWQ7XG4gICAgY29uc29sZS5sb2coYCR7dGhpcy5uYW1lfSBydW5zIHdpdGggc3BlZWQgJHt0aGlzLnNwZWVkfS5gKTtcbiAgfVxuICBzdG9wKCkge1xuICAgIHRoaXMuc3BlZWQgPSAwO1xuICAgIGNvbnNvbGUubG9nKGAke3RoaXMubmFtZX0gc3RhbmRzIHN0aWxsLmApO1xuICB9XG59XG5cbi8vIEluaGVyaXQgZnJvbSBBbmltYWwgYnkgc3BlY2lmeWluZyBcImV4dGVuZHMgQW5pbWFsXCJcbmNsYXNzIFJhYmJpdCBleHRlbmRzIEFuaW1hbCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGVhckxlbmd0aCkge1xuICAgIHN1cGVyKG5hbWUpO1xuICAgIHRoaXMuZWFyTGVuZ3RoID0gZWFyTGVuZ3RoO1xuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBjb25zb2xlLmxvZyhgJHt0aGlzLm5hbWV9IGhpZGVzIWApO1xuICB9XG5cbiAgc3RvcCgpIHtcbiAgICBzdXBlci5zdG9wKCk7XG4gICAgdGhpcy5oaWRlKCk7XG4gIH1cbn1cblxubGV0IHJhYmJpdCA9IG5ldyBSYWJiaXQoXCJXaGl0ZSBSYWJiaXRcIiwgMTApO1xuXG5jb25zb2xlLmxvZyhyYWJiaXQubmFtZSlcbmNvbnNvbGUubG9nKHJhYmJpdC5lYXJMZW5ndGgpO1xucmFiYml0LnJ1big1KTsgLy8gV2hpdGUgUmFiYml0IHJ1bnMgd2l0aCBzcGVlZCA1LlxucmFiYml0LnN0b3AoKTtcblxuY29uc29sZS5sb2coUmFiYml0Ll9fcHJvdG9fXyA9PT0gQW5pbWFsKTtcbmNvbnNvbGUubG9nKFJhYmJpdC5wcm90b3R5cGUuX19wcm90b19fID09PSBBbmltYWwucHJvdG90eXBlKVxuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbnNheUhlbGxvKCkvLyDQstGL0LTQsNGB0YIg0YLQvtC70YzQutC+ICdIZWxsbyEnLiDQn9C+0YfQtdC80YM/INCg0LDRgdGB0LrQsNC30YMg0L7QsSDRjdGC0L7QvCDQuCDQv9C+0YHQstGP0YnRkdC9INC00LDQvdC90YvQuSDQv9GA0LjQvNC10YAuXG4gXG5mdW5jdGlvbiBzYXlIZWxsbyAoKSB7XG4gICAgdmFyIGhlbGxvO1xuICAgIFxuICAgIGZ1bmN0aW9uIGhlbGxvICgpIHsgICAgICAgLy8gbGV4aWNhbCBlbnZpcm9ubWVudDogaGVsbG8gPSBmdW5jdGlvblxuICAgICAgICBjb25zb2xlLmxvZygnSGV5IScpXG4gICAgfVxuICAgIGhlbGxvKClcbn1cblxuXG5cblxuZnVuY3Rpb24gVGhlYXRyZVNlYXRzKCkge1xuICB2YXIgc2VhdHMgPSBbXTtcblxuICB0aGlzLnBsYWNlUGVyc29uID0gZnVuY3Rpb24ocGVyc29uKSB7XG4gICAgc2VhdHMucHVzaChwZXJzb24pO1xuICAgIGNvbnNvbGUubG9nKHNlYXRzKTtcbiAgfTtcbn1cblxubGV0IHQgPSBuZXcgVGhlYXRyZVNlYXRzKCk7XG50LnBsYWNlUGVyc29uKCdKb2huJyk7XG50LnBsYWNlUGVyc29uKCdCb2InKTtcblxuXG5cblxubGV0IHN0dWRlbnQgPSBuZXcgT2JqZWN0KCk7XG5cbnN0dWRlbnQuZk5hbWUgPSAnSm9obic7XG5zdHVkZW50LmxOYW1lID0gJ1NtaXRoJztcbnN0dWRlbnQuaWQgPSA1O1xuc3R1ZGVudC5tYXJrRSA9IDc2O1xuc3R1ZGVudC5tYXJrTSA9IDk5O1xuc3R1ZGVudC5tYXJrUyA9IDg3O1xuc3R1ZGVudC5jYWxjdWxhdGVBdmVyYWdlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAoc3R1ZGVudC5tYXJrRSArIHN0dWRlbnQubWFya00gKyBzdHVkZW50Lm1hcmtTKSAvIDM7XG59O1xuXG5zdHVkZW50LmRpc3BsYXlEZXRhaWxzID0gZnVuY3Rpb24oKSB7XG4gIGRvY3VtZW50LndyaXRlKCdTdHVkZW50IElEOiAnICsgc3R1ZGVudC5pZCArICc8YnI+Jyk7XG4gIGRvY3VtZW50LndyaXRlKCdOYW1lOiAnICsgc3R1ZGVudC5mTmFtZSArICcgJyArIHN0dWRlbnQubE5hbWUgKyAnPGJyPicpO1xuICBsZXQgYXZnID0gc3R1ZGVudC5jYWxjdWxhdGVBdmVyYWdlKCk7XG4gIGRvY3VtZW50LndyaXRlKCdBdmVyYWdlIG1hcmtzOiAnICsgYXZnKTtcbn1cblxuc3R1ZGVudC5kaXNwbGF5RGV0YWlscygpO1xuXG5mb3IgKGxldCBwcm9wIGluIHN0dWRlbnQpIHtcbiAgZG9jdW1lbnQud3JpdGUocHJvcCArICcgJyArIHN0dWRlbnRbcHJvcF0gKyAnPGJyPicpO1xufVxuXG4qL1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiY2xhc3MgTGlnaHRib3gge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG5cbiAgICB0aGlzLl9iYWNrZHJvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLiR7dGhpcy5fY29uZmlnLmNsYXNzZXMuYmFja2Ryb3B9YFxuICAgICk7XG4gICAgdGhpcy5fY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYC4ke3RoaXMuX2NvbmZpZy5jbGFzc2VzLmNsb3NlQnRufWBcbiAgICApO1xuXG4gICAgdGhpcy5fc2xpZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5saWdodGJveF9fZGlhbG9nXCIpO1xuICAgIHRoaXMuX2NvdW50ZXIgPSAwO1xuICAgIHRoaXMuX2Ftb3VudCA9IHRoaXMuX3NsaWRlcy5sZW5ndGg7XG5cbiAgICBjb25zdCBwcmV2QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGhpcy5fY29uZmlnLmNsYXNzZXMucHJldkJ0bn1gKTtcbiAgICBjb25zdCBuZXh0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGhpcy5fY29uZmlnLmNsYXNzZXMubmV4dEJ0bn1gKTtcbiAgICBwcmV2QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHRoaXMubmF2aWdhdGUoZSwgLTEpKTtcbiAgICBuZXh0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHRoaXMubmF2aWdhdGUoZSwgMSkpO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4gdGhpcy5vbkNsaWNrKGUpKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBlID0+IHRoaXMub25LZXlkb3duKGUpKTtcbiAgfVxuXG4gIGdldEVsZW1JbmRleChlbGVtKSB7XG4gICAgaWYgKGVsZW0uZGF0YXNldC5saWdodGJveCkgcmV0dXJuIGVsZW0uZGF0YXNldC5saWdodGJveC5tYXRjaCgvXFxkLylbMF07XG4gIH1cblxuICBuYXZpZ2F0ZShlLCBkaXJlY3Rpb24pIHtcbiAgICB0aGlzLmhpZGVEaWFsb2codGhpcy5fY3VycmVudCk7XG5cbiAgICB0aGlzLl9jb3VudGVyID0gdGhpcy5fY291bnRlciArIGRpcmVjdGlvbjtcblxuICAgIGlmIChkaXJlY3Rpb24gPT09IC0xICYmIHRoaXMuX2NvdW50ZXIgPCAwKSB0aGlzLl9jb3VudGVyID0gdGhpcy5fYW1vdW50IC0gMTtcbiAgICBpZiAoZGlyZWN0aW9uID09PSAxICYmICF0aGlzLl9zbGlkZXNbdGhpcy5fY291bnRlcl0pIHRoaXMuX2NvdW50ZXIgPSAwO1xuXG4gICAgdGhpcy5fY3VycmVudCA9IHRoaXMuX3NsaWRlc1t0aGlzLl9jb3VudGVyXTtcbiAgICB0aGlzLnNob3dEaWFsb2codGhpcy5fY3VycmVudCk7XG4gIH1cblxuICBvcGVuTGlnaHRib3goY2xpY2tlZEVsKSB7XG4gICAgY29uc3QgbmV3RGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Y2xpY2tlZEVsLmRhdGFzZXQubGlnaHRib3h9YCk7XG4gICAgY29uc3QgdmlzaWJsZURpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLiR7dGhpcy5fY29uZmlnLmNsYXNzZXMuZGlhbG9nU3RhdGVNb2RpZmllcn1gXG4gICAgKTtcblxuICAgIHRoaXMudG9nZ2xlQmFja2Ryb3AoKTtcbiAgICBpZiAodmlzaWJsZURpYWxvZykgdGhpcy5oaWRlRGlhbG9nKHZpc2libGVEaWFsb2cpO1xuXG4gICAgdGhpcy5zaG93RGlhbG9nKG5ld0RpYWxvZyk7XG4gICAgdGhpcy5fb3BlbmVkRGlhbG9nID0gbmV3RGlhbG9nO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuICB9XG5cbiAgY2xvc2VMaWdodGJveCgpIHtcbiAgICB0aGlzLnRvZ2dsZUJhY2tkcm9wKCk7XG4gICAgZGVsZXRlIHRoaXMuX29wZW5lZERpYWxvZztcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJcIjtcbiAgICByZXR1cm47XG4gIH1cblxuICBvbkNsaWNrKGUpIHtcbiAgICBjb25zdCBjbGlja2VkRWwgPSBlLnRhcmdldDtcblxuICAgIGlmIChjbGlja2VkRWwgPT09IHRoaXMuX2JhY2tkcm9wIHx8IGNsaWNrZWRFbCA9PT0gdGhpcy5fY2xvc2VCdG4pIHtcbiAgICAgIHRoaXMuY2xvc2VMaWdodGJveCgpO1xuICAgIH1cblxuICAgIGlmIChjbGlja2VkRWwuZGF0YXNldC5saWdodGJveCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5fY291bnRlciA9IE51bWJlcih0aGlzLmdldEVsZW1JbmRleChjbGlja2VkRWwpKTtcbiAgICAgIHRoaXMuX2N1cnJlbnQgPSB0aGlzLl9zbGlkZXNbdGhpcy5fY291bnRlcl07XG4gICAgICB0aGlzLm9wZW5MaWdodGJveChjbGlja2VkRWwpO1xuICAgIH1cbiAgfVxuXG4gIG9uS2V5ZG93bihlKSB7XG4gICAgaWYgKHRoaXMuX29wZW5lZERpYWxvZyAmJiBlLmNvZGUgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgIHRoaXMudG9nZ2xlQmFja2Ryb3AoKTtcbiAgICAgIGRlbGV0ZSB0aGlzLl9vcGVuZWREaWFsb2c7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJcIjtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBzaG93RGlhbG9nKGRpYWxvZykge1xuICAgIGRpYWxvZy5jbGFzc0xpc3QuYWRkKHRoaXMuX2NvbmZpZy5jbGFzc2VzLmRpYWxvZ1N0YXRlTW9kaWZpZXIpO1xuICB9XG5cbiAgaGlkZURpYWxvZyhkaWFsb2cpIHtcbiAgICBkaWFsb2cuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9jb25maWcuY2xhc3Nlcy5kaWFsb2dTdGF0ZU1vZGlmaWVyKTtcbiAgfVxuXG4gIHRvZ2dsZUJhY2tkcm9wKCkge1xuICAgIHRoaXMuX2JhY2tkcm9wLmNsYXNzTGlzdC50b2dnbGUodGhpcy5fY29uZmlnLmNsYXNzZXMuYmFja2Ryb3BTdGF0ZU1vZGlmaWVyKTtcbiAgfVxufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24oZSkge1xuICBuZXcgTGlnaHRib3goe1xuICAgIC8vIGNsYXNzIG5hbWVzIHVzZWQgaW4gSFRNTCByZWxhdGVkIHRvIExpZ2h0Ym94IHdpbmRvdyBjb21wb25lbnQ6XG4gICAgY2xhc3Nlczoge1xuICAgICAgYmFja2Ryb3A6IFwibGlnaHRib3hcIixcbiAgICAgIGJhY2tkcm9wU3RhdGVNb2RpZmllcjogXCJsaWdodGJveF92aXNpYmxlXCIsXG4gICAgICBkaWFsb2dTdGF0ZU1vZGlmaWVyOiBcImxpZ2h0Ym94X19kaWFsb2dfdmlzaWJsZVwiLFxuICAgICAgY2xvc2VCdG46IFwibGlnaHRib3hfX2Nsb3NlLWJ0blwiLFxuICAgICAgcHJldkJ0bjogXCJsaWdodGJveC1idG4tcHJldlwiLFxuICAgICAgbmV4dEJ0bjogXCJsaWdodGJveC1idG4tbmV4dFwiLFxuICAgICAgdmlkZW86IFwiZW1iZWRcIixcbiAgICB9LFxuICB9KTtcbn0pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLypcbkZJWC9UT0RPOlxuXG5JZiB5b3UnbGwgZW5jb3VudGVyIGFueSB0cm91YmxlcywgY2hhbmdlIHRoZSB2YWx1ZSBcIjE4MDBcIiBpbiB0aGUgXCJoYW5kbGVFdmVudFwiIG1ldGhvZCB0byBhIHNtYWxsZXIgdmFsdWUsIGVxdWFsIHRvIHN0YW5kYXJkIHNjcmVlbiBzaXplcyAoNzY4LCA5OTIsIC4uLikuIFxuXG5CdXQgdGhpcyBoYWNrIHNob3VsZCBiZSBmaXhlZCwgcmV3cml0ZSB0aGlzIG1ldGhvZFxuKi9cblxuY29uc3QgY29uZmlnID0ge1xuICBjbGFzc2VzOiB7XG4gICAgY29udGFpbmVyOiBcImhhbWJ1cmdlclwiLFxuICAgIG1lbnU6IFwiaGFtYnVyZ2VyX19tZW51XCIsXG4gICAgYnRuOiBcImhhbWJ1cmdlcl9fYnRuXCIsXG4gICAgYWN0aXZlTWVudTogXCJoYW1idXJnZXJfYWN0aXZlXCIsXG4gICAgYW5pbWF0ZUJ0bjogXCJoYW1idXJnZXJfX2J0bl9hbmltYXRlXCIsXG4gIH0sXG4gIG1lbnVJdGVtczogW1xuICAgIHtcbiAgICAgIHRpdGxlOiBcIkhvbWVcIixcbiAgICAgIHVybDogXCIvXCIsXG4gICAgICBjaGlsZHJlbjogW10sXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJBYm91dFwiLFxuICAgICAgdXJsOiBcIi9hYm91dFwiLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiBcIkFib3V0IFN1YiAxXCIsXG4gICAgICAgICAgdXRsOiBcIi9hYm91dC1zdWIxXCIsXG4gICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGl0bGU6IFwiQWJvdXQgU3ViIDEgU3ViIDFcIixcbiAgICAgICAgICAgICAgdXJsOiBcIi9hYm91dC1zdWIxLXN1YjFcIixcbiAgICAgICAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGl0bGU6IFwiQWJvdXQgU3ViIDEgU3ViIDJcIixcbiAgICAgICAgICAgICAgdXJsOiBcIi9hYm91dC1zdWIxLXN1YjJcIixcbiAgICAgICAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6IFwiQWJvdXQgU3ViIDJcIixcbiAgICAgICAgICB1cmw6IFwiL2Fib3V0LXN1YjJcIixcbiAgICAgICAgICBjaGlsZHJlbjogW10sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiQ29udGFjdHNcIixcbiAgICAgIHVybDogXCJodHRwczovL2dpdGh1Yi5jb20vcG9ub21hcmV2YW5kcmV5XCIsXG4gICAgICBjaGlsZHJlbjogW10sXG4gICAgfSxcbiAgXSxcbn07XG5cbi8vXG5cbmNsYXNzIEhhbWJ1cmdlciB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgICB0aGlzLl9idG5FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RoaXMuX2NvbmZpZy5jbGFzc2VzLmJ0bn1gKTtcbiAgICB0aGlzLl9jb250YWluZXJFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLiR7dGhpcy5fY29uZmlnLmNsYXNzZXMuY29udGFpbmVyfWBcbiAgICApO1xuICB9XG5cbiAgaGFuZGxlRXZlbnQoZSkge1xuICAgIC8qXG4gICAgY29uc3QgZGl2V2lkdGggPSBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGFtYnVyZ2VyXCIpKS53aWR0aDtcbiAgICBpZiAoZGl2V2lkdGggPD0gNzY4KSB7fVxuICAgICovXG4gICAgLy8gVE9ETzogZml4IHRoaXMgc2xvcHkgXCJpZlwiIGNvbmRpdGlvblxuICAgIGlmIChcbiAgICAgIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJoYW1idXJnZXJfX2xpbmtcIikgfHxcbiAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJoYW1idXJnZXJfX2J0blwiKSB8fFxuICAgICAgICBlLnRhcmdldCA9PT0gdGhpcy5fYnRuRWwpICYmXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggPCAxODAwXG4gICAgKSB7XG4gICAgICB0aGlzLl9jb250YWluZXJFbC5jbGFzc0xpc3QudG9nZ2xlKGAke3RoaXMuX2NvbmZpZy5jbGFzc2VzLmFjdGl2ZU1lbnV9YCk7XG4gICAgICB0aGlzLl9jb250YWluZXJFbC5jbGFzc0xpc3QudG9nZ2xlKGAke3RoaXMuX2NvbmZpZy5jbGFzc2VzLmFuaW1hdGVCdG59YCk7XG4gICAgfVxuICB9XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XG4gIGZ1bmN0aW9uIHBvcHVsYXRlTWVudShpdGVtcykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBpdGVtID0gaXRlbXNbaV07XG5cbiAgICAgIGNvbnN0IGxpbmtFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgbGlua0VsLmhyZWYgPSBpdGVtLnVybDtcbiAgICAgIGxpbmtFbC50ZXh0Q29udGVudCA9IGl0ZW0udGl0bGU7XG4gICAgICBsaW5rRWwuY2xhc3NMaXN0LmFkZChcImhhbWJ1cmdlcl9fbGlua1wiKTtcblxuICAgICAgbWVudS5hcHBlbmQobGlua0VsKTtcblxuICAgICAgaWYgKGl0ZW0uY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICBwb3B1bGF0ZU1lbnUoaXRlbS5jaGlsZHJlbik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y29uZmlnLmNsYXNzZXMuY29udGFpbmVyfWApO1xuICBjb25zdCBidG4gPSBuZXcgSGFtYnVyZ2VyKGNvbmZpZyk7XG4gIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYnRuKTtcblxuICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y29uZmlnLmNsYXNzZXMubWVudX1gKTtcbiAgcG9wdWxhdGVNZW51KGNvbmZpZy5tZW51SXRlbXMpO1xufSk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJjbGFzcyBCdG4ge1xuICBjb25zdHJ1Y3Rvcih7IGJ0bkVsLCBtb2RhbCB9KSB7XG4gICAgdGhpcy5fYnRuRWwgPSBidG5FbDtcbiAgICB0aGlzLl9tb2RhbCA9IG1vZGFsO1xuICB9XG5cbiAgaGFuZGxlRXZlbnQoZSkge1xuICAgIGlmIChlLnR5cGUgPT09IFwiY2xpY2tcIikge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICB0aGlzLl9tb2RhbC5vcGVuTW9kYWwodGhpcy5fbW9kYWwuZGlhbG9nKTtcbiAgICB9XG4gIH1cbn1cblxuY2xhc3MgTW9kYWwge1xuICBjb25zdHJ1Y3Rvcih7IElEcywgY2xhc3NlcyB9KSB7XG4gICAgdGhpcy5fSURzID0gSURzO1xuICAgIHRoaXMuX2NsYXNzZXMgPSBjbGFzc2VzO1xuXG4gICAgdGhpcy5fYmFja2Ryb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0aGlzLl9jbGFzc2VzLmJhY2tkcm9wfWApO1xuICAgIHRoaXMuX29wZW5lZCA9IGZhbHNlO1xuICAgIHRoaXMuX2Nsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAuJHt0aGlzLl9jbGFzc2VzLmJhY2tkcm9wfSAuJHt0aGlzLl9jbGFzc2VzLmNsb3NlQnRufWBcbiAgICApO1xuICAgIHRoaXMuZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGhpcy5fSURzLmRpYWxvZ31gKTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGUgPT4gdGhpcy5vbktleWRvd24oZSkpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHRoaXMub25DbGljayhlKSk7XG4gIH1cblxuICAvLyBjb25maXJtIG9yZGVyIG1vZGE6XG4gIG9uQ2xpY2soZSkge1xuICAgIGNvbnN0IGNsaWNrZWRFbCA9IGUudGFyZ2V0O1xuXG4gICAgaWYgKGNsaWNrZWRFbCA9PT0gdGhpcy5fYmFja2Ryb3AgfHwgY2xpY2tlZEVsID09PSB0aGlzLl9jbG9zZUJ0bikge1xuICAgICAgdGhpcy5jbG9zZU1vZGFsKHRoaXMuZGlhbG9nKTsgLy8gd2ViaW5hciBzaWdudXAgbW9kYWw6IHRoaXMuY2xvc2VNb2RhbCgpO1xuICAgIH1cbiAgfVxuXG4gIG9uS2V5ZG93bihlKSB7XG4gICAgaWYgKHRoaXMuX29wZW5lZERpYWxvZyAmJiBlLmNvZGUgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgIGNvbnN0IHZpZGVvSW5Nb2RhbCA9IHRoaXMuX29wZW5lZERpYWxvZy5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgLiR7dGhpcy5fY2xhc3Nlcy52aWRlb31gXG4gICAgICApO1xuICAgICAgaWYgKHZpZGVvSW5Nb2RhbCkgdGhpcy5zdG9wVmlkZW8odmlkZW9Jbk1vZGFsKTtcbiAgICAgIHRoaXMudG9nZ2xlQmFja2Ryb3AoKTtcbiAgICAgIHRoaXMuX29wZW5lZCA9IGZhbHNlO1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiXCI7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlQmFja2Ryb3AoKSB7XG4gICAgdGhpcy5fYmFja2Ryb3AuY2xhc3NMaXN0LnRvZ2dsZSh0aGlzLl9jbGFzc2VzLmJhY2tkcm9wU3RhdGVNb2RpZmllcik7XG4gIH1cblxuICBvcGVuTW9kYWwoZGlhbG9nKSB7XG4gICAgY29uc3QgbmV3RGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7ZGlhbG9nLmlkfWApO1xuICAgIGNvbnN0IHZpc2libGVEaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYC4ke3RoaXMuX2NsYXNzZXMuZGlhbG9nU3RhdGVNb2RpZmllcn1gXG4gICAgKTtcbiAgICB0aGlzLl9vcGVuZWQgPSAhdGhpcy5fb3BlbmVkO1xuXG4gICAgdGhpcy50b2dnbGVCYWNrZHJvcCgpO1xuXG4gICAgaWYgKHZpc2libGVEaWFsb2cpIHRoaXMuaGlkZURpYWxvZyh2aXNpYmxlRGlhbG9nKTtcblxuICAgIHRoaXMuc2hvd0RpYWxvZyhuZXdEaWFsb2cpO1xuICAgIHRoaXMuX29wZW5lZERpYWxvZyA9IG5ld0RpYWxvZztcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcbiAgfVxuXG4gIGNsb3NlTW9kYWwoZWwpIHtcbiAgICBpZiAodGhpcy5fb3BlbmVkKSB7XG4gICAgICAvLyBoYW5kbGUgdmlkZW86XG4gICAgICBjb25zdCB2aWRlb0Jsb2NrID1cbiAgICAgICAgdGhpcy5fb3BlbmVkRGlhbG9nICYmXG4gICAgICAgIHRoaXMuX29wZW5lZERpYWxvZy5xdWVyeVNlbGVjdG9yKGAuJHt0aGlzLl9jbGFzc2VzLnZpZGVvfWApO1xuICAgICAgaWYgKHZpZGVvQmxvY2spIHRoaXMuc3RvcFZpZGVvKHZpZGVvQmxvY2spO1xuICAgICAgLy9cblxuICAgICAgdGhpcy5fb3BlbmVkID0gIXRoaXMuX29wZW5lZDtcblxuICAgICAgdGhpcy50b2dnbGVCYWNrZHJvcCgpO1xuICAgICAgZGVsZXRlIHRoaXMuX29wZW5lZERpYWxvZztcbiAgICAgIHRoaXMuaGlkZURpYWxvZyhlbCk7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJcIjtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBoaWRlRGlhbG9nKGRpYWxvZykge1xuICAgIGRpYWxvZy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2NsYXNzZXMuZGlhbG9nU3RhdGVNb2RpZmllcik7XG4gIH1cbiAgc2hvd0RpYWxvZyhkaWFsb2cpIHtcbiAgICBkaWFsb2cuY2xhc3NMaXN0LmFkZCh0aGlzLl9jbGFzc2VzLmRpYWxvZ1N0YXRlTW9kaWZpZXIpO1xuICB9XG5cbiAgc3RvcFZpZGVvKGVsZW1lbnQpIHtcbiAgICAvKiBTdG9wIGFuIGlmcmFtZSBvciBIVE1MNSA8dmlkZW8+IGZyb20gcGxheWluZy5cbiAgICAgcGFyYW0geyBlbGVtZW50fSAtIHRoZSBlbGVtZW50IHRoYXQgY29udGFpbnMgdGhlIHZpZGVvICovXG4gICAgY29uc3QgaWZyYW1lID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiaWZyYW1lXCIpO1xuICAgIGNvbnN0IHZpZGVvID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwidmlkZW9cIik7XG5cbiAgICBpZiAoaWZyYW1lKSB7XG4gICAgICBjb25zdCBpZnJhbWVTcmMgPSBpZnJhbWUuc3JjO1xuICAgICAgaWZyYW1lLnNyYyA9IGlmcmFtZVNyYztcbiAgICB9XG5cbiAgICBpZiAodmlkZW8pIHZpZGVvLnBhdXNlKCk7XG4gIH1cbn1cblxuLy9cblxuY29uc3QgbW9kYWwgPSBuZXcgTW9kYWwoe1xuICBJRHM6IHtcbiAgICBkaWFsb2c6IFwidGVzdC1kaWFsb2dcIixcbiAgfSxcbiAgLyogYWxsIGNsYXNzIG5hbWVzIHVzZWQgaW4gSFRNTCByZWxhdGVkIHRvIG1vZGFsIHdpbmRvdyBjb21wb25lbnQ6ICovXG4gIGNsYXNzZXM6IHtcbiAgICBiYWNrZHJvcDogXCJtb2RhbF9iYWNrZHJvcFwiLFxuICAgIGJhY2tkcm9wU3RhdGVNb2RpZmllcjogXCJtb2RhbF92aXNpYmxlXCIsXG4gICAgZGlhbG9nU3RhdGVNb2RpZmllcjogXCJtb2RhbF9fZGlhbG9nX3Zpc2libGVcIixcbiAgICBjbG9zZUJ0bjogXCJtb2RhbF9fY2xvc2UtYnRuXCIsXG4gIH0sXG59KTtcblxuLy9cblxuY29uc3QgYnRuRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vZGFsLXRyaWdnZXJcIik7XG5cbmNvbnN0IGJ0biA9IG5ldyBCdG4oe1xuICBidG46IGJ0bkVsLFxuICBtb2RhbDogbW9kYWwsXG59KTtcblxuYnRuRWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGJ0bik7XG4iLCJjb25zdCBjb25maWcgPSB7XG4gIElEczoge1xuICAgIGNvbnRhaW5lcjogXCJzZWxlY3QtZXhhbXBsZVwiLFxuICB9LFxuICBjbGFzc2VzOiB7XG4gICAgc3lzdGVtU2VsZWN0OiBcInNlbGVjdF9fc3lzdGVtXCIsXG4gICAgb3B0aW9uczogXCJzZWxlY3RfX29wdGlvbnNcIixcbiAgICBoaWRlT3B0aW9uczogXCJzZWxlY3RfX29wdGlvbnNfaGlkZGVuXCIsXG4gICAgc2VsZWN0ZWRPcHRpb246IFwic2VsZWN0X19zZWxlY3RlZC1vcHRpb25cIixcbiAgICBhcnJvd1VwOiBcInNlbGVjdF9fYXJyb3dfdXBcIixcbiAgICBhcnJvd0Rvd246IFwic2VsZWN0X19hcnJvd19kb3duXCIsXG4gIH0sXG4gIGRlZmF1bHRWYWx1ZTogXCJTZWxlY3Qgb3B0aW9uXCIsXG4gIG9wdGlvbkxpc3Q6IFtcIkVhc3lcIiwgXCJNb2RlcmF0ZVwiLCBcIkRpZmZpY3VsdFwiXSxcbn07XG5cbi8vXG5cbmNsYXNzIFNlbGVjdCB7XG4gIGNvbnN0cnVjdG9yKHsgSURzLCBjbGFzc2VzLCBkZWZhdWx0VmFsdWUsIG9wdGlvbkxpc3QgfSkge1xuICAgIHRoaXMuX0lEcyA9IElEcztcbiAgICB0aGlzLl9jbGFzc2VzID0gY2xhc3NlcztcbiAgICB0aGlzLl9vcHRpb25MaXN0ID0gb3B0aW9uTGlzdDtcblxuICAgIHRoaXMuX2NvbnRhaW5lckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGhpcy5fSURzLmNvbnRhaW5lcn1gKTtcbiAgICB0aGlzLl9zeXN0ZW1TZWxlY3RNZW51RWwgPSB0aGlzLnN5c3RlbVNlbGVjdE1lbnVFbChkZWZhdWx0VmFsdWUpO1xuXG4gICAgdGhpcy5fc2VsZWN0ZWRFbCA9IHRoaXMuc2VsZWN0ZWRFbCh0aGlzLmNhY2hlZC52YWx1ZSB8fCBkZWZhdWx0VmFsdWUpO1xuICAgIHRoaXMuX21lbnVFbCA9IHRoaXMubWVudUVsKCk7XG5cbiAgICAvLyBSZW5kZXIgc2VsZWN0IGJveC5cbiAgICB0aGlzLl9jb250YWluZXJFbC5hcHBlbmQoXG4gICAgICB0aGlzLl9zeXN0ZW1TZWxlY3RNZW51RWwsXG4gICAgICB0aGlzLl9zZWxlY3RlZEVsLFxuICAgICAgdGhpcy5fbWVudUVsXG4gICAgKTtcbiAgICAvL1xuXG4gICAgdGhpcy5fc2VsZWN0ZWRFbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdGhpcy50b2dnbGVNZW51RWwoKTtcbiAgICB9KTtcblxuICAgIHRoaXMuX21lbnVFbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2VjdGlvbl9fb3B0aW9uXCIpKSB7XG4gICAgICAgIHRoaXMudXBkYXRlY29udGFpbmVyKGUudGFyZ2V0KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuaXNNZW51RWxIaWRkZW4oKSkgdGhpcy50b2dnbGVNZW51RWwoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldCBjYWNoZWQoKSB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2VsZWN0XCIpICE9PSBudWxsKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcIlJldHJpZXZlZCBmcm9tIGxvY2FsU3RvcmFnZVwiKTtcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2VsZWN0XCIpKVt0aGlzLl9JRHMuY29udGFpbmVyXTtcbiAgICB9IGVsc2UgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3lzdGVtU2VsZWN0TWVudUVsKGRlZmF1bHRPcHRpb24pIHtcbiAgICBjb25zdCBzZWxlY3RFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgc2VsZWN0RWwuY2xhc3NMaXN0LmFkZCh0aGlzLl9jbGFzc2VzLnN5c3RlbVNlbGVjdCk7XG5cbiAgICB0aGlzLl9vcHRpb25MaXN0LmZvckVhY2gob3B0aW9uTmFtZSA9PiB7XG4gICAgICBjb25zdCBvcHRpb25FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5cbiAgICAgIGNvbnN0IHN0ciA9IG9wdGlvbk5hbWUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHMvZywgXCItXCIpO1xuICAgICAgb3B0aW9uRWwuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgc3RyKTtcblxuICAgICAgb3B0aW9uRWwudGV4dENvbnRlbnQgPSBvcHRpb25OYW1lO1xuXG4gICAgICBpZiAob3B0aW9uTmFtZSA9PT0gZGVmYXVsdE9wdGlvbikge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkRlZmF1bHQgb3B0aW9uIHNldFwiKTtcbiAgICAgICAgb3B0aW9uRWwuc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIiwgXCJcIik7XG4gICAgICB9XG5cbiAgICAgIHNlbGVjdEVsLmFwcGVuZChvcHRpb25FbCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc2VsZWN0RWw7XG4gIH1cblxuICBzZWxlY3RlZEVsKGRlZmF1bHRPcHRpb24pIHtcbiAgICBjb25zdCBzZWxlY3RFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2VsZWN0RWwuY2xhc3NMaXN0LmFkZChgJHt0aGlzLl9jbGFzc2VzLnNlbGVjdGVkT3B0aW9ufWApO1xuICAgIHNlbGVjdEVsLmNsYXNzTGlzdC5hZGQoYCR7dGhpcy5fY2xhc3Nlcy5hcnJvd0Rvd259YCk7XG4gICAgc2VsZWN0RWwuYXBwZW5kKGRlZmF1bHRPcHRpb24pO1xuXG4gICAgcmV0dXJuIHNlbGVjdEVsO1xuICB9XG5cbiAgbWVudUVsKCkge1xuICAgIGNvbnN0IG9wdGlvbnNDb250YWluZXJFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgb3B0aW9uc0NvbnRhaW5lckVsLmNsYXNzTGlzdC5hZGQoXG4gICAgICBgJHt0aGlzLl9jbGFzc2VzLm9wdGlvbnN9YCxcbiAgICAgIGAke3RoaXMuX2NsYXNzZXMuaGlkZU9wdGlvbnN9YFxuICAgICk7XG5cbiAgICBmb3IgKGxldCBzeXN0ZW1PcHRpb25FbCBvZiB0aGlzLl9zeXN0ZW1TZWxlY3RNZW51RWwub3B0aW9ucykge1xuICAgICAgY29uc3Qgb3B0aW9uRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgb3B0aW9uRWwuY2xhc3NMaXN0LmFkZChcInNlY3Rpb25fX29wdGlvblwiKTtcbiAgICAgIG9wdGlvbkVsLnRleHRDb250ZW50ID0gc3lzdGVtT3B0aW9uRWwudGV4dENvbnRlbnQ7XG5cbiAgICAgIG9wdGlvbnNDb250YWluZXJFbC5hcHBlbmRDaGlsZChvcHRpb25FbCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9wdGlvbnNDb250YWluZXJFbDtcbiAgfVxuXG4gIHRvZ2dsZUFycm93KCkge1xuICAgIGNvbnN0IGFycm93VXBDbGFzc05hbWUgPSB0aGlzLl9jbGFzc2VzLmFycm93VXA7XG4gICAgY29uc3QgYXJyb3dEb3duQ2xhc3NOYW1lID0gdGhpcy5fY2xhc3Nlcy5hcnJvd0Rvd247XG5cbiAgICBpZiAodGhpcy5fc2VsZWN0ZWRFbC5jbGFzc0xpc3QuY29udGFpbnMoYXJyb3dVcENsYXNzTmFtZSkpIHtcbiAgICAgIHRoaXMuX3NlbGVjdGVkRWwuY2xhc3NMaXN0LnJlbW92ZShhcnJvd1VwQ2xhc3NOYW1lKTtcbiAgICAgIHRoaXMuX3NlbGVjdGVkRWwuY2xhc3NMaXN0LmFkZChhcnJvd0Rvd25DbGFzc05hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zZWxlY3RlZEVsLmNsYXNzTGlzdC5hZGQoYXJyb3dVcENsYXNzTmFtZSk7XG4gICAgICB0aGlzLl9zZWxlY3RlZEVsLmNsYXNzTGlzdC5yZW1vdmUoYXJyb3dEb3duQ2xhc3NOYW1lKTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVNZW51RWwoKSB7XG4gICAgdGhpcy5fbWVudUVsLmNsYXNzTGlzdC50b2dnbGUoYCR7dGhpcy5fY2xhc3Nlcy5oaWRlT3B0aW9uc31gKTtcbiAgICB0aGlzLnRvZ2dsZUFycm93KCk7XG4gIH1cblxuICBpc01lbnVFbEhpZGRlbigpIHtcbiAgICBpZiAodGhpcy5fbWVudUVsLmNsYXNzTGlzdC5jb250YWlucyhgJHt0aGlzLl9jbGFzc2VzLmhpZGVPcHRpb25zfWApKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVTeXN0ZW1TZWxlY3RlZEF0dHIobmV3U2VsZWN0ZWQpIHtcbiAgICBjb25zdCBjdXJyZW50bHlTZWxlY3RlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJvcHRpb246Y2hlY2tlZFwiKTtcblxuICAgIGlmIChjdXJyZW50bHlTZWxlY3RlZCkge1xuICAgICAgY3VycmVudGx5U2VsZWN0ZWQucmVtb3ZlQXR0cmlidXRlKFwic2VsZWN0ZWRcIik7XG4gICAgICBuZXdTZWxlY3RlZC5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCBcIlwiKTtcbiAgICB9XG4gIH1cblxuICBzZXRTeXN0ZW1TZWxlY3RlZEVsKGN1c3RvbVNlbGVjdGVkRWwpIHtcbiAgICBjb25zdCBzeXN0ZW1PcHRpb25FbHMgPSBBcnJheS5mcm9tKHRoaXMuX3N5c3RlbVNlbGVjdE1lbnVFbCk7XG5cbiAgICBzeXN0ZW1PcHRpb25FbHMuZm9yRWFjaCgoc3lzdGVtT3B0aW9uRWwsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoc3lzdGVtT3B0aW9uRWwudGV4dENvbnRlbnQgPT09IGN1c3RvbVNlbGVjdGVkRWwudGV4dENvbnRlbnQpIHtcbiAgICAgICAgc3lzdGVtT3B0aW9uRWxzLnNlbGVjdGVkSW5kZXggPSBpbmRleDtcbiAgICAgICAgdGhpcy51cGRhdGVTeXN0ZW1TZWxlY3RlZEF0dHIoXG4gICAgICAgICAgc3lzdGVtT3B0aW9uRWxzW3N5c3RlbU9wdGlvbkVscy5zZWxlY3RlZEluZGV4XVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2V0Q3VzdG9tU2VsZWN0ZWRFbChjdXN0b21TZWxlY3RlZEVsKSB7XG4gICAgdGhpcy5fc2VsZWN0ZWRFbC50ZXh0Q29udGVudCA9IGN1c3RvbVNlbGVjdGVkRWwudGV4dENvbnRlbnQ7XG4gIH1cblxuICB1cGRhdGVjb250YWluZXIoY3VzdG9tU2VsZWN0ZWRFbCkge1xuICAgIGNvbnN0IHN5c3RlbU9wdGlvbkVscyA9IEFycmF5LmZyb20odGhpcy5fc3lzdGVtU2VsZWN0TWVudUVsKTtcblxuICAgIHN5c3RlbU9wdGlvbkVscy5mb3JFYWNoKChzeXN0ZW1PcHRpb25FbCwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChzeXN0ZW1PcHRpb25FbC50ZXh0Q29udGVudCA9PT0gY3VzdG9tU2VsZWN0ZWRFbC50ZXh0Q29udGVudCkge1xuICAgICAgICBjb25zdCBpbmRleCA9IChzeXN0ZW1PcHRpb25FbHMuc2VsZWN0ZWRJbmRleCA9IHRoaXMuY2FjaGVkLmluZGV4KTtcblxuICAgICAgICBpZiAoc3lzdGVtT3B0aW9uRWxzW2luZGV4XSkge1xuICAgICAgICAgIHRoaXMudXBkYXRlU3lzdGVtU2VsZWN0ZWRBdHRyKHN5c3RlbU9wdGlvbkVsc1tpbmRleF0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkRWwudGV4dENvbnRlbnQgPSBjdXN0b21TZWxlY3RlZEVsLnRleHRDb250ZW50O1xuXG4gICAgICAgIHRoaXMuc2V0Q3VzdG9tU2VsZWN0ZWRFbChjdXN0b21TZWxlY3RlZEVsKTtcbiAgICAgICAgdGhpcy5zZXRTeXN0ZW1TZWxlY3RlZEVsKGN1c3RvbVNlbGVjdGVkRWwpO1xuICAgICAgICB0aGlzLmNhY2hlU2VsZWN0ZWQoaW5kZXgsIGN1c3RvbVNlbGVjdGVkRWwpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy50b2dnbGVNZW51RWwoKTtcbiAgfVxuXG4gIGNhY2hlU2VsZWN0ZWQoaW5kZXgsIHNlbGVjdGVkRWwpIHtcbiAgICAvLyBDcmVhdGUgb2JqZWN0IHRvIHN0b3JlIHNlbGVjdGVkIG9wdGlvbi4gT2JqZWN0IHN0cnVjdHVyZTpcbiAgICAvLyBzZWxlY3RlZEl0ZW0gPSB7IHNlbGVjdC1kaWZmaWN1bHR5OiB7IGluZGV4OiAyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbW9kZXJhdGUgfSB9XG4gICAgY29uc3Qgc2VsZWN0ZWRPcHRpb24gPSB7fTtcbiAgICBjb25zdCBrZXkgPSB0aGlzLl9JRHMuY29udGFpbmVyO1xuICAgIGNvbnN0IHZhbHVlID0gc2VsZWN0ZWRFbC50ZXh0Q29udGVudDtcbiAgICBzZWxlY3RlZE9wdGlvbltrZXldID0ge1xuICAgICAgaW5kZXgsXG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgfTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNlbGVjdFwiLCBKU09OLnN0cmluZ2lmeShzZWxlY3RlZE9wdGlvbikpO1xuICB9XG59XG5cbi8vXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Y29uZmlnLklEcy5jb250YWluZXJ9YCk7XG5cbiAgY29uc3QgY3VzdG9tU2VsZWN0ID0gbmV3IFNlbGVjdChjb25maWcpO1xuICBjb250YWluZXJFbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3VzdG9tU2VsZWN0KTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==