webpackHotUpdate(0,{

/***/ 373:
/* unknown exports provided */
/* all exports used */
/*!******************************************!*\
  !*** ./frontend/reducers/playReducer.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar createInitState = function createInitState() {\n    return {\n        user: null,\n        cardScreens: [1]\n    };\n};\n\nvar playReducer = function playReducer() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : createInitState();\n    var action = arguments[1];\n\n    switch (action.type) {\n        case 'loadUser':\n            return Object.assign({}, state, { user: action.user });\n        case 'showCardScreen':\n            var newArray0 = state.cardScreens.concat([action.cardIndex]);\n            return Object.assign({}, state, { cardScreens: newArray0 });\n        case 'closeCard':\n            var newArray1 = state.cardScreens.slice();\n            newArray1.splice(action.index, 1);\n            return Object.assign({}, state, { cardScreens: newArray1 });\n        default:\n            return state;\n    }\n};\n\nexports.default = playReducer;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzczLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL3JlZHVjZXJzL3BsYXlSZWR1Y2VyLmpzPzYxYTkiXSwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCBjcmVhdGVJbml0U3RhdGUgPSAoKSA9PiAoXG4gICAge1xuICAgICAgICB1c2VyOiBudWxsLFxuICAgICAgICBjYXJkU2NyZWVuczogWzFdXG4gICAgfVxuKTtcblxuY29uc3QgcGxheVJlZHVjZXIgPSAoc3RhdGUgPSBjcmVhdGVJbml0U3RhdGUoKSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlICdsb2FkVXNlcic6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHt1c2VyOiBhY3Rpb24udXNlcn0pO1xuICAgICAgICBjYXNlICdzaG93Q2FyZFNjcmVlbic6XG4gICAgICAgICAgICBjb25zdCBuZXdBcnJheTAgPSBzdGF0ZS5jYXJkU2NyZWVucy5jb25jYXQoW2FjdGlvbi5jYXJkSW5kZXhdKTtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge2NhcmRTY3JlZW5zOiBuZXdBcnJheTB9KTtcbiAgICAgICAgY2FzZSAnY2xvc2VDYXJkJzpcbiAgICAgICAgICAgIGNvbnN0IG5ld0FycmF5MSA9IHN0YXRlLmNhcmRTY3JlZW5zLnNsaWNlKCk7XG4gICAgICAgICAgICBuZXdBcnJheTEuc3BsaWNlKGFjdGlvbi5pbmRleCwgMSk7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtjYXJkU2NyZWVuczogbmV3QXJyYXkxfSk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcGxheVJlZHVjZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZnJvbnRlbmQvcmVkdWNlcnMvcGxheVJlZHVjZXIuanMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFEQTtBQUNBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQWFBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})