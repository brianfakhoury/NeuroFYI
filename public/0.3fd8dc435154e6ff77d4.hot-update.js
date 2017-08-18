webpackHotUpdate(0,{

/***/ 350:
/* unknown exports provided */
/* all exports used */
/*!********************************************************************!*\
  !*** ./frontend/components/play/playground/CreateSimpleNetCard.js ***!
  \********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ 2);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _Stepper = __webpack_require__(/*! material-ui/Stepper */ 874);\n\nvar _RaisedButton = __webpack_require__(/*! material-ui/RaisedButton */ 868);\n\nvar _RaisedButton2 = _interopRequireDefault(_RaisedButton);\n\nvar _FlatButton = __webpack_require__(/*! material-ui/FlatButton */ 27);\n\nvar _FlatButton2 = _interopRequireDefault(_FlatButton);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar CreateSimpleNetCard = function (_React$Component) {\n  _inherits(CreateSimpleNetCard, _React$Component);\n\n  function CreateSimpleNetCard(props) {\n    _classCallCheck(this, CreateSimpleNetCard);\n\n    var _this = _possibleConstructorReturn(this, (CreateSimpleNetCard.__proto__ || Object.getPrototypeOf(CreateSimpleNetCard)).call(this, props));\n\n    _this.state = {\n      step: 0,\n      finished: false,\n      options: {},\n      NN: {}\n    };\n    return _this;\n  }\n\n  _createClass(CreateSimpleNetCard, [{\n    key: 'handleNext',\n    value: function handleNext() {\n      var step = this.state.step;\n\n      this.setState({\n        step: step + 1,\n        finished: step >= 2\n      });\n    }\n  }, {\n    key: 'handlePrev',\n    value: function handlePrev() {\n      var step = this.state.step;\n\n      if (step > 0) {\n        this.setState({ step: step - 1 });\n      }\n    }\n  }, {\n    key: 'renderPart',\n    value: function renderPart() {\n      switch (this.state.step) {\n        case 0:\n          return _react2.default.createElement(\n            'h2',\n            null,\n            'Choose a category'\n          );\n        default:\n          return _react2.default.createElement('div', null);\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      var _state = this.state,\n          step = _state.step,\n          finished = _state.finished;\n\n      return _react2.default.createElement(\n        'div',\n        { className: 'card-content-container' },\n        _react2.default.createElement(\n          'div',\n          { className: 'card-content create-simple-net' },\n          _react2.default.createElement(\n            'h1',\n            null,\n            'Build a new simple neural network!'\n          ),\n          _react2.default.createElement(\n            'div',\n            { style: { width: '100%', maxWidth: 700, margin: 'auto' } },\n            _react2.default.createElement(\n              _Stepper.Stepper,\n              { activeStep: step },\n              _react2.default.createElement(\n                _Stepper.Step,\n                null,\n                _react2.default.createElement(\n                  _Stepper.StepLabel,\n                  null,\n                  'Select a category'\n                )\n              ),\n              _react2.default.createElement(\n                _Stepper.Step,\n                null,\n                _react2.default.createElement(\n                  _Stepper.StepLabel,\n                  null,\n                  'Select'\n                )\n              ),\n              _react2.default.createElement(\n                _Stepper.Step,\n                null,\n                _react2.default.createElement(\n                  _Stepper.StepLabel,\n                  null,\n                  'Select'\n                )\n              ),\n              _react2.default.createElement(\n                _Stepper.Step,\n                null,\n                _react2.default.createElement(\n                  _Stepper.StepLabel,\n                  null,\n                  'Select'\n                )\n              )\n            ),\n            _react2.default.createElement(\n              'div',\n              null,\n              finished ? _react2.default.createElement(\n                'p',\n                null,\n                _react2.default.createElement(\n                  'a',\n                  {\n                    href: '#',\n                    onClick: function onClick(event) {\n                      event.preventDefault();\n                      _this2.setState({ step: 0, finished: false });\n                    }\n                  },\n                  'Click here'\n                ),\n                ' to start over.'\n              ) : _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(\n                  'p',\n                  null,\n                  this.renderPart(step)\n                ),\n                _react2.default.createElement(\n                  'div',\n                  { style: { marginTop: 12 } },\n                  _react2.default.createElement(_FlatButton2.default, {\n                    label: 'Back',\n                    disabled: step === 0,\n                    onTouchTap: this.handlePrev,\n                    style: { marginRight: 12 }\n                  }),\n                  _react2.default.createElement(_RaisedButton2.default, {\n                    label: step === 2 ? 'Finish' : 'Next',\n                    primary: true,\n                    onTouchTap: this.handleNext\n                  })\n                )\n              )\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return CreateSimpleNetCard;\n}(_react2.default.Component);\n\nexports.default = CreateSimpleNetCard;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzUwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbXBvbmVudHMvcGxheS9wbGF5Z3JvdW5kL0NyZWF0ZVNpbXBsZU5ldENhcmQuanM/YWJjMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IFN0ZXAsIFN0ZXBwZXIsIFN0ZXBMYWJlbCB9IGZyb20gJ21hdGVyaWFsLXVpL1N0ZXBwZXInO1xuaW1wb3J0IFJhaXNlZEJ1dHRvbiBmcm9tICdtYXRlcmlhbC11aS9SYWlzZWRCdXR0b24nO1xuaW1wb3J0IEZsYXRCdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvRmxhdEJ1dHRvbic7XG5cbmNsYXNzIENyZWF0ZVNpbXBsZU5ldENhcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHN0ZXA6IDAsXG4gICAgICAgICAgICBmaW5pc2hlZDogZmFsc2UsXG4gICAgICAgICAgICBvcHRpb25zOiB7fSxcbiAgICAgICAgICAgIE5OOiB7fVxuICAgICAgICB9O1xuICAgIH1cbiAgICBoYW5kbGVOZXh0KCkge1xuICAgICAgICBjb25zdCB7c3RlcH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHN0ZXA6IHN0ZXAgKyAxLFxuICAgICAgICAgICAgZmluaXNoZWQ6IHN0ZXAgPj0gMixcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGhhbmRsZVByZXYoKSB7XG4gICAgICAgIGNvbnN0IHtzdGVwfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGlmIChzdGVwID4gMCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c3RlcDogc3RlcCAtIDF9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXJQYXJ0KCkge1xuICAgICAgICBzd2l0Y2godGhpcy5zdGF0ZS5zdGVwKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxoMj5DaG9vc2UgYSBjYXRlZ29yeTwvaDI+O1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiAvPjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgc3RlcCwgZmluaXNoZWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50IGNyZWF0ZS1zaW1wbGUtbmV0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMT5CdWlsZCBhIG5ldyBzaW1wbGUgbmV1cmFsIG5ldHdvcmshPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOiAnMTAwJScsIG1heFdpZHRoOiA3MDAsIG1hcmdpbjogJ2F1dG8nfX0+XG4gICAgICAgICAgICAgICAgICAgICAgPFN0ZXBwZXIgYWN0aXZlU3RlcD17c3RlcH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RlcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0ZXBMYWJlbD5TZWxlY3QgYSBjYXRlZ29yeTwvU3RlcExhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGVwPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0ZXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGVwTGFiZWw+U2VsZWN0PC9TdGVwTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1N0ZXA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RlcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0ZXBMYWJlbD5TZWxlY3Q8L1N0ZXBMYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RlcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGVwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RlcExhYmVsPlNlbGVjdDwvU3RlcExhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGVwPlxuICAgICAgICAgICAgICAgICAgICAgIDwvU3RlcHBlcj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAge2ZpbmlzaGVkID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3N0ZXA6IDAsIGZpbmlzaGVkOiBmYWxzZX0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDbGljayBoZXJlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT4gdG8gc3RhcnQgb3Zlci5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57dGhpcy5yZW5kZXJQYXJ0KHN0ZXApfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOiAxMn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsYXRCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJCYWNrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3N0ZXAgPT09IDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVG91Y2hUYXA9e3RoaXMuaGFuZGxlUHJldn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5SaWdodDogMTJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWlzZWRCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3N0ZXAgPT09IDIgPyAnRmluaXNoJyA6ICdOZXh0J31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblRvdWNoVGFwPXt0aGlzLmhhbmRsZU5leHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVTaW1wbGVOZXRDYXJkO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGZyb250ZW5kL2NvbXBvbmVudHMvcGxheS9wbGF5Z3JvdW5kL0NyZWF0ZVNpbXBsZU5ldENhcmQuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFGQTtBQVFBO0FBQ0E7OztBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQVZBO0FBY0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFZQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFQQTtBQUZBO0FBZEE7QUFmQTtBQUZBO0FBREE7QUFzREE7Ozs7QUF4RkE7QUFDQTtBQTBGQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})