webpackHotUpdate(0,{

/***/ 364:
/* unknown exports provided */
/* all exports used */
/*!********************************************************!*\
  !*** ./frontend/components/play/playground/SideBar.js ***!
  \********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ 2);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _FlatButton = __webpack_require__(/*! material-ui/FlatButton */ 27);\n\nvar _FlatButton2 = _interopRequireDefault(_FlatButton);\n\nvar _lightbulbOutline = __webpack_require__(/*! material-ui/svg-icons/action/lightbulb-outline */ 671);\n\nvar _lightbulbOutline2 = _interopRequireDefault(_lightbulbOutline);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar labS = {\n    color: 'white',\n    display: 'block'\n};\n\nvar mainStyle = {\n    alignItems: 'center',\n    justifyContent: 'center',\n    flexDirection: 'column',\n    display: 'flex',\n    height: '100px',\n    padding: '10px'\n};\n\nvar iconStyle = {\n    fill: 'white',\n    width: '80x',\n    height: '80px'\n};\n\nvar SideBar = function SideBar(_ref) {\n    var showCardScreen = _ref.showCardScreen;\n    return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(_FlatButton2.default, { onTouchTap: function onTouchTap() {\n                showCardScreen(1);\n            }, label: 'View your networks', labelStyle: labS, icon: _react2.default.createElement(_lightbulbOutline2.default, { style: iconStyle }), style: mainStyle, fullWidth: true }),\n        _react2.default.createElement(_FlatButton2.default, { onTouchTap: function onTouchTap() {\n                showCardScreen(2);\n            }, label: 'Connect networks', labelStyle: labS, icon: _react2.default.createElement(_lightbulbOutline2.default, { style: iconStyle }), style: mainStyle, fullWidth: true }),\n        _react2.default.createElement(_FlatButton2.default, { onTouchTap: function onTouchTap() {\n                showCardScreen(3);\n            }, label: 'Test a network', labelStyle: labS, icon: _react2.default.createElement(_lightbulbOutline2.default, { style: iconStyle }), style: mainStyle, fullWidth: true }),\n        _react2.default.createElement(_FlatButton2.default, { onTouchTap: function onTouchTap() {\n                showCardScreen(4);\n            }, label: 'Create a predictive network', labelStyle: labS, icon: _react2.default.createElement(_lightbulbOutline2.default, { style: iconStyle }), style: mainStyle, fullWidth: true }),\n        _react2.default.createElement(_FlatButton2.default, { onTouchTap: function onTouchTap() {\n                showCardScreen(5);\n            }, label: 'Create a memory network', labelStyle: labS, icon: _react2.default.createElement(_lightbulbOutline2.default, { style: iconStyle }), style: mainStyle, fullWidth: true })\n    );\n};\n\nSideBar.propTypes = {\n    showCardScreen: _propTypes2.default.func\n};\n\nexports.default = SideBar;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzY0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbXBvbmVudHMvcGxheS9wbGF5Z3JvdW5kL1NpZGVCYXIuanM/ZGU0YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBGbGF0QnV0dG9uIGZyb20gJ21hdGVyaWFsLXVpL0ZsYXRCdXR0b24nO1xuaW1wb3J0IEFjdGlvbkxpZ2h0YnVsYk91dGxpbmUgZnJvbSAnbWF0ZXJpYWwtdWkvc3ZnLWljb25zL2FjdGlvbi9saWdodGJ1bGItb3V0bGluZSc7XG5cbmNvbnN0IGxhYlMgPSB7XG4gICAgY29sb3I6ICd3aGl0ZScsXG4gICAgZGlzcGxheTogJ2Jsb2NrJ1xufTtcblxuY29uc3QgbWFpblN0eWxlID0ge1xuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgaGVpZ2h0OiAnMTAwcHgnLFxuICAgIHBhZGRpbmc6ICcxMHB4J1xufTtcblxuY29uc3QgaWNvblN0eWxlID0ge1xuICAgIGZpbGw6ICd3aGl0ZScsXG4gICAgd2lkdGg6ICc4MHgnLFxuICAgIGhlaWdodDogJzgwcHgnLFxufTtcblxuY29uc3QgU2lkZUJhciA9ICggeyBzaG93Q2FyZFNjcmVlbiB9ICkgPT4gKFxuICAgIDxkaXY+XG4gICAgICAgIDxGbGF0QnV0dG9uIG9uVG91Y2hUYXA9eygpPT57XG4gICAgICAgICAgICBzaG93Q2FyZFNjcmVlbigxKTtcbiAgICAgICAgfX0gbGFiZWw9XCJWaWV3IHlvdXIgbmV0d29ya3NcIiBsYWJlbFN0eWxlPXtsYWJTfSBpY29uPXs8QWN0aW9uTGlnaHRidWxiT3V0bGluZSBzdHlsZT17aWNvblN0eWxlfSAvPn0gc3R5bGU9e21haW5TdHlsZX0gZnVsbFdpZHRoIC8+XG4gICAgICAgIDxGbGF0QnV0dG9uIG9uVG91Y2hUYXA9eygpPT57XG4gICAgICAgICAgICBzaG93Q2FyZFNjcmVlbigyKTtcbiAgICAgICAgfX0gbGFiZWw9XCJDb25uZWN0IG5ldHdvcmtzXCIgbGFiZWxTdHlsZT17bGFiU30gaWNvbj17PEFjdGlvbkxpZ2h0YnVsYk91dGxpbmUgc3R5bGU9e2ljb25TdHlsZX0gLz59IHN0eWxlPXttYWluU3R5bGV9IGZ1bGxXaWR0aCAvPlxuICAgICAgICA8RmxhdEJ1dHRvbiBvblRvdWNoVGFwPXsoKT0+e1xuICAgICAgICAgICAgc2hvd0NhcmRTY3JlZW4oMyk7XG4gICAgICAgIH19IGxhYmVsPVwiVGVzdCBhIG5ldHdvcmtcIiBsYWJlbFN0eWxlPXtsYWJTfSBpY29uPXs8QWN0aW9uTGlnaHRidWxiT3V0bGluZSBzdHlsZT17aWNvblN0eWxlfSAvPn0gc3R5bGU9e21haW5TdHlsZX0gZnVsbFdpZHRoIC8+XG4gICAgICAgIDxGbGF0QnV0dG9uIG9uVG91Y2hUYXA9eygpPT57XG4gICAgICAgICAgICBzaG93Q2FyZFNjcmVlbig0KTtcbiAgICAgICAgfX0gbGFiZWw9XCJDcmVhdGUgYSBwcmVkaWN0aXZlIG5ldHdvcmtcIiBsYWJlbFN0eWxlPXtsYWJTfSBpY29uPXs8QWN0aW9uTGlnaHRidWxiT3V0bGluZSBzdHlsZT17aWNvblN0eWxlfSAvPn0gc3R5bGU9e21haW5TdHlsZX0gZnVsbFdpZHRoIC8+XG4gICAgICAgIDxGbGF0QnV0dG9uIG9uVG91Y2hUYXA9eygpPT57XG4gICAgICAgICAgICBzaG93Q2FyZFNjcmVlbig1KTtcbiAgICAgICAgfX0gbGFiZWw9XCJDcmVhdGUgYSBtZW1vcnkgbmV0d29ya1wiIGxhYmVsU3R5bGU9e2xhYlN9IGljb249ezxBY3Rpb25MaWdodGJ1bGJPdXRsaW5lIHN0eWxlPXtpY29uU3R5bGV9IC8+fSBzdHlsZT17bWFpblN0eWxlfSBmdWxsV2lkdGggLz5cbiAgICA8L2Rpdj5cbik7XG5cblNpZGVCYXIucHJvcFR5cGVzID0ge1xuICAgIHNob3dDYXJkU2NyZWVuOiBQcm9wVHlwZXMuZnVuY1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lkZUJhcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBmcm9udGVuZC9jb21wb25lbnRzL3BsYXkvcGxheWdyb3VuZC9TaWRlQmFyLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZkE7QUFEQTtBQUNBO0FBbUJBO0FBQ0E7QUFEQTtBQUNBO0FBR0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})