webpackHotUpdate("cms",{

/***/ "./src/components/Layout.js":
/*!**********************************!*\
  !*** ./src/components/Layout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _all_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./all.sass */ "./src/components/all.sass");
/* harmony import */ var _all_sass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_all_sass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SiteMetadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SiteMetadata */ "./src/components/SiteMetadata.js");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _img_Logo_JS_waves_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/Logo_JS_waves.svg */ "./src/img/Logo_JS_waves.svg");
/* harmony import */ var _img_Logo_JS_waves_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_img_Logo_JS_waves_svg__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/Users/mherasymenko/Programming/ojs/src/components/Layout.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};











var TemplateWrapper = function TemplateWrapper(_ref) {
  var children = _ref.children;

  var _useSiteMetadata = Object(_SiteMetadata__WEBPACK_IMPORTED_MODULE_3__["default"])(),
      title = _useSiteMetadata.title,
      description = _useSiteMetadata.description;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showNav = _useState[0],
      setShowNav = _useState[1];

  _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_5__["library"].add(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__["fab"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faCheckSquare"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faCoffee"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faEnvelope"]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__["Helmet"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("html", {
    lang: "en",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "description",
    content: description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: Object(gatsby__WEBPACK_IMPORTED_MODULE_4__["withPrefix"])('/') + "img/apple-touch-icon.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "icon",
    type: "image/png",
    href: Object(gatsby__WEBPACK_IMPORTED_MODULE_4__["withPrefix"])('/') + "img/favicon-32x32.png",
    sizes: "32x32",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "icon",
    type: "image/png",
    href: Object(gatsby__WEBPACK_IMPORTED_MODULE_4__["withPrefix"])('/') + "img/favicon-16x16.png",
    sizes: "16x16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "mask-icon",
    href: Object(gatsby__WEBPACK_IMPORTED_MODULE_4__["withPrefix"])('/') + "img/safari-pinned-tab.svg",
    color: "#ff4400",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "theme-color",
    content: "#fff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:type",
    content: "business.business",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:title",
    content: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:url",
    content: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:image",
    content: Object(gatsby__WEBPACK_IMPORTED_MODULE_4__["withPrefix"])('/') + "img/og-image.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "navbar navbar-expand-lg navbar-light fixed-top navbar-shrink",
    id: "mainNav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "navbar-brand js-scroll-trigger",
    href: "#page-top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_Logo_JS_waves_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
    alt: "OdessaJS logo",
    className: "img-logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "header_title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "OdessaJS"), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      return setShowNav(!showNav);
    },
    className: "navbar-toggler navbar-toggler-right collapsed",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navbarResponsive",
    "aria-controls": "navbarResponsive",
    "aria-expanded": "true",
    "aria-label": "Toggle navigation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "navbar-toggler-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: (showNav ? '' : "collapse") + " navbar-collapse",
    id: "navbarResponsive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "navbar-nav ml-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    onClick: function onClick() {
      return setShowNav(false);
    },
    className: "nav-link js-scroll-trigger",
    href: "#archive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "Archive")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    id: "bot-link",
    href: "https://www.messenger.com/t/odessajs",
    title: "Odessia bot",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }));
};

__signature__(TemplateWrapper, "useSiteMetadata{{ title, description }}\nuseState{[showNav, setShowNav](false)}", function () {
  return [_SiteMetadata__WEBPACK_IMPORTED_MODULE_3__["default"]];
});

