webpackHotUpdate(0,{

/***/ 338:
/* unknown exports provided */
/* all exports used */
/*!*********************************************!*\
  !*** ./frontend/components/fyi/MoreInfo.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _propTypes = __webpack_require__(/*! prop-types */ 2);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _snapsvg = __webpack_require__(/*! snapsvg */ 81);\n\nvar _snapsvg2 = _interopRequireDefault(_snapsvg);\n\nvar _FlatButton = __webpack_require__(/*! material-ui/FlatButton */ 37);\n\nvar _FlatButton2 = _interopRequireDefault(_FlatButton);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar MoreInfo = function (_React$Component) {\n    _inherits(MoreInfo, _React$Component);\n\n    function MoreInfo(props) {\n        _classCallCheck(this, MoreInfo);\n\n        return _possibleConstructorReturn(this, (MoreInfo.__proto__ || Object.getPrototypeOf(MoreInfo)).call(this, props));\n    }\n\n    _createClass(MoreInfo, [{\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            this.renderNeuronThing();\n        }\n    }, {\n        key: 'renderNeuronThing',\n        value: function renderNeuronThing() {\n            var s = (0, _snapsvg2.default)('#neuron1');\n            var circle = s.circle('10vh', '10vh', '.01vh');\n            circle.attr({ fill: \"r()#fff-#111\" });\n            setTimeout(function () {\n                circle.animate({ r: '9vh' }, 500, window.mina.easeinout);\n            }, 500);\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this2 = this;\n\n            return _react2.default.createElement(\n                'div',\n                { className: 'banner translucent' },\n                _react2.default.createElement(\n                    'div',\n                    { className: 'banner-center' },\n                    _react2.default.createElement(\n                        'h1',\n                        null,\n                        'The biological neuron and the artificial neuron.'\n                    ),\n                    _react2.default.createElement(\n                        'h2',\n                        null,\n                        'The artificial mimics the biological, learning overtime.'\n                    ),\n                    _react2.default.createElement('svg', { id: 'neuron1' }),\n                    _react2.default.createElement(\n                        'h3',\n                        null,\n                        '1. Connect artificial neurons together, and make a network.'\n                    ),\n                    _react2.default.createElement(\n                        'h3',\n                        null,\n                        '2. Pass training data through the network, and let it learn.'\n                    ),\n                    _react2.default.createElement(\n                        'h3',\n                        null,\n                        '3. Activate the network on real data, get real outputs.'\n                    ),\n                    _react2.default.createElement(_FlatButton2.default, { label: 'Make a neural network', onTouchTap: function onTouchTap() {\n                            _this2.props.changeScreen(2);\n                        }, secondary: true })\n                )\n            );\n        }\n    }]);\n\n    return MoreInfo;\n}(_react2.default.Component);\n\nMoreInfo.propTypes = {\n    changeScreen: _propTypes2.default.func\n};\n\nexports.default = MoreInfo;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzM4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbXBvbmVudHMvZnlpL01vcmVJbmZvLmpzP2I2NjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU25hcCBmcm9tICdzbmFwc3ZnJztcbmltcG9ydCBGbGF0QnV0dG9uIGZyb20gJ21hdGVyaWFsLXVpL0ZsYXRCdXR0b24nO1xuXG5jbGFzcyBNb3JlSW5mbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJOZXVyb25UaGluZygpO1xuICAgIH1cbiAgICByZW5kZXJOZXVyb25UaGluZygpIHtcbiAgICAgICAgY29uc3QgcyA9IFNuYXAoJyNuZXVyb24xJyk7XG4gICAgICAgIGNvbnN0IGNpcmNsZSA9IHMuY2lyY2xlKCcxMHZoJywgJzEwdmgnLCAnLjAxdmgnKTtcbiAgICAgICAgY2lyY2xlLmF0dHIoe2ZpbGw6IFwicigpI2ZmZi0jMTExXCJ9KTtcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e2NpcmNsZS5hbmltYXRlKHtyOiAnOXZoJ30sIDUwMCwgd2luZG93Lm1pbmEuZWFzZWlub3V0KTt9LCA1MDApO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyIHRyYW5zbHVjZW50XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5uZXItY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMT5UaGUgYmlvbG9naWNhbCBuZXVyb24gYW5kIHRoZSBhcnRpZmljaWFsIG5ldXJvbi48L2gxPlxuICAgICAgICAgICAgICAgICAgICA8aDI+VGhlIGFydGlmaWNpYWwgbWltaWNzIHRoZSBiaW9sb2dpY2FsLCBsZWFybmluZyBvdmVydGltZS48L2gyPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIGlkPVwibmV1cm9uMVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxoMz4xLiBDb25uZWN0IGFydGlmaWNpYWwgbmV1cm9ucyB0b2dldGhlciwgYW5kIG1ha2UgYSBuZXR3b3JrLjwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxoMz4yLiBQYXNzIHRyYWluaW5nIGRhdGEgdGhyb3VnaCB0aGUgbmV0d29yaywgYW5kIGxldCBpdCBsZWFybi48L2gzPlxuICAgICAgICAgICAgICAgICAgICA8aDM+My4gQWN0aXZhdGUgdGhlIG5ldHdvcmsgb24gcmVhbCBkYXRhLCBnZXQgcmVhbCBvdXRwdXRzLjwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxGbGF0QnV0dG9uIGxhYmVsPVwiTWFrZSBhIG5ldXJhbCBuZXR3b3JrXCIgb25Ub3VjaFRhcD17KCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY2hhbmdlU2NyZWVuKDIpO1xuICAgICAgICAgICAgICAgICAgICB9fSBzZWNvbmRhcnkgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuTW9yZUluZm8ucHJvcFR5cGVzID0ge1xuICAgIGNoYW5nZVNjcmVlbjogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vcmVJbmZvO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGZyb250ZW5kL2NvbXBvbmVudHMvZnlpL01vcmVJbmZvLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFEQTtBQWNBOzs7O0FBN0JBO0FBQ0E7QUErQkE7QUFDQTtBQURBO0FBQ0E7QUFHQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})