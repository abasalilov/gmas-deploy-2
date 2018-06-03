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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./build/assets.json":
/***/ (function(module, exports) {

module.exports = {
	"client": {
		"js": "/static/js/client.d41815cf.js"
	}
};

/***/ }),

/***/ "./src/common/App.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom_Route__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom_Route___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_dom_Route__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom_Link__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom_Link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router_dom_Link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_dom_Switch__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_dom_Switch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_router_dom_Switch__);







var App = function App(_ref) {
  var routes = _ref.routes,
      initialData = _ref.initialData;

  return routes ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_4_react_router_dom_Switch___default.a,
      null,
      routes.map(function (route, index) {
        // pass in the initialData from the server or window.DATA for this
        // specific route
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom_Route___default.a, {
          key: index,
          path: route.path,
          exact: true,
          render: function render(props) {
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(route.component, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, props, {
              initialData: initialData[index] || null
            }));
          }
        });
      })
    )
  ) : null;
};

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),

/***/ "./src/common/_error.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);







var Error = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Error, _Component);

  function Error() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Error);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Error.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Error)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Error, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'h1',
          null,
          'Error'
        )
      );
    }
  }]);

  return Error;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Error);

/***/ }),

/***/ "./src/common/actions/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_COUNTER", function() { return SET_COUNTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INCREMENT_COUNTER", function() { return INCREMENT_COUNTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DECREMENT_COUNTER", function() { return DECREMENT_COUNTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "increment", function() { return increment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decrement", function() { return decrement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "incrementIfOdd", function() { return incrementIfOdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "incrementAsync", function() { return incrementAsync; });
var SET_COUNTER = 'SET_COUNTER';
var INCREMENT_COUNTER = 'INCREMENT_COUNTER';
var DECREMENT_COUNTER = 'DECREMENT_COUNTER';

var set = function set(value) {
  return {
    type: SET_COUNTER,
    payload: value
  };
};

var increment = function increment() {
  return {
    type: INCREMENT_COUNTER
  };
};

var decrement = function decrement() {
  return {
    type: DECREMENT_COUNTER
  };
};

var incrementIfOdd = function incrementIfOdd() {
  return function (dispatch, getState) {
    var _getState = getState(),
        counter = _getState.counter;

    if (counter % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
};

var incrementAsync = function incrementAsync() {
  var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;
  return function (dispatch) {
    setTimeout(function () {
      dispatch(increment());
    }, delay);
  };
};

/***/ }),

/***/ "./src/common/components/Counter.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);



var Counter = function Counter(_ref) {
  var increment = _ref.increment,
      incrementIfOdd = _ref.incrementIfOdd,
      incrementAsync = _ref.incrementAsync,
      decrement = _ref.decrement,
      counter = _ref.counter;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'p',
    null,
    'Clicked: ',
    counter,
    ' times',
    ' ',
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'button',
      { onClick: increment },
      '+'
    ),
    ' ',
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'button',
      { onClick: decrement },
      '-'
    ),
    ' ',
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'button',
      { onClick: incrementIfOdd },
      'Increment if odd'
    ),
    ' ',
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'button',
      { onClick: function onClick() {
          return incrementAsync();
        } },
      'Increment async'
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Counter);

/***/ }),

/***/ "./src/common/components/Nav.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_router_dom__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_router_dom__);








var Nav = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Nav, _Component);

  function Nav() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Nav);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Nav.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Nav)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Nav, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'nav',
        null,
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'h1',
          null,
          'Nav'
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_6_react_router_dom__["Link"],
          { to: '/' },
          'Home'
        )
      );
    }
  }]);

  return Nav;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Nav);

/***/ }),

/***/ "./src/common/containers/App.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Counter__ = __webpack_require__("./src/common/components/Counter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions__ = __webpack_require__("./src/common/actions/index.js");





var mapStateToProps = function mapStateToProps(state) {
  return {
    counter: state.counter
  };
};

function mapDispatchToProps(dispatch) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["bindActionCreators"])(__WEBPACK_IMPORTED_MODULE_3__actions__, dispatch);
}

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_2__components_Counter__["a" /* default */]));

/***/ }),

/***/ "./src/common/reducers/counter.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__("./src/common/actions/index.js");


var counter = function counter() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var action = arguments[1];

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__actions__["SET_COUNTER"]:
      return action.payload;
    case __WEBPACK_IMPORTED_MODULE_0__actions__["INCREMENT_COUNTER"]:
      return state + 1;
    case __WEBPACK_IMPORTED_MODULE_0__actions__["DECREMENT_COUNTER"]:
      return state - 1;
    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (counter);

/***/ }),

