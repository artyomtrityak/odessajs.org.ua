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
  }, "OdessaJS'2020"), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
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
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    onClick: function onClick() {
      return setShowNav(false);
    },
    className: "nav-link js-scroll-trigger",
    href: "#about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "About")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    onClick: function onClick() {
      return setShowNav(false);
    },
    className: "nav-link js-scroll-trigger",
    href: "#info-slider",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "Materials 2020")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    onClick: function onClick() {
      return setShowNav(false);
    },
    className: "nav-link js-scroll-trigger",
    href: "#speakers",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "Speakers")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    onClick: function onClick() {
      return setShowNav(false);
    },
    className: "nav-link js-scroll-trigger",
    href: "#workshop",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "Workshops")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    onClick: function onClick() {
      return setShowNav(false);
    },
    className: "nav-link js-scroll-trigger",
    href: "#schedule",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "Schedule")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    onClick: function onClick() {
      return setShowNav(false);
    },
    className: "nav-link js-scroll-trigger",
    href: "#sponsorship",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "Sponsors")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    onClick: function onClick() {
      return setShowNav(false);
    },
    className: "nav-link js-scroll-trigger",
    href: "#location",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "Location")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
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
  }, "Archive")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    onClick: function onClick() {
      return setShowNav(false);
    },
    href: "https://odessajs2020.ticketforevent.com/",
    className: "new_btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "BUY TICKET")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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

/***/ "./src/components/blocks/footer.jsx":
/*!******************************************!*\
  !*** ./src/components/blocks/footer.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/database */ "./node_modules/firebase/database/dist/index.esm.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var _jsxFileName = "/Users/mherasymenko/Programming/ojs/src/components/blocks/footer.jsx";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};






var config = {
  apiKey: "AIzaSyBxgrhYdpPp8tY53oWf53evLPrOkREFQV0",
  authDomain: "odessajs-2017.firebaseapp.com",
  databaseURL: "https://odessajs-2017.firebaseio.com",
  projectId: "odessajs-2017",
  storageBucket: "odessajs-2017.appspot.com",
  messagingSenderId: "72618231509"
};
var firebaseApp = firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.initializeApp(config);

var validateEmail = function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

var _default = function _default(_ref) {
  var data = _ref.data;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showSpiner = _useState[0],
      setShowSpiner = _useState[1];

  var subscribeEmail = function subscribeEmail(email, name) {
    var id = Date.now();
    return firebaseApp.database().ref('emails/' + id).set({
      email: email,
      name: name
    });
  };

  var onSubmit = function onSubmit(event) {
    event.preventDefault();
    setShowSpiner(true);
    var name = event.target[0].value;
    var email = event.target[1].value;
    var target = event.target;

    if (validateEmail(email)) {
      subscribeEmail(email, name).then(function () {
        setShowSpiner(false);
        target[0].value = '';
        target[1].value = '';
        alert('Благодарим за подписку.');
      });
    } else {
      alert('Невалидный e-mail!');
      setShowSpiner(false);
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    id: "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container my-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-12 mx-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "text-uppercase main_title text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Keep in touch")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-4 mx-auto text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "caption",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Follow us on social media for more information and news about the conference. See you soon!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "organizers__list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "organizers__list-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "organizers__list-item-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "Email:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "mailto:odessajsconf@gmail.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "odessajsconf@gmail.com")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), "tel:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "tel:+380636116011",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "+380 (63) 611 60 11")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-12 ml-auto text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "socials",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: "subscribe_form",
    onSubmit: onSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-sm-9 col-md-7 col-lg-3 mx-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    name: "ojs_name",
    id: "ojs_name2",
    placeholder: "your name",
    className: "form-control subscribe-name-input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-sm-9 col-md-7 col-lg-3 mx-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "email",
    name: "ojs_email",
    id: "ojs_email2",
    placeholder: "email address",
    className: "form-control subscribe-email-input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-sm-9 col-md-7 col-lg-2 mx-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    className: "btn btn-primary subscribe-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: {
      display: showSpiner ? 'none' : 'block'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "SUBSCRIBE"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSpinner"],
    className: "fa fa-spin",
    style: {
      display: showSpiner ? 'block' : 'none'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  })))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    id: "archive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-12 text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer__last",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "http://old.odessajs.org/2013/index.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, "OdessaJS 2013"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "http://old.odessajs.org/2014/index.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, "OdessaJS 2014"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "http://old.odessajs.org/2015/index.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, "OdessaJS 2015"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "http://old.odessajs.org/2016/index.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "OdessaJS 2016"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "http://old.odessajs.org/2017/index.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "OdessaJS 2017"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "http://old.odessajs.org/2018/index.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, "OdessaJS 2018"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "http://old.odessajs.org/2019/index.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, "OdessaJS 2019"))))));
};

__signature__(_default, "useState{[showSpiner, setShowSpiner](false)}");

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(config, "config", "/Users/mherasymenko/Programming/ojs/src/components/blocks/footer.jsx");
  reactHotLoader.register(firebaseApp, "firebaseApp", "/Users/mherasymenko/Programming/ojs/src/components/blocks/footer.jsx");
  reactHotLoader.register(validateEmail, "validateEmail", "/Users/mherasymenko/Programming/ojs/src/components/blocks/footer.jsx");
  reactHotLoader.register(_default, "default", "/Users/mherasymenko/Programming/ojs/src/components/blocks/footer.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1612187117424
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.i, {"hmr":true,"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

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
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_blocks_info_slider__WEBPACK_IMPORTED_MODULE_16__["default"], {
    data: info_slider_data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_blocks_tickets__WEBPACK_IMPORTED_MODULE_6__["default"], {
    data: tickets_data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_blocks_speakers__WEBPACK_IMPORTED_MODULE_7__["default"], {
    data: speakers_data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_blocks_schedule__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_blocks_workshop__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_blocks_video__WEBPACK_IMPORTED_MODULE_17__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_blocks_sponsorship__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_blocks_hotels_partners__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_blocks_location__WEBPACK_IMPORTED_MODULE_10__["default"], {
    data: location_data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_blocks_program_commitee__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
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
//# sourceMappingURL=cms.d4e0697065e475ad35a6.hot-update.js.map