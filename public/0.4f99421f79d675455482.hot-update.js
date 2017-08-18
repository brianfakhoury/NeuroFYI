webpackHotUpdate(0,{

/***/ 337:
/* unknown exports provided */
/* all exports used */
/*!*************************************************!*\
  !*** ./frontend/components/fyi/MakeANetwork.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ 2);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _FlatButton = __webpack_require__(/*! material-ui/FlatButton */ 37);\n\nvar _FlatButton2 = _interopRequireDefault(_FlatButton);\n\nvar _synaptic = __webpack_require__(/*! synaptic */ 186);\n\nvar _snapsvg = __webpack_require__(/*! snapsvg */ 81);\n\nvar _snapsvg2 = _interopRequireDefault(_snapsvg);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar MakeANetwork = function (_React$Component) {\n    _inherits(MakeANetwork, _React$Component);\n\n    function MakeANetwork(props) {\n        _classCallCheck(this, MakeANetwork);\n\n        return _possibleConstructorReturn(this, (MakeANetwork.__proto__ || Object.getPrototypeOf(MakeANetwork)).call(this, props));\n    }\n\n    _createClass(MakeANetwork, [{\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            this.renderDisconnectedNet();\n        }\n    }, {\n        key: 'makePerceptron',\n        value: function makePerceptron() {\n            return new _synaptic.Architect.Perceptron(3, 3, 1);\n        }\n    }, {\n        key: 'renderDisconnectedNet',\n        value: function renderDisconnectedNet() {\n            var s = (0, _snapsvg2.default)('#nn1');\n            var neurons = s.g();\n            var n1 = s.circle('10vw', '10vh', '5vh');\n            var n2 = s.circle('10vw', '25vh', '5vh');\n            var n3 = s.circle('25vw', '10vh', '5vh');\n            var n4 = s.circle('25vw', '25vh', '5vh');\n            var n5 = s.circle('25vw', '40vh', '5vh');\n            var n6 = s.circle('40vw', '10vh', '5vh');\n            neurons.add(n1, n2, n3, n4, n5, n6);\n            neurons.attr({ fill: \"r()#fff-#111\" });\n        }\n    }, {\n        key: 'renderConnectionLines',\n        value: function renderConnectionLines() {\n            var s = (0, _snapsvg2.default)('#nn1');\n            var connections = s.g();\n            var c1 = s.line('10vw', '10vh', '25vw', '10vh');\n            var c2 = s.line('10vw', '10vh', '25vw', '25vh');\n            var c3 = s.line('10vw', '10vh', '25vw', '40vh');\n            var c4 = s.line('10vw', '25vh', '25vw', '10vh');\n            var c5 = s.line('10vw', '25vh', '25vw', '25vh');\n            var c6 = s.line('10vw', '25vh', '25vw', '40vh');\n            var c7 = s.line('25vw', '10vh', '40vw', '10vh');\n            var c8 = s.line('25vw', '25vh', '40vw', '10vh');\n            var c9 = s.line('25vw', '40vh', '40vw', '10vh');\n            connections.add(c1, c2, c3, c4, c5, c6, c7, c8, c9);\n            connections.attr({ stroke: '#ffffff' });\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this2 = this;\n\n            return _react2.default.createElement(\n                'div',\n                { className: 'banner translucent' },\n                _react2.default.createElement(\n                    'div',\n                    { className: 'banner-center' },\n                    _react2.default.createElement(\n                        'h1',\n                        null,\n                        'Connect neurons together to make a network'\n                    ),\n                    _react2.default.createElement(\n                        'h2',\n                        null,\n                        'Assemble a network with TWO inputs and ONE output.'\n                    ),\n                    _react2.default.createElement(_FlatButton2.default, { label: 'Click here to connect these 3 layers of neurons', onTouchTap: function onTouchTap() {\n                            var nn = _this2.makePerceptron();\n                            console.log('Network created!', nn);\n                            _this2.props.serializeNN(nn.toJSON());\n                            console.log('network serialized to state');\n                            _this2.renderConnectionLines();\n                        }, secondary: true }),\n                    _react2.default.createElement('svg', { id: 'nn1' }),\n                    _react2.default.createElement(_FlatButton2.default, { label: 'Now train the network ->', onTouchTap: function onTouchTap() {\n                            _this2.props.changeScreen(3);\n                        }, secondary: true })\n                )\n            );\n        }\n    }]);\n\n    return MakeANetwork;\n}(_react2.default.Component);\n\nMakeANetwork.propTypes = {\n    changeScreen: _propTypes2.default.func,\n    serializeNN: _propTypes2.default.func,\n    NN: _propTypes2.default.object\n};\n\nexports.default = MakeANetwork;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzM3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbXBvbmVudHMvZnlpL01ha2VBTmV0d29yay5qcz82NjZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEZsYXRCdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvRmxhdEJ1dHRvbic7XG5pbXBvcnQgeyBBcmNoaXRlY3QgfSBmcm9tICdzeW5hcHRpYyc7XG5pbXBvcnQgU25hcCBmcm9tICdzbmFwc3ZnJztcblxuY2xhc3MgTWFrZUFOZXR3b3JrIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnJlbmRlckRpc2Nvbm5lY3RlZE5ldCgpO1xuICAgIH1cbiAgICBtYWtlUGVyY2VwdHJvbigpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBBcmNoaXRlY3QuUGVyY2VwdHJvbigzLCAzLCAxKTtcbiAgICB9XG4gICAgcmVuZGVyRGlzY29ubmVjdGVkTmV0KCkge1xuICAgICAgICBjb25zdCBzID0gU25hcCgnI25uMScpO1xuICAgICAgICBjb25zdCBuZXVyb25zID0gcy5nKCk7XG4gICAgICAgIGNvbnN0IG4xID0gcy5jaXJjbGUoJzEwdncnLCAnMTB2aCcsICc1dmgnKTtcbiAgICAgICAgY29uc3QgbjIgPSBzLmNpcmNsZSgnMTB2dycsICcyNXZoJywgJzV2aCcpO1xuICAgICAgICBjb25zdCBuMyA9IHMuY2lyY2xlKCcyNXZ3JywgJzEwdmgnLCAnNXZoJyk7XG4gICAgICAgIGNvbnN0IG40ID0gcy5jaXJjbGUoJzI1dncnLCAnMjV2aCcsICc1dmgnKTtcbiAgICAgICAgY29uc3QgbjUgPSBzLmNpcmNsZSgnMjV2dycsICc0MHZoJywgJzV2aCcpO1xuICAgICAgICBjb25zdCBuNiA9IHMuY2lyY2xlKCc0MHZ3JywgJzEwdmgnLCAnNXZoJyk7XG4gICAgICAgIG5ldXJvbnMuYWRkKG4xLCBuMiwgbjMsIG40LCBuNSwgbjYpO1xuICAgICAgICBuZXVyb25zLmF0dHIoe2ZpbGw6IFwicigpI2ZmZi0jMTExXCJ9KTtcbiAgICB9XG4gICAgcmVuZGVyQ29ubmVjdGlvbkxpbmVzKCkge1xuICAgICAgICBjb25zdCBzID0gU25hcCgnI25uMScpO1xuICAgICAgICBjb25zdCBjb25uZWN0aW9ucyA9IHMuZygpO1xuICAgICAgICBjb25zdCBjMSA9IHMubGluZSgnMTB2dycsICcxMHZoJywgJzI1dncnLCAnMTB2aCcpO1xuICAgICAgICBjb25zdCBjMiA9IHMubGluZSgnMTB2dycsICcxMHZoJywgJzI1dncnLCAnMjV2aCcpO1xuICAgICAgICBjb25zdCBjMyA9IHMubGluZSgnMTB2dycsICcxMHZoJywgJzI1dncnLCAnNDB2aCcpO1xuICAgICAgICBjb25zdCBjNCA9IHMubGluZSgnMTB2dycsICcyNXZoJywgJzI1dncnLCAnMTB2aCcpO1xuICAgICAgICBjb25zdCBjNSA9IHMubGluZSgnMTB2dycsICcyNXZoJywgJzI1dncnLCAnMjV2aCcpO1xuICAgICAgICBjb25zdCBjNiA9IHMubGluZSgnMTB2dycsICcyNXZoJywgJzI1dncnLCAnNDB2aCcpO1xuICAgICAgICBjb25zdCBjNyA9IHMubGluZSgnMjV2dycsICcxMHZoJywgJzQwdncnLCAnMTB2aCcpO1xuICAgICAgICBjb25zdCBjOCA9IHMubGluZSgnMjV2dycsICcyNXZoJywgJzQwdncnLCAnMTB2aCcpO1xuICAgICAgICBjb25zdCBjOSA9IHMubGluZSgnMjV2dycsICc0MHZoJywgJzQwdncnLCAnMTB2aCcpO1xuICAgICAgICBjb25uZWN0aW9ucy5hZGQoYzEsIGMyLCBjMywgYzQsIGM1LCBjNiwgYzcsIGM4LCBjOSk7XG4gICAgICAgIGNvbm5lY3Rpb25zLmF0dHIoe3N0cm9rZTogJyNmZmZmZmYnfSk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5uZXIgdHJhbnNsdWNlbnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lci1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgxPkNvbm5lY3QgbmV1cm9ucyB0b2dldGhlciB0byBtYWtlIGEgbmV0d29yazwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5Bc3NlbWJsZSBhIG5ldHdvcmsgd2l0aCBUV08gaW5wdXRzIGFuZCBPTkUgb3V0cHV0LjwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxGbGF0QnV0dG9uIGxhYmVsPVwiQ2xpY2sgaGVyZSB0byBjb25uZWN0IHRoZXNlIDMgbGF5ZXJzIG9mIG5ldXJvbnNcIiBvblRvdWNoVGFwPXsoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm4gPSB0aGlzLm1ha2VQZXJjZXB0cm9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTmV0d29yayBjcmVhdGVkIScsIG5uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2VyaWFsaXplTk4obm4udG9KU09OKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ25ldHdvcmsgc2VyaWFsaXplZCB0byBzdGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJDb25uZWN0aW9uTGluZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgfX0gc2Vjb25kYXJ5IC8+XG4gICAgICAgICAgICAgICAgICAgIDxzdmcgaWQ9XCJubjFcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8RmxhdEJ1dHRvbiBsYWJlbD1cIk5vdyB0cmFpbiB0aGUgbmV0d29yayAtPlwiIG9uVG91Y2hUYXA9eygpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNoYW5nZVNjcmVlbigzKTtcbiAgICAgICAgICAgICAgICAgICAgfX0gc2Vjb25kYXJ5IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbk1ha2VBTmV0d29yay5wcm9wVHlwZXMgPSB7XG4gICAgY2hhbmdlU2NyZWVuOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBzZXJpYWxpemVOTjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgTk46IFByb3BUeXBlcy5vYmplY3Rcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1ha2VBTmV0d29yaztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBmcm9udGVuZC9jb21wb25lbnRzL2Z5aS9NYWtlQU5ldHdvcmsuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFiQTtBQURBO0FBa0JBOzs7O0FBekRBO0FBQ0E7QUEyREE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})