/***/ "./src/common/reducers/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__counter__ = __webpack_require__("./src/common/reducers/counter.js");



var rootReducer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
  counter: __WEBPACK_IMPORTED_MODULE_1__counter__["a" /* default */]
});

/* harmony default export */ __webpack_exports__["a"] = (rootReducer);

/***/ }),

/***/ "./src/common/routes.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__screens_Home__ = __webpack_require__("./src/common/screens/Home.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__screens_Single__ = __webpack_require__("./src/common/screens/Single.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__screens_ExamplePage__ = __webpack_require__("./src/common/screens/ExamplePage.js");




var routes = [{
  path: '/',
  component: __WEBPACK_IMPORTED_MODULE_0__screens_Home__["a" /* default */],
  exact: true
}, {
  path: '/(d*)/(d*)/:slug',
  component: __WEBPACK_IMPORTED_MODULE_1__screens_Single__["a" /* default */],
  exact: true
}, {
  path: '/:slug',
  component: __WEBPACK_IMPORTED_MODULE_2__screens_ExamplePage__["a" /* default */],
  exact: true
}];

/* harmony default export */ __webpack_exports__["a"] = (routes);

/***/ }),

/***/ "./src/common/screens/ExamplePage.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_helmet__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__withSSR__ = __webpack_require__("./src/common/screens/withSSR.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_Nav__ = __webpack_require__("./src/common/components/Nav.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_material_ui_styles__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_material_ui__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_material_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_material_ui__);














var Page = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(Page, _Component);

  function Page(props) {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, Page);

    var _this = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Page.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(Page)).call(this, props));

    _this.muiTheme = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_material_ui_styles__["getMuiTheme"])({
      palette: {},
      userAgent: _this.props.userAgent
    });
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(Page, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevProps.match.params.slug !== this.props.match.params.slug) {
        this.props.refetch();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var data;
      if (this.props.content) {
        data = this.props.content.rendered;
      }
      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_11_material_ui_styles__["MuiThemeProvider"],
        { muiTheme: this.muiTheme },
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          "div",
          null,
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui__["RaisedButton"], { label: "Super Secret Password", secondary: true }),
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_Nav__["a" /* default */], null),
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            "table",
            null,
            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
              "thead",
              null,
              __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                "tr",
                null,
                __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                  "td",
                  null,
                  "Year"
                ),
                __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                  "td",
                  null,
                  "Summer"
                ),
                __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                  "td",
                  null,
                  "Winter"
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
              "tbody",
              null,
              this.props.content && this.props.content.raw.map(function (temperature, i) {
                return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                  "tr",
                  { key: i },
                  __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                    "td",
                    null,
                    temperature.year
                  ),
                  __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                    "td",
                    null,
                    temperature.Winter
                  ),
                  __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                    "td",
                    null,
                    temperature.Summer
                  )
                );
              })
            )
          )
        )
      );
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
        var match = _ref.match,
            req = _ref.req,
            res = _ref.res,
            axios = _ref.axios;

        var _ref3, data;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios.get("https://gist.githubusercontent.com/fetimo/1b88c35769dcf6e17cb2/raw/4516a0845ae9c779b3d7041b29d527d5059fc41e/temperature.json", {
                  headers: {
                    "content-type": "application/json",
                    accept: "application/json"
                  }
                });

              case 3:
                _ref3 = _context.sent;
                data = _ref3.data;
                return _context.abrupt("return", {
                  content: {
                    rendered: data.map(function (temperature, i) {
                      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                        "tr",
                        null,
                        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                          "td",
                          null,
                          temperature.year
                        ),
                        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                          "td",
                          null,
                          temperature.Winter
                        ),
                        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                          "td",
                          null,
                          temperature.Summer
                        )
                      );
                    }),
                    raw: data
                  }
                });

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", { something: "else" });

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 8]]);
      }));

      function getInitialProps(_x) {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Page;
}(__WEBPACK_IMPORTED_MODULE_7_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__withSSR__["a" /* default */])(Page));

/***/ }),

/***/ "./src/common/screens/Home.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_router_dom__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__containers_App__ = __webpack_require__("./src/common/containers/App.js");










var Home = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Home, _Component);

  function Home() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Home);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Home.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Home)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Home, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'h1',
          null,
          'Home'
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_6_react_router_dom__["Link"],
          { to: '/slug' },
          'Slug'
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__containers_App__["a" /* default */], null)
      );
    }
  }]);

  return Home;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),

/***/ "./src/common/screens/Single.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);







var Single = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Single, _Component);

  function Single() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Single);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Single.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Single)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Single, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'h1',
          null,
          'Single'
        )
      );
    }
  }]);

  return Single;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Single);

/***/ }),

