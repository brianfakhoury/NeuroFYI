webpackHotUpdate(0,{

/***/ 370:
/* unknown exports provided */
/* all exports used */
/*!*************************************************************!*\
  !*** ./frontend/components/play/playground/TestANetCard.js ***!
  \*************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ 2);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _IconButton = __webpack_require__(/*! material-ui/IconButton */ 37);\n\nvar _IconButton2 = _interopRequireDefault(_IconButton);\n\nvar _close = __webpack_require__(/*! material-ui/svg-icons/navigation/close */ 81);\n\nvar _close2 = _interopRequireDefault(_close);\n\nvar _DropDownMenu = __webpack_require__(/*! material-ui/DropDownMenu */ 627);\n\nvar _DropDownMenu2 = _interopRequireDefault(_DropDownMenu);\n\nvar _MenuItem = __webpack_require__(/*! material-ui/MenuItem */ 636);\n\nvar _MenuItem2 = _interopRequireDefault(_MenuItem);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar TestANetCard = function (_React$Component) {\n    _inherits(TestANetCard, _React$Component);\n\n    function TestANetCard(props) {\n        _classCallCheck(this, TestANetCard);\n\n        var _this = _possibleConstructorReturn(this, (TestANetCard.__proto__ || Object.getPrototypeOf(TestANetCard)).call(this, props));\n\n        _this.state = {\n            NN: {},\n            NN_key: -1\n        };\n        return _this;\n    }\n\n    _createClass(TestANetCard, [{\n        key: 'loadTestNetwork',\n        value: function loadTestNetwork(e, key) {\n            console.log(key);\n            this.setState({ NN: this.props.networks[key], NN_key: key });\n        }\n    }, {\n        key: 'renderNetworkList',\n        value: function renderNetworkList() {\n            var returnElement = [_react2.default.createElement(_MenuItem2.default, { key: -1, value: -1, primaryText: 'Choose one of your networks' })];\n            this.props.networks.forEach(function (NN, index) {\n                console.log(index);\n                returnElement.push(_react2.default.createElement(_MenuItem2.default, { key: index, value: index, primaryText: NN.description }));\n            });\n            return returnElement;\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this2 = this;\n\n            return _react2.default.createElement(\n                'div',\n                { className: 'card-content-container' },\n                _react2.default.createElement(\n                    _IconButton2.default,\n                    { className: 'close-button', onTouchTap: function onTouchTap() {\n                            return _this2.props.closeCard();\n                        } },\n                    _react2.default.createElement(_close2.default, null)\n                ),\n                _react2.default.createElement(\n                    'div',\n                    { className: 'card-content create-simple-net' },\n                    _react2.default.createElement(\n                        'h1',\n                        null,\n                        'Activate and Test!'\n                    ),\n                    _react2.default.createElement('hr', null),\n                    _react2.default.createElement(\n                        _DropDownMenu2.default,\n                        { value: this.state.NN_key, onChange: this.loadTestNetwork.bind(this) },\n                        this.renderNetworkList()\n                    )\n                )\n            );\n        }\n    }]);\n\n    return TestANetCard;\n}(_react2.default.Component);\n\nTestANetCard.propTypes = {\n    closeCard: _propTypes2.default.func,\n    networks: _propTypes2.default.array\n};\n\nexports.default = TestANetCard;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzcwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbXBvbmVudHMvcGxheS9wbGF5Z3JvdW5kL1Rlc3RBTmV0Q2FyZC5qcz84OTI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvSWNvbkJ1dHRvbic7XG5pbXBvcnQgTmF2aWdhdGlvbkNsb3NlIGZyb20gJ21hdGVyaWFsLXVpL3N2Zy1pY29ucy9uYXZpZ2F0aW9uL2Nsb3NlJztcbmltcG9ydCBEcm9wRG93bk1lbnUgZnJvbSAnbWF0ZXJpYWwtdWkvRHJvcERvd25NZW51JztcbmltcG9ydCBNZW51SXRlbSBmcm9tICdtYXRlcmlhbC11aS9NZW51SXRlbSc7XG5cbmNsYXNzIFRlc3RBTmV0Q2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgTk46IHt9LFxuICAgICAgICAgICAgTk5fa2V5OiAtMVxuICAgICAgICB9O1xuICAgIH1cbiAgICBsb2FkVGVzdE5ldHdvcmsoZSwga2V5KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGtleSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe05OOiB0aGlzLnByb3BzLm5ldHdvcmtzW2tleV0sIE5OX2tleToga2V5fSk7XG4gICAgfVxuICAgIHJlbmRlck5ldHdvcmtMaXN0KCkge1xuICAgICAgICBjb25zdCByZXR1cm5FbGVtZW50ID0gWzxNZW51SXRlbSBrZXk9ey0xfSB2YWx1ZT17LTF9IHByaW1hcnlUZXh0PXsnQ2hvb3NlIG9uZSBvZiB5b3VyIG5ldHdvcmtzJ30gLz5dO1xuICAgICAgICB0aGlzLnByb3BzLm5ldHdvcmtzLmZvckVhY2goKE5OLCBpbmRleCk9PntcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGluZGV4KTtcbiAgICAgICAgICAgIHJldHVybkVsZW1lbnQucHVzaCg8TWVudUl0ZW0ga2V5PXtpbmRleH0gdmFsdWU9e2luZGV4fSBwcmltYXJ5VGV4dD17Tk4uZGVzY3JpcHRpb259IC8+KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXR1cm5FbGVtZW50O1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGNsYXNzTmFtZT1cImNsb3NlLWJ1dHRvblwiIG9uVG91Y2hUYXA9eygpPT50aGlzLnByb3BzLmNsb3NlQ2FyZCgpfSA+PE5hdmlnYXRpb25DbG9zZSAvPjwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudCBjcmVhdGUtc2ltcGxlLW5ldFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDE+QWN0aXZhdGUgYW5kIFRlc3QhPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxEcm9wRG93bk1lbnUgdmFsdWU9e3RoaXMuc3RhdGUuTk5fa2V5fSBvbkNoYW5nZT17dGhpcy5sb2FkVGVzdE5ldHdvcmsuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyTmV0d29ya0xpc3QoKX1cbiAgICAgICAgICAgICAgICAgICAgPC9Ecm9wRG93bk1lbnU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblRlc3RBTmV0Q2FyZC5wcm9wVHlwZXMgPSB7XG4gICAgY2xvc2VDYXJkOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBuZXR3b3JrczogUHJvcFR5cGVzLmFycmF5XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUZXN0QU5ldENhcmQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZnJvbnRlbmQvY29tcG9uZW50cy9wbGF5L3BsYXlncm91bmQvVGVzdEFOZXRDYXJkLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBTUE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUhBO0FBRkE7QUFXQTs7OztBQWpDQTtBQUNBO0FBbUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})