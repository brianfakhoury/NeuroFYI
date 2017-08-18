webpackHotUpdate(0,{

/***/ 364:
/* unknown exports provided */
/* all exports used */
/*!********************************************************!*\
  !*** ./frontend/components/play/playground/SideBar.js ***!
  \********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ 2);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _FlatButton = __webpack_require__(/*! material-ui/FlatButton */ 27);\n\nvar _FlatButton2 = _interopRequireDefault(_FlatButton);\n\nvar _lightbulbOutline = __webpack_require__(/*! material-ui/svg-icons/action/lightbulb-outline */ 671);\n\nvar _lightbulbOutline2 = _interopRequireDefault(_lightbulbOutline);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar SideBar = function SideBar(_ref) {\n    var showCardScreen = _ref.showCardScreen;\n    return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(_FlatButton2.default, { onTouchTap: function onTouchTap() {\n                showCardScreen(1);\n            }, label: 'View your networks', labelStyle: { color: 'white' }, icon: _react2.default.createElement(_lightbulbOutline2.default, { style: { fill: 'white', width: '80x', height: '80px' } }), fullWidth: true }),\n        _react2.default.createElement(_FlatButton2.default, { onTouchTap: function onTouchTap() {\n                showCardScreen(2);\n            }, label: 'Connect networks', labelStyle: { color: 'white' }, icon: _react2.default.createElement(_lightbulbOutline2.default, { style: { fill: 'white' } }), fullWidth: true }),\n        _react2.default.createElement(_FlatButton2.default, { onTouchTap: function onTouchTap() {\n                showCardScreen(3);\n            }, label: 'Test a network', labelStyle: { color: 'white' }, icon: _react2.default.createElement(_lightbulbOutline2.default, { style: { fill: 'white' } }), fullWidth: true }),\n        _react2.default.createElement(_FlatButton2.default, { onTouchTap: function onTouchTap() {\n                showCardScreen(4);\n            }, label: 'Create a predictive network', labelStyle: { color: 'white' }, icon: _react2.default.createElement(_lightbulbOutline2.default, { style: { fill: 'white' } }), fullWidth: true }),\n        _react2.default.createElement(_FlatButton2.default, { onTouchTap: function onTouchTap() {\n                showCardScreen(5);\n            }, label: 'Create a memory network', labelStyle: { color: 'white' }, icon: _react2.default.createElement(_lightbulbOutline2.default, { style: { fill: 'white' } }), fullWidth: true })\n    );\n};\n\nSideBar.propTypes = {\n    showCardScreen: _propTypes2.default.func\n};\n\nexports.default = SideBar;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzY0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbXBvbmVudHMvcGxheS9wbGF5Z3JvdW5kL1NpZGVCYXIuanM/ZGU0YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBGbGF0QnV0dG9uIGZyb20gJ21hdGVyaWFsLXVpL0ZsYXRCdXR0b24nO1xuaW1wb3J0IEFjdGlvbkxpZ2h0YnVsYk91dGxpbmUgZnJvbSAnbWF0ZXJpYWwtdWkvc3ZnLWljb25zL2FjdGlvbi9saWdodGJ1bGItb3V0bGluZSc7XG5cbmNvbnN0IFNpZGVCYXIgPSAoIHsgc2hvd0NhcmRTY3JlZW4gfSApID0+IChcbiAgICA8ZGl2PlxuICAgICAgICA8RmxhdEJ1dHRvbiBvblRvdWNoVGFwPXsoKT0+e1xuICAgICAgICAgICAgc2hvd0NhcmRTY3JlZW4oMSk7XG4gICAgICAgIH19IGxhYmVsPVwiVmlldyB5b3VyIG5ldHdvcmtzXCIgbGFiZWxTdHlsZT17e2NvbG9yOiAnd2hpdGUnfX0gaWNvbj17PEFjdGlvbkxpZ2h0YnVsYk91dGxpbmUgc3R5bGU9e3tmaWxsOiAnd2hpdGUnLCB3aWR0aDogJzgweCcsIGhlaWdodDogJzgwcHgnfX0gLz59IGZ1bGxXaWR0aCAvPlxuICAgICAgICA8RmxhdEJ1dHRvbiBvblRvdWNoVGFwPXsoKT0+e1xuICAgICAgICAgICAgc2hvd0NhcmRTY3JlZW4oMik7XG4gICAgICAgIH19IGxhYmVsPVwiQ29ubmVjdCBuZXR3b3Jrc1wiIGxhYmVsU3R5bGU9e3tjb2xvcjogJ3doaXRlJ319IGljb249ezxBY3Rpb25MaWdodGJ1bGJPdXRsaW5lIHN0eWxlPXt7ZmlsbDogJ3doaXRlJ319IC8+fSBmdWxsV2lkdGggLz5cbiAgICAgICAgPEZsYXRCdXR0b24gb25Ub3VjaFRhcD17KCk9PntcbiAgICAgICAgICAgIHNob3dDYXJkU2NyZWVuKDMpO1xuICAgICAgICB9fSBsYWJlbD1cIlRlc3QgYSBuZXR3b3JrXCIgbGFiZWxTdHlsZT17e2NvbG9yOiAnd2hpdGUnfX0gaWNvbj17PEFjdGlvbkxpZ2h0YnVsYk91dGxpbmUgc3R5bGU9e3tmaWxsOiAnd2hpdGUnfX0gLz59IGZ1bGxXaWR0aCAvPlxuICAgICAgICA8RmxhdEJ1dHRvbiBvblRvdWNoVGFwPXsoKT0+e1xuICAgICAgICAgICAgc2hvd0NhcmRTY3JlZW4oNCk7XG4gICAgICAgIH19IGxhYmVsPVwiQ3JlYXRlIGEgcHJlZGljdGl2ZSBuZXR3b3JrXCIgbGFiZWxTdHlsZT17e2NvbG9yOiAnd2hpdGUnfX0gaWNvbj17PEFjdGlvbkxpZ2h0YnVsYk91dGxpbmUgc3R5bGU9e3tmaWxsOiAnd2hpdGUnfX0gLz59IGZ1bGxXaWR0aCAvPlxuICAgICAgICA8RmxhdEJ1dHRvbiBvblRvdWNoVGFwPXsoKT0+e1xuICAgICAgICAgICAgc2hvd0NhcmRTY3JlZW4oNSk7XG4gICAgICAgIH19IGxhYmVsPVwiQ3JlYXRlIGEgbWVtb3J5IG5ldHdvcmtcIiBsYWJlbFN0eWxlPXt7Y29sb3I6ICd3aGl0ZSd9fSBpY29uPXs8QWN0aW9uTGlnaHRidWxiT3V0bGluZSBzdHlsZT17e2ZpbGw6ICd3aGl0ZSd9fSAvPn0gZnVsbFdpZHRoIC8+XG4gICAgPC9kaXY+XG4pO1xuXG5TaWRlQmFyLnByb3BUeXBlcyA9IHtcbiAgICBzaG93Q2FyZFNjcmVlbjogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGVCYXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZnJvbnRlbmQvY29tcG9uZW50cy9wbGF5L3BsYXlncm91bmQvU2lkZUJhci5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZkE7QUFEQTtBQUNBO0FBbUJBO0FBQ0E7QUFEQTtBQUNBO0FBR0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})