/***/ "./src/common/screens/withSSR.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Page;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_axios__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_axios__);











// This is a Higher Order Component that implement's a Next.js-like data
// fetching API, but with few UX improvements...
//
// 1) It does NOT fully block render on client-side transitions after the
// first server-render, but rather exposes an `isLoading` prop to the wrapped
// component.
//
// 2) While errors that occur server-side are handled with a custom
// `_error.js`, client-side errors are passed down to the wrapped component
// through an `error` prop. Other options would be to make the HOC accept
// an ErrorComponent on a per-page basis, or just show the `_error`.js component
// on the client too.
//
// 3) getInitialProps() is passed down through `refetch` prop, so it can be
// manually called from a wrapped component. This is useful in situations where
// you need to use componentDidUpdate()
//
function Page(WrappedComponent) {
  var Page = function (_React$Component) {
    __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits___default()(Page, _React$Component);

    __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_createClass___default()(Page, null, [{
      key: 'getInitialProps',
      value: function getInitialProps(ctx) {
        // Need to call the wrapped components getInitialProps if it exists, else
        // we just return null
        return WrappedComponent.getInitialProps ? WrappedComponent.getInitialProps(ctx) : __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise___default.a.resolve(null);
      }
    }]);

    function Page(props) {
      __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck___default()(this, Page);

      var _this = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Page.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(Page)).call(this, props));

      _this.fetchData = function () {
        // if this.state.data is undefined, that means that the we are on the client.
        // To get the data we need, we just call getInitialProps again. We pass
        // it react-router's match, as well as an axios instance. As req and res
        // don't exist in browser-land, they are omitted.
        _this.setState({ isLoading: true });
        _this.constructor.getInitialProps({ match: _this.props.match, axios: __WEBPACK_IMPORTED_MODULE_9_axios___default.a }).then(function (data) {
          return _this.setState({ data: data, isLoading: false });
        }, function (error) {
          return _this.setState({
            // We can gracefully expose errors on the client, by also keeping
            // them in state.
            data: { error: error },
            isLoading: false
          });
        });
      };

      _this.state = {
        data: props.initialData,
        isLoading: !!props.initialData
      };
      return _this;
    }

    __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_createClass___default()(Page, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (!this.state.data) {
          // This will NOT run on initial server render, because this.state.data
          // will exist. However, we want to call this on all subsequent client
          // route changes
          this.fetchData();
        }
      }
    }, {
      key: 'render',
      value: function render() {
        // Just like Next.js's `getInitialProps`, we flatten out this.state.data.
        // However, one big difference from next, is that we do NOT block client
        // transitions. So we passing `isLoading` down. Finally, we pass down
        // this.fetchData so it is available to routes that need to do force
        // refreshes. For example, sibling routes that need to call
        // componentDidUpdate(), can then just refetch().
        var _props = this.props,
            initialData = _props.initialData,
            rest = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_props, ['initialData']);

        return __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(WrappedComponent, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, rest, {
          refetch: this.fetchData,
          isLoading: this.state.isLoading
        }, this.state.data));
      }
    }]);

    return Page;
  }(__WEBPACK_IMPORTED_MODULE_8_react___default.a.Component);

  // Set out component's displayName. This just makes debugging easier.
  // Components will show as Page(MyComponent) in react-dev-tools.


  Page.displayName = 'Page(' + getDisplayName(WrappedComponent) + ')';
  return Page;
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

/***/ }),

/***/ "./src/common/store/configureStore.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers__ = __webpack_require__("./src/common/reducers/index.js");




var configureStore = function configureStore(preloadedState) {
  var store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_2__reducers__["a" /* default */], preloadedState, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_1_redux_thunk___default.a));

  if (false) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', function () {
      var nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

/* harmony default export */ __webpack_exports__["a"] = (configureStore);

/***/ }),

/***/ "./src/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__server__ = __webpack_require__("./src/server/index.js");



if (false) {
  module.hot.accept('./server', function () {
    console.log('🔁  HMR Reloading `./server`...');
  });
  console.info('✅  Server-side HMR Enabled!');
}

var port = 3000 || 3000;

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0_express___default()().use(function (req, res) {
  return __WEBPACK_IMPORTED_MODULE_1__server__["a" /* default */].handle(req, res);
}).listen(port, function (err) {
  if (err) {
    console.error(err);
    return;
  }
  console.log('> Started on port ' + port);
}));

/***/ }),

