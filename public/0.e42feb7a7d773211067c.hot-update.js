webpackHotUpdate(0,{

/***/ 351:
/* unknown exports provided */
/* all exports used */
/*!********************************************************!*\
  !*** ./frontend/components/play/playground/SideBar.js ***!
  \********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ 2);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _FlatButton = __webpack_require__(/*! material-ui/FlatButton */ 27);\n\nvar _FlatButton2 = _interopRequireDefault(_FlatButton);\n\nvar _lightbulbOutline = __webpack_require__(/*! material-ui/svg-icons/action/lightbulb-outline */ 634);\n\nvar _lightbulbOutline2 = _interopRequireDefault(_lightbulbOutline);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar SideBar = function SideBar(_ref) {\n    var showCardScreen = _ref.showCardScreen;\n    return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(_FlatButton2.default, { label: 'View your networks', labelStyle: { color: 'white' }, icon: _react2.default.createElement(_lightbulbOutline2.default, { style: { fill: 'white' } }), fullWidth: true }),\n        _react2.default.createElement(_FlatButton2.default, { label: 'Connect networks', labelStyle: { color: 'white' }, icon: _react2.default.createElement(_lightbulbOutline2.default, { style: { fill: 'white' } }), fullWidth: true }),\n        _react2.default.createElement(_FlatButton2.default, { label: 'Test a network', labelStyle: { color: 'white' }, icon: _react2.default.createElement(_lightbulbOutline2.default, { style: { fill: 'white' } }), fullWidth: true }),\n        _react2.default.createElement(_FlatButton2.default, { onTouchTap: function onTouchTap() {\n                showCardScreen(4);\n            }, label: 'Create a predictive network', labelStyle: { color: 'white' }, icon: _react2.default.createElement(_lightbulbOutline2.default, { style: { fill: 'white' } }), fullWidth: true }),\n        _react2.default.createElement(_FlatButton2.default, { label: 'Create a memory network', labelStyle: { color: 'white' }, icon: _react2.default.createElement(_lightbulbOutline2.default, { style: { fill: 'white' } }), fullWidth: true })\n    );\n};\n\nSideBar.propTypes = {\n    showCardScreen: _propTypes2.default.func\n};\n\nexports.default = SideBar;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzUxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbXBvbmVudHMvcGxheS9wbGF5Z3JvdW5kL1NpZGVCYXIuanM/ZGU0YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBGbGF0QnV0dG9uIGZyb20gJ21hdGVyaWFsLXVpL0ZsYXRCdXR0b24nO1xuaW1wb3J0IEFjdGlvbkxpZ2h0YnVsYk91dGxpbmUgZnJvbSAnbWF0ZXJpYWwtdWkvc3ZnLWljb25zL2FjdGlvbi9saWdodGJ1bGItb3V0bGluZSc7XG5cbmNvbnN0IFNpZGVCYXIgPSAoIHsgc2hvd0NhcmRTY3JlZW4gfSApID0+IChcbiAgICA8ZGl2PlxuICAgICAgICA8RmxhdEJ1dHRvbiBsYWJlbD1cIlZpZXcgeW91ciBuZXR3b3Jrc1wiIGxhYmVsU3R5bGU9e3tjb2xvcjogJ3doaXRlJ319IGljb249ezxBY3Rpb25MaWdodGJ1bGJPdXRsaW5lIHN0eWxlPXt7ZmlsbDogJ3doaXRlJ319IC8+fSBmdWxsV2lkdGggLz5cbiAgICAgICAgPEZsYXRCdXR0b24gbGFiZWw9XCJDb25uZWN0IG5ldHdvcmtzXCIgbGFiZWxTdHlsZT17e2NvbG9yOiAnd2hpdGUnfX0gaWNvbj17PEFjdGlvbkxpZ2h0YnVsYk91dGxpbmUgc3R5bGU9e3tmaWxsOiAnd2hpdGUnfX0gLz59IGZ1bGxXaWR0aCAvPlxuICAgICAgICA8RmxhdEJ1dHRvbiBsYWJlbD1cIlRlc3QgYSBuZXR3b3JrXCIgbGFiZWxTdHlsZT17e2NvbG9yOiAnd2hpdGUnfX0gaWNvbj17PEFjdGlvbkxpZ2h0YnVsYk91dGxpbmUgc3R5bGU9e3tmaWxsOiAnd2hpdGUnfX0gLz59IGZ1bGxXaWR0aCAvPlxuICAgICAgICA8RmxhdEJ1dHRvbiBvblRvdWNoVGFwPXsoKT0+e1xuICAgICAgICAgICAgc2hvd0NhcmRTY3JlZW4oNCk7XG4gICAgICAgIH19IGxhYmVsPVwiQ3JlYXRlIGEgcHJlZGljdGl2ZSBuZXR3b3JrXCIgbGFiZWxTdHlsZT17e2NvbG9yOiAnd2hpdGUnfX0gaWNvbj17PEFjdGlvbkxpZ2h0YnVsYk91dGxpbmUgc3R5bGU9e3tmaWxsOiAnd2hpdGUnfX0gLz59IGZ1bGxXaWR0aCAvPlxuICAgICAgICA8RmxhdEJ1dHRvbiBsYWJlbD1cIkNyZWF0ZSBhIG1lbW9yeSBuZXR3b3JrXCIgbGFiZWxTdHlsZT17e2NvbG9yOiAnd2hpdGUnfX0gaWNvbj17PEFjdGlvbkxpZ2h0YnVsYk91dGxpbmUgc3R5bGU9e3tmaWxsOiAnd2hpdGUnfX0gLz59IGZ1bGxXaWR0aCAvPlxuICAgIDwvZGl2PlxuKTtcblxuU2lkZUJhci5wcm9wVHlwZXMgPSB7XG4gICAgc2hvd0NhcmRTY3JlZW46IFByb3BUeXBlcy5mdW5jXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaWRlQmFyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGZyb250ZW5kL2NvbXBvbmVudHMvcGxheS9wbGF5Z3JvdW5kL1NpZGVCYXIuanMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFEQTtBQUNBO0FBV0E7QUFDQTtBQURBO0FBQ0E7QUFHQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})