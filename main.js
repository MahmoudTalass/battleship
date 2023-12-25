/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/game-screen.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/game-screen.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.game-screen-container {
   height: 100%;
   width: 100%;
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   grid-template-rows: 1fr;
   margin-top: 2rem;
   padding: 1rem;
   flex-grow: 1;
   justify-items: center;
   position: relative;
}

.board-container {
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 1.5rem;
}

.board {
   display: grid;
   grid-template-columns: repeat(10, 2.5rem);
   grid-template-rows: repeat(10, 2.5rem);
   position: relative;
   cursor: pointer;
   background-color: #6ba2e5;
}

.grid-square {
   border: 0.4px dashed rgb(108, 103, 103);
   display: flex;
   align-items: center;
   justify-content: center;
}

.enemy-board > .grid-square {
   transition: background-color 0.1s ease-in;
}
.enemy-board > .grid-square:hover {
   background-color: rgba(0, 0, 0, 0.1);
}

.player-ship {
   background-color: #333333;
}

.icon {
   width: 0.2rem;
   height: 0.2rem;
}

.missed-attack {
   background-color: #000000;
}

.successful-attack {
   background-color: #c0392b;
}

.gameover-screen-container {
   top: 200px;
   position: absolute;
   background-color: rgba(0, 0, 0, 0.4);
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   gap: 5rem;
   padding: 3rem;
}

.game-status-message {
   font-size: 2rem;
   color: #fff;
}

.play-again-btn {
   padding: 0.8rem 1.5rem;
   font-size: 1.2rem;
   color: black;
}
`, "",{"version":3,"sources":["webpack://./src/css/game-screen.css"],"names":[],"mappings":"AAAA;GACG,YAAY;GACZ,WAAW;GACX,aAAa;GACb,qCAAqC;GACrC,uBAAuB;GACvB,gBAAgB;GAChB,aAAa;GACb,YAAY;GACZ,qBAAqB;GACrB,kBAAkB;AACrB;;AAEA;GACG,aAAa;GACb,sBAAsB;GACtB,mBAAmB;GACnB,WAAW;AACd;;AAEA;GACG,aAAa;GACb,yCAAyC;GACzC,sCAAsC;GACtC,kBAAkB;GAClB,eAAe;GACf,yBAAyB;AAC5B;;AAEA;GACG,uCAAuC;GACvC,aAAa;GACb,mBAAmB;GACnB,uBAAuB;AAC1B;;AAEA;GACG,yCAAyC;AAC5C;AACA;GACG,oCAAoC;AACvC;;AAEA;GACG,yBAAyB;AAC5B;;AAEA;GACG,aAAa;GACb,cAAc;AACjB;;AAEA;GACG,yBAAyB;AAC5B;;AAEA;GACG,yBAAyB;AAC5B;;AAEA;GACG,UAAU;GACV,kBAAkB;GAClB,oCAAoC;GACpC,aAAa;GACb,sBAAsB;GACtB,mBAAmB;GACnB,uBAAuB;GACvB,SAAS;GACT,aAAa;AAChB;;AAEA;GACG,eAAe;GACf,WAAW;AACd;;AAEA;GACG,sBAAsB;GACtB,iBAAiB;GACjB,YAAY;AACf","sourcesContent":[".game-screen-container {\n   height: 100%;\n   width: 100%;\n   display: grid;\n   grid-template-columns: repeat(2, 1fr);\n   grid-template-rows: 1fr;\n   margin-top: 2rem;\n   padding: 1rem;\n   flex-grow: 1;\n   justify-items: center;\n   position: relative;\n}\n\n.board-container {\n   display: flex;\n   flex-direction: column;\n   align-items: center;\n   gap: 1.5rem;\n}\n\n.board {\n   display: grid;\n   grid-template-columns: repeat(10, 2.5rem);\n   grid-template-rows: repeat(10, 2.5rem);\n   position: relative;\n   cursor: pointer;\n   background-color: #6ba2e5;\n}\n\n.grid-square {\n   border: 0.4px dashed rgb(108, 103, 103);\n   display: flex;\n   align-items: center;\n   justify-content: center;\n}\n\n.enemy-board > .grid-square {\n   transition: background-color 0.1s ease-in;\n}\n.enemy-board > .grid-square:hover {\n   background-color: rgba(0, 0, 0, 0.1);\n}\n\n.player-ship {\n   background-color: #333333;\n}\n\n.icon {\n   width: 0.2rem;\n   height: 0.2rem;\n}\n\n.missed-attack {\n   background-color: #000000;\n}\n\n.successful-attack {\n   background-color: #c0392b;\n}\n\n.gameover-screen-container {\n   top: 200px;\n   position: absolute;\n   background-color: rgba(0, 0, 0, 0.4);\n   display: flex;\n   flex-direction: column;\n   align-items: center;\n   justify-content: center;\n   gap: 5rem;\n   padding: 3rem;\n}\n\n.game-status-message {\n   font-size: 2rem;\n   color: #fff;\n}\n\n.play-again-btn {\n   padding: 0.8rem 1.5rem;\n   font-size: 1.2rem;\n   color: black;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/page-template.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/page-template.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./../icons/Ocean.png */ "./src/icons/Ocean.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
   min-height: 100vh;
   font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
   display: flex;
   flex-direction: column;
   background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
   background-repeat: no-repeat;
}

.main-screen {
   flex-grow: 1;
   display: flex;
   justify-content: center;
   background-color: #c2f0f5;
   background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
   background-size: cover;
}

.header {
   font-size: 3rem;
   background-color: #8fb8ea;
   text-align: center;
   padding: 2rem;
   letter-spacing: 0.8rem;
}

.footer {
   margin-top: auto;
   text-align: center;
   padding: 1rem;
   background-color: #5e7eb5;
   position: relative;
}

.background-img-attribute {
   position: absolute;
   left: 10px;
   bottom: 10px;
}

.background-img-attribute > a {
   color: #fff;
}
`, "",{"version":3,"sources":["webpack://./src/css/page-template.css"],"names":[],"mappings":"AAAA;GACG,iBAAiB;GACjB,4DAA4D;GAC5D,aAAa;GACb,sBAAsB;GACtB,yDAA2C;GAC3C,4BAA4B;AAC/B;;AAEA;GACG,YAAY;GACZ,aAAa;GACb,uBAAuB;GACvB,yBAAyB;GACzB,yDAA2C;GAC3C,sBAAsB;AACzB;;AAEA;GACG,eAAe;GACf,yBAAyB;GACzB,kBAAkB;GAClB,aAAa;GACb,sBAAsB;AACzB;;AAEA;GACG,gBAAgB;GAChB,kBAAkB;GAClB,aAAa;GACb,yBAAyB;GACzB,kBAAkB;AACrB;;AAEA;GACG,kBAAkB;GAClB,UAAU;GACV,YAAY;AACf;;AAEA;GACG,WAAW;AACd","sourcesContent":["body {\n   min-height: 100vh;\n   font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n   display: flex;\n   flex-direction: column;\n   background-image: url(./../icons/Ocean.png);\n   background-repeat: no-repeat;\n}\n\n.main-screen {\n   flex-grow: 1;\n   display: flex;\n   justify-content: center;\n   background-color: #c2f0f5;\n   background-image: url(./../icons/Ocean.png);\n   background-size: cover;\n}\n\n.header {\n   font-size: 3rem;\n   background-color: #8fb8ea;\n   text-align: center;\n   padding: 2rem;\n   letter-spacing: 0.8rem;\n}\n\n.footer {\n   margin-top: auto;\n   text-align: center;\n   padding: 1rem;\n   background-color: #5e7eb5;\n   position: relative;\n}\n\n.background-img-attribute {\n   position: absolute;\n   left: 10px;\n   bottom: 10px;\n}\n\n.background-img-attribute > a {\n   color: #fff;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/reset.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/reset.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
   box-sizing: border-box;
}

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
   margin: 0;
   padding: 0;
   border: 0;
   font-size: 100%;
   vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
   display: block;
}
body {
   line-height: 1;
}
ol,
ul {
   list-style: none;
}
blockquote,
q {
   quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
   content: "";
   content: none;
}
table {
   border-collapse: collapse;
   border-spacing: 0;
}
`, "",{"version":3,"sources":["webpack://./src/css/reset.css"],"names":[],"mappings":"AAAA;GACG,sBAAsB;AACzB;;AAEA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;GAiFG,SAAS;GACT,UAAU;GACV,SAAS;GACT,eAAe;GACf,wBAAwB;AAC3B;AACA,gDAAgD;AAChD;;;;;;;;;;;GAWG,cAAc;AACjB;AACA;GACG,cAAc;AACjB;AACA;;GAEG,gBAAgB;AACnB;AACA;;GAEG,YAAY;AACf;AACA;;;;GAIG,WAAW;GACX,aAAa;AAChB;AACA;GACG,yBAAyB;GACzB,iBAAiB;AACpB","sourcesContent":["* {\n   box-sizing: border-box;\n}\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n   margin: 0;\n   padding: 0;\n   border: 0;\n   font-size: 100%;\n   vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n   display: block;\n}\nbody {\n   line-height: 1;\n}\nol,\nul {\n   list-style: none;\n}\nblockquote,\nq {\n   quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n   content: \"\";\n   content: none;\n}\ntable {\n   border-collapse: collapse;\n   border-spacing: 0;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/start-screen.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/start-screen.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.start-screen-container {
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   gap: 2rem;
}

.direction-btn {
   padding: 1rem 1.5rem;
   font-size: 1rem;
}

.ship-placement-highlight {
   position: absolute;
   transform: translate(-50%, -50%);
   display: none;
   z-index: 1;
   width: 40px;
   height: 80px;
   border: 3px solid green;
   background-color: transparent;
   pointer-events: none;
}
`, "",{"version":3,"sources":["webpack://./src/css/start-screen.css"],"names":[],"mappings":"AAAA;GACG,aAAa;GACb,sBAAsB;GACtB,uBAAuB;GACvB,mBAAmB;GACnB,SAAS;AACZ;;AAEA;GACG,oBAAoB;GACpB,eAAe;AAClB;;AAEA;GACG,kBAAkB;GAClB,gCAAgC;GAChC,aAAa;GACb,UAAU;GACV,WAAW;GACX,YAAY;GACZ,uBAAuB;GACvB,6BAA6B;GAC7B,oBAAoB;AACvB","sourcesContent":[".start-screen-container {\n   display: flex;\n   flex-direction: column;\n   justify-content: center;\n   align-items: center;\n   gap: 2rem;\n}\n\n.direction-btn {\n   padding: 1rem 1.5rem;\n   font-size: 1rem;\n}\n\n.ship-placement-highlight {\n   position: absolute;\n   transform: translate(-50%, -50%);\n   display: none;\n   z-index: 1;\n   width: 40px;\n   height: 80px;\n   border: 3px solid green;\n   background-color: transparent;\n   pointer-events: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/game-screen.css":
/*!*********************************!*\
  !*** ./src/css/game-screen.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_game_screen_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./game-screen.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/game-screen.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_game_screen_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_game_screen_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_game_screen_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_game_screen_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/page-template.css":
/*!***********************************!*\
  !*** ./src/css/page-template.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_page_template_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./page-template.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/page-template.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_page_template_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_page_template_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_page_template_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_page_template_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/reset.css":
/*!***************************!*\
  !*** ./src/css/reset.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/reset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/start-screen.css":
/*!**********************************!*\
  !*** ./src/css/start-screen.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_start_screen_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./start-screen.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/start-screen.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_start_screen_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_start_screen_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_start_screen_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_start_screen_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/scripts/controller/GameController.js":
/*!**************************************************!*\
  !*** ./src/scripts/controller/GameController.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   disableAttackEventListeners: () => (/* binding */ disableAttackEventListeners),
/* harmony export */   enemy: () => (/* binding */ enemy),
/* harmony export */   enemyAttack: () => (/* binding */ enemyAttack),
/* harmony export */   getMatchStatus: () => (/* binding */ getMatchStatus),
/* harmony export */   initiateGame: () => (/* binding */ initiateGame),
/* harmony export */   placePlayerShip: () => (/* binding */ placePlayerShip),
/* harmony export */   player: () => (/* binding */ player),
/* harmony export */   resetPlayer: () => (/* binding */ resetPlayer),
/* harmony export */   showGameboard: () => (/* binding */ showGameboard),
/* harmony export */   switchPlayerTurns: () => (/* binding */ switchPlayerTurns)
/* harmony export */ });
/* harmony import */ var _view_renderGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/renderGame */ "./src/scripts/view/renderGame.js");
/* harmony import */ var _model_Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/Player */ "./src/scripts/model/Player.js");
/* harmony import */ var _model_RandomOperations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/RandomOperations */ "./src/scripts/model/RandomOperations.js");
/* harmony import */ var _view_eventListeners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/eventListeners */ "./src/scripts/view/eventListeners.js");
/* harmony import */ var _model_Ship__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/Ship */ "./src/scripts/model/Ship.js");






let player = new _model_Player__WEBPACK_IMPORTED_MODULE_1__["default"]();
let enemy = null;

function showGameboard(playerBoardElement, playerGrid) {
   for (let x = 0; x < 10; x++) {
      for (let y = 0; y < 10; y++) {
         const square = (0,_view_renderGame__WEBPACK_IMPORTED_MODULE_0__.renderGridSquare)(x, y);
         if (playerGrid[x][y] === null) {
            square.classList.add("water");
         } else {
            square.classList.add("ship");
            if (playerBoardElement.id == "player-board") {
               square.classList.add("player-ship");
            }
         }
         playerBoardElement.appendChild(square);
      }
   }
}

function placePlayerShip(row, col, shipSize, direction) {
   let isPlacementSuccessful = player.board.placeShip(
      new _model_Ship__WEBPACK_IMPORTED_MODULE_4__["default"](shipSize),
      direction,
      row,
      col
   );

   if (isPlacementSuccessful) {
      if (direction === "vertical") {
         for (let i = row; i < row + shipSize; i++) {
            (0,_view_renderGame__WEBPACK_IMPORTED_MODULE_0__.displayShipPlacementSelection)(i, col);
         }
      } else {
         for (let i = col; i < col + shipSize; i++) {
            (0,_view_renderGame__WEBPACK_IMPORTED_MODULE_0__.displayShipPlacementSelection)(row, i);
         }
      }
   }
   return isPlacementSuccessful;
}

function initiateGame() {
   (0,_view_renderGame__WEBPACK_IMPORTED_MODULE_0__.renderGameScreen)();

   const playerBoardElement = document.getElementById("player-board");
   const enemyBoardElement = document.getElementById("enemy-board");

   enemy = new _model_Player__WEBPACK_IMPORTED_MODULE_1__["default"]();

   _model_RandomOperations__WEBPACK_IMPORTED_MODULE_2__["default"].randomizeTurns(player, enemy);

   _model_RandomOperations__WEBPACK_IMPORTED_MODULE_2__["default"].placeAllShipsRandomly(enemy.board);

   showGameboard(playerBoardElement, player.board.grid);
   showGameboard(enemyBoardElement, enemy.board.grid);

   if (enemy.isPlayerTurn()) {
      enemyAttack();
   }
   (0,_view_eventListeners__WEBPACK_IMPORTED_MODULE_3__.loadAttackEventListeners)();
}

