webpackHotUpdate(0,{

/***/ 370:
/* unknown exports provided */
/* all exports used */
/*!*************************************************************!*\
  !*** ./frontend/components/play/playground/TestANetCard.js ***!
  \*************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ 2);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _IconButton = __webpack_require__(/*! material-ui/IconButton */ 37);\n\nvar _IconButton2 = _interopRequireDefault(_IconButton);\n\nvar _close = __webpack_require__(/*! material-ui/svg-icons/navigation/close */ 81);\n\nvar _close2 = _interopRequireDefault(_close);\n\nvar _DropDownMenu = __webpack_require__(/*! material-ui/DropDownMenu */ 627);\n\nvar _DropDownMenu2 = _interopRequireDefault(_DropDownMenu);\n\nvar _MenuItem = __webpack_require__(/*! material-ui/MenuItem */ 636);\n\nvar _MenuItem2 = _interopRequireDefault(_MenuItem);\n\nvar _SelectField = __webpack_require__(/*! material-ui/SelectField */ 643);\n\nvar _SelectField2 = _interopRequireDefault(_SelectField);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar TestANetCard = function (_React$Component) {\n    _inherits(TestANetCard, _React$Component);\n\n    function TestANetCard(props) {\n        _classCallCheck(this, TestANetCard);\n\n        var _this = _possibleConstructorReturn(this, (TestANetCard.__proto__ || Object.getPrototypeOf(TestANetCard)).call(this, props));\n\n        _this.state = {\n            NN: {},\n            NN_key: -1,\n            options: {}\n        };\n        return _this;\n    }\n\n    _createClass(TestANetCard, [{\n        key: 'loadTestNetwork',\n        value: function loadTestNetwork(e, key, val) {\n            var _this2 = this;\n\n            this.setState({ NN: this.props.networks[val], NN_key: val }, function () {\n                return console.log(_this2.state);\n            });\n        }\n    }, {\n        key: 'renderNetworkList',\n        value: function renderNetworkList() {\n            var returnElement = [_react2.default.createElement(_MenuItem2.default, { key: -1, value: -1, primaryText: 'Choose one of your networks' })];\n            this.props.networks.forEach(function (NN, index) {\n                returnElement.push(_react2.default.createElement(_MenuItem2.default, { key: index, value: index, primaryText: NN.description }));\n            });\n            return returnElement;\n        }\n    }, {\n        key: 'renderOptions',\n        value: function renderOptions() {\n            var _this3 = this;\n\n            var returnElement = [];\n            this.state.NN.input_descriptions.input_names.forEach(function (category, index) {\n                var newMenu = _react2.default.createElement(\n                    _SelectField2.default,\n                    {\n                        key: index,\n                        value: _this3.state.options[category].value,\n                        onChange: _this3.setoption.bind(_this3),\n                        floatingLabelText: category },\n                    _this3.renderOptionItems(index)\n                );\n                returnElement.push(newMenu);\n            });\n            return returnElement;\n        }\n    }, {\n        key: 'renderOptionItems',\n        value: function renderOptionItems(categoryIndex) {\n            var menuItems = [];\n            this.state.NN.input_descriptions.possible_inputs.string[categoryIndex].forEach(function (input, index) {\n                var newItem = _react2.default.createElement(_MenuItem2.default, { key: index, value: input, primaryText: input });\n                menuItems.psuh(newItem);\n            });\n            return menuItems;\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this4 = this;\n\n            return _react2.default.createElement(\n                'div',\n                { className: 'card-content-container' },\n                _react2.default.createElement(\n                    _IconButton2.default,\n                    { className: 'close-button', onTouchTap: function onTouchTap() {\n                            return _this4.props.closeCard();\n                        } },\n                    _react2.default.createElement(_close2.default, null)\n                ),\n                _react2.default.createElement(\n                    'div',\n                    { className: 'card-content create-simple-net' },\n                    _react2.default.createElement(\n                        'h1',\n                        null,\n                        'Activate and Test!'\n                    ),\n                    _react2.default.createElement('hr', null),\n                    _react2.default.createElement(\n                        'h2',\n                        null,\n                        'Choose one of your trained networks!'\n                    ),\n                    _react2.default.createElement(\n                        _DropDownMenu2.default,\n                        { value: this.state.NN_key, onChange: this.loadTestNetwork.bind(this) },\n                        this.renderNetworkList()\n                    ),\n                    this.state.NN_key >= 0 && _react2.default.createElement(\n                        'div',\n                        null,\n                        console.log(this.state.NN),\n                        _react2.default.createElement(\n                            'h2',\n                            null,\n                            'Choose from your options'\n                        ),\n                        this.renderOptions(),\n                        _react2.default.createElement(\n                            'h2',\n                            null,\n                            'Network output'\n                        ),\n                        this.activateNetwork()\n                    )\n                )\n            );\n        }\n    }]);\n\n    return TestANetCard;\n}(_react2.default.Component);\n\nTestANetCard.propTypes = {\n    closeCard: _propTypes2.default.func,\n    networks: _propTypes2.default.array\n};\n\nexports.default = TestANetCard;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzcwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbXBvbmVudHMvcGxheS9wbGF5Z3JvdW5kL1Rlc3RBTmV0Q2FyZC5qcz84OTI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvSWNvbkJ1dHRvbic7XG5pbXBvcnQgTmF2aWdhdGlvbkNsb3NlIGZyb20gJ21hdGVyaWFsLXVpL3N2Zy1pY29ucy9uYXZpZ2F0aW9uL2Nsb3NlJztcbmltcG9ydCBEcm9wRG93bk1lbnUgZnJvbSAnbWF0ZXJpYWwtdWkvRHJvcERvd25NZW51JztcbmltcG9ydCBNZW51SXRlbSBmcm9tICdtYXRlcmlhbC11aS9NZW51SXRlbSc7XG5pbXBvcnQgU2VsZWN0RmllbGQgZnJvbSAnbWF0ZXJpYWwtdWkvU2VsZWN0RmllbGQnO1xuXG5jbGFzcyBUZXN0QU5ldENhcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIE5OOiB7fSxcbiAgICAgICAgICAgIE5OX2tleTogLTEsXG4gICAgICAgICAgICBvcHRpb25zOiB7fVxuICAgICAgICB9O1xuICAgIH1cbiAgICBsb2FkVGVzdE5ldHdvcmsoZSwga2V5LCB2YWwpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Tk46IHRoaXMucHJvcHMubmV0d29ya3NbdmFsXSwgTk5fa2V5OiB2YWx9LCAoKT0+Y29uc29sZS5sb2codGhpcy5zdGF0ZSkpO1xuICAgIH1cbiAgICByZW5kZXJOZXR3b3JrTGlzdCgpIHtcbiAgICAgICAgY29uc3QgcmV0dXJuRWxlbWVudCA9IFs8TWVudUl0ZW0ga2V5PXstMX0gdmFsdWU9ey0xfSBwcmltYXJ5VGV4dD17J0Nob29zZSBvbmUgb2YgeW91ciBuZXR3b3Jrcyd9IC8+XTtcbiAgICAgICAgdGhpcy5wcm9wcy5uZXR3b3Jrcy5mb3JFYWNoKChOTiwgaW5kZXgpPT57XG4gICAgICAgICAgICByZXR1cm5FbGVtZW50LnB1c2goPE1lbnVJdGVtIGtleT17aW5kZXh9IHZhbHVlPXtpbmRleH0gcHJpbWFyeVRleHQ9e05OLmRlc2NyaXB0aW9ufSAvPik7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmV0dXJuRWxlbWVudDtcbiAgICB9XG4gICAgcmVuZGVyT3B0aW9ucygpIHtcbiAgICAgICAgY29uc3QgcmV0dXJuRWxlbWVudCA9IFtdO1xuICAgICAgICB0aGlzLnN0YXRlLk5OLmlucHV0X2Rlc2NyaXB0aW9ucy5pbnB1dF9uYW1lcy5mb3JFYWNoKChjYXRlZ29yeSwgaW5kZXgpPT57XG4gICAgICAgICAgICBjb25zdCBuZXdNZW51ID0gICAoXG4gICAgICAgICAgICAgICAgPFNlbGVjdEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm9wdGlvbnNbY2F0ZWdvcnldLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5zZXRvcHRpb24uYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgZmxvYXRpbmdMYWJlbFRleHQ9e2NhdGVnb3J5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlck9wdGlvbkl0ZW1zKGluZGV4KX1cbiAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3RGaWVsZD4pO1xuICAgICAgICAgICAgcmV0dXJuRWxlbWVudC5wdXNoKG5ld01lbnUpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJldHVybkVsZW1lbnQ7XG4gICAgfVxuICAgIHJlbmRlck9wdGlvbkl0ZW1zKGNhdGVnb3J5SW5kZXgpIHtcbiAgICAgICAgY29uc3QgbWVudUl0ZW1zID0gW107XG4gICAgICAgIHRoaXMuc3RhdGUuTk4uaW5wdXRfZGVzY3JpcHRpb25zLnBvc3NpYmxlX2lucHV0cy5zdHJpbmdbY2F0ZWdvcnlJbmRleF0uZm9yRWFjaCgoaW5wdXQsIGluZGV4KT0+e1xuICAgICAgICAgICAgY29uc3QgbmV3SXRlbSA9IDxNZW51SXRlbSBrZXk9e2luZGV4fSB2YWx1ZT17aW5wdXR9IHByaW1hcnlUZXh0PXtpbnB1dH0gLz47XG4gICAgICAgICAgICBtZW51SXRlbXMucHN1aChuZXdJdGVtKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBtZW51SXRlbXM7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPEljb25CdXR0b24gY2xhc3NOYW1lPVwiY2xvc2UtYnV0dG9uXCIgb25Ub3VjaFRhcD17KCk9PnRoaXMucHJvcHMuY2xvc2VDYXJkKCl9ID48TmF2aWdhdGlvbkNsb3NlIC8+PC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50IGNyZWF0ZS1zaW1wbGUtbmV0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMT5BY3RpdmF0ZSBhbmQgVGVzdCE8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGgyPkNob29zZSBvbmUgb2YgeW91ciB0cmFpbmVkIG5ldHdvcmtzITwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxEcm9wRG93bk1lbnUgdmFsdWU9e3RoaXMuc3RhdGUuTk5fa2V5fSBvbkNoYW5nZT17dGhpcy5sb2FkVGVzdE5ldHdvcmsuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyTmV0d29ya0xpc3QoKX1cbiAgICAgICAgICAgICAgICAgICAgPC9Ecm9wRG93bk1lbnU+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLk5OX2tleSA+PSAwICYmIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29uc29sZS5sb2codGhpcy5zdGF0ZS5OTil9XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+Q2hvb3NlIGZyb20geW91ciBvcHRpb25zPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlck9wdGlvbnMoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5OZXR3b3JrIG91dHB1dDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5hY3RpdmF0ZU5ldHdvcmsoKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5UZXN0QU5ldENhcmQucHJvcFR5cGVzID0ge1xuICAgIGNsb3NlQ2FyZDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgbmV0d29ya3M6IFByb3BUeXBlcy5hcnJheVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVGVzdEFOZXRDYXJkO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGZyb250ZW5kL2NvbXBvbmVudHMvcGxheS9wbGF5Z3JvdW5kL1Rlc3RBTmV0Q2FyZC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUZBO0FBT0E7QUFDQTs7O0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUxBO0FBUEE7QUFGQTtBQW1CQTs7OztBQS9EQTtBQUNBO0FBaUVBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})