webpackHotUpdate(0,{

/***/ 373:
/* unknown exports provided */
/* all exports used */
/*!*****************************************!*\
  !*** ./frontend/containers/lib/Play.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _propTypes = __webpack_require__(/*! prop-types */ 2);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ 67);\n\nvar _axios = __webpack_require__(/*! axios */ 333);\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _Landscape = __webpack_require__(/*! ../../components/play/Landscape */ 362);\n\nvar _Landscape2 = _interopRequireDefault(_Landscape);\n\nvar _Login = __webpack_require__(/*! ../../components/play/Login */ 363);\n\nvar _Login2 = _interopRequireDefault(_Login);\n\nvar _PlayAppbar = __webpack_require__(/*! ../../components/play/playground/PlayAppbar */ 365);\n\nvar _PlayAppbar2 = _interopRequireDefault(_PlayAppbar);\n\nvar _SideBar = __webpack_require__(/*! ../../components/play/playground/SideBar */ 366);\n\nvar _SideBar2 = _interopRequireDefault(_SideBar);\n\nvar _CreateSimpleNetCard = __webpack_require__(/*! ../../components/play/playground/CreateSimpleNetCard */ 364);\n\nvar _CreateSimpleNetCard2 = _interopRequireDefault(_CreateSimpleNetCard);\n\nvar _TestANetCard = __webpack_require__(/*! ../../components/play/playground/TestANetCard */ 367);\n\nvar _TestANetCard2 = _interopRequireDefault(_TestANetCard);\n\n__webpack_require__(/*! ../../assets/stylesheets/play */ 903);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Play = function (_React$Component) {\n    _inherits(Play, _React$Component);\n\n    function Play(props) {\n        _classCallCheck(this, Play);\n\n        return _possibleConstructorReturn(this, (Play.__proto__ || Object.getPrototypeOf(Play)).call(this, props));\n    }\n\n    _createClass(Play, [{\n        key: 'saveNetwork',\n        value: function saveNetwork(networkJSON) {\n            _axios2.default.post('/saveNetwork', { network: networkJSON });\n            this.props.loadNetwork(networkJSON);\n        }\n    }, {\n        key: 'screenComponents',\n        value: function screenComponents() {\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(_PlayAppbar2.default, null),\n                _react2.default.createElement(\n                    'div',\n                    { className: 'content-div' },\n                    _react2.default.createElement(\n                        'div',\n                        { className: 'side-bar' },\n                        _react2.default.createElement(_SideBar2.default, { showCardScreen: this.props.showCardScreen })\n                    ),\n                    _react2.default.createElement(\n                        'div',\n                        { className: 'main-content-div-container' },\n                        _react2.default.createElement(\n                            'div',\n                            { className: 'main-content-div' },\n                            this.screenCards()\n                        )\n                    )\n                )\n            );\n        }\n    }, {\n        key: 'screenCards',\n        value: function screenCards() {\n            var _this2 = this;\n\n            var cards = this.props.cardScreens.map(function (item, index) {\n                var comp = null;\n                switch (item) {\n                    case '1':\n                        break;\n                    case '2':\n                        break;\n                    case '3':\n                        comp = _react2.default.createElement(_TestANetCard2.default, { key: index, closeCard: _this2.props.closeCard.bind(null, index) });\n                        break;\n                    case '4':\n                        comp = _react2.default.createElement(_CreateSimpleNetCard2.default, { saveNetwork: _this2.saveNetwork.bind(_this2), key: index, closeCard: _this2.props.closeCard.bind(null, index) });\n                        break;\n                    case '5':\n                        break;\n                    default:\n                        return _react2.default.createElement('div', null);\n                }\n                return comp;\n            });\n            return cards;\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                null,\n                this.props.user ? this.screenComponents() : /* <div><Landscape /><Login loadUser={this.props.loadUser} /></div> */this.screenComponents()\n            );\n        }\n    }]);\n\n    return Play;\n}(_react2.default.Component);\n\nPlay.propTypes = {\n    user: _propTypes2.default.object,\n    loadUser: _propTypes2.default.func,\n    cardScreens: _propTypes2.default.array,\n    showCardScreen: _propTypes2.default.func,\n    closeCard: _propTypes2.default.func,\n    loadNetwork: _propTypes2.default.func\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n    return {\n        user: state.play.user,\n        cardScreens: state.play.cardScreens\n    };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n    return {\n        loadUser: function loadUser(user) {\n            return dispatch({ type: 'loadUser', user: user });\n        },\n        showCardScreen: function showCardScreen(cardIndex) {\n            return dispatch({ type: 'showCardScreen', cardIndex: cardIndex });\n        },\n        closeCard: function closeCard(index) {\n            return dispatch({ type: 'closeCard', index: index });\n        },\n        loadNetwork: function loadNetwork(networkJSON) {\n            return dispatch({ type: 'loadNetwork', networkJSON: networkJSON });\n        }\n    };\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Play);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzczLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbnRhaW5lcnMvbGliL1BsYXkuanM/MTA0MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5pbXBvcnQgTGFuZHNjYXBlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcGxheS9MYW5kc2NhcGUnO1xuaW1wb3J0IExvZ2luIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcGxheS9Mb2dpbic7XG5cbmltcG9ydCBQbGF5QXBwYmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcGxheS9wbGF5Z3JvdW5kL1BsYXlBcHBiYXInO1xuaW1wb3J0IFNpZGVCYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wbGF5L3BsYXlncm91bmQvU2lkZUJhcic7XG5cbmltcG9ydCBDcmVhdGVTaW1wbGVOZXRDYXJkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcGxheS9wbGF5Z3JvdW5kL0NyZWF0ZVNpbXBsZU5ldENhcmQnO1xuaW1wb3J0IFRlc3RBTmV0Q2FyZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3BsYXkvcGxheWdyb3VuZC9UZXN0QU5ldENhcmQnO1xuXG5pbXBvcnQgJy4uLy4uL2Fzc2V0cy9zdHlsZXNoZWV0cy9wbGF5JztcblxuY2xhc3MgUGxheSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICBzYXZlTmV0d29yayhuZXR3b3JrSlNPTikge1xuICAgICAgICBheGlvcy5wb3N0KCcvc2F2ZU5ldHdvcmsnLCB7bmV0d29yazogbmV0d29ya0pTT059KTtcbiAgICAgICAgdGhpcy5wcm9wcy5sb2FkTmV0d29yayhuZXR3b3JrSlNPTik7XG4gICAgfVxuICAgIHNjcmVlbkNvbXBvbmVudHMoKSB7XG4gICAgICAgIHJldHVybig8ZGl2PlxuICAgICAgICAgICAgPFBsYXlBcHBiYXIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1kaXZcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGUtYmFyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxTaWRlQmFyIHNob3dDYXJkU2NyZWVuPXt0aGlzLnByb3BzLnNob3dDYXJkU2NyZWVufSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1jb250ZW50LWRpdi1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWNvbnRlbnQtZGl2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zY3JlZW5DYXJkcygpfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj4pO1xuICAgIH1cbiAgICBzY3JlZW5DYXJkcygpIHtcbiAgICAgICAgY29uc3QgY2FyZHMgPSB0aGlzLnByb3BzLmNhcmRTY3JlZW5zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGxldCBjb21wID0gbnVsbDtcbiAgICAgICAgICAgIHN3aXRjaChpdGVtKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnMSc6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJzInOlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICczJzpcbiAgICAgICAgICAgICAgICAgICAgY29tcCA9IDxUZXN0QU5ldENhcmQga2V5PXtpbmRleH0gY2xvc2VDYXJkPXt0aGlzLnByb3BzLmNsb3NlQ2FyZC5iaW5kKG51bGwsIGluZGV4KX0gLz47XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJzQnOlxuICAgICAgICAgICAgICAgICAgICBjb21wID0gPENyZWF0ZVNpbXBsZU5ldENhcmQgc2F2ZU5ldHdvcms9e3RoaXMuc2F2ZU5ldHdvcmsuYmluZCh0aGlzKX0ga2V5PXtpbmRleH0gY2xvc2VDYXJkPXt0aGlzLnByb3BzLmNsb3NlQ2FyZC5iaW5kKG51bGwsIGluZGV4KX0gLz47XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJzUnOlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiAvPjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjb21wO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGNhcmRzO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy51c2VyXG4gICAgICAgICAgICAgICAgICAgID8gdGhpcy5zY3JlZW5Db21wb25lbnRzKClcbiAgICAgICAgICAgICAgICAgICAgOiAvKiA8ZGl2PjxMYW5kc2NhcGUgLz48TG9naW4gbG9hZFVzZXI9e3RoaXMucHJvcHMubG9hZFVzZXJ9IC8+PC9kaXY+ICovIHRoaXMuc2NyZWVuQ29tcG9uZW50cygpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5QbGF5LnByb3BUeXBlcyA9IHtcbiAgICB1c2VyOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGxvYWRVc2VyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBjYXJkU2NyZWVuczogUHJvcFR5cGVzLmFycmF5LFxuICAgIHNob3dDYXJkU2NyZWVuOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBjbG9zZUNhcmQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIGxvYWROZXR3b3JrOiBQcm9wVHlwZXMuZnVuY1xufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXNlcjogc3RhdGUucGxheS51c2VyLFxuICAgICAgICBjYXJkU2NyZWVuczogc3RhdGUucGxheS5jYXJkU2NyZWVuc1xuICAgIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IChcbiAgICB7XG4gICAgICAgIGxvYWRVc2VyOiB1c2VyID0+IGRpc3BhdGNoKHt0eXBlOiAnbG9hZFVzZXInLCB1c2VyfSksXG4gICAgICAgIHNob3dDYXJkU2NyZWVuOiBjYXJkSW5kZXggPT4gZGlzcGF0Y2goe3R5cGU6ICdzaG93Q2FyZFNjcmVlbicsIGNhcmRJbmRleH0pLFxuICAgICAgICBjbG9zZUNhcmQ6IGluZGV4ID0+IGRpc3BhdGNoKHt0eXBlOiAnY2xvc2VDYXJkJywgaW5kZXh9KSxcbiAgICAgICAgbG9hZE5ldHdvcms6IG5ldHdvcmtKU09OID0+IGRpc3BhdGNoKHt0eXBlOiAnbG9hZE5ldHdvcmsnLCBuZXR3b3JrSlNPTn0pXG4gICAgfVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgICBtYXBTdGF0ZVRvUHJvcHMsXG4gICAgbWFwRGlzcGF0Y2hUb1Byb3BzXG4pKFBsYXkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGZyb250ZW5kL2NvbnRhaW5lcnMvbGliL1BsYXkuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQUpBO0FBRkE7QUFhQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWRBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFRQTs7OztBQXhEQTtBQUNBO0FBMERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUpBO0FBREE7QUFDQTtBQVFBIiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})