function enemyAttack() {
   const randomAttackInfo = _model_RandomOperations__WEBPACK_IMPORTED_MODULE_2__["default"].randomAttack(enemy, player.board);

   if (randomAttackInfo.attackMessage == "missed") {
      (0,_view_renderGame__WEBPACK_IMPORTED_MODULE_0__.markMissedAttack)(
         randomAttackInfo.row,
         randomAttackInfo.col,
         "playerBoard"
      );
   } else {
      (0,_view_renderGame__WEBPACK_IMPORTED_MODULE_0__.markSuccessfulAttack)(
         randomAttackInfo.row,
         randomAttackInfo.col,
         "playerBoard"
      );
   }
   switchPlayerTurns();
}

function resetPlayer() {
   player = new _model_Player__WEBPACK_IMPORTED_MODULE_1__["default"]();
}

function switchPlayerTurns() {
   player.switchTurn();
   enemy.switchTurn();
}

function getMatchStatus() {
   if (player.hasLostMatch()) {
      return "lost";
   } else if (enemy.hasLostMatch()) {
      return "won";
   }

   return null;
}

function disableAttackEventListeners() {
   const enemyBoard = document.getElementById("enemy-board");

   enemyBoard.removeEventListener("click", _view_eventListeners__WEBPACK_IMPORTED_MODULE_3__.attackTargetHandler);
}




/***/ }),

/***/ "./src/scripts/controller/GameLoop.js":
/*!********************************************!*\
  !*** ./src/scripts/controller/GameLoop.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameLoop)
/* harmony export */ });
/* harmony import */ var _view_eventListeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/eventListeners */ "./src/scripts/view/eventListeners.js");
/* harmony import */ var _view_renderGame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/renderGame */ "./src/scripts/view/renderGame.js");
/* harmony import */ var _GameController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameController */ "./src/scripts/controller/GameController.js");




function GameLoop(row, col) {
   if (_GameController__WEBPACK_IMPORTED_MODULE_2__.player.isPlayerTurn()) {
      let attackStatus = _GameController__WEBPACK_IMPORTED_MODULE_2__.player.attack(_GameController__WEBPACK_IMPORTED_MODULE_2__.enemy.board, row, col);

      if (attackStatus == "illegal") {
         return;
      } else if (attackStatus == "missed") {
         (0,_view_renderGame__WEBPACK_IMPORTED_MODULE_1__.markMissedAttack)(row, col, "enemyBoard");
      } else if (attackStatus == "received") {
         (0,_view_renderGame__WEBPACK_IMPORTED_MODULE_1__.markSuccessfulAttack)(row, col, "enemyBoard");
      }

      if ((0,_GameController__WEBPACK_IMPORTED_MODULE_2__.getMatchStatus)() === "lost") {
         (0,_view_renderGame__WEBPACK_IMPORTED_MODULE_1__.displayLosingScreen)();
         (0,_GameController__WEBPACK_IMPORTED_MODULE_2__.disableAttackEventListeners)();
         (0,_view_eventListeners__WEBPACK_IMPORTED_MODULE_0__.loadRestartGameEventListener)();
         return;
      } else if ((0,_GameController__WEBPACK_IMPORTED_MODULE_2__.getMatchStatus)() === "won") {
         (0,_view_renderGame__WEBPACK_IMPORTED_MODULE_1__.displayWinningScreen)();
         (0,_GameController__WEBPACK_IMPORTED_MODULE_2__.disableAttackEventListeners)();
         (0,_view_eventListeners__WEBPACK_IMPORTED_MODULE_0__.loadRestartGameEventListener)();
         return;
      }

      (0,_GameController__WEBPACK_IMPORTED_MODULE_2__.switchPlayerTurns)();
      setTimeout(_GameController__WEBPACK_IMPORTED_MODULE_2__.enemyAttack, 600);
   } else {
      return;
   }
}


/***/ }),

/***/ "./src/scripts/model/Gamebaord.js":
/*!****************************************!*\
  !*** ./src/scripts/model/Gamebaord.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gameboard)
/* harmony export */ });
class Gameboard {
   grid = [];
   missedAttackCoords = [];
   hitsLeftUntilAllSink = 0;

   constructor() {
      for (let row = 0; row < 10; row++) {
         this.grid.push([]);
      }
      for (let row = 0; row < 10; row++) {
         for (let col = 0; col < 10; col++) {
            this.grid[row].push(null);
         }
      }
   }

   placeShip(ship, direction, row, col) {
      let isValidPlacement = true;

      if (direction === "horizontal") {
         if (col >= 0 && col <= 10 - ship.getShipLength()) {
            let startingCol = col;
            for (let i = 0; i < ship.getShipLength(); i++) {
               if (this.grid[row][startingCol++] !== null) {
                  isValidPlacement = false;
               }
            }
            if (isValidPlacement) {
               startingCol = col;
               for (let i = 0; i < ship.getShipLength(); i++) {
                  this.grid[row][startingCol++] = ship;
               }
               this.hitsLeftUntilAllSink += ship.getShipLength();
               return true;
            }
         }

         return false;
      }

      if (direction === "vertical") {
         if (row >= 0 && row <= 10 - ship.getShipLength()) {
            let startingRow = row;
            for (let i = 0; i < ship.getShipLength(); i++) {
               if (this.grid[startingRow++][col] !== null) {
                  isValidPlacement = false;
               }
            }
            if (isValidPlacement) {
               startingRow = row;
               for (let i = 0; i < ship.getShipLength(); i++) {
                  this.grid[startingRow++][col] = ship;
               }
               this.hitsLeftUntilAllSink += ship.getShipLength();
               return true;
            }
         }

         return false;
      }

      return false;
   }

   receiveAttack(row, col) {
      if (this.grid[row][col] == null) {
         this.missedAttackCoords.push({
            row: row,
            col: col,
         });
         this.grid[row][col] = "X";
         return "missed";
      }

      if (this.grid[row][col] == "X") {
         return "illegal";
      }

      this.grid[row][col].hit();
      this.grid[row][col] = "X";
      this.hitsLeftUntilAllSink--;

      return "received";
   }

   haveAllSunk() {
      return this.hitsLeftUntilAllSink === 0;
   }

   getMissedAttackCoords() {
      return Object.assign(
         {},
         this.missedAttackCoords[this.missedAttackCoords.length - 1]
      );
   }
}


/***/ }),

/***/ "./src/scripts/model/Player.js":
/*!*************************************!*\
  !*** ./src/scripts/model/Player.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _Gamebaord__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gamebaord */ "./src/scripts/model/Gamebaord.js");


/* eslint-disable no-unused-vars */
class Player {
   playerTurn = false;
   board = new _Gamebaord__WEBPACK_IMPORTED_MODULE_0__["default"]();

   isPlayerTurn() {
      return this.playerTurn;
   }

   switchTurn() {
      this.playerTurn = !this.playerTurn;
   }

   attack(enemyBoard, row, col) {
      return enemyBoard.receiveAttack(row, col);
   }

   hasLostMatch() {
      return this.board.haveAllSunk();
   }
}


/***/ }),

/***/ "./src/scripts/model/RandomOperations.js":
/*!***********************************************!*\
  !*** ./src/scripts/model/RandomOperations.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RandomOperations)
/* harmony export */ });
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ "./src/scripts/model/Ship.js");


class RandomOperations {
   static randomAttack(player, enemyBoard) {
      let isSuccessfulAttackMade = false;

      while (!isSuccessfulAttackMade) {
         let { row, col } = this.#getRandomCoord();
         let attackMessage = player.attack(enemyBoard, row, col);

         if (attackMessage == "illegal") {
            continue;
         } else {
            isSuccessfulAttackMade = true;
            return { attackMessage, row, col };
         }
      }
   }

   static placeAllShipsRandomly(playerBoard) {
      const SHIP_DIRECTIONS = ["vertical", "horizontal"];

      let numOfPlacedShips = 0;

      while (numOfPlacedShips < 5) {
         const ship = new _Ship__WEBPACK_IMPORTED_MODULE_0__["default"](_Ship__WEBPACK_IMPORTED_MODULE_0__.SHIP_LENGTHS[numOfPlacedShips]);
         const randomNum = Math.random() > 0.5 ? 1 : 0;
         const shipDirection = SHIP_DIRECTIONS[randomNum];
         const { row, col } = this.#getRandomCoord();

         const isShipPlaced = playerBoard.placeShip(
            ship,
            shipDirection,
            row,
            col
         );

         if (isShipPlaced) {
            numOfPlacedShips++;
         }
      }

      return numOfPlacedShips == 5;
   }

   static #getRandomCoord() {
      return {
         row: Math.floor(Math.random() * 10),
         col: Math.floor(Math.random() * 10),
      };
   }

   static randomizeTurns(player1, player2) {
      const randomNum = Math.floor(Math.random() * 100);

      if (randomNum % 2 == 0) {
         player1.switchTurn();
      } else {
         player2.switchTurn();
      }
   }
}


/***/ }),

/***/ "./src/scripts/model/Ship.js":
/*!***********************************!*\
  !*** ./src/scripts/model/Ship.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SHIP_LENGTHS: () => (/* binding */ SHIP_LENGTHS),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const SHIP_LENGTHS = [2, 3, 3, 4, 5];

class Ship {
   hasSunk = false;
   #shipLength;
   numOfHits;

   constructor(shipLength) {
      this.#shipLength = shipLength;
      this.numOfHits = 0;
   }

   hit() {
      this.numOfHits++;
      if (this.numOfHits === this.#shipLength) {
         this.hasSunk = true;
      }
   }

   isSunk() {
      return this.hasSunk;
   }

   getShipLength() {
      return this.#shipLength;
   }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);



/***/ }),

/***/ "./src/scripts/view/eventListeners.js":
/*!********************************************!*\
  !*** ./src/scripts/view/eventListeners.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ShipPlacementEvents: () => (/* binding */ ShipPlacementEvents),
/* harmony export */   attackTargetHandler: () => (/* binding */ attackTargetHandler),
/* harmony export */   loadAttackEventListeners: () => (/* binding */ loadAttackEventListeners),
/* harmony export */   loadRestartGameEventListener: () => (/* binding */ loadRestartGameEventListener)
/* harmony export */ });
/* harmony import */ var _controller_GameController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controller/GameController */ "./src/scripts/controller/GameController.js");
/* harmony import */ var _controller_GameLoop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controller/GameLoop */ "./src/scripts/controller/GameLoop.js");
/* harmony import */ var _model_Ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/Ship */ "./src/scripts/model/Ship.js");
/* harmony import */ var _startGameScreen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startGameScreen */ "./src/scripts/view/startGameScreen.js");





function loadAttackEventListeners() {
   const enemyBoard = document.getElementById("enemy-board");
   enemyBoard.addEventListener("click", attackTargetHandler);
}

function attackTargetHandler(e) {
   const squareElement = e.target;
   const isTargetSquare = squareElement.classList.contains("grid-square");

   const col = Number(squareElement.getAttribute("data-x"));
   const row = Number(squareElement.getAttribute("data-y"));

   if (isTargetSquare) {
      (0,_controller_GameLoop__WEBPACK_IMPORTED_MODULE_1__["default"])(row, col);
   }
}

class ShipPlacementEvents {
   constructor() {
      this.shipPlacementDirection = "vertical";
      this.indexOfShipBeingProcessed = 0;
   }

   shipPlacementEventListener() {
      const shipPlacementBoard = document.getElementById(
         "ship-placement-board"
      );
      const startScreenContainer = document.getElementById(
         "start-screen-container"
      );
      const mainScreenContainer = document.getElementById("main-screen");

      shipPlacementBoard.addEventListener("click", (e) => {
         const squareElement = e.target;
         const isTargetSquare = squareElement.classList.contains("grid-square");

         if (isTargetSquare) {
            const col = Number(squareElement.getAttribute("data-x"));
            const row = Number(squareElement.getAttribute("data-y"));

            let isPlacementSuccessful = (0,_controller_GameController__WEBPACK_IMPORTED_MODULE_0__.placePlayerShip)(
               row,
               col,
               _model_Ship__WEBPACK_IMPORTED_MODULE_2__.SHIP_LENGTHS[this.indexOfShipBeingProcessed],
               this.shipPlacementDirection
            );

            if (isPlacementSuccessful) {
               this.indexOfShipBeingProcessed++;
               const shipPlacementHighlight = document.getElementById(
                  "ship-placement-highlight"
               );
               if (this.shipPlacementDirection === "horizontal") {
                  shipPlacementHighlight.style.width = `${
                     40 * _model_Ship__WEBPACK_IMPORTED_MODULE_2__.SHIP_LENGTHS[this.indexOfShipBeingProcessed]
                  }px`;
                  shipPlacementHighlight.style.height = "40px";
               } else {
                  shipPlacementHighlight.style.height = `${
                     40 * _model_Ship__WEBPACK_IMPORTED_MODULE_2__.SHIP_LENGTHS[this.indexOfShipBeingProcessed]
                  }px`;
                  shipPlacementHighlight.style.width = "40px";
               }
            }
         }
         if (this.indexOfShipBeingProcessed >= _model_Ship__WEBPACK_IMPORTED_MODULE_2__.SHIP_LENGTHS.length) {
            mainScreenContainer.removeChild(startScreenContainer);
            (0,_controller_GameController__WEBPACK_IMPORTED_MODULE_0__.initiateGame)();
         }
      });

      startScreenContainer.addEventListener("mousemove", (e) => {
         const shipPlacementHighlight = document.getElementById(
            "ship-placement-highlight"
         );
         shipPlacementHighlight.style.display = "block";

         shipPlacementHighlight.style.left = `${e.clientX}px`;
         shipPlacementHighlight.style.top = `${e.clientY}px`;
      });
   }
   changeShipDirectionEventListener() {
      const changeShipDirectionBtn = document.getElementById("direction-btn");

      changeShipDirectionBtn.addEventListener("click", () => {
         this.shipPlacementDirection =
            this.shipPlacementDirection === "vertical"
               ? "horizontal"
               : "vertical";
         changeShipDirectionBtn.textContent = this.shipPlacementDirection;
         const shipPlacementHighlight = document.getElementById(
            "ship-placement-highlight"
         );
         if (this.shipPlacementDirection === "horizontal") {
            shipPlacementHighlight.style.width = `${
               40 * _model_Ship__WEBPACK_IMPORTED_MODULE_2__.SHIP_LENGTHS[this.indexOfShipBeingProcessed]
            }px`;
            shipPlacementHighlight.style.height = "40px";
         } else {
            shipPlacementHighlight.style.height = `${
               40 * _model_Ship__WEBPACK_IMPORTED_MODULE_2__.SHIP_LENGTHS[this.indexOfShipBeingProcessed]
            }px`;
            shipPlacementHighlight.style.width = "40px";
         }
      });
   }
}

function loadRestartGameEventListener() {
   const playAgainBtn = document.getElementById("play-again-btn");

   playAgainBtn.addEventListener("click", () => {
      (0,_controller_GameController__WEBPACK_IMPORTED_MODULE_0__.resetPlayer)();
      const mainScreenContainer = document.getElementById("main-screen");
      mainScreenContainer.replaceChildren();

      (0,_startGameScreen__WEBPACK_IMPORTED_MODULE_3__.renderStartScreen)();
      const shipPlacementEvents = new ShipPlacementEvents();
      shipPlacementEvents.changeShipDirectionEventListener();
      shipPlacementEvents.shipPlacementEventListener();
   });
}




/***/ }),