var _default = TemplateWrapper;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TemplateWrapper, "TemplateWrapper", "/Users/mherasymenko/Programming/ojs/src/components/Layout.js");
  reactHotLoader.register(_default, "default", "/Users/mherasymenko/Programming/ojs/src/components/Layout.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/templates/index-page.js":
/*!*************************************!*\
  !*** ./src/templates/index-page.js ***!
  \*************************************/
/*! exports provided: IndexPageTemplate, default, pageQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexPageTemplate", function() { return IndexPageTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageQuery", function() { return pageQuery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");
/* harmony import */ var _components_blocks_header_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/blocks/header.jsx */ "./src/components/blocks/header.jsx");
/* harmony import */ var _components_blocks_callpappers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/blocks/callpappers */ "./src/components/blocks/callpappers.jsx");
/* harmony import */ var _components_blocks_about__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/blocks/about */ "./src/components/blocks/about.jsx");
/* harmony import */ var _components_blocks_tickets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/blocks/tickets */ "./src/components/blocks/tickets.jsx");
/* harmony import */ var _components_blocks_speakers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/blocks/speakers */ "./src/components/blocks/speakers.jsx");
/* harmony import */ var _components_blocks_workshop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/blocks/workshop */ "./src/components/blocks/workshop.jsx");
/* harmony import */ var _components_blocks_sponsorship__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/blocks/sponsorship */ "./src/components/blocks/sponsorship.jsx");
/* harmony import */ var _components_blocks_location__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/blocks/location */ "./src/components/blocks/location.jsx");
/* harmony import */ var _components_blocks_hotels_partners__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/blocks/hotels-partners */ "./src/components/blocks/hotels-partners.jsx");
/* harmony import */ var _components_blocks_program_commitee__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/blocks/program-commitee */ "./src/components/blocks/program-commitee.jsx");
/* harmony import */ var _components_blocks_footer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/blocks/footer */ "./src/components/blocks/footer.jsx");
/* harmony import */ var _components_blocks_fixed_social__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/blocks/fixed-social */ "./src/components/blocks/fixed-social.jsx");
/* harmony import */ var _components_blocks_schedule__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/blocks/schedule */ "./src/components/blocks/schedule.jsx");
/* harmony import */ var _components_blocks_info_slider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/blocks/info-slider */ "./src/components/blocks/info-slider.jsx");
/* harmony import */ var _components_blocks_video__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/blocks/video */ "./src/components/blocks/video.jsx");
var _jsxFileName = "/Users/mherasymenko/Programming/ojs/src/templates/index-page.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};



















var IndexPageTemplate = function IndexPageTemplate(_ref) {
  var head_data = _ref.head_data,
      callpappers_data = _ref.callpappers_data,
      about_data = _ref.about_data,
      tickets_data = _ref.tickets_data,
      speakers_data = _ref.speakers_data,
      location_data = _ref.location_data,
      info_slider_data = _ref.info_slider_data;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_blocks_header_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: head_data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_blocks_footer__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_blocks_fixed_social__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }));
};
IndexPageTemplate.propTypes = {
  head_data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  info_slider_data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  callpappers_data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  about_data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  tickets_data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  speakers_data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  location_data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var IndexPage = function IndexPage(_ref2) {
  var data = _ref2.data;
  var frontmatter = data.markdownRemark.frontmatter;
  console.log('frontmatter', frontmatter);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IndexPageTemplate, {
    head_data: frontmatter.head_data,
    info_slider_data: frontmatter.info_slider_data,
    callpappers_data: frontmatter.callpappers_data,
    about_data: frontmatter.about_data,
    tickets_data: frontmatter.tickets_data,
    speakers_data: frontmatter.speakers_data,
    location_data: frontmatter.location_data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }));
};

IndexPage.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    allMarkdownRemark: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      frontmatter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
    }),
    markdownRemark: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      frontmatter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
    })
  })
};
var _default = IndexPage;
/* harmony default export */ __webpack_exports__["default"] = (_default);
var pageQuery = "1499705053";
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(IndexPageTemplate, "IndexPageTemplate", "/Users/mherasymenko/Programming/ojs/src/templates/index-page.js");
  reactHotLoader.register(IndexPage, "IndexPage", "/Users/mherasymenko/Programming/ojs/src/templates/index-page.js");
  reactHotLoader.register(pageQuery, "pageQuery", "/Users/mherasymenko/Programming/ojs/src/templates/index-page.js");
  reactHotLoader.register(_default, "default", "/Users/mherasymenko/Programming/ojs/src/templates/index-page.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.9865ba73394c5e7c9a5a.hot-update.js.map