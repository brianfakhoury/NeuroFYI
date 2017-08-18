webpackHotUpdate(0,{

/***/ 364:
/* unknown exports provided */
/* all exports used */
/*!********************************************************!*\
  !*** ./frontend/components/play/playground/SideBar.js ***!
  \********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ 2);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _FlatButton = __webpack_require__(/*! material-ui/FlatButton */ 27);\n\nvar _FlatButton2 = _interopRequireDefault(_FlatButton);\n\nvar _lightbulbOutline = __webpack_require__(/*! material-ui/svg-icons/action/lightbulb-outline */ 671);\n\nvar _lightbulbOutline2 = _interopRequireDefault(_lightbulbOutline);\n\nvar _directionsRun = __webpack_require__(/*! material-ui/svg-icons/maps/directions-run */ 907);\n\nvar _directionsRun2 = _interopRequireDefault(_directionsRun);\n\nvar _create = __webpack_require__(/*! material-ui/svg-icons/content/create */ 908);\n\nvar _create2 = _interopRequireDefault(_create);\n\nvar _viewList = __webpack_require__(/*! material-ui/svg-icons/action/view-list */ 909);\n\nvar _viewList2 = _interopRequireDefault(_viewList);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar labS = {\n    color: 'white',\n    display: 'block'\n};\n\nvar mainStyle = {\n    alignItems: 'center',\n    justifyContent: 'center',\n    flexDirection: 'column',\n    display: 'flex',\n    height: '15vh',\n    padding: '10px'\n};\n\nvar iconStyle = {\n    fill: 'white',\n    width: '80x',\n    height: '80px'\n};\n\nvar SideBar = function SideBar(_ref) {\n    var showCardScreen = _ref.showCardScreen;\n    return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(_FlatButton2.default, { onTouchTap: function onTouchTap() {\n                showCardScreen(1);\n            }, label: 'View your networks', labelStyle: labS, icon: _react2.default.createElement(_viewList2.default, { style: iconStyle }), style: mainStyle, fullWidth: true }),\n        _react2.default.createElement(_FlatButton2.default, { onTouchTap: function onTouchTap() {\n                showCardScreen(2);\n            }, label: 'Connect networks', labelStyle: labS, icon: _react2.default.createElement(_lightbulbOutline2.default, { style: iconStyle }), style: mainStyle, fullWidth: true }),\n        _react2.default.createElement(_FlatButton2.default, { onTouchTap: function onTouchTap() {\n                showCardScreen(3);\n            }, label: 'Test a network', labelStyle: labS, icon: _react2.default.createElement(_directionsRun2.default, { style: iconStyle }), style: mainStyle, fullWidth: true }),\n        _react2.default.createElement(_FlatButton2.default, { onTouchTap: function onTouchTap() {\n                showCardScreen(4);\n            }, label: 'Create a predictive network', labelStyle: labS, icon: _react2.default.createElement(_create2.default, { style: iconStyle }), style: mainStyle, fullWidth: true }),\n        _react2.default.createElement(_FlatButton2.default, { onTouchTap: function onTouchTap() {\n                showCardScreen(5);\n            }, label: 'Create a memory network', labelStyle: labS, icon: _react2.default.createElement(_create2.default, { style: iconStyle }), style: mainStyle, fullWidth: true })\n    );\n};\n\nSideBar.propTypes = {\n    showCardScreen: _propTypes2.default.func\n};\n\nexports.default = SideBar;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzY0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbXBvbmVudHMvcGxheS9wbGF5Z3JvdW5kL1NpZGVCYXIuanM/ZGU0YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBGbGF0QnV0dG9uIGZyb20gJ21hdGVyaWFsLXVpL0ZsYXRCdXR0b24nO1xuaW1wb3J0IEFjdGlvbkxpZ2h0YnVsYk91dGxpbmUgZnJvbSAnbWF0ZXJpYWwtdWkvc3ZnLWljb25zL2FjdGlvbi9saWdodGJ1bGItb3V0bGluZSc7XG5pbXBvcnQgTWFwc0RpcmVjdGlvbnNSdW4gZnJvbSAnbWF0ZXJpYWwtdWkvc3ZnLWljb25zL21hcHMvZGlyZWN0aW9ucy1ydW4nO1xuaW1wb3J0IENvbnRlbnRDcmVhdGUgZnJvbSAnbWF0ZXJpYWwtdWkvc3ZnLWljb25zL2NvbnRlbnQvY3JlYXRlJztcbmltcG9ydCBBY3Rpb25WaWV3TGlzdCBmcm9tICdtYXRlcmlhbC11aS9zdmctaWNvbnMvYWN0aW9uL3ZpZXctbGlzdCc7XG5cbmNvbnN0IGxhYlMgPSB7XG4gICAgY29sb3I6ICd3aGl0ZScsXG4gICAgZGlzcGxheTogJ2Jsb2NrJ1xufTtcblxuY29uc3QgbWFpblN0eWxlID0ge1xuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgaGVpZ2h0OiAnMTV2aCcsXG4gICAgcGFkZGluZzogJzEwcHgnXG59O1xuXG5jb25zdCBpY29uU3R5bGUgPSB7XG4gICAgZmlsbDogJ3doaXRlJyxcbiAgICB3aWR0aDogJzgweCcsXG4gICAgaGVpZ2h0OiAnODBweCcsXG59O1xuXG5jb25zdCBTaWRlQmFyID0gKCB7IHNob3dDYXJkU2NyZWVuIH0gKSA9PiAoXG4gICAgPGRpdj5cbiAgICAgICAgPEZsYXRCdXR0b24gb25Ub3VjaFRhcD17KCk9PntcbiAgICAgICAgICAgIHNob3dDYXJkU2NyZWVuKDEpO1xuICAgICAgICB9fSBsYWJlbD1cIlZpZXcgeW91ciBuZXR3b3Jrc1wiIGxhYmVsU3R5bGU9e2xhYlN9IGljb249ezxBY3Rpb25WaWV3TGlzdCBzdHlsZT17aWNvblN0eWxlfSAvPn0gc3R5bGU9e21haW5TdHlsZX0gZnVsbFdpZHRoIC8+XG4gICAgICAgIDxGbGF0QnV0dG9uIG9uVG91Y2hUYXA9eygpPT57XG4gICAgICAgICAgICBzaG93Q2FyZFNjcmVlbigyKTtcbiAgICAgICAgfX0gbGFiZWw9XCJDb25uZWN0IG5ldHdvcmtzXCIgbGFiZWxTdHlsZT17bGFiU30gaWNvbj17PEFjdGlvbkxpZ2h0YnVsYk91dGxpbmUgc3R5bGU9e2ljb25TdHlsZX0gLz59IHN0eWxlPXttYWluU3R5bGV9IGZ1bGxXaWR0aCAvPlxuICAgICAgICA8RmxhdEJ1dHRvbiBvblRvdWNoVGFwPXsoKT0+e1xuICAgICAgICAgICAgc2hvd0NhcmRTY3JlZW4oMyk7XG4gICAgICAgIH19IGxhYmVsPVwiVGVzdCBhIG5ldHdvcmtcIiBsYWJlbFN0eWxlPXtsYWJTfSBpY29uPXs8TWFwc0RpcmVjdGlvbnNSdW4gc3R5bGU9e2ljb25TdHlsZX0gLz59IHN0eWxlPXttYWluU3R5bGV9IGZ1bGxXaWR0aCAvPlxuICAgICAgICA8RmxhdEJ1dHRvbiBvblRvdWNoVGFwPXsoKT0+e1xuICAgICAgICAgICAgc2hvd0NhcmRTY3JlZW4oNCk7XG4gICAgICAgIH19IGxhYmVsPVwiQ3JlYXRlIGEgcHJlZGljdGl2ZSBuZXR3b3JrXCIgbGFiZWxTdHlsZT17bGFiU30gaWNvbj17PENvbnRlbnRDcmVhdGUgc3R5bGU9e2ljb25TdHlsZX0gLz59IHN0eWxlPXttYWluU3R5bGV9IGZ1bGxXaWR0aCAvPlxuICAgICAgICA8RmxhdEJ1dHRvbiBvblRvdWNoVGFwPXsoKT0+e1xuICAgICAgICAgICAgc2hvd0NhcmRTY3JlZW4oNSk7XG4gICAgICAgIH19IGxhYmVsPVwiQ3JlYXRlIGEgbWVtb3J5IG5ldHdvcmtcIiBsYWJlbFN0eWxlPXtsYWJTfSBpY29uPXs8Q29udGVudENyZWF0ZSBzdHlsZT17aWNvblN0eWxlfSAvPn0gc3R5bGU9e21haW5TdHlsZX0gZnVsbFdpZHRoIC8+XG4gICAgPC9kaXY+XG4pO1xuXG5TaWRlQmFyLnByb3BUeXBlcyA9IHtcbiAgICBzaG93Q2FyZFNjcmVlbjogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGVCYXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZnJvbnRlbmQvY29tcG9uZW50cy9wbGF5L3BsYXlncm91bmQvU2lkZUJhci5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWZBO0FBREE7QUFDQTtBQW1CQTtBQUNBO0FBREE7QUFDQTtBQUdBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),