/***/ "./src/scripts/view/renderGame.js":
/*!****************************************!*\
  !*** ./src/scripts/view/renderGame.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayLosingScreen: () => (/* binding */ displayLosingScreen),
/* harmony export */   displayShipPlacementSelection: () => (/* binding */ displayShipPlacementSelection),
/* harmony export */   displayWinningScreen: () => (/* binding */ displayWinningScreen),
/* harmony export */   markMissedAttack: () => (/* binding */ markMissedAttack),
/* harmony export */   markSuccessfulAttack: () => (/* binding */ markSuccessfulAttack),
/* harmony export */   renderGameScreen: () => (/* binding */ renderGameScreen),
/* harmony export */   renderGridSquare: () => (/* binding */ renderGridSquare)
/* harmony export */ });
/* harmony import */ var _icons_circle_small_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../icons/circle-small.png */ "./src/icons/circle-small.png");


function renderGameScreen() {
   const mainScreenContainer = document.getElementById("main-screen");

   const gameScreenContainer = document.createElement("div");
   gameScreenContainer.classList.add("game-screen-container");
   gameScreenContainer.id = "game-screen-container";

   const playerBoardContainer = document.createElement("div");
   playerBoardContainer.classList.add(
      "player-board-container",
      "board-container"
   );
   playerBoardContainer.id = "player-board-container";

   const playerBoard = document.createElement("div");
   playerBoard.classList.add("player-board", "board");
   playerBoard.id = "player-board";

   const playerNameTag = document.createElement("p");
   playerNameTag.classList.add("player-nametag");
   playerNameTag.id = "player-nametag";
   playerNameTag.textContent = "You";

   playerBoardContainer.appendChild(playerNameTag);
   playerBoardContainer.appendChild(playerBoard);

   const enemyBoardContainer = document.createElement("div");
   enemyBoardContainer.classList.add(
      "enemy-board-container",
      "board-container"
   );
   enemyBoardContainer.id = "enemy-board-container";

   const enemyBoard = document.createElement("div");
   enemyBoard.classList.add("enemy-board", "board");
   enemyBoard.id = "enemy-board";

   const enemyNameTag = document.createElement("p");
   enemyNameTag.classList.add("enemy-nametag");
   enemyNameTag.id = "enemy-nametag";
   enemyNameTag.textContent = "Enemy";

   enemyBoardContainer.appendChild(enemyNameTag);
   enemyBoardContainer.appendChild(enemyBoard);

   gameScreenContainer.appendChild(playerBoardContainer);
   gameScreenContainer.appendChild(enemyBoardContainer);

   mainScreenContainer.appendChild(gameScreenContainer);
}

function renderGridSquare(row, col) {
   const gridSquare = document.createElement("div");
   gridSquare.classList.add("grid-square");
   gridSquare.setAttribute("data-x", col);
   gridSquare.setAttribute("data-y", row);

   return gridSquare;
}

function markMissedAttack(row, col, board) {
   let missedSquareElement;

   if (board === "enemyBoard") {
      const enemyBoard = document.getElementById("enemy-board");
      missedSquareElement = enemyBoard.querySelector(
         `[data-x="${col}"][data-y="${row}"]`
      );
   } else {
      const playerBoard = document.getElementById("player-board");
      missedSquareElement = playerBoard.querySelector(
         `[data-x="${col}"][data-y="${row}"]`
      );
   }

   let img = new Image();
   img.src = _icons_circle_small_png__WEBPACK_IMPORTED_MODULE_0__;

   missedSquareElement.appendChild(img);
   missedSquareElement.classList.add("missed-attack");
}

function markSuccessfulAttack(row, col, board) {
   let shipSquareElement;

   if (board === "enemyBoard") {
      const enemyBoard = document.getElementById("enemy-board");
      shipSquareElement = enemyBoard.querySelector(
         `[data-x="${col}"][data-y="${row}"]`
      );
   } else {
      const playerBoard = document.getElementById("player-board");
      shipSquareElement = playerBoard.querySelector(
         `[data-x="${col}"][data-y="${row}"]`
      );
   }

   shipSquareElement.classList.add("successful-attack");
}

function displayWinningScreen() {
   const mainScreenContainer = document.getElementById("main-screen");

   const gameOverScreenContainer = document.createElement("div");
   gameOverScreenContainer.classList.add("gameover-screen-container");

   const winningMessage = document.createElement("p");
   winningMessage.classList.add("game-status-message");
   winningMessage.textContent = "You have won!";

   const playAgainBtn = document.createElement("button");
   playAgainBtn.classList.add("play-again-btn");
   playAgainBtn.id = "play-again-btn";
   playAgainBtn.textContent = "Play again";

   gameOverScreenContainer.appendChild(winningMessage);
   gameOverScreenContainer.appendChild(playAgainBtn);

   mainScreenContainer.appendChild(gameOverScreenContainer);
}

function displayLosingScreen() {
   const mainScreenContainer = document.getElementById("main-screen");

   const gameOverScreenContainer = document.createElement("div");
   gameOverScreenContainer.classList.add("gameover-screen-container");

   const losingMessage = document.createElement("p");
   losingMessage.classList.add("game-status-message");
   losingMessage.textContent = "You lose";

   const playAgainBtn = document.createElement("button");
   playAgainBtn.classList.add("play-again-btn");
   playAgainBtn.id = "play-again-btn";
   playAgainBtn.textContent = "Play again";

   gameOverScreenContainer.appendChild(losingMessage);
   gameOverScreenContainer.appendChild(playAgainBtn);

   mainScreenContainer.appendChild(gameOverScreenContainer);
}

function displayShipPlacementSelection(row, col) {
   const shipPlacementBoard = document.getElementById("ship-placement-board");
   let gridSquare = shipPlacementBoard.querySelector(
      `[data-x="${col}"][data-y="${row}"]`
   );

   gridSquare.classList.add("player-ship");
}




/***/ }),

/***/ "./src/scripts/view/startGameScreen.js":
/*!*********************************************!*\
  !*** ./src/scripts/view/startGameScreen.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderStartScreen: () => (/* binding */ renderStartScreen)
/* harmony export */ });
/* harmony import */ var _renderGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderGame */ "./src/scripts/view/renderGame.js");


function renderStartScreen() {
   const mainScreenContainer = document.getElementById("main-screen");

   const startScreenContainer = document.createElement("div");
   startScreenContainer.classList.add("start-screen-container");
   startScreenContainer.id = "start-screen-container";

   const grid = document.createElement("div");
   grid.classList.add("board");
   grid.classList.add("ship-placement-board");
   grid.id = "ship-placement-board";

   for (let x = 0; x < 10; x++) {
      for (let y = 0; y < 10; y++) {
         grid.appendChild((0,_renderGame__WEBPACK_IMPORTED_MODULE_0__.renderGridSquare)(x, y));
      }
   }

   const shipPlacementHighlight = document.createElement("div");
   shipPlacementHighlight.classList.add("ship-placement-highlight");
   shipPlacementHighlight.id = "ship-placement-highlight";

   const directionBtn = document.createElement("button");
   directionBtn.classList.add("direction-btn");
   directionBtn.id = "direction-btn";
   directionBtn.textContent = "vertical";

   startScreenContainer.appendChild(shipPlacementHighlight);
   startScreenContainer.appendChild(directionBtn);
   startScreenContainer.appendChild(grid);
   mainScreenContainer.appendChild(startScreenContainer);
}




/***/ }),

/***/ "./src/icons/Ocean.png":
/*!*****************************!*\
  !*** ./src/icons/Ocean.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f7d244f3489359f42c3f.png";

/***/ }),

/***/ "./src/icons/circle-small.png":
/*!************************************!*\
  !*** ./src/icons/circle-small.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "83bd7308c12e894a4d97.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/reset.css */ "./src/css/reset.css");
/* harmony import */ var _css_page_template_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/page-template.css */ "./src/css/page-template.css");
/* harmony import */ var _css_start_screen_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/start-screen.css */ "./src/css/start-screen.css");
/* harmony import */ var _css_game_screen_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/game-screen.css */ "./src/css/game-screen.css");
/* harmony import */ var _scripts_controller_GameController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/controller/GameController */ "./src/scripts/controller/GameController.js");
/* harmony import */ var _scripts_view_eventListeners__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/view/eventListeners */ "./src/scripts/view/eventListeners.js");
/* harmony import */ var _scripts_view_startGameScreen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scripts/view/startGameScreen */ "./src/scripts/view/startGameScreen.js");
/* eslint-disable no-unused-vars */








