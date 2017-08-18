webpackHotUpdate(0,{

/***/ 348:
/* unknown exports provided */
/* all exports used */
/*!*******************************************!*\
  !*** ./frontend/components/play/Login.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ 2);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _TextField = __webpack_require__(/*! material-ui/TextField */ 615);\n\nvar _TextField2 = _interopRequireDefault(_TextField);\n\nvar _FlatButton = __webpack_require__(/*! material-ui/FlatButton */ 37);\n\nvar _FlatButton2 = _interopRequireDefault(_FlatButton);\n\nvar _axios = __webpack_require__(/*! axios */ 318);\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Login = function (_React$Component) {\n    _inherits(Login, _React$Component);\n\n    function Login(props) {\n        _classCallCheck(this, Login);\n\n        var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));\n\n        _this.state = {\n            direction: 'login',\n            alt: 'register',\n            username: \"\",\n            password: \"\",\n            failed: false\n        };\n        // TODO add cookie loading\n        return _this;\n    }\n\n    _createClass(Login, [{\n        key: 'login',\n        value: function login() {\n            var _this2 = this;\n\n            _axios2.default.post(this.state.direction, {\n                username: this.state.username,\n                password: this.state.password\n            }).then(function (_ref) {\n                var data = _ref.data;\n\n                _this2.props.loadUser(data.user);\n            }).catch(function (e) {\n                console.log(e);\n                _this2.setState({ failed: true });\n            });\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this3 = this;\n\n            return _react2.default.createElement(\n                'div',\n                { className: 'login-div' },\n                _react2.default.createElement('img', { style: { width: \"15vh\" }, alt: 'Brain', src: './brain-logo.png' }),\n                _react2.default.createElement(\n                    'h1',\n                    null,\n                    this.state.alt === \"login\" ? \"Register for \" : \"Login to \",\n                    'Neuro.FYI'\n                ),\n                !this.state.failed || _react2.default.createElement(\n                    'p',\n                    { style: { color: '#F44336' } },\n                    'Failed to login. Try again.'\n                ),\n                _react2.default.createElement(_TextField2.default, { id: 'username-input', hintText: 'Username', floatingLabelText: 'Username', onChange: function onChange(e, value) {\n                        console.log(value);\n                        _this3.setState({\n                            username: value\n                        });\n                    } }),\n                _react2.default.createElement(_TextField2.default, { id: 'password-input', hintText: 'Password', floatingLabelText: 'Password', type: 'password', onChange: function onChange(e, value) {\n                        _this3.setState({\n                            password: value\n                        });\n                    } }),\n                _react2.default.createElement(_FlatButton2.default, { onTouchTap: function onTouchTap() {\n                        _this3.login();\n                    }, label: this.state.direction, primary: true }),\n                _react2.default.createElement(_FlatButton2.default, { onTouchTap: function onTouchTap() {\n                        _this3.setState({ direction: _this3.state.alt, alt: _this3.state.direction });\n                    }, label: this.state.alt, style: { color: \"#616161\" } })\n            );\n        }\n    }]);\n\n    return Login;\n}(_react2.default.Component);\n\nLogin.propTypes = {\n    loadUser: _propTypes2.default.func\n};\n\nexports.default = Login;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzQ4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbXBvbmVudHMvcGxheS9Mb2dpbi5qcz81ZmVmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdtYXRlcmlhbC11aS9UZXh0RmllbGQnO1xuaW1wb3J0IEZsYXRCdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvRmxhdEJ1dHRvbic7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jbGFzcyBMb2dpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZGlyZWN0aW9uOiAnbG9naW4nLFxuICAgICAgICAgICAgYWx0OiAncmVnaXN0ZXInLFxuICAgICAgICAgICAgdXNlcm5hbWU6IFwiXCIsXG4gICAgICAgICAgICBwYXNzd29yZDogXCJcIixcbiAgICAgICAgICAgIGZhaWxlZDogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgICAgLy8gVE9ETyBhZGQgY29va2llIGxvYWRpbmdcbiAgICB9XG4gICAgbG9naW4oKSB7XG4gICAgICAgIGF4aW9zLnBvc3QodGhpcy5zdGF0ZS5kaXJlY3Rpb24sIHtcbiAgICAgICAgICAgIHVzZXJuYW1lOiB0aGlzLnN0YXRlLnVzZXJuYW1lLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMuc3RhdGUucGFzc3dvcmRcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oICggeyBkYXRhIH0gKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmxvYWRVc2VyKGRhdGEudXNlcik7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZSk9PntcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZmFpbGVkOiB0cnVlfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tZGl2XCI+XG4gICAgICAgICAgICAgICAgPGltZyBzdHlsZT17e3dpZHRoOiBcIjE1dmhcIn19IGFsdD1cIkJyYWluXCIgc3JjPVwiLi9icmFpbi1sb2dvLnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgPGgxPnt0aGlzLnN0YXRlLmFsdCA9PT0gXCJsb2dpblwiID8gXCJSZWdpc3RlciBmb3IgXCIgOiBcIkxvZ2luIHRvIFwifU5ldXJvLkZZSTwvaDE+XG4gICAgICAgICAgICAgICAgeyF0aGlzLnN0YXRlLmZhaWxlZCB8fCA8cCBzdHlsZT17e2NvbG9yOiAnI0Y0NDMzNid9fT5GYWlsZWQgdG8gbG9naW4uIFRyeSBhZ2Fpbi48L3A+fVxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgaWQ9XCJ1c2VybmFtZS1pbnB1dFwiIGhpbnRUZXh0PVwiVXNlcm5hbWVcIiBmbG9hdGluZ0xhYmVsVGV4dD1cIlVzZXJuYW1lXCIgb25DaGFuZ2U9eyhlLCB2YWx1ZSk9PntcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lOiB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9fS8+XG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZCBpZD1cInBhc3N3b3JkLWlucHV0XCIgaGludFRleHQ9XCJQYXNzd29yZFwiIGZsb2F0aW5nTGFiZWxUZXh0PVwiUGFzc3dvcmRcInR5cGU9XCJwYXNzd29yZFwiIG9uQ2hhbmdlPXsoZSwgdmFsdWUpPT57XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH19Lz5cbiAgICAgICAgICAgICAgICA8RmxhdEJ1dHRvbiBvblRvdWNoVGFwPXsoKT0+IHt0aGlzLmxvZ2luKCk7fX0gbGFiZWw9e3RoaXMuc3RhdGUuZGlyZWN0aW9ufSBwcmltYXJ5IC8+XG4gICAgICAgICAgICAgICAgPEZsYXRCdXR0b24gb25Ub3VjaFRhcD17KCk9PiB7dGhpcy5zZXRTdGF0ZSh7ZGlyZWN0aW9uOiB0aGlzLnN0YXRlLmFsdCwgYWx0OiB0aGlzLnN0YXRlLmRpcmVjdGlvbn0pO319IGxhYmVsPXt0aGlzLnN0YXRlLmFsdH0gc3R5bGU9e3sgY29sb3I6IFwiIzYxNjE2MVwiIH19IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkxvZ2luLnByb3BUeXBlcyA9IHtcbiAgICBsb2FkVXNlcjogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGZyb250ZW5kL2NvbXBvbmVudHMvcGxheS9Mb2dpbi5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQVRBO0FBVUE7QUFDQTs7O0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBaEJBO0FBbUJBOzs7O0FBOUNBO0FBQ0E7QUFnREE7QUFDQTtBQURBO0FBQ0E7QUFHQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})