/***/ 909:
/* unknown exports provided */
/* all exports used */
/*!*****************************************************!*\
  !*** ./~/material-ui/svg-icons/action/view-list.js ***!
  \*****************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _pure = __webpack_require__(/*! recompose/pure */ 32);\n\nvar _pure2 = _interopRequireDefault(_pure);\n\nvar _SvgIcon = __webpack_require__(/*! ../../SvgIcon */ 29);\n\nvar _SvgIcon2 = _interopRequireDefault(_SvgIcon);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar ActionViewList = function ActionViewList(props) {\n  return _react2.default.createElement(\n    _SvgIcon2.default,\n    props,\n    _react2.default.createElement('path', { d: 'M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z' })\n  );\n};\nActionViewList = (0, _pure2.default)(ActionViewList);\nActionViewList.displayName = 'ActionViewList';\nActionViewList.muiName = 'SvgIcon';\n\nexports.default = ActionViewList;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTA5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vfi9tYXRlcmlhbC11aS9zdmctaWNvbnMvYWN0aW9uL3ZpZXctbGlzdC5qcz80NGMyIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3B1cmUgPSByZXF1aXJlKCdyZWNvbXBvc2UvcHVyZScpO1xuXG52YXIgX3B1cmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHVyZSk7XG5cbnZhciBfU3ZnSWNvbiA9IHJlcXVpcmUoJy4uLy4uL1N2Z0ljb24nKTtcblxudmFyIF9TdmdJY29uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1N2Z0ljb24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgQWN0aW9uVmlld0xpc3QgPSBmdW5jdGlvbiBBY3Rpb25WaWV3TGlzdChwcm9wcykge1xuICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgX1N2Z0ljb24yLmRlZmF1bHQsXG4gICAgcHJvcHMsXG4gICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7IGQ6ICdNNCAxNGg0di00SDR2NHptMCA1aDR2LTRINHY0ek00IDloNFY1SDR2NHptNSA1aDEydi00SDl2NHptMCA1aDEydi00SDl2NHpNOSA1djRoMTJWNUg5eicgfSlcbiAgKTtcbn07XG5BY3Rpb25WaWV3TGlzdCA9ICgwLCBfcHVyZTIuZGVmYXVsdCkoQWN0aW9uVmlld0xpc3QpO1xuQWN0aW9uVmlld0xpc3QuZGlzcGxheU5hbWUgPSAnQWN0aW9uVmlld0xpc3QnO1xuQWN0aW9uVmlld0xpc3QubXVpTmFtZSA9ICdTdmdJY29uJztcblxuZXhwb3J0cy5kZWZhdWx0ID0gQWN0aW9uVmlld0xpc3Q7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L21hdGVyaWFsLXVpL3N2Zy1pY29ucy9hY3Rpb24vdmlldy1saXN0LmpzXG4vLyBtb2R1bGUgaWQgPSA5MDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})