(0,_scripts_view_startGameScreen__WEBPACK_IMPORTED_MODULE_6__.renderStartScreen)();
const shipPlacementEvents = new _scripts_view_eventListeners__WEBPACK_IMPORTED_MODULE_5__.ShipPlacementEvents();
shipPlacementEvents.changeShipDirectionEventListener();
shipPlacementEvents.shipPlacementEventListener();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywwRkFBMEYsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsaURBQWlELGtCQUFrQixpQkFBaUIsbUJBQW1CLDJDQUEyQyw2QkFBNkIsc0JBQXNCLG1CQUFtQixrQkFBa0IsMkJBQTJCLHdCQUF3QixHQUFHLHNCQUFzQixtQkFBbUIsNEJBQTRCLHlCQUF5QixpQkFBaUIsR0FBRyxZQUFZLG1CQUFtQiwrQ0FBK0MsNENBQTRDLHdCQUF3QixxQkFBcUIsK0JBQStCLEdBQUcsa0JBQWtCLDZDQUE2QyxtQkFBbUIseUJBQXlCLDZCQUE2QixHQUFHLGlDQUFpQywrQ0FBK0MsR0FBRyxxQ0FBcUMsMENBQTBDLEdBQUcsa0JBQWtCLCtCQUErQixHQUFHLFdBQVcsbUJBQW1CLG9CQUFvQixHQUFHLG9CQUFvQiwrQkFBK0IsR0FBRyx3QkFBd0IsK0JBQStCLEdBQUcsZ0NBQWdDLGdCQUFnQix3QkFBd0IsMENBQTBDLG1CQUFtQiw0QkFBNEIseUJBQXlCLDZCQUE2QixlQUFlLG1CQUFtQixHQUFHLDBCQUEwQixxQkFBcUIsaUJBQWlCLEdBQUcscUJBQXFCLDRCQUE0Qix1QkFBdUIsa0JBQWtCLEdBQUcscUJBQXFCO0FBQzN3RTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RnZDO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLGtIQUF1QztBQUNuRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLG1DQUFtQztBQUM5RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsbUNBQW1DO0FBQzlEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLDRGQUE0RixZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSwrQkFBK0IsdUJBQXVCLG9FQUFvRSxtQkFBbUIsNEJBQTRCLGlEQUFpRCxrQ0FBa0MsR0FBRyxrQkFBa0Isa0JBQWtCLG1CQUFtQiw2QkFBNkIsK0JBQStCLGlEQUFpRCw0QkFBNEIsR0FBRyxhQUFhLHFCQUFxQiwrQkFBK0Isd0JBQXdCLG1CQUFtQiw0QkFBNEIsR0FBRyxhQUFhLHNCQUFzQix3QkFBd0IsbUJBQW1CLCtCQUErQix3QkFBd0IsR0FBRywrQkFBK0Isd0JBQXdCLGdCQUFnQixrQkFBa0IsR0FBRyxtQ0FBbUMsaUJBQWlCLEdBQUcscUJBQXFCO0FBQzkwQztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckR2QztBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sb0ZBQW9GLFlBQVksT0FBTyxxRkFBcUYsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sWUFBWSxnQkFBZ0IsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sVUFBVSxLQUFLLFFBQVEsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsNkJBQTZCLDRCQUE0QixHQUFHLGdrQkFBZ2tCLGVBQWUsZ0JBQWdCLGVBQWUscUJBQXFCLDhCQUE4QixHQUFHLHdKQUF3SixvQkFBb0IsR0FBRyxRQUFRLG9CQUFvQixHQUFHLFdBQVcsc0JBQXNCLEdBQUcsa0JBQWtCLGtCQUFrQixHQUFHLDZEQUE2RCxtQkFBbUIsbUJBQW1CLEdBQUcsU0FBUywrQkFBK0IsdUJBQXVCLEdBQUcscUJBQXFCO0FBQ2xtRDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEl2QztBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sMkZBQTJGLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxtREFBbUQsbUJBQW1CLDRCQUE0Qiw2QkFBNkIseUJBQXlCLGVBQWUsR0FBRyxvQkFBb0IsMEJBQTBCLHFCQUFxQixHQUFHLCtCQUErQix3QkFBd0Isc0NBQXNDLG1CQUFtQixnQkFBZ0IsaUJBQWlCLGtCQUFrQiw2QkFBNkIsbUNBQW1DLDBCQUEwQixHQUFHLHFCQUFxQjtBQUN4ekI7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUMvQjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3pCYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQTRHO0FBQzVHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsNEZBQU87Ozs7QUFJc0Q7QUFDOUUsT0FBTyxpRUFBZSw0RkFBTyxJQUFJLDRGQUFPLFVBQVUsNEZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI3RSxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUE4RztBQUM5RztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLDhGQUFPOzs7O0FBSXdEO0FBQ2hGLE9BQU8saUVBQWUsOEZBQU8sSUFBSSw4RkFBTyxVQUFVLDhGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCN0UsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBc0c7QUFDdEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUlnRDtBQUN4RSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjdFLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQTZHO0FBQzdHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsNkZBQU87Ozs7QUFJdUQ7QUFDL0UsT0FBTyxpRUFBZSw2RkFBTyxJQUFJLDZGQUFPLFVBQVUsNkZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQNEI7QUFDUztBQUNvQjtBQUl6QjtBQUNDOztBQUVqQyxpQkFBaUIscURBQU07QUFDdkI7O0FBRUE7QUFDQSxtQkFBbUIsUUFBUTtBQUMzQixzQkFBc0IsUUFBUTtBQUM5Qix3QkFBd0Isa0VBQWdCO0FBQ3hDO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVLG1EQUFJO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJCQUEyQixvQkFBb0I7QUFDL0MsWUFBWSwrRUFBNkI7QUFDekM7QUFDQSxRQUFRO0FBQ1IsMkJBQTJCLG9CQUFvQjtBQUMvQyxZQUFZLCtFQUE2QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRyxrRUFBZ0I7O0FBRW5CO0FBQ0E7O0FBRUEsZUFBZSxxREFBTTs7QUFFckIsR0FBRywrREFBZ0I7O0FBRW5CLEdBQUcsK0RBQWdCOztBQUVuQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsOEVBQXdCO0FBQzNCOztBQUVBO0FBQ0EsNEJBQTRCLCtEQUFnQjs7QUFFNUM7QUFDQSxNQUFNLGtFQUFnQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxNQUFNLHNFQUFvQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixxREFBTTtBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsMkNBQTJDLHFFQUFtQjtBQUM5RDs7QUFhRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcklvRTtBQU0xQztBQVFGOztBQUVYO0FBQ2YsT0FBTyxtREFBTTtBQUNiLHlCQUF5QixtREFBTSxRQUFRLGtEQUFLOztBQUU1QztBQUNBO0FBQ0EsUUFBUTtBQUNSLFNBQVMsa0VBQWdCO0FBQ3pCLFFBQVE7QUFDUixTQUFTLHNFQUFvQjtBQUM3Qjs7QUFFQSxVQUFVLCtEQUFjO0FBQ3hCLFNBQVMscUVBQW1CO0FBQzVCLFNBQVMsNEVBQTJCO0FBQ3BDLFNBQVMsa0ZBQTRCO0FBQ3JDO0FBQ0EsUUFBUSxTQUFTLCtEQUFjO0FBQy9CLFNBQVMsc0VBQW9CO0FBQzdCLFNBQVMsNEVBQTJCO0FBQ3BDLFNBQVMsa0ZBQTRCO0FBQ3JDO0FBQ0E7O0FBRUEsTUFBTSxrRUFBaUI7QUFDdkIsaUJBQWlCLHdEQUFXO0FBQzVCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzdDZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QixVQUFVO0FBQ2xDO0FBQ0E7QUFDQSx3QkFBd0IsVUFBVTtBQUNsQywyQkFBMkIsVUFBVTtBQUNyQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwwQkFBMEI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDBCQUEwQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsMEJBQTBCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiwwQkFBMEI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRm9DOztBQUVwQztBQUNlO0FBQ2Y7QUFDQSxlQUFlLGtEQUFTOztBQUV4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCNEM7O0FBRTdCO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBLGVBQWUsV0FBVztBQUMxQjs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsMEJBQTBCLDZDQUFJLENBQUMsK0NBQVk7QUFDM0M7QUFDQTtBQUNBLGlCQUFpQixXQUFXOztBQUU1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsSUFBSSxFQUFDO0FBQ0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QmM7QUFDUTtBQUNEO0FBQ1M7O0FBRXREO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSxnRUFBUTtBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsd0NBQXdDLDJFQUFlO0FBQ3ZEO0FBQ0E7QUFDQSxlQUFlLHFEQUFZO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIscURBQVk7QUFDdEMsbUJBQW1CO0FBQ25CO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsMEJBQTBCLHFEQUFZO0FBQ3RDLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxxREFBWTtBQUMzRDtBQUNBLFlBQVksd0VBQVk7QUFDeEI7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0RBQWdELFVBQVU7QUFDMUQsK0NBQStDLFVBQVU7QUFDekQsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHFEQUFZO0FBQ2hDLGFBQWE7QUFDYjtBQUNBLFdBQVc7QUFDWDtBQUNBLG9CQUFvQixxREFBWTtBQUNoQyxhQUFhO0FBQ2I7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLHVFQUFXO0FBQ2pCO0FBQ0E7O0FBRUEsTUFBTSxtRUFBaUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQU9FOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekkrQzs7QUFFakQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLElBQUksYUFBYSxJQUFJO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxxQkFBcUIsSUFBSSxhQUFhLElBQUk7QUFDMUM7QUFDQTs7QUFFQTtBQUNBLGFBQWEsb0RBQUc7O0FBRWhCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixJQUFJLGFBQWEsSUFBSTtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EscUJBQXFCLElBQUksYUFBYSxJQUFJO0FBQzFDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsSUFBSSxhQUFhLElBQUk7QUFDdkM7O0FBRUE7QUFDQTs7QUFVRTs7Ozs7Ozs7Ozs7Ozs7OztBQ2pLOEM7O0FBRWhEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixRQUFRO0FBQzNCLHNCQUFzQixRQUFRO0FBQzlCLDBCQUEwQiw2REFBZ0I7QUFDMUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFNkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ25DN0I7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDeUI7QUFDUTtBQUNEO0FBQ0Q7QUFDb0M7QUFDQztBQUNEOztBQUVuRSxnRkFBaUI7QUFDakIsZ0NBQWdDLDZFQUFtQjtBQUNuRDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jc3MvZ2FtZS1zY3JlZW4uY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY3NzL3BhZ2UtdGVtcGxhdGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY3NzL3Jlc2V0LmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Nzcy9zdGFydC1zY3JlZW4uY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Nzcy9nYW1lLXNjcmVlbi5jc3M/NDRjYSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Nzcy9wYWdlLXRlbXBsYXRlLmNzcz85ZTM3Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY3NzL3Jlc2V0LmNzcz8xNTJiIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY3NzL3N0YXJ0LXNjcmVlbi5jc3M/OTY2OSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9jb250cm9sbGVyL0dhbWVDb250cm9sbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9jb250cm9sbGVyL0dhbWVMb29wLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9tb2RlbC9HYW1lYmFvcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL21vZGVsL1BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvbW9kZWwvUmFuZG9tT3BlcmF0aW9ucy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvbW9kZWwvU2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvdmlldy9ldmVudExpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvdmlldy9yZW5kZXJHYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy92aWV3L3N0YXJ0R2FtZVNjcmVlbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5nYW1lLXNjcmVlbi1jb250YWluZXIge1xuICAgaGVpZ2h0OiAxMDAlO1xuICAgd2lkdGg6IDEwMCU7XG4gICBkaXNwbGF5OiBncmlkO1xuICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgIHBhZGRpbmc6IDFyZW07XG4gICBmbGV4LWdyb3c6IDE7XG4gICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5ib2FyZC1jb250YWluZXIge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgZ2FwOiAxLjVyZW07XG59XG5cbi5ib2FyZCB7XG4gICBkaXNwbGF5OiBncmlkO1xuICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDIuNXJlbSk7XG4gICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMi41cmVtKTtcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgIGN1cnNvcjogcG9pbnRlcjtcbiAgIGJhY2tncm91bmQtY29sb3I6ICM2YmEyZTU7XG59XG5cbi5ncmlkLXNxdWFyZSB7XG4gICBib3JkZXI6IDAuNHB4IGRhc2hlZCByZ2IoMTA4LCAxMDMsIDEwMyk7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZW5lbXktYm9hcmQgPiAuZ3JpZC1zcXVhcmUge1xuICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjFzIGVhc2UtaW47XG59XG4uZW5lbXktYm9hcmQgPiAuZ3JpZC1zcXVhcmU6aG92ZXIge1xuICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4ucGxheWVyLXNoaXAge1xuICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcbn1cblxuLmljb24ge1xuICAgd2lkdGg6IDAuMnJlbTtcbiAgIGhlaWdodDogMC4ycmVtO1xufVxuXG4ubWlzc2VkLWF0dGFjayB7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xufVxuXG4uc3VjY2Vzc2Z1bC1hdHRhY2sge1xuICAgYmFja2dyb3VuZC1jb2xvcjogI2MwMzkyYjtcbn1cblxuLmdhbWVvdmVyLXNjcmVlbi1jb250YWluZXIge1xuICAgdG9wOiAyMDBweDtcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgZ2FwOiA1cmVtO1xuICAgcGFkZGluZzogM3JlbTtcbn1cblxuLmdhbWUtc3RhdHVzLW1lc3NhZ2Uge1xuICAgZm9udC1zaXplOiAycmVtO1xuICAgY29sb3I6ICNmZmY7XG59XG5cbi5wbGF5LWFnYWluLWJ0biB7XG4gICBwYWRkaW5nOiAwLjhyZW0gMS41cmVtO1xuICAgZm9udC1zaXplOiAxLjJyZW07XG4gICBjb2xvcjogYmxhY2s7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvZ2FtZS1zY3JlZW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0dBQ0csWUFBWTtHQUNaLFdBQVc7R0FDWCxhQUFhO0dBQ2IscUNBQXFDO0dBQ3JDLHVCQUF1QjtHQUN2QixnQkFBZ0I7R0FDaEIsYUFBYTtHQUNiLFlBQVk7R0FDWixxQkFBcUI7R0FDckIsa0JBQWtCO0FBQ3JCOztBQUVBO0dBQ0csYUFBYTtHQUNiLHNCQUFzQjtHQUN0QixtQkFBbUI7R0FDbkIsV0FBVztBQUNkOztBQUVBO0dBQ0csYUFBYTtHQUNiLHlDQUF5QztHQUN6QyxzQ0FBc0M7R0FDdEMsa0JBQWtCO0dBQ2xCLGVBQWU7R0FDZix5QkFBeUI7QUFDNUI7O0FBRUE7R0FDRyx1Q0FBdUM7R0FDdkMsYUFBYTtHQUNiLG1CQUFtQjtHQUNuQix1QkFBdUI7QUFDMUI7O0FBRUE7R0FDRyx5Q0FBeUM7QUFDNUM7QUFDQTtHQUNHLG9DQUFvQztBQUN2Qzs7QUFFQTtHQUNHLHlCQUF5QjtBQUM1Qjs7QUFFQTtHQUNHLGFBQWE7R0FDYixjQUFjO0FBQ2pCOztBQUVBO0dBQ0cseUJBQXlCO0FBQzVCOztBQUVBO0dBQ0cseUJBQXlCO0FBQzVCOztBQUVBO0dBQ0csVUFBVTtHQUNWLGtCQUFrQjtHQUNsQixvQ0FBb0M7R0FDcEMsYUFBYTtHQUNiLHNCQUFzQjtHQUN0QixtQkFBbUI7R0FDbkIsdUJBQXVCO0dBQ3ZCLFNBQVM7R0FDVCxhQUFhO0FBQ2hCOztBQUVBO0dBQ0csZUFBZTtHQUNmLFdBQVc7QUFDZDs7QUFFQTtHQUNHLHNCQUFzQjtHQUN0QixpQkFBaUI7R0FDakIsWUFBWTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5nYW1lLXNjcmVlbi1jb250YWluZXIge1xcbiAgIGhlaWdodDogMTAwJTtcXG4gICB3aWR0aDogMTAwJTtcXG4gICBkaXNwbGF5OiBncmlkO1xcbiAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICAgbWFyZ2luLXRvcDogMnJlbTtcXG4gICBwYWRkaW5nOiAxcmVtO1xcbiAgIGZsZXgtZ3JvdzogMTtcXG4gICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uYm9hcmQtY29udGFpbmVyIHtcXG4gICBkaXNwbGF5OiBmbGV4O1xcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICBnYXA6IDEuNXJlbTtcXG59XFxuXFxuLmJvYXJkIHtcXG4gICBkaXNwbGF5OiBncmlkO1xcbiAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAyLjVyZW0pO1xcbiAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAyLjVyZW0pO1xcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgYmFja2dyb3VuZC1jb2xvcjogIzZiYTJlNTtcXG59XFxuXFxuLmdyaWQtc3F1YXJlIHtcXG4gICBib3JkZXI6IDAuNHB4IGRhc2hlZCByZ2IoMTA4LCAxMDMsIDEwMyk7XFxuICAgZGlzcGxheTogZmxleDtcXG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZW5lbXktYm9hcmQgPiAuZ3JpZC1zcXVhcmUge1xcbiAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xcyBlYXNlLWluO1xcbn1cXG4uZW5lbXktYm9hcmQgPiAuZ3JpZC1zcXVhcmU6aG92ZXIge1xcbiAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxuXFxuLnBsYXllci1zaGlwIHtcXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xcbn1cXG5cXG4uaWNvbiB7XFxuICAgd2lkdGg6IDAuMnJlbTtcXG4gICBoZWlnaHQ6IDAuMnJlbTtcXG59XFxuXFxuLm1pc3NlZC1hdHRhY2sge1xcbiAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxufVxcblxcbi5zdWNjZXNzZnVsLWF0dGFjayB7XFxuICAgYmFja2dyb3VuZC1jb2xvcjogI2MwMzkyYjtcXG59XFxuXFxuLmdhbWVvdmVyLXNjcmVlbi1jb250YWluZXIge1xcbiAgIHRvcDogMjAwcHg7XFxuICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gICBkaXNwbGF5OiBmbGV4O1xcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICBnYXA6IDVyZW07XFxuICAgcGFkZGluZzogM3JlbTtcXG59XFxuXFxuLmdhbWUtc3RhdHVzLW1lc3NhZ2Uge1xcbiAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLnBsYXktYWdhaW4tYnRuIHtcXG4gICBwYWRkaW5nOiAwLjhyZW0gMS41cmVtO1xcbiAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgIGNvbG9yOiBibGFjaztcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLy4uL2ljb25zL09jZWFuLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XG4gICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4ubWFpbi1zY3JlZW4ge1xuICAgZmxleC1ncm93OiAxO1xuICAgZGlzcGxheTogZmxleDtcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgYmFja2dyb3VuZC1jb2xvcjogI2MyZjBmNTtcbiAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5oZWFkZXIge1xuICAgZm9udC1zaXplOiAzcmVtO1xuICAgYmFja2dyb3VuZC1jb2xvcjogIzhmYjhlYTtcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgIHBhZGRpbmc6IDJyZW07XG4gICBsZXR0ZXItc3BhY2luZzogMC44cmVtO1xufVxuXG4uZm9vdGVyIHtcbiAgIG1hcmdpbi10b3A6IGF1dG87XG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICBwYWRkaW5nOiAxcmVtO1xuICAgYmFja2dyb3VuZC1jb2xvcjogIzVlN2ViNTtcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmJhY2tncm91bmQtaW1nLWF0dHJpYnV0ZSB7XG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICBsZWZ0OiAxMHB4O1xuICAgYm90dG9tOiAxMHB4O1xufVxuXG4uYmFja2dyb3VuZC1pbWctYXR0cmlidXRlID4gYSB7XG4gICBjb2xvcjogI2ZmZjtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9wYWdlLXRlbXBsYXRlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtHQUNHLGlCQUFpQjtHQUNqQiw0REFBNEQ7R0FDNUQsYUFBYTtHQUNiLHNCQUFzQjtHQUN0Qix5REFBMkM7R0FDM0MsNEJBQTRCO0FBQy9COztBQUVBO0dBQ0csWUFBWTtHQUNaLGFBQWE7R0FDYix1QkFBdUI7R0FDdkIseUJBQXlCO0dBQ3pCLHlEQUEyQztHQUMzQyxzQkFBc0I7QUFDekI7O0FBRUE7R0FDRyxlQUFlO0dBQ2YseUJBQXlCO0dBQ3pCLGtCQUFrQjtHQUNsQixhQUFhO0dBQ2Isc0JBQXNCO0FBQ3pCOztBQUVBO0dBQ0csZ0JBQWdCO0dBQ2hCLGtCQUFrQjtHQUNsQixhQUFhO0dBQ2IseUJBQXlCO0dBQ3pCLGtCQUFrQjtBQUNyQjs7QUFFQTtHQUNHLGtCQUFrQjtHQUNsQixVQUFVO0dBQ1YsWUFBWTtBQUNmOztBQUVBO0dBQ0csV0FBVztBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgIGZvbnQtZmFtaWx5OiBcXFwiU2Vnb2UgVUlcXFwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG4gICBkaXNwbGF5OiBmbGV4O1xcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vLi4vaWNvbnMvT2NlYW4ucG5nKTtcXG4gICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG4ubWFpbi1zY3JlZW4ge1xcbiAgIGZsZXgtZ3JvdzogMTtcXG4gICBkaXNwbGF5OiBmbGV4O1xcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgIGJhY2tncm91bmQtY29sb3I6ICNjMmYwZjU7XFxuICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vLi4vaWNvbnMvT2NlYW4ucG5nKTtcXG4gICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICBmb250LXNpemU6IDNyZW07XFxuICAgYmFja2dyb3VuZC1jb2xvcjogIzhmYjhlYTtcXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgcGFkZGluZzogMnJlbTtcXG4gICBsZXR0ZXItc3BhY2luZzogMC44cmVtO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICBwYWRkaW5nOiAxcmVtO1xcbiAgIGJhY2tncm91bmQtY29sb3I6ICM1ZTdlYjU7XFxuICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uYmFja2dyb3VuZC1pbWctYXR0cmlidXRlIHtcXG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgbGVmdDogMTBweDtcXG4gICBib3R0b206IDEwcHg7XFxufVxcblxcbi5iYWNrZ3JvdW5kLWltZy1hdHRyaWJ1dGUgPiBhIHtcXG4gICBjb2xvcjogI2ZmZjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwsXG5ib2R5LFxuZGl2LFxuc3BhbixcbmFwcGxldCxcbm9iamVjdCxcbmlmcmFtZSxcbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNixcbnAsXG5ibG9ja3F1b3RlLFxucHJlLFxuYSxcbmFiYnIsXG5hY3JvbnltLFxuYWRkcmVzcyxcbmJpZyxcbmNpdGUsXG5jb2RlLFxuZGVsLFxuZGZuLFxuZW0sXG5pbWcsXG5pbnMsXG5rYmQsXG5xLFxucyxcbnNhbXAsXG5zbWFsbCxcbnN0cmlrZSxcbnN0cm9uZyxcbnN1YixcbnN1cCxcbnR0LFxudmFyLFxuYixcbnUsXG5pLFxuY2VudGVyLFxuZGwsXG5kdCxcbmRkLFxub2wsXG51bCxcbmxpLFxuZmllbGRzZXQsXG5mb3JtLFxubGFiZWwsXG5sZWdlbmQsXG50YWJsZSxcbmNhcHRpb24sXG50Ym9keSxcbnRmb290LFxudGhlYWQsXG50cixcbnRoLFxudGQsXG5hcnRpY2xlLFxuYXNpZGUsXG5jYW52YXMsXG5kZXRhaWxzLFxuZW1iZWQsXG5maWd1cmUsXG5maWdjYXB0aW9uLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbm91dHB1dCxcbnJ1YnksXG5zZWN0aW9uLFxuc3VtbWFyeSxcbnRpbWUsXG5tYXJrLFxuYXVkaW8sXG52aWRlbyB7XG4gICBtYXJnaW46IDA7XG4gICBwYWRkaW5nOiAwO1xuICAgYm9yZGVyOiAwO1xuICAgZm9udC1zaXplOiAxMDAlO1xuICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuYXJ0aWNsZSxcbmFzaWRlLFxuZGV0YWlscyxcbmZpZ2NhcHRpb24sXG5maWd1cmUsXG5mb290ZXIsXG5oZWFkZXIsXG5oZ3JvdXAsXG5tZW51LFxubmF2LFxuc2VjdGlvbiB7XG4gICBkaXNwbGF5OiBibG9jaztcbn1cbmJvZHkge1xuICAgbGluZS1oZWlnaHQ6IDE7XG59XG5vbCxcbnVsIHtcbiAgIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5ibG9ja3F1b3RlLFxucSB7XG4gICBxdW90ZXM6IG5vbmU7XG59XG5ibG9ja3F1b3RlOmJlZm9yZSxcbmJsb2NrcXVvdGU6YWZ0ZXIsXG5xOmJlZm9yZSxcbnE6YWZ0ZXIge1xuICAgY29udGVudDogXCJcIjtcbiAgIGNvbnRlbnQ6IG5vbmU7XG59XG50YWJsZSB7XG4gICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgYm9yZGVyLXNwYWNpbmc6IDA7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvcmVzZXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0dBQ0csc0JBQXNCO0FBQ3pCOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpRkcsU0FBUztHQUNULFVBQVU7R0FDVixTQUFTO0dBQ1QsZUFBZTtHQUNmLHdCQUF3QjtBQUMzQjtBQUNBLGdEQUFnRDtBQUNoRDs7Ozs7Ozs7Ozs7R0FXRyxjQUFjO0FBQ2pCO0FBQ0E7R0FDRyxjQUFjO0FBQ2pCO0FBQ0E7O0dBRUcsZ0JBQWdCO0FBQ25CO0FBQ0E7O0dBRUcsWUFBWTtBQUNmO0FBQ0E7Ozs7R0FJRyxXQUFXO0dBQ1gsYUFBYTtBQUNoQjtBQUNBO0dBQ0cseUJBQXlCO0dBQ3pCLGlCQUFpQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sLFxcbmJvZHksXFxuZGl2LFxcbnNwYW4sXFxuYXBwbGV0LFxcbm9iamVjdCxcXG5pZnJhbWUsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG5ibG9ja3F1b3RlLFxcbnByZSxcXG5hLFxcbmFiYnIsXFxuYWNyb255bSxcXG5hZGRyZXNzLFxcbmJpZyxcXG5jaXRlLFxcbmNvZGUsXFxuZGVsLFxcbmRmbixcXG5lbSxcXG5pbWcsXFxuaW5zLFxcbmtiZCxcXG5xLFxcbnMsXFxuc2FtcCxcXG5zbWFsbCxcXG5zdHJpa2UsXFxuc3Ryb25nLFxcbnN1YixcXG5zdXAsXFxudHQsXFxudmFyLFxcbmIsXFxudSxcXG5pLFxcbmNlbnRlcixcXG5kbCxcXG5kdCxcXG5kZCxcXG5vbCxcXG51bCxcXG5saSxcXG5maWVsZHNldCxcXG5mb3JtLFxcbmxhYmVsLFxcbmxlZ2VuZCxcXG50YWJsZSxcXG5jYXB0aW9uLFxcbnRib2R5LFxcbnRmb290LFxcbnRoZWFkLFxcbnRyLFxcbnRoLFxcbnRkLFxcbmFydGljbGUsXFxuYXNpZGUsXFxuY2FudmFzLFxcbmRldGFpbHMsXFxuZW1iZWQsXFxuZmlndXJlLFxcbmZpZ2NhcHRpb24sXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxub3V0cHV0LFxcbnJ1YnksXFxuc2VjdGlvbixcXG5zdW1tYXJ5LFxcbnRpbWUsXFxubWFyayxcXG5hdWRpbyxcXG52aWRlbyB7XFxuICAgbWFyZ2luOiAwO1xcbiAgIHBhZGRpbmc6IDA7XFxuICAgYm9yZGVyOiAwO1xcbiAgIGZvbnQtc2l6ZTogMTAwJTtcXG4gICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICAgZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcbiAgIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCxcXG51bCB7XFxuICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSxcXG5xIHtcXG4gICBxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLFxcbmJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsXFxucTphZnRlciB7XFxuICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgY29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcbiAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnN0YXJ0LXNjcmVlbi1jb250YWluZXIge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICBnYXA6IDJyZW07XG59XG5cbi5kaXJlY3Rpb24tYnRuIHtcbiAgIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xuICAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4uc2hpcC1wbGFjZW1lbnQtaGlnaGxpZ2h0IHtcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgZGlzcGxheTogbm9uZTtcbiAgIHotaW5kZXg6IDE7XG4gICB3aWR0aDogNDBweDtcbiAgIGhlaWdodDogODBweDtcbiAgIGJvcmRlcjogM3B4IHNvbGlkIGdyZWVuO1xuICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zdGFydC1zY3JlZW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0dBQ0csYUFBYTtHQUNiLHNCQUFzQjtHQUN0Qix1QkFBdUI7R0FDdkIsbUJBQW1CO0dBQ25CLFNBQVM7QUFDWjs7QUFFQTtHQUNHLG9CQUFvQjtHQUNwQixlQUFlO0FBQ2xCOztBQUVBO0dBQ0csa0JBQWtCO0dBQ2xCLGdDQUFnQztHQUNoQyxhQUFhO0dBQ2IsVUFBVTtHQUNWLFdBQVc7R0FDWCxZQUFZO0dBQ1osdUJBQXVCO0dBQ3ZCLDZCQUE2QjtHQUM3QixvQkFBb0I7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnN0YXJ0LXNjcmVlbi1jb250YWluZXIge1xcbiAgIGRpc3BsYXk6IGZsZXg7XFxuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgIGdhcDogMnJlbTtcXG59XFxuXFxuLmRpcmVjdGlvbi1idG4ge1xcbiAgIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xcbiAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLnNoaXAtcGxhY2VtZW50LWhpZ2hsaWdodCB7XFxuICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgIGRpc3BsYXk6IG5vbmU7XFxuICAgei1pbmRleDogMTtcXG4gICB3aWR0aDogNDBweDtcXG4gICBoZWlnaHQ6IDgwcHg7XFxuICAgYm9yZGVyOiAzcHggc29saWQgZ3JlZW47XFxuICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYW1lLXNjcmVlbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dhbWUtc2NyZWVuLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wYWdlLXRlbXBsYXRlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcGFnZS10ZW1wbGF0ZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3RhcnQtc2NyZWVuLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3RhcnQtc2NyZWVuLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHtcbiAgIHJlbmRlckdyaWRTcXVhcmUsXG4gICByZW5kZXJHYW1lU2NyZWVuLFxuICAgbWFya01pc3NlZEF0dGFjayxcbiAgIG1hcmtTdWNjZXNzZnVsQXR0YWNrLFxuICAgZGlzcGxheVNoaXBQbGFjZW1lbnRTZWxlY3Rpb24sXG59IGZyb20gXCIuLi92aWV3L3JlbmRlckdhbWVcIjtcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4uL21vZGVsL1BsYXllclwiO1xuaW1wb3J0IFJhbmRvbU9wZXJhdGlvbnMgZnJvbSBcIi4uL21vZGVsL1JhbmRvbU9wZXJhdGlvbnNcIjtcbmltcG9ydCB7XG4gICBhdHRhY2tUYXJnZXRIYW5kbGVyLFxuICAgbG9hZEF0dGFja0V2ZW50TGlzdGVuZXJzLFxufSBmcm9tIFwiLi4vdmlldy9ldmVudExpc3RlbmVyc1wiO1xuaW1wb3J0IFNoaXAgZnJvbSBcIi4uL21vZGVsL1NoaXBcIjtcblxubGV0IHBsYXllciA9IG5ldyBQbGF5ZXIoKTtcbmxldCBlbmVteSA9IG51bGw7XG5cbmZ1bmN0aW9uIHNob3dHYW1lYm9hcmQocGxheWVyQm9hcmRFbGVtZW50LCBwbGF5ZXJHcmlkKSB7XG4gICBmb3IgKGxldCB4ID0gMDsgeCA8IDEwOyB4KyspIHtcbiAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgMTA7IHkrKykge1xuICAgICAgICAgY29uc3Qgc3F1YXJlID0gcmVuZGVyR3JpZFNxdWFyZSh4LCB5KTtcbiAgICAgICAgIGlmIChwbGF5ZXJHcmlkW3hdW3ldID09PSBudWxsKSB7XG4gICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcIndhdGVyXCIpO1xuICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICAgICAgICAgIGlmIChwbGF5ZXJCb2FyZEVsZW1lbnQuaWQgPT0gXCJwbGF5ZXItYm9hcmRcIikge1xuICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXItc2hpcFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgICAgIHBsYXllckJvYXJkRWxlbWVudC5hcHBlbmRDaGlsZChzcXVhcmUpO1xuICAgICAgfVxuICAgfVxufVxuXG5mdW5jdGlvbiBwbGFjZVBsYXllclNoaXAocm93LCBjb2wsIHNoaXBTaXplLCBkaXJlY3Rpb24pIHtcbiAgIGxldCBpc1BsYWNlbWVudFN1Y2Nlc3NmdWwgPSBwbGF5ZXIuYm9hcmQucGxhY2VTaGlwKFxuICAgICAgbmV3IFNoaXAoc2hpcFNpemUpLFxuICAgICAgZGlyZWN0aW9uLFxuICAgICAgcm93LFxuICAgICAgY29sXG4gICApO1xuXG4gICBpZiAoaXNQbGFjZW1lbnRTdWNjZXNzZnVsKSB7XG4gICAgICBpZiAoZGlyZWN0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgICAgIGZvciAobGV0IGkgPSByb3c7IGkgPCByb3cgKyBzaGlwU2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICBkaXNwbGF5U2hpcFBsYWNlbWVudFNlbGVjdGlvbihpLCBjb2wpO1xuICAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgIGZvciAobGV0IGkgPSBjb2w7IGkgPCBjb2wgKyBzaGlwU2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICBkaXNwbGF5U2hpcFBsYWNlbWVudFNlbGVjdGlvbihyb3csIGkpO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgfVxuICAgcmV0dXJuIGlzUGxhY2VtZW50U3VjY2Vzc2Z1bDtcbn1cblxuZnVuY3Rpb24gaW5pdGlhdGVHYW1lKCkge1xuICAgcmVuZGVyR2FtZVNjcmVlbigpO1xuXG4gICBjb25zdCBwbGF5ZXJCb2FyZEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllci1ib2FyZFwiKTtcbiAgIGNvbnN0IGVuZW15Qm9hcmRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbmVteS1ib2FyZFwiKTtcblxuICAgZW5lbXkgPSBuZXcgUGxheWVyKCk7XG5cbiAgIFJhbmRvbU9wZXJhdGlvbnMucmFuZG9taXplVHVybnMocGxheWVyLCBlbmVteSk7XG5cbiAgIFJhbmRvbU9wZXJhdGlvbnMucGxhY2VBbGxTaGlwc1JhbmRvbWx5KGVuZW15LmJvYXJkKTtcblxuICAgc2hvd0dhbWVib2FyZChwbGF5ZXJCb2FyZEVsZW1lbnQsIHBsYXllci5ib2FyZC5ncmlkKTtcbiAgIHNob3dHYW1lYm9hcmQoZW5lbXlCb2FyZEVsZW1lbnQsIGVuZW15LmJvYXJkLmdyaWQpO1xuXG4gICBpZiAoZW5lbXkuaXNQbGF5ZXJUdXJuKCkpIHtcbiAgICAgIGVuZW15QXR0YWNrKCk7XG4gICB9XG4gICBsb2FkQXR0YWNrRXZlbnRMaXN0ZW5lcnMoKTtcbn1cblxuZnVuY3Rpb24gZW5lbXlBdHRhY2soKSB7XG4gICBjb25zdCByYW5kb21BdHRhY2tJbmZvID0gUmFuZG9tT3BlcmF0aW9ucy5yYW5kb21BdHRhY2soZW5lbXksIHBsYXllci5ib2FyZCk7XG5cbiAgIGlmIChyYW5kb21BdHRhY2tJbmZvLmF0dGFja01lc3NhZ2UgPT0gXCJtaXNzZWRcIikge1xuICAgICAgbWFya01pc3NlZEF0dGFjayhcbiAgICAgICAgIHJhbmRvbUF0dGFja0luZm8ucm93LFxuICAgICAgICAgcmFuZG9tQXR0YWNrSW5mby5jb2wsXG4gICAgICAgICBcInBsYXllckJvYXJkXCJcbiAgICAgICk7XG4gICB9IGVsc2Uge1xuICAgICAgbWFya1N1Y2Nlc3NmdWxBdHRhY2soXG4gICAgICAgICByYW5kb21BdHRhY2tJbmZvLnJvdyxcbiAgICAgICAgIHJhbmRvbUF0dGFja0luZm8uY29sLFxuICAgICAgICAgXCJwbGF5ZXJCb2FyZFwiXG4gICAgICApO1xuICAgfVxuICAgc3dpdGNoUGxheWVyVHVybnMoKTtcbn1cblxuZnVuY3Rpb24gcmVzZXRQbGF5ZXIoKSB7XG4gICBwbGF5ZXIgPSBuZXcgUGxheWVyKCk7XG59XG5cbmZ1bmN0aW9uIHN3aXRjaFBsYXllclR1cm5zKCkge1xuICAgcGxheWVyLnN3aXRjaFR1cm4oKTtcbiAgIGVuZW15LnN3aXRjaFR1cm4oKTtcbn1cblxuZnVuY3Rpb24gZ2V0TWF0Y2hTdGF0dXMoKSB7XG4gICBpZiAocGxheWVyLmhhc0xvc3RNYXRjaCgpKSB7XG4gICAgICByZXR1cm4gXCJsb3N0XCI7XG4gICB9IGVsc2UgaWYgKGVuZW15Lmhhc0xvc3RNYXRjaCgpKSB7XG4gICAgICByZXR1cm4gXCJ3b25cIjtcbiAgIH1cblxuICAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIGRpc2FibGVBdHRhY2tFdmVudExpc3RlbmVycygpIHtcbiAgIGNvbnN0IGVuZW15Qm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVuZW15LWJvYXJkXCIpO1xuXG4gICBlbmVteUJvYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhdHRhY2tUYXJnZXRIYW5kbGVyKTtcbn1cblxuZXhwb3J0IHtcbiAgIHNob3dHYW1lYm9hcmQsXG4gICBpbml0aWF0ZUdhbWUsXG4gICBwbGF5ZXIsXG4gICBlbmVteSxcbiAgIGVuZW15QXR0YWNrLFxuICAgc3dpdGNoUGxheWVyVHVybnMsXG4gICBnZXRNYXRjaFN0YXR1cyxcbiAgIGRpc2FibGVBdHRhY2tFdmVudExpc3RlbmVycyxcbiAgIHBsYWNlUGxheWVyU2hpcCxcbiAgIHJlc2V0UGxheWVyLFxufTtcbiIsImltcG9ydCB7IGxvYWRSZXN0YXJ0R2FtZUV2ZW50TGlzdGVuZXIgfSBmcm9tIFwiLi4vdmlldy9ldmVudExpc3RlbmVyc1wiO1xuaW1wb3J0IHtcbiAgIGRpc3BsYXlMb3NpbmdTY3JlZW4sXG4gICBkaXNwbGF5V2lubmluZ1NjcmVlbixcbiAgIG1hcmtNaXNzZWRBdHRhY2ssXG4gICBtYXJrU3VjY2Vzc2Z1bEF0dGFjayxcbn0gZnJvbSBcIi4uL3ZpZXcvcmVuZGVyR2FtZVwiO1xuaW1wb3J0IHtcbiAgIHBsYXllcixcbiAgIGVuZW15LFxuICAgZW5lbXlBdHRhY2ssXG4gICBzd2l0Y2hQbGF5ZXJUdXJucyxcbiAgIGdldE1hdGNoU3RhdHVzLFxuICAgZGlzYWJsZUF0dGFja0V2ZW50TGlzdGVuZXJzLFxufSBmcm9tIFwiLi9HYW1lQ29udHJvbGxlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lTG9vcChyb3csIGNvbCkge1xuICAgaWYgKHBsYXllci5pc1BsYXllclR1cm4oKSkge1xuICAgICAgbGV0IGF0dGFja1N0YXR1cyA9IHBsYXllci5hdHRhY2soZW5lbXkuYm9hcmQsIHJvdywgY29sKTtcblxuICAgICAgaWYgKGF0dGFja1N0YXR1cyA9PSBcImlsbGVnYWxcIikge1xuICAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIGlmIChhdHRhY2tTdGF0dXMgPT0gXCJtaXNzZWRcIikge1xuICAgICAgICAgbWFya01pc3NlZEF0dGFjayhyb3csIGNvbCwgXCJlbmVteUJvYXJkXCIpO1xuICAgICAgfSBlbHNlIGlmIChhdHRhY2tTdGF0dXMgPT0gXCJyZWNlaXZlZFwiKSB7XG4gICAgICAgICBtYXJrU3VjY2Vzc2Z1bEF0dGFjayhyb3csIGNvbCwgXCJlbmVteUJvYXJkXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZ2V0TWF0Y2hTdGF0dXMoKSA9PT0gXCJsb3N0XCIpIHtcbiAgICAgICAgIGRpc3BsYXlMb3NpbmdTY3JlZW4oKTtcbiAgICAgICAgIGRpc2FibGVBdHRhY2tFdmVudExpc3RlbmVycygpO1xuICAgICAgICAgbG9hZFJlc3RhcnRHYW1lRXZlbnRMaXN0ZW5lcigpO1xuICAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIGlmIChnZXRNYXRjaFN0YXR1cygpID09PSBcIndvblwiKSB7XG4gICAgICAgICBkaXNwbGF5V2lubmluZ1NjcmVlbigpO1xuICAgICAgICAgZGlzYWJsZUF0dGFja0V2ZW50TGlzdGVuZXJzKCk7XG4gICAgICAgICBsb2FkUmVzdGFydEdhbWVFdmVudExpc3RlbmVyKCk7XG4gICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHN3aXRjaFBsYXllclR1cm5zKCk7XG4gICAgICBzZXRUaW1lb3V0KGVuZW15QXR0YWNrLCA2MDApO1xuICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVib2FyZCB7XG4gICBncmlkID0gW107XG4gICBtaXNzZWRBdHRhY2tDb29yZHMgPSBbXTtcbiAgIGhpdHNMZWZ0VW50aWxBbGxTaW5rID0gMDtcblxuICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxMDsgcm93KyspIHtcbiAgICAgICAgIHRoaXMuZ3JpZC5wdXNoKFtdKTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDEwOyByb3crKykge1xuICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgMTA7IGNvbCsrKSB7XG4gICAgICAgICAgICB0aGlzLmdyaWRbcm93XS5wdXNoKG51bGwpO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgfVxuXG4gICBwbGFjZVNoaXAoc2hpcCwgZGlyZWN0aW9uLCByb3csIGNvbCkge1xuICAgICAgbGV0IGlzVmFsaWRQbGFjZW1lbnQgPSB0cnVlO1xuXG4gICAgICBpZiAoZGlyZWN0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgICAgaWYgKGNvbCA+PSAwICYmIGNvbCA8PSAxMCAtIHNoaXAuZ2V0U2hpcExlbmd0aCgpKSB7XG4gICAgICAgICAgICBsZXQgc3RhcnRpbmdDb2wgPSBjb2w7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuZ2V0U2hpcExlbmd0aCgpOyBpKyspIHtcbiAgICAgICAgICAgICAgIGlmICh0aGlzLmdyaWRbcm93XVtzdGFydGluZ0NvbCsrXSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgaXNWYWxpZFBsYWNlbWVudCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzVmFsaWRQbGFjZW1lbnQpIHtcbiAgICAgICAgICAgICAgIHN0YXJ0aW5nQ29sID0gY29sO1xuICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmdldFNoaXBMZW5ndGgoKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmdyaWRbcm93XVtzdGFydGluZ0NvbCsrXSA9IHNoaXA7XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICB0aGlzLmhpdHNMZWZ0VW50aWxBbGxTaW5rICs9IHNoaXAuZ2V0U2hpcExlbmd0aCgpO1xuICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICB9XG5cbiAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgICBpZiAocm93ID49IDAgJiYgcm93IDw9IDEwIC0gc2hpcC5nZXRTaGlwTGVuZ3RoKCkpIHtcbiAgICAgICAgICAgIGxldCBzdGFydGluZ1JvdyA9IHJvdztcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5nZXRTaGlwTGVuZ3RoKCk7IGkrKykge1xuICAgICAgICAgICAgICAgaWYgKHRoaXMuZ3JpZFtzdGFydGluZ1JvdysrXVtjb2xdICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICBpc1ZhbGlkUGxhY2VtZW50ID0gZmFsc2U7XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNWYWxpZFBsYWNlbWVudCkge1xuICAgICAgICAgICAgICAgc3RhcnRpbmdSb3cgPSByb3c7XG4gICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuZ2V0U2hpcExlbmd0aCgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuZ3JpZFtzdGFydGluZ1JvdysrXVtjb2xdID0gc2hpcDtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIHRoaXMuaGl0c0xlZnRVbnRpbEFsbFNpbmsgKz0gc2hpcC5nZXRTaGlwTGVuZ3RoKCk7XG4gICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIH1cblxuICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICB9XG5cbiAgIHJlY2VpdmVBdHRhY2socm93LCBjb2wpIHtcbiAgICAgIGlmICh0aGlzLmdyaWRbcm93XVtjb2xdID09IG51bGwpIHtcbiAgICAgICAgIHRoaXMubWlzc2VkQXR0YWNrQ29vcmRzLnB1c2goe1xuICAgICAgICAgICAgcm93OiByb3csXG4gICAgICAgICAgICBjb2w6IGNvbCxcbiAgICAgICAgIH0pO1xuICAgICAgICAgdGhpcy5ncmlkW3Jvd11bY29sXSA9IFwiWFwiO1xuICAgICAgICAgcmV0dXJuIFwibWlzc2VkXCI7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmdyaWRbcm93XVtjb2xdID09IFwiWFwiKSB7XG4gICAgICAgICByZXR1cm4gXCJpbGxlZ2FsXCI7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZ3JpZFtyb3ddW2NvbF0uaGl0KCk7XG4gICAgICB0aGlzLmdyaWRbcm93XVtjb2xdID0gXCJYXCI7XG4gICAgICB0aGlzLmhpdHNMZWZ0VW50aWxBbGxTaW5rLS07XG5cbiAgICAgIHJldHVybiBcInJlY2VpdmVkXCI7XG4gICB9XG5cbiAgIGhhdmVBbGxTdW5rKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaGl0c0xlZnRVbnRpbEFsbFNpbmsgPT09IDA7XG4gICB9XG5cbiAgIGdldE1pc3NlZEF0dGFja0Nvb3JkcygpIHtcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKFxuICAgICAgICAge30sXG4gICAgICAgICB0aGlzLm1pc3NlZEF0dGFja0Nvb3Jkc1t0aGlzLm1pc3NlZEF0dGFja0Nvb3Jkcy5sZW5ndGggLSAxXVxuICAgICAgKTtcbiAgIH1cbn1cbiIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vR2FtZWJhb3JkXCI7XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICAgcGxheWVyVHVybiA9IGZhbHNlO1xuICAgYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG5cbiAgIGlzUGxheWVyVHVybigpIHtcbiAgICAgIHJldHVybiB0aGlzLnBsYXllclR1cm47XG4gICB9XG5cbiAgIHN3aXRjaFR1cm4oKSB7XG4gICAgICB0aGlzLnBsYXllclR1cm4gPSAhdGhpcy5wbGF5ZXJUdXJuO1xuICAgfVxuXG4gICBhdHRhY2soZW5lbXlCb2FyZCwgcm93LCBjb2wpIHtcbiAgICAgIHJldHVybiBlbmVteUJvYXJkLnJlY2VpdmVBdHRhY2socm93LCBjb2wpO1xuICAgfVxuXG4gICBoYXNMb3N0TWF0Y2goKSB7XG4gICAgICByZXR1cm4gdGhpcy5ib2FyZC5oYXZlQWxsU3VuaygpO1xuICAgfVxufVxuIiwiaW1wb3J0IFNoaXAsIHsgU0hJUF9MRU5HVEhTIH0gZnJvbSBcIi4vU2hpcFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYW5kb21PcGVyYXRpb25zIHtcbiAgIHN0YXRpYyByYW5kb21BdHRhY2socGxheWVyLCBlbmVteUJvYXJkKSB7XG4gICAgICBsZXQgaXNTdWNjZXNzZnVsQXR0YWNrTWFkZSA9IGZhbHNlO1xuXG4gICAgICB3aGlsZSAoIWlzU3VjY2Vzc2Z1bEF0dGFja01hZGUpIHtcbiAgICAgICAgIGxldCB7IHJvdywgY29sIH0gPSB0aGlzLiNnZXRSYW5kb21Db29yZCgpO1xuICAgICAgICAgbGV0IGF0dGFja01lc3NhZ2UgPSBwbGF5ZXIuYXR0YWNrKGVuZW15Qm9hcmQsIHJvdywgY29sKTtcblxuICAgICAgICAgaWYgKGF0dGFja01lc3NhZ2UgPT0gXCJpbGxlZ2FsXCIpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlzU3VjY2Vzc2Z1bEF0dGFja01hZGUgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHsgYXR0YWNrTWVzc2FnZSwgcm93LCBjb2wgfTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgIH1cblxuICAgc3RhdGljIHBsYWNlQWxsU2hpcHNSYW5kb21seShwbGF5ZXJCb2FyZCkge1xuICAgICAgY29uc3QgU0hJUF9ESVJFQ1RJT05TID0gW1widmVydGljYWxcIiwgXCJob3Jpem9udGFsXCJdO1xuXG4gICAgICBsZXQgbnVtT2ZQbGFjZWRTaGlwcyA9IDA7XG5cbiAgICAgIHdoaWxlIChudW1PZlBsYWNlZFNoaXBzIDwgNSkge1xuICAgICAgICAgY29uc3Qgc2hpcCA9IG5ldyBTaGlwKFNISVBfTEVOR1RIU1tudW1PZlBsYWNlZFNoaXBzXSk7XG4gICAgICAgICBjb25zdCByYW5kb21OdW0gPSBNYXRoLnJhbmRvbSgpID4gMC41ID8gMSA6IDA7XG4gICAgICAgICBjb25zdCBzaGlwRGlyZWN0aW9uID0gU0hJUF9ESVJFQ1RJT05TW3JhbmRvbU51bV07XG4gICAgICAgICBjb25zdCB7IHJvdywgY29sIH0gPSB0aGlzLiNnZXRSYW5kb21Db29yZCgpO1xuXG4gICAgICAgICBjb25zdCBpc1NoaXBQbGFjZWQgPSBwbGF5ZXJCb2FyZC5wbGFjZVNoaXAoXG4gICAgICAgICAgICBzaGlwLFxuICAgICAgICAgICAgc2hpcERpcmVjdGlvbixcbiAgICAgICAgICAgIHJvdyxcbiAgICAgICAgICAgIGNvbFxuICAgICAgICAgKTtcblxuICAgICAgICAgaWYgKGlzU2hpcFBsYWNlZCkge1xuICAgICAgICAgICAgbnVtT2ZQbGFjZWRTaGlwcysrO1xuICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVtT2ZQbGFjZWRTaGlwcyA9PSA1O1xuICAgfVxuXG4gICBzdGF0aWMgI2dldFJhbmRvbUNvb3JkKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgIHJvdzogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApLFxuICAgICAgICAgY29sOiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCksXG4gICAgICB9O1xuICAgfVxuXG4gICBzdGF0aWMgcmFuZG9taXplVHVybnMocGxheWVyMSwgcGxheWVyMikge1xuICAgICAgY29uc3QgcmFuZG9tTnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKTtcblxuICAgICAgaWYgKHJhbmRvbU51bSAlIDIgPT0gMCkge1xuICAgICAgICAgcGxheWVyMS5zd2l0Y2hUdXJuKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgcGxheWVyMi5zd2l0Y2hUdXJuKCk7XG4gICAgICB9XG4gICB9XG59XG4iLCJjb25zdCBTSElQX0xFTkdUSFMgPSBbMiwgMywgMywgNCwgNV07XG5cbmNsYXNzIFNoaXAge1xuICAgaGFzU3VuayA9IGZhbHNlO1xuICAgI3NoaXBMZW5ndGg7XG4gICBudW1PZkhpdHM7XG5cbiAgIGNvbnN0cnVjdG9yKHNoaXBMZW5ndGgpIHtcbiAgICAgIHRoaXMuI3NoaXBMZW5ndGggPSBzaGlwTGVuZ3RoO1xuICAgICAgdGhpcy5udW1PZkhpdHMgPSAwO1xuICAgfVxuXG4gICBoaXQoKSB7XG4gICAgICB0aGlzLm51bU9mSGl0cysrO1xuICAgICAgaWYgKHRoaXMubnVtT2ZIaXRzID09PSB0aGlzLiNzaGlwTGVuZ3RoKSB7XG4gICAgICAgICB0aGlzLmhhc1N1bmsgPSB0cnVlO1xuICAgICAgfVxuICAgfVxuXG4gICBpc1N1bmsoKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYXNTdW5rO1xuICAgfVxuXG4gICBnZXRTaGlwTGVuZ3RoKCkge1xuICAgICAgcmV0dXJuIHRoaXMuI3NoaXBMZW5ndGg7XG4gICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXA7XG5leHBvcnQgeyBTSElQX0xFTkdUSFMgfTtcbiIsImltcG9ydCB7XG4gICBpbml0aWF0ZUdhbWUsXG4gICBwbGFjZVBsYXllclNoaXAsXG4gICByZXNldFBsYXllcixcbn0gZnJvbSBcIi4uL2NvbnRyb2xsZXIvR2FtZUNvbnRyb2xsZXJcIjtcbmltcG9ydCBHYW1lTG9vcCBmcm9tIFwiLi4vY29udHJvbGxlci9HYW1lTG9vcFwiO1xuaW1wb3J0IHsgU0hJUF9MRU5HVEhTIH0gZnJvbSBcIi4uL21vZGVsL1NoaXBcIjtcbmltcG9ydCB7IHJlbmRlclN0YXJ0U2NyZWVuIH0gZnJvbSBcIi4vc3RhcnRHYW1lU2NyZWVuXCI7XG5cbmZ1bmN0aW9uIGxvYWRBdHRhY2tFdmVudExpc3RlbmVycygpIHtcbiAgIGNvbnN0IGVuZW15Qm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVuZW15LWJvYXJkXCIpO1xuICAgZW5lbXlCb2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXR0YWNrVGFyZ2V0SGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIGF0dGFja1RhcmdldEhhbmRsZXIoZSkge1xuICAgY29uc3Qgc3F1YXJlRWxlbWVudCA9IGUudGFyZ2V0O1xuICAgY29uc3QgaXNUYXJnZXRTcXVhcmUgPSBzcXVhcmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImdyaWQtc3F1YXJlXCIpO1xuXG4gICBjb25zdCBjb2wgPSBOdW1iZXIoc3F1YXJlRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXhcIikpO1xuICAgY29uc3Qgcm93ID0gTnVtYmVyKHNxdWFyZUVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS15XCIpKTtcblxuICAgaWYgKGlzVGFyZ2V0U3F1YXJlKSB7XG4gICAgICBHYW1lTG9vcChyb3csIGNvbCk7XG4gICB9XG59XG5cbmNsYXNzIFNoaXBQbGFjZW1lbnRFdmVudHMge1xuICAgY29uc3RydWN0b3IoKSB7XG4gICAgICB0aGlzLnNoaXBQbGFjZW1lbnREaXJlY3Rpb24gPSBcInZlcnRpY2FsXCI7XG4gICAgICB0aGlzLmluZGV4T2ZTaGlwQmVpbmdQcm9jZXNzZWQgPSAwO1xuICAgfVxuXG4gICBzaGlwUGxhY2VtZW50RXZlbnRMaXN0ZW5lcigpIHtcbiAgICAgIGNvbnN0IHNoaXBQbGFjZW1lbnRCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgICAgXCJzaGlwLXBsYWNlbWVudC1ib2FyZFwiXG4gICAgICApO1xuICAgICAgY29uc3Qgc3RhcnRTY3JlZW5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgICAgIFwic3RhcnQtc2NyZWVuLWNvbnRhaW5lclwiXG4gICAgICApO1xuICAgICAgY29uc3QgbWFpblNjcmVlbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi1zY3JlZW5cIik7XG5cbiAgICAgIHNoaXBQbGFjZW1lbnRCb2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgIGNvbnN0IHNxdWFyZUVsZW1lbnQgPSBlLnRhcmdldDtcbiAgICAgICAgIGNvbnN0IGlzVGFyZ2V0U3F1YXJlID0gc3F1YXJlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJncmlkLXNxdWFyZVwiKTtcblxuICAgICAgICAgaWYgKGlzVGFyZ2V0U3F1YXJlKSB7XG4gICAgICAgICAgICBjb25zdCBjb2wgPSBOdW1iZXIoc3F1YXJlRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXhcIikpO1xuICAgICAgICAgICAgY29uc3Qgcm93ID0gTnVtYmVyKHNxdWFyZUVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS15XCIpKTtcblxuICAgICAgICAgICAgbGV0IGlzUGxhY2VtZW50U3VjY2Vzc2Z1bCA9IHBsYWNlUGxheWVyU2hpcChcbiAgICAgICAgICAgICAgIHJvdyxcbiAgICAgICAgICAgICAgIGNvbCxcbiAgICAgICAgICAgICAgIFNISVBfTEVOR1RIU1t0aGlzLmluZGV4T2ZTaGlwQmVpbmdQcm9jZXNzZWRdLFxuICAgICAgICAgICAgICAgdGhpcy5zaGlwUGxhY2VtZW50RGlyZWN0aW9uXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBpZiAoaXNQbGFjZW1lbnRTdWNjZXNzZnVsKSB7XG4gICAgICAgICAgICAgICB0aGlzLmluZGV4T2ZTaGlwQmVpbmdQcm9jZXNzZWQrKztcbiAgICAgICAgICAgICAgIGNvbnN0IHNoaXBQbGFjZW1lbnRIaWdobGlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgICAgICAgICAgICAgIFwic2hpcC1wbGFjZW1lbnQtaGlnaGxpZ2h0XCJcbiAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICBpZiAodGhpcy5zaGlwUGxhY2VtZW50RGlyZWN0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgICAgICAgICAgICAgc2hpcFBsYWNlbWVudEhpZ2hsaWdodC5zdHlsZS53aWR0aCA9IGAke1xuICAgICAgICAgICAgICAgICAgICAgNDAgKiBTSElQX0xFTkdUSFNbdGhpcy5pbmRleE9mU2hpcEJlaW5nUHJvY2Vzc2VkXVxuICAgICAgICAgICAgICAgICAgfXB4YDtcbiAgICAgICAgICAgICAgICAgIHNoaXBQbGFjZW1lbnRIaWdobGlnaHQuc3R5bGUuaGVpZ2h0ID0gXCI0MHB4XCI7XG4gICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgc2hpcFBsYWNlbWVudEhpZ2hsaWdodC5zdHlsZS5oZWlnaHQgPSBgJHtcbiAgICAgICAgICAgICAgICAgICAgIDQwICogU0hJUF9MRU5HVEhTW3RoaXMuaW5kZXhPZlNoaXBCZWluZ1Byb2Nlc3NlZF1cbiAgICAgICAgICAgICAgICAgIH1weGA7XG4gICAgICAgICAgICAgICAgICBzaGlwUGxhY2VtZW50SGlnaGxpZ2h0LnN0eWxlLndpZHRoID0gXCI0MHB4XCI7XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICAgICBpZiAodGhpcy5pbmRleE9mU2hpcEJlaW5nUHJvY2Vzc2VkID49IFNISVBfTEVOR1RIUy5sZW5ndGgpIHtcbiAgICAgICAgICAgIG1haW5TY3JlZW5Db250YWluZXIucmVtb3ZlQ2hpbGQoc3RhcnRTY3JlZW5Db250YWluZXIpO1xuICAgICAgICAgICAgaW5pdGlhdGVHYW1lKCk7XG4gICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgc3RhcnRTY3JlZW5Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCAoZSkgPT4ge1xuICAgICAgICAgY29uc3Qgc2hpcFBsYWNlbWVudEhpZ2hsaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgICAgICAgXCJzaGlwLXBsYWNlbWVudC1oaWdobGlnaHRcIlxuICAgICAgICAgKTtcbiAgICAgICAgIHNoaXBQbGFjZW1lbnRIaWdobGlnaHQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuICAgICAgICAgc2hpcFBsYWNlbWVudEhpZ2hsaWdodC5zdHlsZS5sZWZ0ID0gYCR7ZS5jbGllbnRYfXB4YDtcbiAgICAgICAgIHNoaXBQbGFjZW1lbnRIaWdobGlnaHQuc3R5bGUudG9wID0gYCR7ZS5jbGllbnRZfXB4YDtcbiAgICAgIH0pO1xuICAgfVxuICAgY2hhbmdlU2hpcERpcmVjdGlvbkV2ZW50TGlzdGVuZXIoKSB7XG4gICAgICBjb25zdCBjaGFuZ2VTaGlwRGlyZWN0aW9uQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXJlY3Rpb24tYnRuXCIpO1xuXG4gICAgICBjaGFuZ2VTaGlwRGlyZWN0aW9uQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICB0aGlzLnNoaXBQbGFjZW1lbnREaXJlY3Rpb24gPVxuICAgICAgICAgICAgdGhpcy5zaGlwUGxhY2VtZW50RGlyZWN0aW9uID09PSBcInZlcnRpY2FsXCJcbiAgICAgICAgICAgICAgID8gXCJob3Jpem9udGFsXCJcbiAgICAgICAgICAgICAgIDogXCJ2ZXJ0aWNhbFwiO1xuICAgICAgICAgY2hhbmdlU2hpcERpcmVjdGlvbkJ0bi50ZXh0Q29udGVudCA9IHRoaXMuc2hpcFBsYWNlbWVudERpcmVjdGlvbjtcbiAgICAgICAgIGNvbnN0IHNoaXBQbGFjZW1lbnRIaWdobGlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgICAgICAgIFwic2hpcC1wbGFjZW1lbnQtaGlnaGxpZ2h0XCJcbiAgICAgICAgICk7XG4gICAgICAgICBpZiAodGhpcy5zaGlwUGxhY2VtZW50RGlyZWN0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgICAgICAgc2hpcFBsYWNlbWVudEhpZ2hsaWdodC5zdHlsZS53aWR0aCA9IGAke1xuICAgICAgICAgICAgICAgNDAgKiBTSElQX0xFTkdUSFNbdGhpcy5pbmRleE9mU2hpcEJlaW5nUHJvY2Vzc2VkXVxuICAgICAgICAgICAgfXB4YDtcbiAgICAgICAgICAgIHNoaXBQbGFjZW1lbnRIaWdobGlnaHQuc3R5bGUuaGVpZ2h0ID0gXCI0MHB4XCI7XG4gICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hpcFBsYWNlbWVudEhpZ2hsaWdodC5zdHlsZS5oZWlnaHQgPSBgJHtcbiAgICAgICAgICAgICAgIDQwICogU0hJUF9MRU5HVEhTW3RoaXMuaW5kZXhPZlNoaXBCZWluZ1Byb2Nlc3NlZF1cbiAgICAgICAgICAgIH1weGA7XG4gICAgICAgICAgICBzaGlwUGxhY2VtZW50SGlnaGxpZ2h0LnN0eWxlLndpZHRoID0gXCI0MHB4XCI7XG4gICAgICAgICB9XG4gICAgICB9KTtcbiAgIH1cbn1cblxuZnVuY3Rpb24gbG9hZFJlc3RhcnRHYW1lRXZlbnRMaXN0ZW5lcigpIHtcbiAgIGNvbnN0IHBsYXlBZ2FpbkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheS1hZ2Fpbi1idG5cIik7XG5cbiAgIHBsYXlBZ2FpbkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgcmVzZXRQbGF5ZXIoKTtcbiAgICAgIGNvbnN0IG1haW5TY3JlZW5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4tc2NyZWVuXCIpO1xuICAgICAgbWFpblNjcmVlbkNvbnRhaW5lci5yZXBsYWNlQ2hpbGRyZW4oKTtcblxuICAgICAgcmVuZGVyU3RhcnRTY3JlZW4oKTtcbiAgICAgIGNvbnN0IHNoaXBQbGFjZW1lbnRFdmVudHMgPSBuZXcgU2hpcFBsYWNlbWVudEV2ZW50cygpO1xuICAgICAgc2hpcFBsYWNlbWVudEV2ZW50cy5jaGFuZ2VTaGlwRGlyZWN0aW9uRXZlbnRMaXN0ZW5lcigpO1xuICAgICAgc2hpcFBsYWNlbWVudEV2ZW50cy5zaGlwUGxhY2VtZW50RXZlbnRMaXN0ZW5lcigpO1xuICAgfSk7XG59XG5cbmV4cG9ydCB7XG4gICBsb2FkQXR0YWNrRXZlbnRMaXN0ZW5lcnMsXG4gICBTaGlwUGxhY2VtZW50RXZlbnRzLFxuICAgbG9hZFJlc3RhcnRHYW1lRXZlbnRMaXN0ZW5lcixcbiAgIGF0dGFja1RhcmdldEhhbmRsZXIsXG59O1xuIiwiaW1wb3J0IGRvdCBmcm9tIFwiLi8uLi8uLi9pY29ucy9jaXJjbGUtc21hbGwucG5nXCI7XG5cbmZ1bmN0aW9uIHJlbmRlckdhbWVTY3JlZW4oKSB7XG4gICBjb25zdCBtYWluU2NyZWVuQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLXNjcmVlblwiKTtcblxuICAgY29uc3QgZ2FtZVNjcmVlbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICBnYW1lU2NyZWVuQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJnYW1lLXNjcmVlbi1jb250YWluZXJcIik7XG4gICBnYW1lU2NyZWVuQ29udGFpbmVyLmlkID0gXCJnYW1lLXNjcmVlbi1jb250YWluZXJcIjtcblxuICAgY29uc3QgcGxheWVyQm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgcGxheWVyQm9hcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcbiAgICAgIFwicGxheWVyLWJvYXJkLWNvbnRhaW5lclwiLFxuICAgICAgXCJib2FyZC1jb250YWluZXJcIlxuICAgKTtcbiAgIHBsYXllckJvYXJkQ29udGFpbmVyLmlkID0gXCJwbGF5ZXItYm9hcmQtY29udGFpbmVyXCI7XG5cbiAgIGNvbnN0IHBsYXllckJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgIHBsYXllckJvYXJkLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXItYm9hcmRcIiwgXCJib2FyZFwiKTtcbiAgIHBsYXllckJvYXJkLmlkID0gXCJwbGF5ZXItYm9hcmRcIjtcblxuICAgY29uc3QgcGxheWVyTmFtZVRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgcGxheWVyTmFtZVRhZy5jbGFzc0xpc3QuYWRkKFwicGxheWVyLW5hbWV0YWdcIik7XG4gICBwbGF5ZXJOYW1lVGFnLmlkID0gXCJwbGF5ZXItbmFtZXRhZ1wiO1xuICAgcGxheWVyTmFtZVRhZy50ZXh0Q29udGVudCA9IFwiWW91XCI7XG5cbiAgIHBsYXllckJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllck5hbWVUYWcpO1xuICAgcGxheWVyQm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyQm9hcmQpO1xuXG4gICBjb25zdCBlbmVteUJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgIGVuZW15Qm9hcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcbiAgICAgIFwiZW5lbXktYm9hcmQtY29udGFpbmVyXCIsXG4gICAgICBcImJvYXJkLWNvbnRhaW5lclwiXG4gICApO1xuICAgZW5lbXlCb2FyZENvbnRhaW5lci5pZCA9IFwiZW5lbXktYm9hcmQtY29udGFpbmVyXCI7XG5cbiAgIGNvbnN0IGVuZW15Qm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgZW5lbXlCb2FyZC5jbGFzc0xpc3QuYWRkKFwiZW5lbXktYm9hcmRcIiwgXCJib2FyZFwiKTtcbiAgIGVuZW15Qm9hcmQuaWQgPSBcImVuZW15LWJvYXJkXCI7XG5cbiAgIGNvbnN0IGVuZW15TmFtZVRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgZW5lbXlOYW1lVGFnLmNsYXNzTGlzdC5hZGQoXCJlbmVteS1uYW1ldGFnXCIpO1xuICAgZW5lbXlOYW1lVGFnLmlkID0gXCJlbmVteS1uYW1ldGFnXCI7XG4gICBlbmVteU5hbWVUYWcudGV4dENvbnRlbnQgPSBcIkVuZW15XCI7XG5cbiAgIGVuZW15Qm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoZW5lbXlOYW1lVGFnKTtcbiAgIGVuZW15Qm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoZW5lbXlCb2FyZCk7XG5cbiAgIGdhbWVTY3JlZW5Db250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyQm9hcmRDb250YWluZXIpO1xuICAgZ2FtZVNjcmVlbkNvbnRhaW5lci5hcHBlbmRDaGlsZChlbmVteUJvYXJkQ29udGFpbmVyKTtcblxuICAgbWFpblNjcmVlbkNvbnRhaW5lci5hcHBlbmRDaGlsZChnYW1lU2NyZWVuQ29udGFpbmVyKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyR3JpZFNxdWFyZShyb3csIGNvbCkge1xuICAgY29uc3QgZ3JpZFNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICBncmlkU3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJncmlkLXNxdWFyZVwiKTtcbiAgIGdyaWRTcXVhcmUuc2V0QXR0cmlidXRlKFwiZGF0YS14XCIsIGNvbCk7XG4gICBncmlkU3F1YXJlLnNldEF0dHJpYnV0ZShcImRhdGEteVwiLCByb3cpO1xuXG4gICByZXR1cm4gZ3JpZFNxdWFyZTtcbn1cblxuZnVuY3Rpb24gbWFya01pc3NlZEF0dGFjayhyb3csIGNvbCwgYm9hcmQpIHtcbiAgIGxldCBtaXNzZWRTcXVhcmVFbGVtZW50O1xuXG4gICBpZiAoYm9hcmQgPT09IFwiZW5lbXlCb2FyZFwiKSB7XG4gICAgICBjb25zdCBlbmVteUJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbmVteS1ib2FyZFwiKTtcbiAgICAgIG1pc3NlZFNxdWFyZUVsZW1lbnQgPSBlbmVteUJvYXJkLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICBgW2RhdGEteD1cIiR7Y29sfVwiXVtkYXRhLXk9XCIke3Jvd31cIl1gXG4gICAgICApO1xuICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHBsYXllckJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5ZXItYm9hcmRcIik7XG4gICAgICBtaXNzZWRTcXVhcmVFbGVtZW50ID0gcGxheWVyQm9hcmQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgIGBbZGF0YS14PVwiJHtjb2x9XCJdW2RhdGEteT1cIiR7cm93fVwiXWBcbiAgICAgICk7XG4gICB9XG5cbiAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgIGltZy5zcmMgPSBkb3Q7XG5cbiAgIG1pc3NlZFNxdWFyZUVsZW1lbnQuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgIG1pc3NlZFNxdWFyZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm1pc3NlZC1hdHRhY2tcIik7XG59XG5cbmZ1bmN0aW9uIG1hcmtTdWNjZXNzZnVsQXR0YWNrKHJvdywgY29sLCBib2FyZCkge1xuICAgbGV0IHNoaXBTcXVhcmVFbGVtZW50O1xuXG4gICBpZiAoYm9hcmQgPT09IFwiZW5lbXlCb2FyZFwiKSB7XG4gICAgICBjb25zdCBlbmVteUJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbmVteS1ib2FyZFwiKTtcbiAgICAgIHNoaXBTcXVhcmVFbGVtZW50ID0gZW5lbXlCb2FyZC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgYFtkYXRhLXg9XCIke2NvbH1cIl1bZGF0YS15PVwiJHtyb3d9XCJdYFxuICAgICAgKTtcbiAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyLWJvYXJkXCIpO1xuICAgICAgc2hpcFNxdWFyZUVsZW1lbnQgPSBwbGF5ZXJCb2FyZC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgYFtkYXRhLXg9XCIke2NvbH1cIl1bZGF0YS15PVwiJHtyb3d9XCJdYFxuICAgICAgKTtcbiAgIH1cblxuICAgc2hpcFNxdWFyZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInN1Y2Nlc3NmdWwtYXR0YWNrXCIpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5V2lubmluZ1NjcmVlbigpIHtcbiAgIGNvbnN0IG1haW5TY3JlZW5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4tc2NyZWVuXCIpO1xuXG4gICBjb25zdCBnYW1lT3ZlclNjcmVlbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICBnYW1lT3ZlclNjcmVlbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZ2FtZW92ZXItc2NyZWVuLWNvbnRhaW5lclwiKTtcblxuICAgY29uc3Qgd2lubmluZ01lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgIHdpbm5pbmdNZXNzYWdlLmNsYXNzTGlzdC5hZGQoXCJnYW1lLXN0YXR1cy1tZXNzYWdlXCIpO1xuICAgd2lubmluZ01lc3NhZ2UudGV4dENvbnRlbnQgPSBcIllvdSBoYXZlIHdvbiFcIjtcblxuICAgY29uc3QgcGxheUFnYWluQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgIHBsYXlBZ2FpbkJ0bi5jbGFzc0xpc3QuYWRkKFwicGxheS1hZ2Fpbi1idG5cIik7XG4gICBwbGF5QWdhaW5CdG4uaWQgPSBcInBsYXktYWdhaW4tYnRuXCI7XG4gICBwbGF5QWdhaW5CdG4udGV4dENvbnRlbnQgPSBcIlBsYXkgYWdhaW5cIjtcblxuICAgZ2FtZU92ZXJTY3JlZW5Db250YWluZXIuYXBwZW5kQ2hpbGQod2lubmluZ01lc3NhZ2UpO1xuICAgZ2FtZU92ZXJTY3JlZW5Db250YWluZXIuYXBwZW5kQ2hpbGQocGxheUFnYWluQnRuKTtcblxuICAgbWFpblNjcmVlbkNvbnRhaW5lci5hcHBlbmRDaGlsZChnYW1lT3ZlclNjcmVlbkNvbnRhaW5lcik7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlMb3NpbmdTY3JlZW4oKSB7XG4gICBjb25zdCBtYWluU2NyZWVuQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLXNjcmVlblwiKTtcblxuICAgY29uc3QgZ2FtZU92ZXJTY3JlZW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgZ2FtZU92ZXJTY3JlZW5Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImdhbWVvdmVyLXNjcmVlbi1jb250YWluZXJcIik7XG5cbiAgIGNvbnN0IGxvc2luZ01lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgIGxvc2luZ01lc3NhZ2UuY2xhc3NMaXN0LmFkZChcImdhbWUtc3RhdHVzLW1lc3NhZ2VcIik7XG4gICBsb3NpbmdNZXNzYWdlLnRleHRDb250ZW50ID0gXCJZb3UgbG9zZVwiO1xuXG4gICBjb25zdCBwbGF5QWdhaW5CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgcGxheUFnYWluQnRuLmNsYXNzTGlzdC5hZGQoXCJwbGF5LWFnYWluLWJ0blwiKTtcbiAgIHBsYXlBZ2FpbkJ0bi5pZCA9IFwicGxheS1hZ2Fpbi1idG5cIjtcbiAgIHBsYXlBZ2FpbkJ0bi50ZXh0Q29udGVudCA9IFwiUGxheSBhZ2FpblwiO1xuXG4gICBnYW1lT3ZlclNjcmVlbkNvbnRhaW5lci5hcHBlbmRDaGlsZChsb3NpbmdNZXNzYWdlKTtcbiAgIGdhbWVPdmVyU2NyZWVuQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXlBZ2FpbkJ0bik7XG5cbiAgIG1haW5TY3JlZW5Db250YWluZXIuYXBwZW5kQ2hpbGQoZ2FtZU92ZXJTY3JlZW5Db250YWluZXIpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5U2hpcFBsYWNlbWVudFNlbGVjdGlvbihyb3csIGNvbCkge1xuICAgY29uc3Qgc2hpcFBsYWNlbWVudEJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaGlwLXBsYWNlbWVudC1ib2FyZFwiKTtcbiAgIGxldCBncmlkU3F1YXJlID0gc2hpcFBsYWNlbWVudEJvYXJkLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgW2RhdGEteD1cIiR7Y29sfVwiXVtkYXRhLXk9XCIke3Jvd31cIl1gXG4gICApO1xuXG4gICBncmlkU3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXItc2hpcFwiKTtcbn1cblxuZXhwb3J0IHtcbiAgIHJlbmRlckdhbWVTY3JlZW4sXG4gICByZW5kZXJHcmlkU3F1YXJlLFxuICAgbWFya01pc3NlZEF0dGFjayxcbiAgIG1hcmtTdWNjZXNzZnVsQXR0YWNrLFxuICAgZGlzcGxheVdpbm5pbmdTY3JlZW4sXG4gICBkaXNwbGF5TG9zaW5nU2NyZWVuLFxuICAgZGlzcGxheVNoaXBQbGFjZW1lbnRTZWxlY3Rpb24sXG59O1xuIiwiaW1wb3J0IHsgcmVuZGVyR3JpZFNxdWFyZSB9IGZyb20gXCIuL3JlbmRlckdhbWVcIjtcblxuZnVuY3Rpb24gcmVuZGVyU3RhcnRTY3JlZW4oKSB7XG4gICBjb25zdCBtYWluU2NyZWVuQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLXNjcmVlblwiKTtcblxuICAgY29uc3Qgc3RhcnRTY3JlZW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgc3RhcnRTY3JlZW5Db250YWluZXIuY2xhc3NMaXN0LmFkZChcInN0YXJ0LXNjcmVlbi1jb250YWluZXJcIik7XG4gICBzdGFydFNjcmVlbkNvbnRhaW5lci5pZCA9IFwic3RhcnQtc2NyZWVuLWNvbnRhaW5lclwiO1xuXG4gICBjb25zdCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgIGdyaWQuY2xhc3NMaXN0LmFkZChcImJvYXJkXCIpO1xuICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwic2hpcC1wbGFjZW1lbnQtYm9hcmRcIik7XG4gICBncmlkLmlkID0gXCJzaGlwLXBsYWNlbWVudC1ib2FyZFwiO1xuXG4gICBmb3IgKGxldCB4ID0gMDsgeCA8IDEwOyB4KyspIHtcbiAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgMTA7IHkrKykge1xuICAgICAgICAgZ3JpZC5hcHBlbmRDaGlsZChyZW5kZXJHcmlkU3F1YXJlKHgsIHkpKTtcbiAgICAgIH1cbiAgIH1cblxuICAgY29uc3Qgc2hpcFBsYWNlbWVudEhpZ2hsaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICBzaGlwUGxhY2VtZW50SGlnaGxpZ2h0LmNsYXNzTGlzdC5hZGQoXCJzaGlwLXBsYWNlbWVudC1oaWdobGlnaHRcIik7XG4gICBzaGlwUGxhY2VtZW50SGlnaGxpZ2h0LmlkID0gXCJzaGlwLXBsYWNlbWVudC1oaWdobGlnaHRcIjtcblxuICAgY29uc3QgZGlyZWN0aW9uQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgIGRpcmVjdGlvbkJ0bi5jbGFzc0xpc3QuYWRkKFwiZGlyZWN0aW9uLWJ0blwiKTtcbiAgIGRpcmVjdGlvbkJ0bi5pZCA9IFwiZGlyZWN0aW9uLWJ0blwiO1xuICAgZGlyZWN0aW9uQnRuLnRleHRDb250ZW50ID0gXCJ2ZXJ0aWNhbFwiO1xuXG4gICBzdGFydFNjcmVlbkNvbnRhaW5lci5hcHBlbmRDaGlsZChzaGlwUGxhY2VtZW50SGlnaGxpZ2h0KTtcbiAgIHN0YXJ0U2NyZWVuQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpcmVjdGlvbkJ0bik7XG4gICBzdGFydFNjcmVlbkNvbnRhaW5lci5hcHBlbmRDaGlsZChncmlkKTtcbiAgIG1haW5TY3JlZW5Db250YWluZXIuYXBwZW5kQ2hpbGQoc3RhcnRTY3JlZW5Db250YWluZXIpO1xufVxuXG5leHBvcnQgeyByZW5kZXJTdGFydFNjcmVlbiB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IFwiLi9jc3MvcmVzZXQuY3NzXCI7XG5pbXBvcnQgXCIuL2Nzcy9wYWdlLXRlbXBsYXRlLmNzc1wiO1xuaW1wb3J0IFwiLi9jc3Mvc3RhcnQtc2NyZWVuLmNzc1wiO1xuaW1wb3J0IFwiLi9jc3MvZ2FtZS1zY3JlZW4uY3NzXCI7XG5pbXBvcnQgeyBpbml0aWF0ZUdhbWUgfSBmcm9tIFwiLi9zY3JpcHRzL2NvbnRyb2xsZXIvR2FtZUNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IFNoaXBQbGFjZW1lbnRFdmVudHMgfSBmcm9tIFwiLi9zY3JpcHRzL3ZpZXcvZXZlbnRMaXN0ZW5lcnNcIjtcbmltcG9ydCB7IHJlbmRlclN0YXJ0U2NyZWVuIH0gZnJvbSBcIi4vc2NyaXB0cy92aWV3L3N0YXJ0R2FtZVNjcmVlblwiO1xuXG5yZW5kZXJTdGFydFNjcmVlbigpO1xuY29uc3Qgc2hpcFBsYWNlbWVudEV2ZW50cyA9IG5ldyBTaGlwUGxhY2VtZW50RXZlbnRzKCk7XG5zaGlwUGxhY2VtZW50RXZlbnRzLmNoYW5nZVNoaXBEaXJlY3Rpb25FdmVudExpc3RlbmVyKCk7XG5zaGlwUGxhY2VtZW50RXZlbnRzLnNoaXBQbGFjZW1lbnRFdmVudExpc3RlbmVyKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=