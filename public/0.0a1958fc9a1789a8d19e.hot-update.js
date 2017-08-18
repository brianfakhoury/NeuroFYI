webpackHotUpdate(0,{

/***/ 364:
/* unknown exports provided */
/* all exports used */
/*!*******************************************!*\
  !*** ./frontend/components/play/Login.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ 2);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _TextField = __webpack_require__(/*! material-ui/TextField */ 160);\n\nvar _TextField2 = _interopRequireDefault(_TextField);\n\nvar _FlatButton = __webpack_require__(/*! material-ui/FlatButton */ 29);\n\nvar _FlatButton2 = _interopRequireDefault(_FlatButton);\n\nvar _axios = __webpack_require__(/*! axios */ 201);\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Login = function (_React$Component) {\n    _inherits(Login, _React$Component);\n\n    function Login(props) {\n        _classCallCheck(this, Login);\n\n        var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));\n\n        _this.state = {\n            direction: 'login',\n            alt: 'register',\n            username: \"\",\n            password: \"\",\n            failed: false\n        };\n        // TODO add cookie loading\n        return _this;\n    }\n\n    _createClass(Login, [{\n        key: 'login',\n        value: function login() {\n            var _this2 = this;\n\n            _axios2.default.post(this.state.direction, {\n                username: this.state.username,\n                password: this.state.password\n            }).then(function (_ref) {\n                var data = _ref.data;\n\n                _this2.props.loadUser(data.user);\n            }).catch(function (e) {\n                console.log(e);\n                _this2.setState({ failed: true });\n            });\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this3 = this;\n\n            return _react2.default.createElement(\n                'div',\n                { className: 'login-div' },\n                _react2.default.createElement('img', { style: { width: \"15vh\" }, alt: 'Brain', src: './brain-logo.png' }),\n                _react2.default.createElement(\n                    'h1',\n                    null,\n                    this.state.alt === \"login\" ? \"Register for \" : \"Login to \",\n                    'Neuro.FYI'\n                ),\n                _react2.default.createElement(\n                    'h2',\n                    null,\n                    'Beta'\n                ),\n                !this.state.failed || _react2.default.createElement(\n                    'p',\n                    { style: { color: '#F44336' } },\n                    'Failed to login. Try again.'\n                ),\n                _react2.default.createElement(_TextField2.default, {\n                    id: 'username-input',\n                    hintText: 'Username',\n                    floatingLabelText: 'Username',\n                    floatingLabelStyle: { color: '#616161' },\n                    floatingLabelShrinkStyle: { color: '#00BCD4' },\n                    hintStyle: { color: '#616161' },\n                    inputStyle: { color: 'white' },\n                    onChange: function onChange(e, value) {\n                        _this3.setState({ username: value });\n                    } }),\n                _react2.default.createElement(_TextField2.default, {\n                    id: 'password-input',\n                    hintText: 'Password',\n                    floatingLabelText: 'Password',\n                    floatingLabelStyle: { color: '#616161' },\n                    floatingLabelShrinkStyle: { color: '#00BCD4' },\n                    hintStyle: { color: '#616161' },\n                    inputStyle: { color: 'white' },\n                    type: 'password',\n                    onChange: function onChange(e, value) {\n                        _this3.setState({ password: value });\n                    } }),\n                _react2.default.createElement(_FlatButton2.default, { onTouchTap: function onTouchTap() {\n                        _this3.login();\n                    }, label: this.state.direction, primary: true }),\n                _react2.default.createElement(_FlatButton2.default, { onTouchTap: function onTouchTap() {\n                        _this3.setState({ direction: _this3.state.alt, alt: _this3.state.direction });\n                    }, label: this.state.alt, style: { color: \"#616161\" } })\n            );\n        }\n    }]);\n\n    return Login;\n}(_react2.default.Component);\n\nLogin.propTypes = {\n    loadUser: _propTypes2.default.func\n};\n\nexports.default = Login;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzY0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbXBvbmVudHMvcGxheS9Mb2dpbi5qcz81ZmVmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdtYXRlcmlhbC11aS9UZXh0RmllbGQnO1xuaW1wb3J0IEZsYXRCdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvRmxhdEJ1dHRvbic7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jbGFzcyBMb2dpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZGlyZWN0aW9uOiAnbG9naW4nLFxuICAgICAgICAgICAgYWx0OiAncmVnaXN0ZXInLFxuICAgICAgICAgICAgdXNlcm5hbWU6IFwiXCIsXG4gICAgICAgICAgICBwYXNzd29yZDogXCJcIixcbiAgICAgICAgICAgIGZhaWxlZDogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgICAgLy8gVE9ETyBhZGQgY29va2llIGxvYWRpbmdcbiAgICB9XG4gICAgbG9naW4oKSB7XG4gICAgICAgIGF4aW9zLnBvc3QodGhpcy5zdGF0ZS5kaXJlY3Rpb24sIHtcbiAgICAgICAgICAgIHVzZXJuYW1lOiB0aGlzLnN0YXRlLnVzZXJuYW1lLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMuc3RhdGUucGFzc3dvcmRcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oICggeyBkYXRhIH0gKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmxvYWRVc2VyKGRhdGEudXNlcik7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZSk9PntcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZmFpbGVkOiB0cnVlfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tZGl2XCI+XG4gICAgICAgICAgICAgICAgPGltZyBzdHlsZT17e3dpZHRoOiBcIjE1dmhcIn19IGFsdD1cIkJyYWluXCIgc3JjPVwiLi9icmFpbi1sb2dvLnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgPGgxPnt0aGlzLnN0YXRlLmFsdCA9PT0gXCJsb2dpblwiID8gXCJSZWdpc3RlciBmb3IgXCIgOiBcIkxvZ2luIHRvIFwifU5ldXJvLkZZSTwvaDE+XG4gICAgICAgICAgICAgICAgPGgyPkJldGE8L2gyPlxuICAgICAgICAgICAgICAgIHshdGhpcy5zdGF0ZS5mYWlsZWQgfHwgPHAgc3R5bGU9e3tjb2xvcjogJyNGNDQzMzYnfX0+RmFpbGVkIHRvIGxvZ2luLiBUcnkgYWdhaW4uPC9wPn1cbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIGlkPVwidXNlcm5hbWUtaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICBoaW50VGV4dD1cIlVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgZmxvYXRpbmdMYWJlbFRleHQ9XCJVc2VybmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIGZsb2F0aW5nTGFiZWxTdHlsZT17e2NvbG9yOiAnIzYxNjE2MSd9fVxuICAgICAgICAgICAgICAgICAgICBmbG9hdGluZ0xhYmVsU2hyaW5rU3R5bGU9e3tjb2xvcjogJyMwMEJDRDQnfX1cbiAgICAgICAgICAgICAgICAgICAgaGludFN0eWxlPXt7Y29sb3I6ICcjNjE2MTYxJ319XG4gICAgICAgICAgICAgICAgICAgIGlucHV0U3R5bGU9e3tjb2xvcjogJ3doaXRlJ319XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSwgdmFsdWUpPT57dGhpcy5zZXRTdGF0ZSh7dXNlcm5hbWU6IHZhbHVlfSk7fX0vPlxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZC1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIGhpbnRUZXh0PVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBmbG9hdGluZ0xhYmVsVGV4dD1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgZmxvYXRpbmdMYWJlbFN0eWxlPXt7Y29sb3I6ICcjNjE2MTYxJ319XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0aW5nTGFiZWxTaHJpbmtTdHlsZT17e2NvbG9yOiAnIzAwQkNENCd9fVxuICAgICAgICAgICAgICAgICAgICBoaW50U3R5bGU9e3tjb2xvcjogJyM2MTYxNjEnfX1cbiAgICAgICAgICAgICAgICAgICAgaW5wdXRTdHlsZT17e2NvbG9yOiAnd2hpdGUnfX1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlLCB2YWx1ZSk9Pnt0aGlzLnNldFN0YXRlKHtwYXNzd29yZDogdmFsdWV9KTt9fS8+XG4gICAgICAgICAgICAgICAgPEZsYXRCdXR0b24gb25Ub3VjaFRhcD17KCk9PiB7dGhpcy5sb2dpbigpO319IGxhYmVsPXt0aGlzLnN0YXRlLmRpcmVjdGlvbn0gcHJpbWFyeSAvPlxuICAgICAgICAgICAgICAgIDxGbGF0QnV0dG9uIG9uVG91Y2hUYXA9eygpPT4ge3RoaXMuc2V0U3RhdGUoe2RpcmVjdGlvbjogdGhpcy5zdGF0ZS5hbHQsIGFsdDogdGhpcy5zdGF0ZS5kaXJlY3Rpb259KTt9fSBsYWJlbD17dGhpcy5zdGF0ZS5hbHR9IHN0eWxlPXt7IGNvbG9yOiBcIiM2MTYxNjFcIiB9fSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5Mb2dpbi5wcm9wVHlwZXMgPSB7XG4gICAgbG9hZFVzZXI6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBmcm9udGVuZC9jb21wb25lbnRzL3BsYXkvTG9naW4uanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFUQTtBQVVBO0FBQ0E7OztBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUF6QkE7QUE0QkE7Ozs7QUF2REE7QUFDQTtBQXlEQTtBQUNBO0FBREE7QUFDQTtBQUdBIiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})