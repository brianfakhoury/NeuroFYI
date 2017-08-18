webpackHotUpdate(0,{

/***/ 370:
/* unknown exports provided */
/* all exports used */
/*!*****************************************!*\
  !*** ./frontend/containers/lib/Play.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _propTypes = __webpack_require__(/*! prop-types */ 2);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ 66);\n\nvar _Landscape = __webpack_require__(/*! ../../components/play/Landscape */ 360);\n\nvar _Landscape2 = _interopRequireDefault(_Landscape);\n\nvar _Login = __webpack_require__(/*! ../../components/play/Login */ 361);\n\nvar _Login2 = _interopRequireDefault(_Login);\n\nvar _PlayAppbar = __webpack_require__(/*! ../../components/play/playground/PlayAppbar */ 363);\n\nvar _PlayAppbar2 = _interopRequireDefault(_PlayAppbar);\n\nvar _SideBar = __webpack_require__(/*! ../../components/play/playground/SideBar */ 364);\n\nvar _SideBar2 = _interopRequireDefault(_SideBar);\n\nvar _CreateSimpleNetCard = __webpack_require__(/*! ../../components/play/playground/CreateSimpleNetCard */ 362);\n\nvar _CreateSimpleNetCard2 = _interopRequireDefault(_CreateSimpleNetCard);\n\n__webpack_require__(/*! ../../assets/stylesheets/play */ 896);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Play = function (_React$Component) {\n    _inherits(Play, _React$Component);\n\n    function Play(props) {\n        _classCallCheck(this, Play);\n\n        return _possibleConstructorReturn(this, (Play.__proto__ || Object.getPrototypeOf(Play)).call(this, props));\n    }\n\n    _createClass(Play, [{\n        key: 'screenComponents',\n        value: function screenComponents() {\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(_PlayAppbar2.default, null),\n                _react2.default.createElement(\n                    'div',\n                    { className: 'content-div' },\n                    _react2.default.createElement(\n                        'div',\n                        { className: 'side-bar' },\n                        _react2.default.createElement(_SideBar2.default, { showCardScreen: this.props.showCardScreen })\n                    ),\n                    _react2.default.createElement(\n                        'div',\n                        { className: 'main-content-div-container' },\n                        _react2.default.createElement(\n                            'div',\n                            { className: 'main-content-div' },\n                            this.screenCards()\n                        )\n                    )\n                )\n            );\n        }\n    }, {\n        key: 'screenCards',\n        value: function screenCards() {\n            var _this2 = this;\n\n            var cards = this.props.cardScreens.map(function (item, index) {\n                var comp = null;\n                switch (item) {\n                    case 1:\n                        break;\n                    case 2:\n                        break;\n                    case 3:\n                        break;\n                    case 4:\n                        comp = _react2.default.createElement(_CreateSimpleNetCard2.default, { key: index, closeCard: _this2.props.closeCard.bind(null, index) });\n                        break;\n                    case 5:\n                        break;\n                    default:\n                        return _react2.default.createElement('div', null);\n                }\n                return comp;\n            });\n            return cards;\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                null,\n                this.props.user ? this.screenComponents() : _react2.default.createElement(\n                    'div',\n                    null,\n                    _react2.default.createElement(_Landscape2.default, null),\n                    _react2.default.createElement(_Login2.default, { loadUser: this.props.loadUser })\n                )\n            );\n        }\n    }]);\n\n    return Play;\n}(_react2.default.Component);\n\nPlay.propTypes = {\n    user: _propTypes2.default.object,\n    loadUser: _propTypes2.default.func,\n    cardScreens: _propTypes2.default.array,\n    showCardScreen: _propTypes2.default.func,\n    closeCard: _propTypes2.default.func\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n    return {\n        user: state.play.user,\n        cardScreens: state.play.cardScreens\n    };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n    return {\n        loadUser: function loadUser(user) {\n            return dispatch({ type: 'loadUser', user: user });\n        },\n        showCardScreen: function showCardScreen(cardIndex) {\n            return dispatch({ type: 'showCardScreen', cardIndex: cardIndex });\n        },\n        closeCard: function closeCard(index) {\n            return dispatch({ type: 'closeCard', index: index });\n        }\n    };\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Play);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzcwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbnRhaW5lcnMvbGliL1BsYXkuanM/MTA0MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCBMYW5kc2NhcGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wbGF5L0xhbmRzY2FwZSc7XG5pbXBvcnQgTG9naW4gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wbGF5L0xvZ2luJztcblxuaW1wb3J0IFBsYXlBcHBiYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wbGF5L3BsYXlncm91bmQvUGxheUFwcGJhcic7XG5pbXBvcnQgU2lkZUJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL3BsYXkvcGxheWdyb3VuZC9TaWRlQmFyJztcblxuaW1wb3J0IENyZWF0ZVNpbXBsZU5ldENhcmQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wbGF5L3BsYXlncm91bmQvQ3JlYXRlU2ltcGxlTmV0Q2FyZCc7XG5cbmltcG9ydCAnLi4vLi4vYXNzZXRzL3N0eWxlc2hlZXRzL3BsYXknO1xuXG5jbGFzcyBQbGF5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuICAgIHNjcmVlbkNvbXBvbmVudHMoKSB7XG4gICAgICAgIHJldHVybig8ZGl2PlxuICAgICAgICAgICAgPFBsYXlBcHBiYXIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1kaXZcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGUtYmFyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxTaWRlQmFyIHNob3dDYXJkU2NyZWVuPXt0aGlzLnByb3BzLnNob3dDYXJkU2NyZWVufSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1jb250ZW50LWRpdi1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWNvbnRlbnQtZGl2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zY3JlZW5DYXJkcygpfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj4pO1xuICAgIH1cbiAgICBzY3JlZW5DYXJkcygpIHtcbiAgICAgICAgY29uc3QgY2FyZHMgPSB0aGlzLnByb3BzLmNhcmRTY3JlZW5zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGxldCBjb21wID0gbnVsbDtcbiAgICAgICAgICAgIHN3aXRjaChpdGVtKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICBjb21wID0gPENyZWF0ZVNpbXBsZU5ldENhcmQga2V5PXtpbmRleH0gY2xvc2VDYXJkPXt0aGlzLnByb3BzLmNsb3NlQ2FyZC5iaW5kKG51bGwsIGluZGV4KX0gLz47XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYgLz47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY29tcDtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBjYXJkcztcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudXNlclxuICAgICAgICAgICAgICAgICAgICA/IHRoaXMuc2NyZWVuQ29tcG9uZW50cygpXG4gICAgICAgICAgICAgICAgICAgIDogPGRpdj48TGFuZHNjYXBlIC8+PExvZ2luIGxvYWRVc2VyPXt0aGlzLnByb3BzLmxvYWRVc2VyfSAvPjwvZGl2PlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuUGxheS5wcm9wVHlwZXMgPSB7XG4gICAgdXNlcjogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBsb2FkVXNlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgY2FyZFNjcmVlbnM6IFByb3BUeXBlcy5hcnJheSxcbiAgICBzaG93Q2FyZFNjcmVlbjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgY2xvc2VDYXJkOiBQcm9wVHlwZXMuZnVuY1xufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXNlcjogc3RhdGUucGxheS51c2VyLFxuICAgICAgICBjYXJkU2NyZWVuczogc3RhdGUucGxheS5jYXJkU2NyZWVuc1xuICAgIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IChcbiAgICB7XG4gICAgICAgIGxvYWRVc2VyOiB1c2VyID0+IGRpc3BhdGNoKHt0eXBlOiAnbG9hZFVzZXInLCB1c2VyfSksXG4gICAgICAgIHNob3dDYXJkU2NyZWVuOiBjYXJkSW5kZXggPT4gZGlzcGF0Y2goe3R5cGU6ICdzaG93Q2FyZFNjcmVlbicsIGNhcmRJbmRleH0pLFxuICAgICAgICBjbG9zZUNhcmQ6IGluZGV4ID0+IGRpc3BhdGNoKHt0eXBlOiAnY2xvc2VDYXJkJywgaW5kZXh9KVxuICAgIH1cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gICAgbWFwU3RhdGVUb1Byb3BzLFxuICAgIG1hcERpc3BhdGNoVG9Qcm9wc1xuKShQbGF5KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBmcm9udGVuZC9jb250YWluZXJzL2xpYi9QbGF5LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFDQTtBQUNBOzs7Ozs7Ozs7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQUpBO0FBRkE7QUFhQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFiQTtBQWVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBUUE7Ozs7QUFuREE7QUFDQTtBQXFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFEQTtBQUNBO0FBT0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})