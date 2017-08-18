webpackHotUpdate(0,{

/***/ 373:
/* unknown exports provided */
/* all exports used */
/*!******************************************!*\
  !*** ./frontend/reducers/playReducer.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar createInitState = function createInitState() {\n    return {\n        user: null,\n        cardScreens: []\n    };\n};\n\nvar playReducer = function playReducer() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : createInitState();\n    var action = arguments[1];\n\n    switch (action.type) {\n        case 'loadUser':\n            return Object.assign({}, state, { user: action.user });\n        case 'showCardScreen':\n            var newArray0 = state.cardScreens.concat([action.cardIndex]);\n            return Object.assign({}, state, { cardScreens: newArray0 });\n        case 'closeCard':\n            console.log(action.index);\n            var newArray1 = state.cardScreens.slice();\n            newArray1.splice(action.index, 1);\n            return Object.assign({}, state, { cardScreens: newArray1 });\n        default:\n            return state;\n    }\n};\n\nexports.default = playReducer;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzczLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL3JlZHVjZXJzL3BsYXlSZWR1Y2VyLmpzPzYxYTkiXSwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCBjcmVhdGVJbml0U3RhdGUgPSAoKSA9PiAoXG4gICAge1xuICAgICAgICB1c2VyOiBudWxsLFxuICAgICAgICBjYXJkU2NyZWVuczogW11cbiAgICB9XG4pO1xuXG5jb25zdCBwbGF5UmVkdWNlciA9IChzdGF0ZSA9IGNyZWF0ZUluaXRTdGF0ZSgpLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgJ2xvYWRVc2VyJzpcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge3VzZXI6IGFjdGlvbi51c2VyfSk7XG4gICAgICAgIGNhc2UgJ3Nob3dDYXJkU2NyZWVuJzpcbiAgICAgICAgICAgIGNvbnN0IG5ld0FycmF5MCA9IHN0YXRlLmNhcmRTY3JlZW5zLmNvbmNhdChbYWN0aW9uLmNhcmRJbmRleF0pO1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7Y2FyZFNjcmVlbnM6IG5ld0FycmF5MH0pO1xuICAgICAgICBjYXNlICdjbG9zZUNhcmQnOlxuICAgICAgICAgICAgY29uc29sZS5sb2coYWN0aW9uLmluZGV4KTtcbiAgICAgICAgICAgIGNvbnN0IG5ld0FycmF5MSA9IHN0YXRlLmNhcmRTY3JlZW5zLnNsaWNlKCk7XG4gICAgICAgICAgICBuZXdBcnJheTEuc3BsaWNlKGFjdGlvbi5pbmRleCwgMSk7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtjYXJkU2NyZWVuczogbmV3QXJyYXkxfSk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcGxheVJlZHVjZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZnJvbnRlbmQvcmVkdWNlcnMvcGxheVJlZHVjZXIuanMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFEQTtBQUNBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBY0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})