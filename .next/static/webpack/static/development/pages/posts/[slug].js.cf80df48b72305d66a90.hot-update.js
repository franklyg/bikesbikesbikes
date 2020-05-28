webpackHotUpdate("static/development/pages/posts/[slug].js",{

/***/ "./pages/posts/[slug].js":
/*!*******************************!*\
  !*** ./pages/posts/[slug].js ***!
  \*******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Post; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/error */ "./node_modules/next/error.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/container */ "./components/container.js");
/* harmony import */ var _components_post_body__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/post-body */ "./components/post-body.js");
/* harmony import */ var _components_more_stories__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/more-stories */ "./components/more-stories.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/header */ "./components/header.js");
/* harmony import */ var _components_post_header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/post-header */ "./components/post-header.js");
/* harmony import */ var _components_section_separator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/section-separator */ "./components/section-separator.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.js");
/* harmony import */ var _components_post_title__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/post-title */ "./components/post-title.js");
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../lib/constants */ "./lib/constants.js");
var _jsxFileName = "/Users/default/Projects/aff/bikesbikesbikes/pages/posts/[slug].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












var __N_SSG = true;
function Post(_ref) {
  var _post$_meta, _post$_meta2;

  var post = _ref.post,
      morePosts = _ref.morePosts,
      preview = _ref.preview;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  console.log(router, post === null || post === void 0 ? void 0 : (_post$_meta = post._meta) === null || _post$_meta === void 0 ? void 0 : _post$_meta.uid);

  if (!router.isFallback && !(post === null || post === void 0 ? void 0 : (_post$_meta2 = post._meta) === null || _post$_meta2 === void 0 ? void 0 : _post$_meta2.uid)) {
    return __jsx(next_error__WEBPACK_IMPORTED_MODULE_3___default.a, {
      statusCode: 404,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 12
      }
    });
  }

  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_10__["default"], {
    preview: preview,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx(_components_container__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }), router.isFallback ? __jsx(_components_post_title__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, "Loading\u2026") : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("article", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 15
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }, post.title[0].text, " | Next.js Blog Example with ", _lib_constants__WEBPACK_IMPORTED_MODULE_12__["CMS_NAME"]), __jsx("meta", {
    property: "og:image",
    content: post.coverimage.url,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  })), __jsx(_components_post_header__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: post.title,
    coverImage: post.coverimage,
    date: post.date,
    author: post.author,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 15
    }
  }), __jsx(_components_post_body__WEBPACK_IMPORTED_MODULE_5__["default"], {
    content: post.content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 15
    }
  })), __jsx(_components_section_separator__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }), morePosts && morePosts.length > 0 && __jsx(_components_more_stories__WEBPACK_IMPORTED_MODULE_6__["default"], {
    posts: morePosts,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 15
    }
  }))));
}

/***/ })

})
//# sourceMappingURL=[slug].js.cf80df48b72305d66a90.hot-update.js.map