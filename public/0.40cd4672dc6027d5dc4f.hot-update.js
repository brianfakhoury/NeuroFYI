webpackHotUpdate(0,{

/***/ 364:
/* unknown exports provided */
/* all exports used */
/*!********************************************************!*\
  !*** ./frontend/components/play/playground/SideBar.js ***!
  \********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ 2);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _FlatButton = __webpack_require__(/*! material-ui/FlatButton */ 27);\n\nvar _FlatButton2 = _interopRequireDefault(_FlatButton);\n\nvar _lightbulbOutline = __webpack_require__(/*! material-ui/svg-icons/action/lightbulb-outline */ 671);\n\nvar _lightbulbOutline2 = _interopRequireDefault(_lightbulbOutline);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar labS = {\n    color: 'white'\n};\n\nvar mainStyle = {\n    float: 'left',\n    alignItems: 'center',\n    justifyContent: 'center',\n    flexDirection: 'column',\n    display: 'flex',\n    height: '100px'\n};\n\nvar iconStyle = {\n    fill: 'white',\n    width: '80x',\n    height: '80px'\n};\n\nvar SideBar = function SideBar(_ref) {\n    var showCardScreen = _ref.showCardScreen;\n    return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n            _FlatButton2.default,\n            { onTouchTap: function onTouchTap() {\n                    showCardScreen(1);\n                }, label: 'View your networks', labelStyle: labS, style: mainStyle, fullWidth: true },\n            _react2.default.createElement(_lightbulbOutline2.default, { style: iconStyle })\n        ),\n        _react2.default.createElement(_FlatButton2.default, { onTouchTap: function onTouchTap() {\n                showCardScreen(2);\n            }, label: 'Connect networks', labelStyle: labS, icon: _react2.default.createElement(_lightbulbOutline2.default, { style: iconStyle }), style: mainStyle, fullWidth: true }),\n        _react2.default.createElement(_FlatButton2.default, { onTouchTap: function onTouchTap() {\n                showCardScreen(3);\n            }, label: 'Test a network', labelStyle: labS, icon: _react2.default.createElement(_lightbulbOutline2.default, { style: iconStyle }), style: mainStyle, fullWidth: true }),\n        _react2.default.createElement(_FlatButton2.default, { onTouchTap: function onTouchTap() {\n                showCardScreen(4);\n            }, label: 'Create a predictive network', labelStyle: labS, icon: _react2.default.createElement(_lightbulbOutline2.default, { style: iconStyle }), style: mainStyle, fullWidth: true }),\n        _react2.default.createElement(_FlatButton2.default, { onTouchTap: function onTouchTap() {\n                showCardScreen(5);\n            }, label: 'Create a memory network', labelStyle: labS, icon: _react2.default.createElement(_lightbulbOutline2.default, { style: iconStyle }), style: mainStyle, fullWidth: true })\n    );\n};\n\nSideBar.propTypes = {\n    showCardScreen: _propTypes2.default.func\n};\n\nexports.default = SideBar;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzY0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbXBvbmVudHMvcGxheS9wbGF5Z3JvdW5kL1NpZGVCYXIuanM/ZGU0YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBGbGF0QnV0dG9uIGZyb20gJ21hdGVyaWFsLXVpL0ZsYXRCdXR0b24nO1xuaW1wb3J0IEFjdGlvbkxpZ2h0YnVsYk91dGxpbmUgZnJvbSAnbWF0ZXJpYWwtdWkvc3ZnLWljb25zL2FjdGlvbi9saWdodGJ1bGItb3V0bGluZSc7XG5cbmNvbnN0IGxhYlMgPSB7XG4gICAgY29sb3I6ICd3aGl0ZSdcbn07XG5cbmNvbnN0IG1haW5TdHlsZSA9IHtcbiAgICBmbG9hdDogJ2xlZnQnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgaGVpZ2h0OiAnMTAwcHgnXG59O1xuXG5jb25zdCBpY29uU3R5bGUgPSB7XG4gICAgZmlsbDogJ3doaXRlJyxcbiAgICB3aWR0aDogJzgweCcsXG4gICAgaGVpZ2h0OiAnODBweCdcbn07XG5cbmNvbnN0IFNpZGVCYXIgPSAoIHsgc2hvd0NhcmRTY3JlZW4gfSApID0+IChcbiAgICA8ZGl2PlxuICAgICAgICA8RmxhdEJ1dHRvbiBvblRvdWNoVGFwPXsoKT0+e1xuICAgICAgICAgICAgc2hvd0NhcmRTY3JlZW4oMSk7XG4gICAgICAgIH19IGxhYmVsPVwiVmlldyB5b3VyIG5ldHdvcmtzXCIgbGFiZWxTdHlsZT17bGFiU30gc3R5bGU9e21haW5TdHlsZX0gZnVsbFdpZHRoPjxBY3Rpb25MaWdodGJ1bGJPdXRsaW5lIHN0eWxlPXtpY29uU3R5bGV9IC8+PC9GbGF0QnV0dG9uPlxuICAgICAgICA8RmxhdEJ1dHRvbiBvblRvdWNoVGFwPXsoKT0+e1xuICAgICAgICAgICAgc2hvd0NhcmRTY3JlZW4oMik7XG4gICAgICAgIH19IGxhYmVsPVwiQ29ubmVjdCBuZXR3b3Jrc1wiIGxhYmVsU3R5bGU9e2xhYlN9IGljb249ezxBY3Rpb25MaWdodGJ1bGJPdXRsaW5lIHN0eWxlPXtpY29uU3R5bGV9IC8+fSBzdHlsZT17bWFpblN0eWxlfSBmdWxsV2lkdGggLz5cbiAgICAgICAgPEZsYXRCdXR0b24gb25Ub3VjaFRhcD17KCk9PntcbiAgICAgICAgICAgIHNob3dDYXJkU2NyZWVuKDMpO1xuICAgICAgICB9fSBsYWJlbD1cIlRlc3QgYSBuZXR3b3JrXCIgbGFiZWxTdHlsZT17bGFiU30gaWNvbj17PEFjdGlvbkxpZ2h0YnVsYk91dGxpbmUgc3R5bGU9e2ljb25TdHlsZX0gLz59IHN0eWxlPXttYWluU3R5bGV9IGZ1bGxXaWR0aCAvPlxuICAgICAgICA8RmxhdEJ1dHRvbiBvblRvdWNoVGFwPXsoKT0+e1xuICAgICAgICAgICAgc2hvd0NhcmRTY3JlZW4oNCk7XG4gICAgICAgIH19IGxhYmVsPVwiQ3JlYXRlIGEgcHJlZGljdGl2ZSBuZXR3b3JrXCIgbGFiZWxTdHlsZT17bGFiU30gaWNvbj17PEFjdGlvbkxpZ2h0YnVsYk91dGxpbmUgc3R5bGU9e2ljb25TdHlsZX0gLz59IHN0eWxlPXttYWluU3R5bGV9IGZ1bGxXaWR0aCAvPlxuICAgICAgICA8RmxhdEJ1dHRvbiBvblRvdWNoVGFwPXsoKT0+e1xuICAgICAgICAgICAgc2hvd0NhcmRTY3JlZW4oNSk7XG4gICAgICAgIH19IGxhYmVsPVwiQ3JlYXRlIGEgbWVtb3J5IG5ldHdvcmtcIiBsYWJlbFN0eWxlPXtsYWJTfSBpY29uPXs8QWN0aW9uTGlnaHRidWxiT3V0bGluZSBzdHlsZT17aWNvblN0eWxlfSAvPn0gc3R5bGU9e21haW5TdHlsZX0gZnVsbFdpZHRoIC8+XG4gICAgPC9kaXY+XG4pO1xuXG5TaWRlQmFyLnByb3BUeXBlcyA9IHtcbiAgICBzaG93Q2FyZFNjcmVlbjogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGVCYXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZnJvbnRlbmQvY29tcG9uZW50cy9wbGF5L3BsYXlncm91bmQvU2lkZUJhci5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFGQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWZBO0FBREE7QUFDQTtBQW1CQTtBQUNBO0FBREE7QUFDQTtBQUdBIiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})