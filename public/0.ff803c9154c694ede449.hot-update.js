webpackHotUpdate(0,{

/***/ 377:
/* unknown exports provided */
/* all exports used */
/*!*****************************************!*\
  !*** ./frontend/containers/lib/Play.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _propTypes = __webpack_require__(/*! prop-types */ 2);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ 68);\n\nvar _axios = __webpack_require__(/*! axios */ 201);\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _Landscape = __webpack_require__(/*! ../../components/play/Landscape */ 363);\n\nvar _Landscape2 = _interopRequireDefault(_Landscape);\n\nvar _Login = __webpack_require__(/*! ../../components/play/Login */ 364);\n\nvar _Login2 = _interopRequireDefault(_Login);\n\nvar _PlayAppbar = __webpack_require__(/*! ../../components/play/playground/PlayAppbar */ 368);\n\nvar _PlayAppbar2 = _interopRequireDefault(_PlayAppbar);\n\nvar _SideBar = __webpack_require__(/*! ../../components/play/playground/SideBar */ 369);\n\nvar _SideBar2 = _interopRequireDefault(_SideBar);\n\nvar _ViewYourNetworksCard = __webpack_require__(/*! ../../components/play/playground/ViewYourNetworksCard */ 371);\n\nvar _ViewYourNetworksCard2 = _interopRequireDefault(_ViewYourNetworksCard);\n\nvar _ConnectNetworksCard = __webpack_require__(/*! ../../components/play/playground/ConnectNetworksCard */ 365);\n\nvar _ConnectNetworksCard2 = _interopRequireDefault(_ConnectNetworksCard);\n\nvar _TestANetCard = __webpack_require__(/*! ../../components/play/playground/TestANetCard */ 370);\n\nvar _TestANetCard2 = _interopRequireDefault(_TestANetCard);\n\nvar _CreateSimpleNetCard = __webpack_require__(/*! ../../components/play/playground/CreateSimpleNetCard */ 367);\n\nvar _CreateSimpleNetCard2 = _interopRequireDefault(_CreateSimpleNetCard);\n\nvar _CreateAHopNetCard = __webpack_require__(/*! ../../components/play/playground/CreateAHopNetCard */ 366);\n\nvar _CreateAHopNetCard2 = _interopRequireDefault(_CreateAHopNetCard);\n\n__webpack_require__(/*! ../../assets/stylesheets/play */ 909);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Play = function (_React$Component) {\n    _inherits(Play, _React$Component);\n\n    function Play(props) {\n        _classCallCheck(this, Play);\n\n        return _possibleConstructorReturn(this, (Play.__proto__ || Object.getPrototypeOf(Play)).call(this, props));\n    }\n\n    _createClass(Play, [{\n        key: 'getUserNetworks',\n        value: function getUserNetworks() {\n            var _this2 = this;\n\n            _axios2.default.post('/api/user/networks').then(function (_ref) {\n                var data = _ref.data;\n\n                console.log(data);\n                data.forEach(function (network) {\n                    return _this2.props.loadNetwork(network.data);\n                });\n            });\n        }\n    }, {\n        key: 'saveNetwork',\n        value: function saveNetwork(networkJSON) {\n            _axios2.default.post('/api/save/network', { network: networkJSON });\n            this.props.loadNetwork(networkJSON);\n        }\n    }, {\n        key: 'logout',\n        value: function logout() {\n            this.props.logoutUser();\n            _axios2.default.post('/logout');\n        }\n    }, {\n        key: 'screenComponents',\n        value: function screenComponents() {\n            if (!this.props.user) {\n                this.getUserNetworks();\n                this.props.loadUser(true);\n            }\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(_PlayAppbar2.default, { logout: this.props.logoutUser.bind(this) }),\n                _react2.default.createElement(\n                    'div',\n                    { className: 'content-div' },\n                    _react2.default.createElement(\n                        'div',\n                        { className: 'side-bar' },\n                        _react2.default.createElement(_SideBar2.default, { showCardScreen: this.props.showCardScreen })\n                    ),\n                    _react2.default.createElement(\n                        'div',\n                        { className: 'main-content-div-container' },\n                        _react2.default.createElement(\n                            'div',\n                            { className: 'main-content-div' },\n                            this.screenCards()\n                        )\n                    )\n                )\n            );\n        }\n    }, {\n        key: 'screenCards',\n        value: function screenCards() {\n            var _this3 = this;\n\n            var cards = this.props.cardScreens.map(function (item, index) {\n                var comp = null;\n                switch (item) {\n                    case '1':\n                        comp = _react2.default.createElement(_ViewYourNetworksCard2.default, { key: index, closeCard: _this3.props.closeCard.bind(null, index) });\n                        break;\n                    case '2':\n                        comp = _react2.default.createElement(_ConnectNetworksCard2.default, { key: index, closeCard: _this3.props.closeCard.bind(null, index) });\n                        break;\n                    case '3':\n                        comp = _react2.default.createElement(_TestANetCard2.default, { networks: _this3.props.networks, key: index, closeCard: _this3.props.closeCard.bind(null, index) });\n                        break;\n                    case '4':\n                        comp = _react2.default.createElement(_CreateSimpleNetCard2.default, { saveNetwork: _this3.saveNetwork.bind(_this3), key: index, closeCard: _this3.props.closeCard.bind(null, index) });\n                        break;\n                    case '5':\n                        comp = _react2.default.createElement(_CreateAHopNetCard2.default, { key: index, closeCard: _this3.props.closeCard.bind(null, index) });\n                        break;\n                    default:\n                        return _react2.default.createElement('div', null);\n                }\n                return comp;\n            });\n            return cards;\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                null,\n                this.props.user ? this.screenComponents() : _react2.default.createElement(\n                    'div',\n                    null,\n                    _react2.default.createElement(_Landscape2.default, null),\n                    _react2.default.createElement(_Login2.default, { loadUser: this.props.loadUser })\n                )\n            );\n        }\n    }]);\n\n    return Play;\n}(_react2.default.Component);\n\nPlay.propTypes = {\n    user: _propTypes2.default.bool,\n    loadUser: _propTypes2.default.func,\n    cardScreens: _propTypes2.default.array,\n    showCardScreen: _propTypes2.default.func,\n    closeCard: _propTypes2.default.func,\n    loadNetwork: _propTypes2.default.func,\n    networks: _propTypes2.default.array,\n    logoutUser: _propTypes2.default.func\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n    return {\n        user: state.play.user,\n        cardScreens: state.play.cardScreens,\n        networks: state.play.networks\n    };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n    return {\n        loadUser: function loadUser() {\n            return dispatch({ type: 'loadUser' });\n        },\n        showCardScreen: function showCardScreen(cardIndex) {\n            return dispatch({ type: 'showCardScreen', cardIndex: cardIndex });\n        },\n        closeCard: function closeCard(index) {\n            return dispatch({ type: 'closeCard', index: index });\n        },\n        loadNetwork: function loadNetwork(networkJSON) {\n            return dispatch({ type: 'loadNetwork', networkJSON: networkJSON });\n        },\n        logoutUser: function logoutUser() {\n            return dispatch({ type: 'logout' });\n        }\n    };\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Play);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzc3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbnRhaW5lcnMvbGliL1BsYXkuanM/MTA0MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5pbXBvcnQgTGFuZHNjYXBlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcGxheS9MYW5kc2NhcGUnO1xuaW1wb3J0IExvZ2luIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcGxheS9Mb2dpbic7XG5cbmltcG9ydCBQbGF5QXBwYmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcGxheS9wbGF5Z3JvdW5kL1BsYXlBcHBiYXInO1xuaW1wb3J0IFNpZGVCYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wbGF5L3BsYXlncm91bmQvU2lkZUJhcic7XG5cbmltcG9ydCBWaWV3WW91ck5ldHdvcmtzQ2FyZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3BsYXkvcGxheWdyb3VuZC9WaWV3WW91ck5ldHdvcmtzQ2FyZCc7XG5pbXBvcnQgQ29ubmVjdE5ldHdvcmtzQ2FyZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3BsYXkvcGxheWdyb3VuZC9Db25uZWN0TmV0d29ya3NDYXJkJztcbmltcG9ydCBUZXN0QU5ldENhcmQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wbGF5L3BsYXlncm91bmQvVGVzdEFOZXRDYXJkJztcbmltcG9ydCBDcmVhdGVTaW1wbGVOZXRDYXJkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcGxheS9wbGF5Z3JvdW5kL0NyZWF0ZVNpbXBsZU5ldENhcmQnO1xuaW1wb3J0IENyZWF0ZUFIb3BOZXRDYXJkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcGxheS9wbGF5Z3JvdW5kL0NyZWF0ZUFIb3BOZXRDYXJkJztcblxuaW1wb3J0ICcuLi8uLi9hc3NldHMvc3R5bGVzaGVldHMvcGxheSc7XG5cbmNsYXNzIFBsYXkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgZ2V0VXNlck5ldHdvcmtzKCkge1xuICAgICAgICBheGlvcy5wb3N0KCcvYXBpL3VzZXIvbmV0d29ya3MnKS50aGVuKCh7ZGF0YX0pPT57XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIGRhdGEuZm9yRWFjaCgobmV0d29yayk9PnRoaXMucHJvcHMubG9hZE5ldHdvcmsobmV0d29yay5kYXRhKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzYXZlTmV0d29yayhuZXR3b3JrSlNPTikge1xuICAgICAgICBheGlvcy5wb3N0KCcvYXBpL3NhdmUvbmV0d29yaycsIHtuZXR3b3JrOiBuZXR3b3JrSlNPTn0pO1xuICAgICAgICB0aGlzLnByb3BzLmxvYWROZXR3b3JrKG5ldHdvcmtKU09OKTtcbiAgICB9XG4gICAgbG9nb3V0KCkge1xuICAgICAgICB0aGlzLnByb3BzLmxvZ291dFVzZXIoKTtcbiAgICAgICAgYXhpb3MucG9zdCgnL2xvZ291dCcpO1xuICAgIH1cbiAgICBzY3JlZW5Db21wb25lbnRzKCkge1xuICAgICAgICBpZighdGhpcy5wcm9wcy51c2VyKSB7XG4gICAgICAgICAgICB0aGlzLmdldFVzZXJOZXR3b3JrcygpO1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5sb2FkVXNlcih0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4oPGRpdj5cbiAgICAgICAgICAgIDxQbGF5QXBwYmFyIGxvZ291dD17dGhpcy5wcm9wcy5sb2dvdXRVc2VyLmJpbmQodGhpcyl9IC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtZGl2XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlLWJhclwiPlxuICAgICAgICAgICAgICAgICAgICA8U2lkZUJhciBzaG93Q2FyZFNjcmVlbj17dGhpcy5wcm9wcy5zaG93Q2FyZFNjcmVlbn0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tY29udGVudC1kaXYtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1jb250ZW50LWRpdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc2NyZWVuQ2FyZHMoKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+KTtcbiAgICB9XG4gICAgc2NyZWVuQ2FyZHMoKSB7XG4gICAgICAgIGNvbnN0IGNhcmRzID0gdGhpcy5wcm9wcy5jYXJkU2NyZWVucy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBsZXQgY29tcCA9IG51bGw7XG4gICAgICAgICAgICBzd2l0Y2goaXRlbSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJzEnOlxuICAgICAgICAgICAgICAgICAgICBjb21wID0gPFZpZXdZb3VyTmV0d29ya3NDYXJkIGtleT17aW5kZXh9IGNsb3NlQ2FyZD17dGhpcy5wcm9wcy5jbG9zZUNhcmQuYmluZChudWxsLCBpbmRleCl9IC8+O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICcyJzpcbiAgICAgICAgICAgICAgICAgICAgY29tcCA9IDxDb25uZWN0TmV0d29ya3NDYXJkIGtleT17aW5kZXh9IGNsb3NlQ2FyZD17dGhpcy5wcm9wcy5jbG9zZUNhcmQuYmluZChudWxsLCBpbmRleCl9IC8+O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICczJzpcbiAgICAgICAgICAgICAgICAgICAgY29tcCA9IDxUZXN0QU5ldENhcmQgbmV0d29ya3M9e3RoaXMucHJvcHMubmV0d29ya3N9IGtleT17aW5kZXh9IGNsb3NlQ2FyZD17dGhpcy5wcm9wcy5jbG9zZUNhcmQuYmluZChudWxsLCBpbmRleCl9IC8+O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICc0JzpcbiAgICAgICAgICAgICAgICAgICAgY29tcCA9IDxDcmVhdGVTaW1wbGVOZXRDYXJkIHNhdmVOZXR3b3JrPXt0aGlzLnNhdmVOZXR3b3JrLmJpbmQodGhpcyl9IGtleT17aW5kZXh9IGNsb3NlQ2FyZD17dGhpcy5wcm9wcy5jbG9zZUNhcmQuYmluZChudWxsLCBpbmRleCl9IC8+O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICc1JzpcbiAgICAgICAgICAgICAgICAgICAgY29tcCA9IDxDcmVhdGVBSG9wTmV0Q2FyZCBrZXk9e2luZGV4fSBjbG9zZUNhcmQ9e3RoaXMucHJvcHMuY2xvc2VDYXJkLmJpbmQobnVsbCwgaW5kZXgpfSAvPjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYgLz47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY29tcDtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBjYXJkcztcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudXNlclxuICAgICAgICAgICAgICAgICAgICA/IHRoaXMuc2NyZWVuQ29tcG9uZW50cygpXG4gICAgICAgICAgICAgICAgICAgIDogPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYW5kc2NhcGUgLz48TG9naW4gbG9hZFVzZXI9e3RoaXMucHJvcHMubG9hZFVzZXJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyoge3RoaXMuc2NyZWVuQ29tcG9uZW50cygpfSAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuUGxheS5wcm9wVHlwZXMgPSB7XG4gICAgdXNlcjogUHJvcFR5cGVzLmJvb2wsXG4gICAgbG9hZFVzZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIGNhcmRTY3JlZW5zOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgc2hvd0NhcmRTY3JlZW46IFByb3BUeXBlcy5mdW5jLFxuICAgIGNsb3NlQ2FyZDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgbG9hZE5ldHdvcms6IFByb3BUeXBlcy5mdW5jLFxuICAgIG5ldHdvcmtzOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgbG9nb3V0VXNlcjogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHVzZXI6IHN0YXRlLnBsYXkudXNlcixcbiAgICAgICAgY2FyZFNjcmVlbnM6IHN0YXRlLnBsYXkuY2FyZFNjcmVlbnMsXG4gICAgICAgIG5ldHdvcmtzOiBzdGF0ZS5wbGF5Lm5ldHdvcmtzXG4gICAgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKFxuICAgIHtcbiAgICAgICAgbG9hZFVzZXI6ICgpID0+IGRpc3BhdGNoKHt0eXBlOiAnbG9hZFVzZXInfSksXG4gICAgICAgIHNob3dDYXJkU2NyZWVuOiBjYXJkSW5kZXggPT4gZGlzcGF0Y2goe3R5cGU6ICdzaG93Q2FyZFNjcmVlbicsIGNhcmRJbmRleH0pLFxuICAgICAgICBjbG9zZUNhcmQ6IGluZGV4ID0+IGRpc3BhdGNoKHt0eXBlOiAnY2xvc2VDYXJkJywgaW5kZXh9KSxcbiAgICAgICAgbG9hZE5ldHdvcms6IG5ldHdvcmtKU09OID0+IGRpc3BhdGNoKHt0eXBlOiAnbG9hZE5ldHdvcmsnLCBuZXR3b3JrSlNPTn0pLFxuICAgICAgICBsb2dvdXRVc2VyOiAoKSA9PiBkaXNwYXRjaCh7dHlwZTogJ2xvZ291dCd9KVxuICAgIH1cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gICAgbWFwU3RhdGVUb1Byb3BzLFxuICAgIG1hcERpc3BhdGNoVG9Qcm9wc1xuKShQbGF5KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBmcm9udGVuZC9jb250YWluZXJzL2xpYi9QbGF5LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7Ozs7Ozs7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUNBOzs7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQUpBO0FBRkE7QUFhQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWpCQTtBQW1CQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBREE7QUFKQTtBQVdBOzs7O0FBNUVBO0FBQ0E7QUE4RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBTEE7QUFEQTtBQUNBO0FBU0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})