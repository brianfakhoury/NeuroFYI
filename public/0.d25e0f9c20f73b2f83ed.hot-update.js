webpackHotUpdate(0,{

/***/ 377:
/* unknown exports provided */
/* all exports used */
/*!*****************************************!*\
  !*** ./frontend/containers/lib/Play.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _propTypes = __webpack_require__(/*! prop-types */ 2);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ 68);\n\nvar _axios = __webpack_require__(/*! axios */ 201);\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _Landscape = __webpack_require__(/*! ../../components/play/Landscape */ 363);\n\nvar _Landscape2 = _interopRequireDefault(_Landscape);\n\nvar _Login = __webpack_require__(/*! ../../components/play/Login */ 364);\n\nvar _Login2 = _interopRequireDefault(_Login);\n\nvar _PlayAppbar = __webpack_require__(/*! ../../components/play/playground/PlayAppbar */ 368);\n\nvar _PlayAppbar2 = _interopRequireDefault(_PlayAppbar);\n\nvar _SideBar = __webpack_require__(/*! ../../components/play/playground/SideBar */ 369);\n\nvar _SideBar2 = _interopRequireDefault(_SideBar);\n\nvar _ViewYourNetworksCard = __webpack_require__(/*! ../../components/play/playground/ViewYourNetworksCard */ 371);\n\nvar _ViewYourNetworksCard2 = _interopRequireDefault(_ViewYourNetworksCard);\n\nvar _ConnectNetworksCard = __webpack_require__(/*! ../../components/play/playground/ConnectNetworksCard */ 365);\n\nvar _ConnectNetworksCard2 = _interopRequireDefault(_ConnectNetworksCard);\n\nvar _TestANetCard = __webpack_require__(/*! ../../components/play/playground/TestANetCard */ 370);\n\nvar _TestANetCard2 = _interopRequireDefault(_TestANetCard);\n\nvar _CreateSimpleNetCard = __webpack_require__(/*! ../../components/play/playground/CreateSimpleNetCard */ 367);\n\nvar _CreateSimpleNetCard2 = _interopRequireDefault(_CreateSimpleNetCard);\n\nvar _CreateAHopNetCard = __webpack_require__(/*! ../../components/play/playground/CreateAHopNetCard */ 366);\n\nvar _CreateAHopNetCard2 = _interopRequireDefault(_CreateAHopNetCard);\n\n__webpack_require__(/*! ../../assets/stylesheets/play */ 909);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Play = function (_React$Component) {\n    _inherits(Play, _React$Component);\n\n    function Play(props) {\n        _classCallCheck(this, Play);\n\n        return _possibleConstructorReturn(this, (Play.__proto__ || Object.getPrototypeOf(Play)).call(this, props));\n    }\n\n    _createClass(Play, [{\n        key: 'getUserNetworks',\n        value: function getUserNetworks() {\n            var _this2 = this;\n\n            _axios2.default.post('/api/user/networks').then(function (_ref) {\n                var data = _ref.data;\n\n                data.foreach(function (network) {\n                    return _this2.props.loadNetwork(network.data);\n                });\n            });\n        }\n    }, {\n        key: 'saveNetwork',\n        value: function saveNetwork(networkJSON) {\n            _axios2.default.post('/api/save/network', { network: networkJSON });\n            this.props.loadNetwork(networkJSON);\n        }\n    }, {\n        key: 'logout',\n        value: function logout() {\n            this.props.logoutUser();\n            _axios2.default.post('/logout');\n        }\n    }, {\n        key: 'screenComponents',\n        value: function screenComponents() {\n            this.getUserNetworks();\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(_PlayAppbar2.default, { logout: this.props.logoutUser.bind(this) }),\n                _react2.default.createElement(\n                    'div',\n                    { className: 'content-div' },\n                    _react2.default.createElement(\n                        'div',\n                        { className: 'side-bar' },\n                        _react2.default.createElement(_SideBar2.default, { showCardScreen: this.props.showCardScreen })\n                    ),\n                    _react2.default.createElement(\n                        'div',\n                        { className: 'main-content-div-container' },\n                        _react2.default.createElement(\n                            'div',\n                            { className: 'main-content-div' },\n                            this.screenCards()\n                        )\n                    )\n                )\n            );\n        }\n    }, {\n        key: 'screenCards',\n        value: function screenCards() {\n            var _this3 = this;\n\n            var cards = this.props.cardScreens.map(function (item, index) {\n                var comp = null;\n                switch (item) {\n                    case '1':\n                        comp = _react2.default.createElement(_ViewYourNetworksCard2.default, { key: index, closeCard: _this3.props.closeCard.bind(null, index) });\n                        break;\n                    case '2':\n                        comp = _react2.default.createElement(_ConnectNetworksCard2.default, { key: index, closeCard: _this3.props.closeCard.bind(null, index) });\n                        break;\n                    case '3':\n                        comp = _react2.default.createElement(_TestANetCard2.default, { networks: _this3.props.networks, key: index, closeCard: _this3.props.closeCard.bind(null, index) });\n                        break;\n                    case '4':\n                        comp = _react2.default.createElement(_CreateSimpleNetCard2.default, { saveNetwork: _this3.saveNetwork.bind(_this3), key: index, closeCard: _this3.props.closeCard.bind(null, index) });\n                        break;\n                    case '5':\n                        comp = _react2.default.createElement(_CreateAHopNetCard2.default, { key: index, closeCard: _this3.props.closeCard.bind(null, index) });\n                        break;\n                    default:\n                        return _react2.default.createElement('div', null);\n                }\n                return comp;\n            });\n            return cards;\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                null,\n                this.props.user ? this.screenComponents() : _react2.default.createElement(\n                    'div',\n                    null,\n                    _react2.default.createElement(_Landscape2.default, null),\n                    _react2.default.createElement(_Login2.default, { loadUser: this.props.loadUser })\n                )\n            );\n        }\n    }]);\n\n    return Play;\n}(_react2.default.Component);\n\nPlay.propTypes = {\n    user: _propTypes2.default.object,\n    loadUser: _propTypes2.default.func,\n    cardScreens: _propTypes2.default.array,\n    showCardScreen: _propTypes2.default.func,\n    closeCard: _propTypes2.default.func,\n    loadNetwork: _propTypes2.default.func,\n    networks: _propTypes2.default.array,\n    logoutUser: _propTypes2.default.func\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n    return {\n        user: state.play.user,\n        cardScreens: state.play.cardScreens,\n        networks: state.play.networks\n    };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n    return {\n        loadUser: function loadUser(user) {\n            return dispatch({ type: 'loadUser', user: user });\n        },\n        showCardScreen: function showCardScreen(cardIndex) {\n            return dispatch({ type: 'showCardScreen', cardIndex: cardIndex });\n        },\n        closeCard: function closeCard(index) {\n            return dispatch({ type: 'closeCard', index: index });\n        },\n        loadNetwork: function loadNetwork(networkJSON) {\n            return dispatch({ type: 'loadNetwork', networkJSON: networkJSON });\n        },\n        logoutUser: function logoutUser() {\n            return dispatch({ type: 'logout' });\n        }\n    };\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Play);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzc3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbnRhaW5lcnMvbGliL1BsYXkuanM/MTA0MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5pbXBvcnQgTGFuZHNjYXBlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcGxheS9MYW5kc2NhcGUnO1xuaW1wb3J0IExvZ2luIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcGxheS9Mb2dpbic7XG5cbmltcG9ydCBQbGF5QXBwYmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcGxheS9wbGF5Z3JvdW5kL1BsYXlBcHBiYXInO1xuaW1wb3J0IFNpZGVCYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wbGF5L3BsYXlncm91bmQvU2lkZUJhcic7XG5cbmltcG9ydCBWaWV3WW91ck5ldHdvcmtzQ2FyZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3BsYXkvcGxheWdyb3VuZC9WaWV3WW91ck5ldHdvcmtzQ2FyZCc7XG5pbXBvcnQgQ29ubmVjdE5ldHdvcmtzQ2FyZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3BsYXkvcGxheWdyb3VuZC9Db25uZWN0TmV0d29ya3NDYXJkJztcbmltcG9ydCBUZXN0QU5ldENhcmQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wbGF5L3BsYXlncm91bmQvVGVzdEFOZXRDYXJkJztcbmltcG9ydCBDcmVhdGVTaW1wbGVOZXRDYXJkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcGxheS9wbGF5Z3JvdW5kL0NyZWF0ZVNpbXBsZU5ldENhcmQnO1xuaW1wb3J0IENyZWF0ZUFIb3BOZXRDYXJkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcGxheS9wbGF5Z3JvdW5kL0NyZWF0ZUFIb3BOZXRDYXJkJztcblxuaW1wb3J0ICcuLi8uLi9hc3NldHMvc3R5bGVzaGVldHMvcGxheSc7XG5cbmNsYXNzIFBsYXkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgZ2V0VXNlck5ldHdvcmtzKCkge1xuICAgICAgICBheGlvcy5wb3N0KCcvYXBpL3VzZXIvbmV0d29ya3MnKS50aGVuKCh7ZGF0YX0pPT57XG4gICAgICAgICAgICBkYXRhLmZvcmVhY2goKG5ldHdvcmspPT50aGlzLnByb3BzLmxvYWROZXR3b3JrKG5ldHdvcmsuZGF0YSkpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc2F2ZU5ldHdvcmsobmV0d29ya0pTT04pIHtcbiAgICAgICAgYXhpb3MucG9zdCgnL2FwaS9zYXZlL25ldHdvcmsnLCB7bmV0d29yazogbmV0d29ya0pTT059KTtcbiAgICAgICAgdGhpcy5wcm9wcy5sb2FkTmV0d29yayhuZXR3b3JrSlNPTik7XG4gICAgfVxuICAgIGxvZ291dCgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5sb2dvdXRVc2VyKCk7XG4gICAgICAgIGF4aW9zLnBvc3QoJy9sb2dvdXQnKTtcbiAgICB9XG4gICAgc2NyZWVuQ29tcG9uZW50cygpIHtcbiAgICAgICAgdGhpcy5nZXRVc2VyTmV0d29ya3MoKTtcbiAgICAgICAgcmV0dXJuKDxkaXY+XG4gICAgICAgICAgICA8UGxheUFwcGJhciBsb2dvdXQ9e3RoaXMucHJvcHMubG9nb3V0VXNlci5iaW5kKHRoaXMpfSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWRpdlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZS1iYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPFNpZGVCYXIgc2hvd0NhcmRTY3JlZW49e3RoaXMucHJvcHMuc2hvd0NhcmRTY3JlZW59IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWNvbnRlbnQtZGl2LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tY29udGVudC1kaXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnNjcmVlbkNhcmRzKCl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2Pik7XG4gICAgfVxuICAgIHNjcmVlbkNhcmRzKCkge1xuICAgICAgICBjb25zdCBjYXJkcyA9IHRoaXMucHJvcHMuY2FyZFNjcmVlbnMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgbGV0IGNvbXAgPSBudWxsO1xuICAgICAgICAgICAgc3dpdGNoKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICBjYXNlICcxJzpcbiAgICAgICAgICAgICAgICAgICAgY29tcCA9IDxWaWV3WW91ck5ldHdvcmtzQ2FyZCBrZXk9e2luZGV4fSBjbG9zZUNhcmQ9e3RoaXMucHJvcHMuY2xvc2VDYXJkLmJpbmQobnVsbCwgaW5kZXgpfSAvPjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnMic6XG4gICAgICAgICAgICAgICAgICAgIGNvbXAgPSA8Q29ubmVjdE5ldHdvcmtzQ2FyZCBrZXk9e2luZGV4fSBjbG9zZUNhcmQ9e3RoaXMucHJvcHMuY2xvc2VDYXJkLmJpbmQobnVsbCwgaW5kZXgpfSAvPjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnMyc6XG4gICAgICAgICAgICAgICAgICAgIGNvbXAgPSA8VGVzdEFOZXRDYXJkIG5ldHdvcmtzPXt0aGlzLnByb3BzLm5ldHdvcmtzfSBrZXk9e2luZGV4fSBjbG9zZUNhcmQ9e3RoaXMucHJvcHMuY2xvc2VDYXJkLmJpbmQobnVsbCwgaW5kZXgpfSAvPjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnNCc6XG4gICAgICAgICAgICAgICAgICAgIGNvbXAgPSA8Q3JlYXRlU2ltcGxlTmV0Q2FyZCBzYXZlTmV0d29yaz17dGhpcy5zYXZlTmV0d29yay5iaW5kKHRoaXMpfSBrZXk9e2luZGV4fSBjbG9zZUNhcmQ9e3RoaXMucHJvcHMuY2xvc2VDYXJkLmJpbmQobnVsbCwgaW5kZXgpfSAvPjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnNSc6XG4gICAgICAgICAgICAgICAgICAgIGNvbXAgPSA8Q3JlYXRlQUhvcE5ldENhcmQga2V5PXtpbmRleH0gY2xvc2VDYXJkPXt0aGlzLnByb3BzLmNsb3NlQ2FyZC5iaW5kKG51bGwsIGluZGV4KX0gLz47XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IC8+O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNvbXA7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gY2FyZHM7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnVzZXJcbiAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnNjcmVlbkNvbXBvbmVudHMoKVxuICAgICAgICAgICAgICAgICAgICA6IDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFuZHNjYXBlIC8+PExvZ2luIGxvYWRVc2VyPXt0aGlzLnByb3BzLmxvYWRVc2VyfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIHt0aGlzLnNjcmVlbkNvbXBvbmVudHMoKX0gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblBsYXkucHJvcFR5cGVzID0ge1xuICAgIHVzZXI6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgbG9hZFVzZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIGNhcmRTY3JlZW5zOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgc2hvd0NhcmRTY3JlZW46IFByb3BUeXBlcy5mdW5jLFxuICAgIGNsb3NlQ2FyZDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgbG9hZE5ldHdvcms6IFByb3BUeXBlcy5mdW5jLFxuICAgIG5ldHdvcmtzOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgbG9nb3V0VXNlcjogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHVzZXI6IHN0YXRlLnBsYXkudXNlcixcbiAgICAgICAgY2FyZFNjcmVlbnM6IHN0YXRlLnBsYXkuY2FyZFNjcmVlbnMsXG4gICAgICAgIG5ldHdvcmtzOiBzdGF0ZS5wbGF5Lm5ldHdvcmtzXG4gICAgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKFxuICAgIHtcbiAgICAgICAgbG9hZFVzZXI6IHVzZXIgPT4gZGlzcGF0Y2goe3R5cGU6ICdsb2FkVXNlcicsIHVzZXJ9KSxcbiAgICAgICAgc2hvd0NhcmRTY3JlZW46IGNhcmRJbmRleCA9PiBkaXNwYXRjaCh7dHlwZTogJ3Nob3dDYXJkU2NyZWVuJywgY2FyZEluZGV4fSksXG4gICAgICAgIGNsb3NlQ2FyZDogaW5kZXggPT4gZGlzcGF0Y2goe3R5cGU6ICdjbG9zZUNhcmQnLCBpbmRleH0pLFxuICAgICAgICBsb2FkTmV0d29yazogbmV0d29ya0pTT04gPT4gZGlzcGF0Y2goe3R5cGU6ICdsb2FkTmV0d29yaycsIG5ldHdvcmtKU09OfSksXG4gICAgICAgIGxvZ291dFVzZXI6ICgpID0+IGRpc3BhdGNoKHt0eXBlOiAnbG9nb3V0J30pXG4gICAgfVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgICBtYXBTdGF0ZVRvUHJvcHMsXG4gICAgbWFwRGlzcGF0Y2hUb1Byb3BzXG4pKFBsYXkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGZyb250ZW5kL2NvbnRhaW5lcnMvbGliL1BsYXkuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7OztBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQUpBO0FBRkE7QUFhQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWpCQTtBQW1CQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBREE7QUFKQTtBQVdBOzs7O0FBeEVBO0FBQ0E7QUEwRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBTEE7QUFEQTtBQUNBO0FBU0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})