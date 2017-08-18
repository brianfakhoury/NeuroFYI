webpackHotUpdate(0,{

/***/ 359:
/* unknown exports provided */
/* all exports used */
/*!********************************************************!*\
  !*** ./frontend/components/introduction/Transition.js ***!
  \********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ 2);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _three = __webpack_require__(/*! three */ 198);\n\nvar THREE = _interopRequireWildcard(_three);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Transition = function (_React$Component) {\n    _inherits(Transition, _React$Component);\n\n    function Transition(props) {\n        _classCallCheck(this, Transition);\n\n        return _possibleConstructorReturn(this, (Transition.__proto__ || Object.getPrototypeOf(Transition)).call(this, props));\n    }\n\n    _createClass(Transition, [{\n        key: 'componentWillMount',\n        value: function componentWillMount() {\n            var _this2 = this;\n\n            this.props.changeCamPos(2);\n            squiggle();\n            setTimeout(function () {\n                return _this2.props.changeScreen(3);\n            }, 5000);\n        }\n    }, {\n        key: 'componentWillUnmount',\n        value: function componentWillUnmount() {\n            window.cancelAnimationFrame(WORM.animID);\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                { id: 'center-container' },\n                _react2.default.createElement(\n                    'div',\n                    { id: 'center-div' },\n                    _react2.default.createElement('canvas', { id: 'canvas2' }),\n                    _react2.default.createElement(\n                        'h1',\n                        { className: 'animated fadeIn', style: { fontSize: '1000%' } },\n                        'Imagine'\n                    )\n                )\n            );\n        }\n    }]);\n\n    return Transition;\n}(_react2.default.Component);\n\nfunction squiggle() {\n    setTimeout(function () {\n        var ww = window.innerWidth;\n        var wh = window.innerHeight;\n\n        var renderer = new THREE.WebGLRenderer({\n            canvas: document.querySelector(\"#canvas2\"),\n            antialias: true\n        });\n        renderer.setSize(ww, wh);\n        renderer.setClearColor(0x000000);\n\n        var scene = new THREE.Scene();\n\n        var camera = new THREE.PerspectiveCamera(45, ww / wh, 0.1, 2000);\n        camera.position.z = 200;\n\n        var container = new THREE.Object3D();\n        scene.add(container);\n\n        var objectLines = new THREE.Object3D();\n        scene.add(objectLines);\n\n        var loader = new THREE.TextureLoader();\n        loader.crossOrigin = 'Anonymous';\n        var mat = new THREE.PointsMaterial({\n            color: 0xffffff,\n            map: loader.load('https://s3-us-west-2.amazonaws.com/s.cdpn.io/127738/dotTexture.png'),\n            transparent: true,\n            alphaTest: 0.5,\n            sizeAttenuation: false\n        });\n        var lines = [];\n        // const dotsPerLine = 250;\n        var amountLines = 500;\n\n        function Line() {\n            this.geometry = new THREE.Geometry();\n            this.mesh = new THREE.Points(this.geometry, mat);\n            this.length = Math.floor(Math.random() * 100 + 250);\n            this.speed = Math.random() * 400 + 200;\n            for (var i = -(this.length * 0.5); i < this.length * 0.5; i++) {\n                var vector = new THREE.Vector3(i * 0.4, 0, 0);\n                this.geometry.vertices.push(vector);\n            }\n            this.mesh.rotation.x = Math.random() * Math.PI;\n            this.mesh.rotation.y = Math.random() * Math.PI;\n            this.mesh.rotation.z = Math.random() * Math.PI;\n        }\n        Line.prototype.update = function update(a) {\n            for (var i = 0; i < this.geometry.vertices.length; i++) {\n                var vector = this.geometry.vertices[i];\n                vector.y = Math.sin(a / this.speed + i * 0.1) * 2.2;\n            }\n            this.geometry.verticesNeedUpdate = true;\n        };\n        function init() {\n            for (var i = 0; i < amountLines; i++) {\n                lines.push(new Line());\n                objectLines.add(lines[i].mesh);\n            }\n            requestAnimationFrame(render);\n            window.addEventListener(\"resize\", onResize);\n        }\n        function render(a) {\n            window.animID = requestAnimationFrame(render);\n            objectLines.rotation.y = a * 0.0001;\n            objectLines.rotation.x = -a * 0.0001;\n            for (var i = 0; i < amountLines; i++) {\n                lines[i].update(a);\n            }\n            renderer.render(scene, camera);\n        }\n        function onResize() {\n            ww = window.innerWidth;\n            wh = window.innerHeight;\n            camera.aspect = ww / wh;\n            camera.updateProjectionMatrix();\n            renderer.setSize(ww, wh);\n        }\n        init();\n    }, 1500);\n}\n\nTransition.propTypes = {\n    changeScreen: _propTypes2.default.func,\n    changeCamPos: _propTypes2.default.func\n};\n\nexports.default = Transition;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzU5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbXBvbmVudHMvaW50cm9kdWN0aW9uL1RyYW5zaXRpb24uanM/ZGRkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcblxuY2xhc3MgVHJhbnNpdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIHRoaXMucHJvcHMuY2hhbmdlQ2FtUG9zKDIpO1xuICAgICAgICBzcXVpZ2dsZSgpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpPT4gdGhpcy5wcm9wcy5jaGFuZ2VTY3JlZW4oMyksIDUwMDApO1xuICAgIH1cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKFdPUk0uYW5pbUlEKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBpZD1cImNlbnRlci1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiY2VudGVyLWRpdlwiPlxuICAgICAgICAgICAgICAgICAgICA8Y2FudmFzIGlkPVwiY2FudmFzMlwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJhbmltYXRlZCBmYWRlSW5cIiBzdHlsZT17eyBmb250U2l6ZTogJzEwMDAlJyB9fT5JbWFnaW5lPC9oMT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc3F1aWdnbGUoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGxldCB3dyA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICBsZXQgd2ggPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICAgICAgY29uc3QgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7XG4gICAgICAgICAgICBjYW52YXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FudmFzMlwiKSxcbiAgICAgICAgICAgIGFudGlhbGlhczogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgcmVuZGVyZXIuc2V0U2l6ZSh3dywgd2gpO1xuICAgICAgICByZW5kZXJlci5zZXRDbGVhckNvbG9yKDB4MDAwMDAwKTtcblxuICAgICAgICBjb25zdCBzY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuXG4gICAgICAgIGNvbnN0IGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSg0NSwgd3cgLyB3aCwgMC4xLCAyMDAwKTtcbiAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnogPSAyMDA7XG5cbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gICAgICAgIHNjZW5lLmFkZChjb250YWluZXIpO1xuXG4gICAgICAgIGNvbnN0IG9iamVjdExpbmVzID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gICAgICAgIHNjZW5lLmFkZChvYmplY3RMaW5lcyk7XG5cbiAgICAgICAgY29uc3QgbG9hZGVyID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKTtcbiAgICAgICAgbG9hZGVyLmNyb3NzT3JpZ2luID0gJ0Fub255bW91cyc7XG4gICAgICAgIGNvbnN0IG1hdCA9IG5ldyBUSFJFRS5Qb2ludHNNYXRlcmlhbCh7XG4gICAgICAgICAgICBjb2xvcjogMHhmZmZmZmYsXG4gICAgICAgICAgICBtYXA6IGxvYWRlci5sb2FkKCdodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8xMjc3MzgvZG90VGV4dHVyZS5wbmcnKSxcbiAgICAgICAgICAgIHRyYW5zcGFyZW50OiB0cnVlLFxuICAgICAgICAgICAgYWxwaGFUZXN0OiAwLjUsXG4gICAgICAgICAgICBzaXplQXR0ZW51YXRpb246IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBsaW5lcyA9IFtdO1xuICAgICAgICAvLyBjb25zdCBkb3RzUGVyTGluZSA9IDI1MDtcbiAgICAgICAgY29uc3QgYW1vdW50TGluZXMgPSA1MDA7XG5cbiAgICAgICAgZnVuY3Rpb24gTGluZSgpIHtcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkgPSBuZXcgVEhSRUUuR2VvbWV0cnkoKTtcbiAgICAgICAgICAgIHRoaXMubWVzaCA9IG5ldyBUSFJFRS5Qb2ludHModGhpcy5nZW9tZXRyeSwgbWF0KTtcbiAgICAgICAgICAgIHRoaXMubGVuZ3RoID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwICsgMjUwKTtcbiAgICAgICAgICAgIHRoaXMuc3BlZWQgPSBNYXRoLnJhbmRvbSgpICogNDAwICsgMjAwO1xuICAgICAgICAgICAgZm9yKHZhciBpID0gLSAoIHRoaXMubGVuZ3RoICogMC41ICk7IGkgPCAodGhpcy5sZW5ndGggKiAwLjUpOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgdmVjdG9yID0gbmV3IFRIUkVFLlZlY3RvcjMoaSAqIDAuNCwgMCwgMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS52ZXJ0aWNlcy5wdXNoKHZlY3Rvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm1lc2gucm90YXRpb24ueCA9IE1hdGgucmFuZG9tKCkgKiBNYXRoLlBJO1xuICAgICAgICAgICAgdGhpcy5tZXNoLnJvdGF0aW9uLnkgPSBNYXRoLnJhbmRvbSgpICogTWF0aC5QSTtcbiAgICAgICAgICAgIHRoaXMubWVzaC5yb3RhdGlvbi56ID0gTWF0aC5yYW5kb20oKSAqIE1hdGguUEk7XG4gICAgICAgIH1cbiAgICAgICAgTGluZS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKGEpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5nZW9tZXRyeS52ZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciB2ZWN0b3IgPSB0aGlzLmdlb21ldHJ5LnZlcnRpY2VzW2ldO1xuICAgICAgICAgICAgICAgIHZlY3Rvci55ID0gTWF0aC5zaW4oYSAvIHRoaXMuc3BlZWQgKyBpICogMC4xKSAqIDIuMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkudmVydGljZXNOZWVkVXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYW1vdW50TGluZXM7IGkrKykge1xuICAgICAgICAgICAgICAgIGxpbmVzLnB1c2gobmV3IExpbmUoKSk7XG4gICAgICAgICAgICAgICAgb2JqZWN0TGluZXMuYWRkKGxpbmVzW2ldLm1lc2gpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBvblJlc2l6ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gcmVuZGVyKGEpIHtcbiAgICAgICAgICAgIHdpbmRvdy5hbmltSUQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbiAgICAgICAgICAgIG9iamVjdExpbmVzLnJvdGF0aW9uLnkgPSAoYSAqIDAuMDAwMSk7XG4gICAgICAgICAgICBvYmplY3RMaW5lcy5yb3RhdGlvbi54ID0gKC1hICogMC4wMDAxKTtcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBhbW91bnRMaW5lczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGluZXNbaV0udXBkYXRlKGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIG9uUmVzaXplKCkge1xuICAgICAgICAgICAgd3cgPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgICAgIHdoID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICAgICAgY2FtZXJhLmFzcGVjdCA9IHd3IC8gd2g7XG4gICAgICAgICAgICBjYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuICAgICAgICAgICAgcmVuZGVyZXIuc2V0U2l6ZSh3dywgd2gpO1xuICAgICAgICB9XG4gICAgICAgIGluaXQoKTtcbiAgICB9LCAxNTAwKTtcbn1cblxuVHJhbnNpdGlvbi5wcm9wVHlwZXMgPSB7XG4gICAgY2hhbmdlU2NyZWVuOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBjaGFuZ2VDYW1Qb3M6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUcmFuc2l0aW9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGZyb250ZW5kL2NvbXBvbmVudHMvaW50cm9kdWN0aW9uL1RyYW5zaXRpb24uanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTs7O0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFEQTtBQU9BOzs7O0FBckJBO0FBQ0E7QUF1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBIiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})