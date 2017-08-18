webpackHotUpdate(0,{

/***/ 348:
/* unknown exports provided */
/* all exports used */
/*!*******************************************!*\
  !*** ./frontend/components/play/Login.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ 2);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _TextField = __webpack_require__(/*! material-ui/TextField */ 615);\n\nvar _TextField2 = _interopRequireDefault(_TextField);\n\nvar _FlatButton = __webpack_require__(/*! material-ui/FlatButton */ 37);\n\nvar _FlatButton2 = _interopRequireDefault(_FlatButton);\n\nvar _axios = __webpack_require__(/*! axios */ 318);\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Login = function (_React$Component) {\n    _inherits(Login, _React$Component);\n\n    function Login(props) {\n        _classCallCheck(this, Login);\n\n        var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));\n\n        _this.state = {\n            direction: 'login',\n            alt: 'register',\n            username: \"\",\n            password: \"\"\n        };\n        // TODO add cookie loading\n        return _this;\n    }\n\n    _createClass(Login, [{\n        key: 'login',\n        value: function login() {\n            _axios2.default.post(this.state.direction, {\n                username: this.state.username,\n                password: this.state.password\n            }).then(function (_ref) {\n                // this.props.loadUser(data.user);\n\n                var data = _ref.data;\n            }).catch(function (err) {\n                console.log(err);\n            });\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this2 = this;\n\n            return _react2.default.createElement(\n                'div',\n                { className: 'login-div' },\n                _react2.default.createElement('img', { style: { width: \"15vh\" }, alt: 'Brain', src: './brain-logo.png' }),\n                _react2.default.createElement(\n                    'h1',\n                    null,\n                    this.state.alt === \"login\" ? \"Register for \" : \"Login to \",\n                    'Neuro.FYI'\n                ),\n                _react2.default.createElement(_TextField2.default, { id: 'username-input', hintText: 'Username', floatingLabelText: 'Username', onChange: function onChange(e, value) {\n                        console.log(value);\n                        _this2.setState({\n                            username: value\n                        });\n                    } }),\n                _react2.default.createElement(_TextField2.default, { id: 'password-input', hintText: 'Password', floatingLabelText: 'Password', type: 'password', onChange: function onChange(e, value) {\n                        _this2.setState({\n                            password: value\n                        });\n                    } }),\n                _react2.default.createElement(_FlatButton2.default, { onTouchTap: function onTouchTap() {\n                        _this2.login();\n                    }, label: this.state.direction, primary: true }),\n                _react2.default.createElement(_FlatButton2.default, { onTouchTap: function onTouchTap() {\n                        _this2.setState({ direction: _this2.state.alt, alt: _this2.state.direction });\n                    }, label: this.state.alt, style: { color: \"#616161\" } })\n            );\n        }\n    }]);\n\n    return Login;\n}(_react2.default.Component);\n\nLogin.propTypes = {\n    loadUser: _propTypes2.default.func\n};\n\nexports.default = Login;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzQ4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbXBvbmVudHMvcGxheS9Mb2dpbi5qcz81ZmVmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdtYXRlcmlhbC11aS9UZXh0RmllbGQnO1xuaW1wb3J0IEZsYXRCdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvRmxhdEJ1dHRvbic7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jbGFzcyBMb2dpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZGlyZWN0aW9uOiAnbG9naW4nLFxuICAgICAgICAgICAgYWx0OiAncmVnaXN0ZXInLFxuICAgICAgICAgICAgdXNlcm5hbWU6IFwiXCIsXG4gICAgICAgICAgICBwYXNzd29yZDogXCJcIlxuICAgICAgICB9O1xuICAgICAgICAvLyBUT0RPIGFkZCBjb29raWUgbG9hZGluZ1xuICAgIH1cbiAgICBsb2dpbigpIHtcbiAgICAgICAgYXhpb3MucG9zdCh0aGlzLnN0YXRlLmRpcmVjdGlvbiwge1xuICAgICAgICAgICAgdXNlcm5hbWU6IHRoaXMuc3RhdGUudXNlcm5hbWUsXG4gICAgICAgICAgICBwYXNzd29yZDogdGhpcy5zdGF0ZS5wYXNzd29yZFxuICAgICAgICB9KVxuICAgICAgICAudGhlbiggKCB7IGRhdGEgfSApID0+IHtcbiAgICAgICAgICAgIC8vIHRoaXMucHJvcHMubG9hZFVzZXIoZGF0YS51c2VyKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpPT57XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWRpdlwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3t3aWR0aDogXCIxNXZoXCJ9fSBhbHQ9XCJCcmFpblwiIHNyYz1cIi4vYnJhaW4tbG9nby5wbmdcIiAvPlxuICAgICAgICAgICAgICAgIDxoMT57dGhpcy5zdGF0ZS5hbHQgPT09IFwibG9naW5cIiA/IFwiUmVnaXN0ZXIgZm9yIFwiIDogXCJMb2dpbiB0byBcIn1OZXVyby5GWUk8L2gxPlxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgaWQ9XCJ1c2VybmFtZS1pbnB1dFwiIGhpbnRUZXh0PVwiVXNlcm5hbWVcIiBmbG9hdGluZ0xhYmVsVGV4dD1cIlVzZXJuYW1lXCIgb25DaGFuZ2U9eyhlLCB2YWx1ZSk9PntcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lOiB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9fS8+XG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZCBpZD1cInBhc3N3b3JkLWlucHV0XCIgaGludFRleHQ9XCJQYXNzd29yZFwiIGZsb2F0aW5nTGFiZWxUZXh0PVwiUGFzc3dvcmRcInR5cGU9XCJwYXNzd29yZFwiIG9uQ2hhbmdlPXsoZSwgdmFsdWUpPT57XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH19Lz5cbiAgICAgICAgICAgICAgICA8RmxhdEJ1dHRvbiBvblRvdWNoVGFwPXsoKT0+IHt0aGlzLmxvZ2luKCk7fX0gbGFiZWw9e3RoaXMuc3RhdGUuZGlyZWN0aW9ufSBwcmltYXJ5IC8+XG4gICAgICAgICAgICAgICAgPEZsYXRCdXR0b24gb25Ub3VjaFRhcD17KCk9PiB7dGhpcy5zZXRTdGF0ZSh7ZGlyZWN0aW9uOiB0aGlzLnN0YXRlLmFsdCwgYWx0OiB0aGlzLnN0YXRlLmRpcmVjdGlvbn0pO319IGxhYmVsPXt0aGlzLnN0YXRlLmFsdH0gc3R5bGU9e3sgY29sb3I6IFwiIzYxNjE2MVwiIH19IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkxvZ2luLnByb3BUeXBlcyA9IHtcbiAgICBsb2FkVXNlcjogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGZyb250ZW5kL2NvbXBvbmVudHMvcGxheS9Mb2dpbi5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFSQTtBQVNBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFFQTtBQUVBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBZkE7QUFrQkE7Ozs7QUEzQ0E7QUFDQTtBQTZDQTtBQUNBO0FBREE7QUFDQTtBQUdBIiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})