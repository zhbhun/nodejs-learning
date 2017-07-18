exports.id = 0;
exports.modules = {

/***/ "./server/server.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_App__ = __webpack_require__("./common/App.js");






var app = __WEBPACK_IMPORTED_MODULE_0_express___default()();
app.get('/api', function (req, res) {
  res.send({
    message: 'I am a server route and can also be hot reloaded!'
  });
});
app.get('*', function (req, res) {
  var application = Object(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__["renderToString"])(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__common_App__["a" /* default */], null));
  var html = '<!doctype html>\n    <html class="no-js" lang="">\n        <head>\n            <meta charset="utf-8">\n            <meta http-equiv="x-ua-compatible" content="ie=edge">\n            <title>HMR all the things!</title>\n            <meta name="description" content="">\n            <meta name="viewport"\n            <content="width=device-width,  initial-scale=1">\n        </head>\n        <body>\n            <div id="root">' + application + '</div>\n            <script src=\u201Dhttp://localhost:3001/client.js"></script>\n        </body>\n    </html>';
  res.send(html);
});
/* harmony default export */ __webpack_exports__["default"] = (app);

/***/ })

};