/***/ "./src/server/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_express__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_serialize_javascript__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_serialize_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_serialize_javascript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_helmet__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_dom_server__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_router_dom__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_redux__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__common_App__ = __webpack_require__("./src/common/App.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__common_error__ = __webpack_require__("./src/common/_error.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__common_routes__ = __webpack_require__("./src/common/routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__common_store_configureStore__ = __webpack_require__("./src/common/store/configureStore.js");




var _this = this;















var assets = __webpack_require__("./build/assets.json");

var server = __WEBPACK_IMPORTED_MODULE_3_express___default()();
server.disable("x-powered-by").use(__WEBPACK_IMPORTED_MODULE_3_express___default.a.static("/Users/al/Desktop/razzle-ssr-with-routing-example/02_ssr-with-redux/build/public")).get("/*", function () {
  var _ref = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(req, res) {
    var context, data, preloadedState, store, markup, head, _markup, _head;

    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            context = {};
            // This data fetching technique came from a gist by @ryanflorence
            // @see https://gist.github.com/ryanflorence/efbe562332d4f1cc9331202669763741

            _context.prev = 1;
            _context.next = 4;
            return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a.all(__WEBPACK_IMPORTED_MODULE_13__common_routes__["a" /* default */].map(function (route) {
              var match = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_react_router_dom__["matchPath"])(req.url, route);
              return match && route.component.getInitialProps ? route.component.getInitialProps({ match: match, req: req, res: res, axios: __WEBPACK_IMPORTED_MODULE_5_axios___default.a }) : null;
            }));

          case 4:
            data = _context.sent;


            // Compile an initial state
            // I guess this could come from an API call
            preloadedState = {};

            // Create a new Redux store instance

            store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__common_store_configureStore__["a" /* default */])(preloadedState);

            // Pass our routes and data array to our App component

            markup = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_react_dom_server__["renderToString"])(__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_10_react_redux__["Provider"],
              { store: store },
              __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_9_react_router_dom__["StaticRouter"],
                { context: context, location: req.url },
                __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__common_App__["a" /* default */], {
                  routes: __WEBPACK_IMPORTED_MODULE_13__common_routes__["a" /* default */],
                  initialData: data,
                  userAgent: req.headers["user-agent"]
                })
              )
            ));

            // We rewind ReactHelmet for meta tags

            head = __WEBPACK_IMPORTED_MODULE_7_react_helmet___default.a.renderStatic();


            if (context.url) {
              res.redirect(context.url);
            } else {
              res.status(200).send("<!doctype html>\n        <html lang=\"\">\n        <head>\n            <meta httpEquiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n            <meta charSet='utf-8' />\n            " + head.title.toString() + "\n            <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n            <script src=\"" + assets.client.js + "\" defer></script>\n            " + head.meta.toString() + "\n            " + head.link.toString() + "\n        </head>\n        <body>\n            <div id=\"root\">" + markup + "</div>\n            <script>window.DATA = " + __WEBPACK_IMPORTED_MODULE_6_serialize_javascript___default()(data) + ";</script>\n        </body>\n    </html>");
            }
            _context.next = 19;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](1);

            console.log("in server catch");
            console.log(_context.t0);
            _markup = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_react_dom_server__["renderToString"])(__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__common_error__["a" /* default */], { error: _context.t0 }));
            // We rewind ReactHelmet for meta tags

            _head = __WEBPACK_IMPORTED_MODULE_7_react_helmet___default.a.renderStatic();

            res.status(_context.t0.response ? _context.t0.response.status : 500).send("<!doctype html>\n          <html lang=\"\">\n          <head>\n              <meta httpEquiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n              <meta charSet='utf-8' />\n              " + _head.title.toString() + "\n              <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n              " + _head.meta.toString() + "\n              " + _head.link.toString() + "\n          </head>\n          <body>\n              <div id=\"root\">" + _markup + "</div>\n          </body>\n      </html>");

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, _this, [[1, 12]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

/* harmony default export */ __webpack_exports__["a"] = (server);

/***/ }),

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ }),

/***/ 10:
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),

/***/ 11:
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),

/***/ 12:
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/assign");

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/extends");

/***/ }),

/***/ 17:
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/objectWithoutProperties");

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

module.exports = require("material-ui");

/***/ }),

/***/ 19:
/***/ (function(module, exports) {

module.exports = require("material-ui/styles");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),

/***/ 20:
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ 21:
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ 22:
/***/ (function(module, exports) {

module.exports = require("react-router-dom/Link");

/***/ }),

/***/ 23:
/***/ (function(module, exports) {

module.exports = require("react-router-dom/Route");

/***/ }),

/***/ 24:
/***/ (function(module, exports) {

module.exports = require("react-router-dom/Switch");

/***/ }),

/***/ 25:
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ 26:
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/index.js");


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/inherits");

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/promise");

/***/ })

/******/ });
//# sourceMappingURL=server.js.map