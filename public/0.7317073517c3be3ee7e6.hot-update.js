webpackHotUpdate(0,{

/***/ 357:
/* unknown exports provided */
/* all exports used */
/*!*****************************************!*\
  !*** ./frontend/containers/lib/Play.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _propTypes = __webpack_require__(/*! prop-types */ 2);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ 61);\n\nvar _Landscape = __webpack_require__(/*! ../../components/play/Landscape */ 348);\n\nvar _Landscape2 = _interopRequireDefault(_Landscape);\n\nvar _Login = __webpack_require__(/*! ../../components/play/Login */ 349);\n\nvar _Login2 = _interopRequireDefault(_Login);\n\nvar _PlayAppbar = __webpack_require__(/*! ../../components/play/playground/PlayAppbar */ 350);\n\nvar _PlayAppbar2 = _interopRequireDefault(_PlayAppbar);\n\nvar _SideBar = __webpack_require__(/*! ../../components/play/playground/SideBar */ 351);\n\nvar _SideBar2 = _interopRequireDefault(_SideBar);\n\n__webpack_require__(/*! ../../assets/stylesheets/play */ 858);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Play = function (_React$Component) {\n    _inherits(Play, _React$Component);\n\n    function Play(props) {\n        _classCallCheck(this, Play);\n\n        return _possibleConstructorReturn(this, (Play.__proto__ || Object.getPrototypeOf(Play)).call(this, props));\n    }\n\n    _createClass(Play, [{\n        key: 'screenComponents',\n        value: function screenComponents() {\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(_PlayAppbar2.default, null),\n                _react2.default.createElement(\n                    'div',\n                    { className: 'content-div' },\n                    _react2.default.createElement(_SideBar2.default, { showCardScreen: this.props.showCardScreen }),\n                    _react2.default.createElement(\n                        'div',\n                        { className: 'main-content-div' },\n                        this.screenCards()\n                    )\n                )\n            );\n        }\n    }, {\n        key: 'screenCards',\n        value: function screenCards() {}\n    }, {\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                null,\n                this.props.user ? this.screenComponents() : _react2.default.createElement(\n                    'div',\n                    null,\n                    _react2.default.createElement(_Landscape2.default, null),\n                    _react2.default.createElement(_Login2.default, { loadUser: this.props.loadUser })\n                )\n            );\n        }\n    }]);\n\n    return Play;\n}(_react2.default.Component);\n\nPlay.propTypes = {\n    user: _propTypes2.default.object,\n    loadUser: _propTypes2.default.func,\n    cardScreens: _propTypes2.default.array,\n    showCardScreen: _propTypes2.default.fuc\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n    return {\n        user: state.play.user,\n        cardScreens: state.play.cardScreens\n    };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n    return {\n        loadUser: function loadUser(user) {\n            return dispatch({ type: 'loadUser', user: user });\n        },\n        showCardScreen: function showCardScreen(cardIndex) {\n            return dispatch({ type: 'showCardScreen', cardIndex: cardIndex });\n        }\n    };\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Play);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzU3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbnRhaW5lcnMvbGliL1BsYXkuanM/MTA0MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCBMYW5kc2NhcGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wbGF5L0xhbmRzY2FwZSc7XG5pbXBvcnQgTG9naW4gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wbGF5L0xvZ2luJztcblxuaW1wb3J0IFBsYXlBcHBiYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wbGF5L3BsYXlncm91bmQvUGxheUFwcGJhcic7XG5pbXBvcnQgU2lkZUJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL3BsYXkvcGxheWdyb3VuZC9TaWRlQmFyJztcblxuaW1wb3J0ICcuLi8uLi9hc3NldHMvc3R5bGVzaGVldHMvcGxheSc7XG5cbmNsYXNzIFBsYXkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgc2NyZWVuQ29tcG9uZW50cygpIHtcbiAgICAgICAgcmV0dXJuKDxkaXY+XG4gICAgICAgICAgICA8UGxheUFwcGJhciAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWRpdlwiPlxuICAgICAgICAgICAgICAgIDxTaWRlQmFyIHNob3dDYXJkU2NyZWVuPXt0aGlzLnByb3BzLnNob3dDYXJkU2NyZWVufSAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1jb250ZW50LWRpdlwiPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zY3JlZW5DYXJkcygpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2Pik7XG4gICAgfVxuICAgIHNjcmVlbkNhcmRzKCkge1xuXG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnVzZXJcbiAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnNjcmVlbkNvbXBvbmVudHMoKVxuICAgICAgICAgICAgICAgICAgICA6IDxkaXY+PExhbmRzY2FwZSAvPjxMb2dpbiBsb2FkVXNlcj17dGhpcy5wcm9wcy5sb2FkVXNlcn0gLz48L2Rpdj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblBsYXkucHJvcFR5cGVzID0ge1xuICAgIHVzZXI6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgbG9hZFVzZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIGNhcmRTY3JlZW5zOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgc2hvd0NhcmRTY3JlZW46IFByb3BUeXBlcy5mdWNcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHVzZXI6IHN0YXRlLnBsYXkudXNlcixcbiAgICAgICAgY2FyZFNjcmVlbnM6IHN0YXRlLnBsYXkuY2FyZFNjcmVlbnNcbiAgICB9O1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoXG4gICAge1xuICAgICAgICBsb2FkVXNlcjogdXNlciA9PiBkaXNwYXRjaCh7dHlwZTogJ2xvYWRVc2VyJywgdXNlcn0pLFxuICAgICAgICBzaG93Q2FyZFNjcmVlbjogY2FyZEluZGV4ID0+IGRpc3BhdGNoKHt0eXBlOiAnc2hvd0NhcmRTY3JlZW4nLCBjYXJkSW5kZXh9KVxuICAgIH1cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gICAgbWFwU3RhdGVUb1Byb3BzLFxuICAgIG1hcERpc3BhdGNoVG9Qcm9wc1xuKShQbGF5KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBmcm9udGVuZC9jb250YWluZXJzL2xpYi9QbGF5LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7Ozs7Ozs7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBRkE7QUFGQTtBQVNBOzs7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQVFBOzs7O0FBNUJBO0FBQ0E7QUE4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQURBO0FBQ0E7QUFNQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})