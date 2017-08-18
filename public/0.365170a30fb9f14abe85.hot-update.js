webpackHotUpdate(0,{

/***/ 373:
/* unknown exports provided */
/* all exports used */
/*!*************************************************************!*\
  !*** ./frontend/components/play/playground/TestANetCard.js ***!
  \*************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ 2);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _IconButton = __webpack_require__(/*! material-ui/IconButton */ 37);\n\nvar _IconButton2 = _interopRequireDefault(_IconButton);\n\nvar _close = __webpack_require__(/*! material-ui/svg-icons/navigation/close */ 81);\n\nvar _close2 = _interopRequireDefault(_close);\n\nvar _DropDownMenu = __webpack_require__(/*! material-ui/DropDownMenu */ 265);\n\nvar _DropDownMenu2 = _interopRequireDefault(_DropDownMenu);\n\nvar _MenuItem = __webpack_require__(/*! material-ui/MenuItem */ 269);\n\nvar _MenuItem2 = _interopRequireDefault(_MenuItem);\n\nvar _SelectField = __webpack_require__(/*! material-ui/SelectField */ 271);\n\nvar _SelectField2 = _interopRequireDefault(_SelectField);\n\nvar _synaptic = __webpack_require__(/*! synaptic */ 109);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar TestANetCard = function (_React$Component) {\n    _inherits(TestANetCard, _React$Component);\n\n    function TestANetCard(props) {\n        _classCallCheck(this, TestANetCard);\n\n        var _this = _possibleConstructorReturn(this, (TestANetCard.__proto__ || Object.getPrototypeOf(TestANetCard)).call(this, props));\n\n        _this.state = {\n            NN: {},\n            NN_key: -1,\n            options: {},\n            binaryOptions: {}\n        };\n        return _this;\n    }\n\n    _createClass(TestANetCard, [{\n        key: 'loadTestNetwork',\n        value: function loadTestNetwork(e, key, val) {\n            var _this2 = this;\n\n            this.setState({ NN: this.props.networks[val], NN_key: val }, function () {\n                return _this2.setOptions();\n            });\n        }\n    }, {\n        key: 'renderNetworkList',\n        value: function renderNetworkList() {\n            var returnElement = [_react2.default.createElement(_MenuItem2.default, { key: -1, value: -1, primaryText: 'Choose one of your networks' })];\n            this.props.networks.forEach(function (NN, index) {\n                returnElement.push(_react2.default.createElement(_MenuItem2.default, { key: index, value: index, primaryText: NN.description }));\n            });\n            return returnElement;\n        }\n    }, {\n        key: 'renderOptions',\n        value: function renderOptions() {\n            var _this3 = this;\n\n            var returnElement = [];\n            this.state.NN.input_descriptions.input_names.forEach(function (category, index) {\n                var newMenu = _react2.default.createElement(\n                    _SelectField2.default,\n                    {\n                        key: index,\n                        value: _this3.state.options[category],\n                        onChange: function onChange(e, key, val) {\n                            console.log(key);\n                            var newOptions = Object.assign({}, _this3.state.options);\n                            var newBinaryOptions = Object.assign({}, _this3.state.binaryOptions);\n                            newOptions[category] = val;\n                            newBinaryOptions[index] = _this3.state.NN.input_descriptions.possible_inputs.binary[index][key];\n                            _this3.setState({ options: newOptions, binaryOptions: newBinaryOptions }, function () {\n                                return console.log(_this3.state);\n                            });\n                        },\n                        floatingLabelText: category },\n                    _this3.renderOptionItems(index)\n                );\n                returnElement.push(newMenu);\n            });\n            return returnElement;\n        }\n    }, {\n        key: 'renderOptionItems',\n        value: function renderOptionItems(categoryIndex) {\n            var menuItems = [];\n            this.state.NN.input_descriptions.possible_inputs.string[categoryIndex].forEach(function (input, index) {\n                var newItem = _react2.default.createElement(_MenuItem2.default, { key: index, value: input, primaryText: input });\n                menuItems.push(newItem);\n            });\n            return menuItems;\n        }\n    }, {\n        key: 'setOptions',\n        value: function setOptions() {\n            var _this4 = this;\n\n            var newOptions = {};\n            var newBinaryOptions = {};\n            this.state.NN.input_descriptions.input_names.forEach(function (category, index) {\n                newOptions[category] = _this4.state.NN.input_descriptions.possible_inputs.string[index][0];\n                newBinaryOptions[index] = _this4.state.NN.input_descriptions.possible_inputs.binary[index][0];\n            });\n            this.setState({ options: newOptions, binaryOptions: newBinaryOptions }, function () {\n                return console.log(_this4.state);\n            });\n        }\n    }, {\n        key: 'activateNetwork',\n        value: function activateNetwork() {\n            var _this5 = this;\n\n            var network = _synaptic.Network.fromJSON(this.state.NN.network);\n            var activationArray = [];\n            var optionKeys = Object.keys(this.state.binaryOptions);\n            optionKeys.forEach(function (p) {\n                return activationArray.push(_this5.state.binaryOptions[p]);\n            });\n            return network.activate(activationArray);\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this6 = this;\n\n            return _react2.default.createElement(\n                'div',\n                { className: 'card-content-container' },\n                _react2.default.createElement(\n                    _IconButton2.default,\n                    { className: 'close-button', onTouchTap: function onTouchTap() {\n                            return _this6.props.closeCard();\n                        } },\n                    _react2.default.createElement(_close2.default, null)\n                ),\n                _react2.default.createElement(\n                    'div',\n                    { className: 'card-content create-simple-net' },\n                    _react2.default.createElement(\n                        'h1',\n                        null,\n                        'Activate and Test!'\n                    ),\n                    _react2.default.createElement('hr', null),\n                    _react2.default.createElement(\n                        'h2',\n                        null,\n                        'Choose one of your trained networks!'\n                    ),\n                    _react2.default.createElement(\n                        _DropDownMenu2.default,\n                        { value: this.state.NN_key, onChange: this.loadTestNetwork.bind(this) },\n                        this.renderNetworkList()\n                    ),\n                    this.state.NN_key >= 0 && _react2.default.createElement(\n                        'div',\n                        null,\n                        _react2.default.createElement(\n                            'h2',\n                            null,\n                            'Choose from your options'\n                        ),\n                        this.renderOptions(),\n                        _react2.default.createElement(\n                            'h2',\n                            null,\n                            'Network output'\n                        ),\n                        this.activateNetwork()\n                    )\n                )\n            );\n        }\n    }]);\n\n    return TestANetCard;\n}(_react2.default.Component);\n\nTestANetCard.propTypes = {\n    closeCard: _propTypes2.default.func,\n    networks: _propTypes2.default.array\n};\n\nexports.default = TestANetCard;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzczLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbXBvbmVudHMvcGxheS9wbGF5Z3JvdW5kL1Rlc3RBTmV0Q2FyZC5qcz84OTI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvSWNvbkJ1dHRvbic7XG5pbXBvcnQgTmF2aWdhdGlvbkNsb3NlIGZyb20gJ21hdGVyaWFsLXVpL3N2Zy1pY29ucy9uYXZpZ2F0aW9uL2Nsb3NlJztcbmltcG9ydCBEcm9wRG93bk1lbnUgZnJvbSAnbWF0ZXJpYWwtdWkvRHJvcERvd25NZW51JztcbmltcG9ydCBNZW51SXRlbSBmcm9tICdtYXRlcmlhbC11aS9NZW51SXRlbSc7XG5pbXBvcnQgU2VsZWN0RmllbGQgZnJvbSAnbWF0ZXJpYWwtdWkvU2VsZWN0RmllbGQnO1xuaW1wb3J0IHsgTmV0d29yayB9IGZyb20gJ3N5bmFwdGljJztcblxuY2xhc3MgVGVzdEFOZXRDYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBOTjoge30sXG4gICAgICAgICAgICBOTl9rZXk6IC0xLFxuICAgICAgICAgICAgb3B0aW9uczoge30sXG4gICAgICAgICAgICBiaW5hcnlPcHRpb25zOiB7fVxuICAgICAgICB9O1xuICAgIH1cbiAgICBsb2FkVGVzdE5ldHdvcmsoZSwga2V5LCB2YWwpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Tk46IHRoaXMucHJvcHMubmV0d29ya3NbdmFsXSwgTk5fa2V5OiB2YWx9LCAoKT0+dGhpcy5zZXRPcHRpb25zKCkpO1xuICAgIH1cbiAgICByZW5kZXJOZXR3b3JrTGlzdCgpIHtcbiAgICAgICAgY29uc3QgcmV0dXJuRWxlbWVudCA9IFs8TWVudUl0ZW0ga2V5PXstMX0gdmFsdWU9ey0xfSBwcmltYXJ5VGV4dD17J0Nob29zZSBvbmUgb2YgeW91ciBuZXR3b3Jrcyd9IC8+XTtcbiAgICAgICAgdGhpcy5wcm9wcy5uZXR3b3Jrcy5mb3JFYWNoKChOTiwgaW5kZXgpPT57XG4gICAgICAgICAgICByZXR1cm5FbGVtZW50LnB1c2goPE1lbnVJdGVtIGtleT17aW5kZXh9IHZhbHVlPXtpbmRleH0gcHJpbWFyeVRleHQ9e05OLmRlc2NyaXB0aW9ufSAvPik7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmV0dXJuRWxlbWVudDtcbiAgICB9XG4gICAgcmVuZGVyT3B0aW9ucygpIHtcbiAgICAgICAgY29uc3QgcmV0dXJuRWxlbWVudCA9IFtdO1xuICAgICAgICB0aGlzLnN0YXRlLk5OLmlucHV0X2Rlc2NyaXB0aW9ucy5pbnB1dF9uYW1lcy5mb3JFYWNoKChjYXRlZ29yeSwgaW5kZXgpPT57XG4gICAgICAgICAgICBjb25zdCBuZXdNZW51ID0gICAoXG4gICAgICAgICAgICAgICAgPFNlbGVjdEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm9wdGlvbnNbY2F0ZWdvcnldfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUsIGtleSwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhrZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3T3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUub3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdCaW5hcnlPcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5iaW5hcnlPcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld09wdGlvbnNbY2F0ZWdvcnldID0gdmFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3QmluYXJ5T3B0aW9uc1tpbmRleF0gPSB0aGlzLnN0YXRlLk5OLmlucHV0X2Rlc2NyaXB0aW9ucy5wb3NzaWJsZV9pbnB1dHMuYmluYXJ5W2luZGV4XVtrZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7b3B0aW9uczogbmV3T3B0aW9ucywgYmluYXJ5T3B0aW9uczogbmV3QmluYXJ5T3B0aW9uc30sICgpPT5jb25zb2xlLmxvZyh0aGlzLnN0YXRlKSk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0aW5nTGFiZWxUZXh0PXtjYXRlZ29yeX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJPcHRpb25JdGVtcyhpbmRleCl9XG4gICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0RmllbGQ+KTtcbiAgICAgICAgICAgIHJldHVybkVsZW1lbnQucHVzaChuZXdNZW51KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXR1cm5FbGVtZW50O1xuICAgIH1cbiAgICByZW5kZXJPcHRpb25JdGVtcyhjYXRlZ29yeUluZGV4KSB7XG4gICAgICAgIGNvbnN0IG1lbnVJdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLnN0YXRlLk5OLmlucHV0X2Rlc2NyaXB0aW9ucy5wb3NzaWJsZV9pbnB1dHMuc3RyaW5nW2NhdGVnb3J5SW5kZXhdLmZvckVhY2goKGlucHV0LCBpbmRleCk9PntcbiAgICAgICAgICAgIGNvbnN0IG5ld0l0ZW0gPSA8TWVudUl0ZW0ga2V5PXtpbmRleH0gdmFsdWU9e2lucHV0fSBwcmltYXJ5VGV4dD17aW5wdXR9IC8+O1xuICAgICAgICAgICAgbWVudUl0ZW1zLnB1c2gobmV3SXRlbSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbWVudUl0ZW1zO1xuICAgIH1cbiAgICBzZXRPcHRpb25zKCkge1xuICAgICAgICBjb25zdCBuZXdPcHRpb25zID0ge307XG4gICAgICAgIGNvbnN0IG5ld0JpbmFyeU9wdGlvbnMgPSB7fTtcbiAgICAgICAgdGhpcy5zdGF0ZS5OTi5pbnB1dF9kZXNjcmlwdGlvbnMuaW5wdXRfbmFtZXMuZm9yRWFjaCgoY2F0ZWdvcnksIGluZGV4KT0+e1xuICAgICAgICAgICAgbmV3T3B0aW9uc1tjYXRlZ29yeV0gPSB0aGlzLnN0YXRlLk5OLmlucHV0X2Rlc2NyaXB0aW9ucy5wb3NzaWJsZV9pbnB1dHMuc3RyaW5nW2luZGV4XVswXTtcbiAgICAgICAgICAgIG5ld0JpbmFyeU9wdGlvbnNbaW5kZXhdID0gdGhpcy5zdGF0ZS5OTi5pbnB1dF9kZXNjcmlwdGlvbnMucG9zc2libGVfaW5wdXRzLmJpbmFyeVtpbmRleF1bMF07XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtvcHRpb25zOiBuZXdPcHRpb25zLCBiaW5hcnlPcHRpb25zOiBuZXdCaW5hcnlPcHRpb25zfSwgKCk9PmNvbnNvbGUubG9nKHRoaXMuc3RhdGUpKTtcbiAgICB9XG4gICAgYWN0aXZhdGVOZXR3b3JrKCkge1xuICAgICAgICBjb25zdCBuZXR3b3JrID0gTmV0d29yay5mcm9tSlNPTih0aGlzLnN0YXRlLk5OLm5ldHdvcmspO1xuICAgICAgICBjb25zdCBhY3RpdmF0aW9uQXJyYXkgPSBbXTtcbiAgICAgICAgY29uc3Qgb3B0aW9uS2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuc3RhdGUuYmluYXJ5T3B0aW9ucyk7XG4gICAgICAgIG9wdGlvbktleXMuZm9yRWFjaChwPT5hY3RpdmF0aW9uQXJyYXkucHVzaCh0aGlzLnN0YXRlLmJpbmFyeU9wdGlvbnNbcF0pKTtcbiAgICAgICAgcmV0dXJuIG5ldHdvcmsuYWN0aXZhdGUoYWN0aXZhdGlvbkFycmF5KTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBjbGFzc05hbWU9XCJjbG9zZS1idXR0b25cIiBvblRvdWNoVGFwPXsoKT0+dGhpcy5wcm9wcy5jbG9zZUNhcmQoKX0gPjxOYXZpZ2F0aW9uQ2xvc2UgLz48L0ljb25CdXR0b24+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnQgY3JlYXRlLXNpbXBsZS1uZXRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgxPkFjdGl2YXRlIGFuZCBUZXN0ITwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgICAgICAgICA8aDI+Q2hvb3NlIG9uZSBvZiB5b3VyIHRyYWluZWQgbmV0d29ya3MhPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPERyb3BEb3duTWVudSB2YWx1ZT17dGhpcy5zdGF0ZS5OTl9rZXl9IG9uQ2hhbmdlPXt0aGlzLmxvYWRUZXN0TmV0d29yay5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJOZXR3b3JrTGlzdCgpfVxuICAgICAgICAgICAgICAgICAgICA8L0Ryb3BEb3duTWVudT5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuTk5fa2V5ID49IDAgJiYgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5DaG9vc2UgZnJvbSB5b3VyIG9wdGlvbnM8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyT3B0aW9ucygpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPk5ldHdvcmsgb3V0cHV0PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmFjdGl2YXRlTmV0d29yaygpfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblRlc3RBTmV0Q2FyZC5wcm9wVHlwZXMgPSB7XG4gICAgY2xvc2VDYXJkOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBuZXR3b3JrczogUHJvcFR5cGVzLmFycmF5XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUZXN0QU5ldENhcmQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZnJvbnRlbmQvY29tcG9uZW50cy9wbGF5L3BsYXlncm91bmQvVGVzdEFOZXRDYXJkLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBRkE7QUFRQTtBQUNBOzs7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBWkE7QUFjQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFKQTtBQVBBO0FBRkE7QUFrQkE7Ozs7QUF0RkE7QUFDQTtBQXdGQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})