webpackHotUpdate(0,{

/***/ 373:
/* unknown exports provided */
/* all exports used */
/*!******************************************!*\
  !*** ./frontend/reducers/playReducer.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar createInitState = function createInitState() {\n    return {\n        user: null,\n        cardScreens: [1]\n    };\n};\n\nvar playReducer = function playReducer() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : createInitState();\n    var action = arguments[1];\n\n    switch (action.type) {\n        case 'loadUser':\n            return Object.assign({}, state, { user: action.user });\n        case 'showCardScreen':\n            var newArray0 = state.cardScreens.concat([action.cardIndex]);\n            return Object.assign({}, state, { cardScreens: newArray0 });\n        case 'closeCard':\n            console.log(action.index);\n            var newArray1 = state.cardScreens.slice();\n            newArray1.splice(action.index, 1);\n            return Object.assign({}, state, { cardScreens: newArray1 });\n        default:\n            return state;\n    }\n};\n\nexports.default = playReducer;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzczLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL3JlZHVjZXJzL3BsYXlSZWR1Y2VyLmpzPzYxYTkiXSwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCBjcmVhdGVJbml0U3RhdGUgPSAoKSA9PiAoXG4gICAge1xuICAgICAgICB1c2VyOiBudWxsLFxuICAgICAgICBjYXJkU2NyZWVuczogWzFdXG4gICAgfVxuKTtcblxuY29uc3QgcGxheVJlZHVjZXIgPSAoc3RhdGUgPSBjcmVhdGVJbml0U3RhdGUoKSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlICdsb2FkVXNlcic6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHt1c2VyOiBhY3Rpb24udXNlcn0pO1xuICAgICAgICBjYXNlICdzaG93Q2FyZFNjcmVlbic6XG4gICAgICAgICAgICBjb25zdCBuZXdBcnJheTAgPSBzdGF0ZS5jYXJkU2NyZWVucy5jb25jYXQoW2FjdGlvbi5jYXJkSW5kZXhdKTtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge2NhcmRTY3JlZW5zOiBuZXdBcnJheTB9KTtcbiAgICAgICAgY2FzZSAnY2xvc2VDYXJkJzpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5pbmRleCk7XG4gICAgICAgICAgICBjb25zdCBuZXdBcnJheTEgPSBzdGF0ZS5jYXJkU2NyZWVucy5zbGljZSgpO1xuICAgICAgICAgICAgbmV3QXJyYXkxLnNwbGljZShhY3Rpb24uaW5kZXgsIDEpO1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7Y2FyZFNjcmVlbnM6IG5ld0FycmF5MX0pO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBsYXlSZWR1Y2VyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGZyb250ZW5kL3JlZHVjZXJzL3BsYXlSZWR1Y2VyLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBREE7QUFDQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQTtBQWNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})