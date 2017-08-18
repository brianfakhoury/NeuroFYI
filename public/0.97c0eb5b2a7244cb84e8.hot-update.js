webpackHotUpdate(0,{

/***/ 362:
/* unknown exports provided */
/* all exports used */
/*!********************************************************************!*\
  !*** ./frontend/components/play/playground/CreateSimpleNetCard.js ***!
  \********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ 2);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _synaptic = __webpack_require__(/*! synaptic */ 106);\n\nvar _Stepper = __webpack_require__(/*! material-ui/Stepper */ 640);\n\nvar _RaisedButton = __webpack_require__(/*! material-ui/RaisedButton */ 632);\n\nvar _RaisedButton2 = _interopRequireDefault(_RaisedButton);\n\nvar _FlatButton = __webpack_require__(/*! material-ui/FlatButton */ 27);\n\nvar _FlatButton2 = _interopRequireDefault(_FlatButton);\n\nvar _SelectField = __webpack_require__(/*! material-ui/SelectField */ 634);\n\nvar _SelectField2 = _interopRequireDefault(_SelectField);\n\nvar _MenuItem = __webpack_require__(/*! material-ui/MenuItem */ 627);\n\nvar _MenuItem2 = _interopRequireDefault(_MenuItem);\n\nvar _TextField = __webpack_require__(/*! material-ui/TextField */ 266);\n\nvar _TextField2 = _interopRequireDefault(_TextField);\n\nvar _IconButton = __webpack_require__(/*! material-ui/IconButton */ 95);\n\nvar _IconButton2 = _interopRequireDefault(_IconButton);\n\nvar _close = __webpack_require__(/*! material-ui/svg-icons/navigation/close */ 903);\n\nvar _close2 = _interopRequireDefault(_close);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar CreateSimpleNetCard = function (_React$Component) {\n    _inherits(CreateSimpleNetCard, _React$Component);\n\n    function CreateSimpleNetCard(props) {\n        _classCallCheck(this, CreateSimpleNetCard);\n\n        var _this = _possibleConstructorReturn(this, (CreateSimpleNetCard.__proto__ || Object.getPrototypeOf(CreateSimpleNetCard)).call(this, props));\n\n        _this.state = {\n            step: 0,\n            finished: false,\n            options: {\n                desc: \"\",\n                type: 'perceptron',\n                scene: null,\n                pHardness: null,\n                lay0: 1,\n                inputs: [],\n                hidden: null,\n                hiddens: [],\n                layN: 1\n            },\n            NN: {}\n        };\n        return _this;\n    }\n\n    _createClass(CreateSimpleNetCard, [{\n        key: 'handleNext',\n        value: function handleNext() {\n            if (this.state.step === 0) {\n                console.log('called');\n                this.updateHiddens();\n                this.createPerceptron();\n            }\n            console.log(this.state);\n            var step = this.state.step;\n\n            this.setState({\n                step: step + 1,\n                finished: step >= 1\n            });\n        }\n    }, {\n        key: 'handlePrev',\n        value: function handlePrev() {\n            var step = this.state.step;\n\n            if (step > 0) {\n                this.setState({ step: step - 1 });\n            }\n        }\n    }, {\n        key: 'handleOptChange',\n        value: function handleOptChange(op, event, index, value) {\n            switch (op) {\n                case 0:\n                    var op0 = Object.assign({}, this.state.options, { desc: index });\n                    this.setState({ options: op0 });\n                    break;\n                case 1:\n                    var op1 = Object.assign({}, this.state.options, { hiddens: new Array(index + 1).fill(1), hidden: value });\n                    this.setState({ options: op1 });\n                    break;\n                case 2:\n                    var op2 = Object.assign({}, this.state.options, { scene: value });\n                    this.setState({ options: op2 });\n                    break;\n                case 3:\n                    var op3 = Object.assign({}, this.state.options, { pHardness: value });\n                    this.setState({ options: op3 });\n                    break;\n                default:\n                    break;\n            }\n        }\n    }, {\n        key: 'renderPart',\n        value: function renderPart() {\n            switch (this.state.step) {\n                case 0:\n                    return _react2.default.createElement(\n                        'div',\n                        null,\n                        _react2.default.createElement(\n                            'div',\n                            null,\n                            _react2.default.createElement(\n                                'h2',\n                                null,\n                                'Configure the network'\n                            ),\n                            _react2.default.createElement(_TextField2.default, {\n                                hintText: 'Describe your intelligent task',\n                                value: this.state.options.desc,\n                                onChange: this.handleOptChange.bind(this, 0),\n                                fullWidth: true\n                            }),\n                            _react2.default.createElement(\n                                _SelectField2.default,\n                                { className: 'selectCreate1', autoWidth: false, floatingLabelText: 'Category', value: this.state.options.hidden, onChange: this.handleOptChange.bind(this, 1) },\n                                _react2.default.createElement(_MenuItem2.default, { value: 'single layer', primaryText: 'Simple Predictive' }),\n                                _react2.default.createElement(_MenuItem2.default, { value: 'double layer', primaryText: 'Informed choice' }),\n                                _react2.default.createElement(_MenuItem2.default, { value: 'triple layer', primaryText: 'Deep' })\n                            ),\n                            _react2.default.createElement(\n                                _SelectField2.default,\n                                { className: 'selectCreate1', autoWidth: false, floatingLabelText: 'Scenario', value: this.state.options.scene, onChange: this.handleOptChange.bind(this, 2) },\n                                _react2.default.createElement(_MenuItem2.default, { value: 'binary', primaryText: 'Binary Decision' }),\n                                _react2.default.createElement(_MenuItem2.default, { value: 'gut', primaryText: 'Gut instinct' }),\n                                _react2.default.createElement(_MenuItem2.default, { value: 'reminiscence', primaryText: 'How healthy will I be' }),\n                                _react2.default.createElement(_MenuItem2.default, { value: 'approximation', primaryText: 'Approximate choice' })\n                            ),\n                            _react2.default.createElement(\n                                _SelectField2.default,\n                                { className: 'selectCreate1', autoWidth: false, floatingLabelText: 'How hard is this?', value: this.state.options.pHardness, onChange: this.handleOptChange.bind(this, 3) },\n                                _react2.default.createElement(_MenuItem2.default, { value: 0, primaryText: '0' }),\n                                _react2.default.createElement(_MenuItem2.default, { value: 1, primaryText: '1' }),\n                                _react2.default.createElement(_MenuItem2.default, { value: 2, primaryText: '2' }),\n                                _react2.default.createElement(_MenuItem2.default, { value: 3, primaryText: '3' }),\n                                _react2.default.createElement(_MenuItem2.default, { value: 4, primaryText: '4' }),\n                                _react2.default.createElement(_MenuItem2.default, { value: 5, primaryText: '5' })\n                            ),\n                            _react2.default.createElement(\n                                'h2',\n                                { style: { marginBottom: 0 } },\n                                'Specify inputs'\n                            ),\n                            this.renderInputOption()\n                        )\n                    );\n                case 1:\n                    return _react2.default.createElement(\n                        'div',\n                        null,\n                        _react2.default.createElement(\n                            'h2',\n                            null,\n                            'The network is initialized! Now specify the data'\n                        )\n                    );\n                default:\n                    return _react2.default.createElement('div', null);\n            }\n        }\n    }, {\n        key: 'renderInputOption',\n        value: function renderInputOption() {\n            var _this2 = this;\n\n            var inputsView = new Array(this.state.options.lay0);\n            var returnEls = [];\n\n            var _loop = function _loop(n) {\n                inputsView[n] = _this2.state.options.inputs[n];\n                returnEls.push(_react2.default.createElement(\n                    'div',\n                    { key: n, className: 'option-column' },\n                    _react2.default.createElement(_TextField2.default, {\n                        floatingLabelText: 'Input ' + n,\n                        hintText: 'Name',\n                        floatingLabelFixed: true,\n                        fullWidth: true,\n                        onChange: function onChange(e, val) {\n                            var tempIns = _this2.state.options.inputs.slice();\n                            tempIns[n] = val;\n                            var inputs = Object.assign({}, _this2.state.options, { inputs: tempIns });\n                            _this2.setState({ options: inputs });\n                        } })\n                ));\n            };\n\n            for (var n = 0; n < this.state.options.lay0; n++) {\n                _loop(n);\n            }\n            return _react2.default.createElement(\n                'div',\n                { className: 'net-options-box' },\n                returnEls,\n                _react2.default.createElement(_FlatButton2.default, { label: 'Add another input', secondary: true, onTouchTap: function onTouchTap() {\n                        var lay0 = Object.assign({}, _this2.state.options, { lay0: _this2.state.options.lay0 + 1 });\n                        _this2.setState({ options: lay0 });\n                    } })\n            );\n        }\n    }, {\n        key: 'createPerceptron',\n        value: function createPerceptron() {\n            var init = new (Function.prototype.bind.apply(_synaptic.Architect.Perceptron, [null].concat([this.state.lay0], _toConsumableArray(this.state.hiddens), [this.state.layN])))();\n            this.setState({ NN: init.toJSON() });\n        }\n    }, {\n        key: 'updateHiddens',\n        value: function updateHiddens() {\n            var height = this.state.options.lay0 + 1;\n            var newHidden = this.state.options.hiddens.slice().fill(height);\n            var hiddens0 = Object.assign({}, this.state.options, { hiddens: newHidden.slice() });\n            console.log('here', typeof hiddens0 === 'undefined' ? 'undefined' : _typeof(hiddens0));\n            this.setState({ options: hiddens0 });\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this3 = this;\n\n            return _react2.default.createElement(\n                'div',\n                { className: 'card-content-container' },\n                _react2.default.createElement(\n                    _IconButton2.default,\n                    { className: 'close-button', onTouchTap: function onTouchTap() {\n                            return _this3.props.closeCard();\n                        } },\n                    _react2.default.createElement(_close2.default, null)\n                ),\n                _react2.default.createElement(\n                    'div',\n                    { className: 'card-content create-simple-net' },\n                    _react2.default.createElement(\n                        'h1',\n                        null,\n                        'Build a new simple neural network!'\n                    ),\n                    _react2.default.createElement(\n                        'div',\n                        { style: { width: '100%', maxWidth: 700, margin: 'auto' } },\n                        _react2.default.createElement(\n                            _Stepper.Stepper,\n                            { activeStep: this.state.step },\n                            _react2.default.createElement(\n                                _Stepper.Step,\n                                null,\n                                _react2.default.createElement(\n                                    _Stepper.StepLabel,\n                                    null,\n                                    'Design the Network'\n                                )\n                            ),\n                            _react2.default.createElement(\n                                _Stepper.Step,\n                                null,\n                                _react2.default.createElement(\n                                    _Stepper.StepLabel,\n                                    null,\n                                    'Train the network'\n                                )\n                            )\n                        ),\n                        _react2.default.createElement(\n                            'div',\n                            null,\n                            this.state.finished ? _react2.default.createElement(\n                                'div',\n                                null,\n                                _react2.default.createElement(\n                                    'h2',\n                                    null,\n                                    'Your network has been trained and saved!'\n                                ),\n                                _react2.default.createElement(\n                                    'p',\n                                    null,\n                                    'Open the Test A Network card to see your network in action.'\n                                )\n                            ) : _react2.default.createElement(\n                                'div',\n                                null,\n                                this.renderPart(),\n                                _react2.default.createElement(\n                                    'div',\n                                    { style: { marginTop: 12, float: 'right' } },\n                                    _react2.default.createElement(_FlatButton2.default, {\n                                        label: 'Back',\n                                        disabled: this.state.step === 0,\n                                        onTouchTap: this.handlePrev.bind(this),\n                                        style: { marginRight: 12 }\n                                    }),\n                                    _react2.default.createElement(_RaisedButton2.default, {\n                                        label: this.state.step === 1 ? 'Start training!' : 'Next',\n                                        primary: true,\n                                        onTouchTap: this.handleNext.bind(this)\n                                    })\n                                )\n                            )\n                        )\n                    )\n                )\n            );\n        }\n    }]);\n\n    return CreateSimpleNetCard;\n}(_react2.default.Component);\n\nCreateSimpleNetCard.propTypes = {\n    closeCard: _propTypes2.default.func\n};\n\nexports.default = CreateSimpleNetCard;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzYyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbXBvbmVudHMvcGxheS9wbGF5Z3JvdW5kL0NyZWF0ZVNpbXBsZU5ldENhcmQuanM/YWJjMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEFyY2hpdGVjdCB9IGZyb20gJ3N5bmFwdGljJztcbmltcG9ydCB7IFN0ZXAsIFN0ZXBwZXIsIFN0ZXBMYWJlbCB9IGZyb20gJ21hdGVyaWFsLXVpL1N0ZXBwZXInO1xuaW1wb3J0IFJhaXNlZEJ1dHRvbiBmcm9tICdtYXRlcmlhbC11aS9SYWlzZWRCdXR0b24nO1xuaW1wb3J0IEZsYXRCdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvRmxhdEJ1dHRvbic7XG5pbXBvcnQgU2VsZWN0RmllbGQgZnJvbSAnbWF0ZXJpYWwtdWkvU2VsZWN0RmllbGQnO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ21hdGVyaWFsLXVpL01lbnVJdGVtJztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnbWF0ZXJpYWwtdWkvVGV4dEZpZWxkJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ21hdGVyaWFsLXVpL0ljb25CdXR0b24nO1xuaW1wb3J0IE5hdmlnYXRpb25DbG9zZSBmcm9tICdtYXRlcmlhbC11aS9zdmctaWNvbnMvbmF2aWdhdGlvbi9jbG9zZSc7XG5cbmNsYXNzIENyZWF0ZVNpbXBsZU5ldENhcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHN0ZXA6IDAsXG4gICAgICAgICAgICBmaW5pc2hlZDogZmFsc2UsXG4gICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgZGVzYzogXCJcIixcbiAgICAgICAgICAgICAgICB0eXBlOiAncGVyY2VwdHJvbicsXG4gICAgICAgICAgICAgICAgc2NlbmU6IG51bGwsXG4gICAgICAgICAgICAgICAgcEhhcmRuZXNzOiBudWxsLFxuICAgICAgICAgICAgICAgIGxheTA6IDEsXG4gICAgICAgICAgICAgICAgaW5wdXRzOiBbXSxcbiAgICAgICAgICAgICAgICBoaWRkZW46IG51bGwsXG4gICAgICAgICAgICAgICAgaGlkZGVuczogW10sXG4gICAgICAgICAgICAgICAgbGF5TjogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIE5OOiB7fVxuICAgICAgICB9O1xuICAgIH1cbiAgICBoYW5kbGVOZXh0KCkge1xuICAgICAgICBpZih0aGlzLnN0YXRlLnN0ZXAgPT09IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjYWxsZWQnKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlSGlkZGVucygpO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVQZXJjZXB0cm9uKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XG4gICAgICAgIGNvbnN0IHtzdGVwfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc3RlcDogc3RlcCArIDEsXG4gICAgICAgICAgICBmaW5pc2hlZDogc3RlcCA+PSAxLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaGFuZGxlUHJldigpIHtcbiAgICAgICAgY29uc3Qge3N0ZXB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgaWYgKHN0ZXAgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzdGVwOiBzdGVwIC0gMX0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGhhbmRsZU9wdENoYW5nZShvcCwgZXZlbnQsIGluZGV4LCB2YWx1ZSkge1xuICAgICAgICBzd2l0Y2gob3ApIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBjb25zdCBvcDAgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLm9wdGlvbnMsIHtkZXNjOiBpbmRleH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe29wdGlvbnM6IG9wMH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGNvbnN0IG9wMSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUub3B0aW9ucywge2hpZGRlbnM6IG5ldyBBcnJheShpbmRleCArIDEpLmZpbGwoMSksIGhpZGRlbjogdmFsdWV9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtvcHRpb25zOiBvcDF9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBjb25zdCBvcDIgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLm9wdGlvbnMsIHtzY2VuZTogdmFsdWV9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtvcHRpb25zOiBvcDJ9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBjb25zdCBvcDMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLm9wdGlvbnMsIHtwSGFyZG5lc3M6IHZhbHVlfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7b3B0aW9uczogb3AzfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlclBhcnQoKSB7XG4gICAgICAgIHN3aXRjaCh0aGlzLnN0YXRlLnN0ZXApIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICByZXR1cm4oPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5Db25maWd1cmUgdGhlIG5ldHdvcms8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50VGV4dD1cIkRlc2NyaWJlIHlvdXIgaW50ZWxsaWdlbnQgdGFza1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm9wdGlvbnMuZGVzY31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlT3B0Q2hhbmdlLmJpbmQodGhpcywgMCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RGaWVsZCBjbGFzc05hbWU9XCJzZWxlY3RDcmVhdGUxXCIgYXV0b1dpZHRoPXtmYWxzZX0gZmxvYXRpbmdMYWJlbFRleHQ9XCJDYXRlZ29yeVwiIHZhbHVlPXt0aGlzLnN0YXRlLm9wdGlvbnMuaGlkZGVufSBvbkNoYW5nZT17dGhpcy5oYW5kbGVPcHRDaGFuZ2UuYmluZCh0aGlzLCAxKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17J3NpbmdsZSBsYXllcid9IHByaW1hcnlUZXh0PVwiU2ltcGxlIFByZWRpY3RpdmVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9eydkb3VibGUgbGF5ZXInfSBwcmltYXJ5VGV4dD1cIkluZm9ybWVkIGNob2ljZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17J3RyaXBsZSBsYXllcid9IHByaW1hcnlUZXh0PVwiRGVlcFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdEZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdEZpZWxkIGNsYXNzTmFtZT1cInNlbGVjdENyZWF0ZTFcIiBhdXRvV2lkdGg9e2ZhbHNlfSBmbG9hdGluZ0xhYmVsVGV4dD1cIlNjZW5hcmlvXCIgdmFsdWU9e3RoaXMuc3RhdGUub3B0aW9ucy5zY2VuZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlT3B0Q2hhbmdlLmJpbmQodGhpcywgMil9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9eydiaW5hcnknfSBwcmltYXJ5VGV4dD1cIkJpbmFyeSBEZWNpc2lvblwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17J2d1dCd9IHByaW1hcnlUZXh0PVwiR3V0IGluc3RpbmN0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXsncmVtaW5pc2NlbmNlJ30gcHJpbWFyeVRleHQ9XCJIb3cgaGVhbHRoeSB3aWxsIEkgYmVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9eydhcHByb3hpbWF0aW9uJ30gcHJpbWFyeVRleHQ9XCJBcHByb3hpbWF0ZSBjaG9pY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3RGaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RGaWVsZCBjbGFzc05hbWU9XCJzZWxlY3RDcmVhdGUxXCIgYXV0b1dpZHRoPXtmYWxzZX0gZmxvYXRpbmdMYWJlbFRleHQ9XCJIb3cgaGFyZCBpcyB0aGlzP1wiIHZhbHVlPXt0aGlzLnN0YXRlLm9wdGlvbnMucEhhcmRuZXNzfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVPcHRDaGFuZ2UuYmluZCh0aGlzLCAzKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17MH0gcHJpbWFyeVRleHQ9XCIwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXsxfSBwcmltYXJ5VGV4dD1cIjFcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9ezJ9IHByaW1hcnlUZXh0PVwiMlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17M30gcHJpbWFyeVRleHQ9XCIzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXs0fSBwcmltYXJ5VGV4dD1cIjRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9ezV9IHByaW1hcnlUZXh0PVwiNVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdEZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAwfX0+U3BlY2lmeSBpbnB1dHM8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVySW5wdXRPcHRpb24oKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+KTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICByZXR1cm4oPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPlRoZSBuZXR3b3JrIGlzIGluaXRpYWxpemVkISBOb3cgc3BlY2lmeSB0aGUgZGF0YTwvaDI+XG4gICAgICAgICAgICAgICAgPC9kaXY+KTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICg8ZGl2IC8+KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXJJbnB1dE9wdGlvbigpIHtcbiAgICAgICAgY29uc3QgaW5wdXRzVmlldyA9IG5ldyBBcnJheSh0aGlzLnN0YXRlLm9wdGlvbnMubGF5MCk7XG4gICAgICAgIGNvbnN0IHJldHVybkVscyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBuID0gMDsgbiA8IHRoaXMuc3RhdGUub3B0aW9ucy5sYXkwOyBuKyspIHtcbiAgICAgICAgICAgIGlucHV0c1ZpZXdbbl0gPSB0aGlzLnN0YXRlLm9wdGlvbnMuaW5wdXRzW25dO1xuICAgICAgICAgICAgcmV0dXJuRWxzLnB1c2goPGRpdiBrZXk9e259IGNsYXNzTmFtZT1cIm9wdGlvbi1jb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgIGZsb2F0aW5nTGFiZWxUZXh0PXtgSW5wdXQgJHtufWB9XG4gICAgICAgICAgICAgICAgICAgICAgaGludFRleHQ9XCJOYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICBmbG9hdGluZ0xhYmVsRml4ZWRcbiAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUsIHZhbCk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlbXBJbnMgPSB0aGlzLnN0YXRlLm9wdGlvbnMuaW5wdXRzLnNsaWNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBJbnNbbl0gPSB2YWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0cyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUub3B0aW9ucywge2lucHV0czogdGVtcEluc30pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtvcHRpb25zOiBpbnB1dHN9KTtcbiAgICAgICAgICAgICAgICAgICAgICB9fS8+XG4gICAgICAgICAgICAgICAgPC9kaXY+KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwibmV0LW9wdGlvbnMtYm94XCI+XG4gICAgICAgICAgICB7cmV0dXJuRWxzfVxuICAgICAgICAgICAgIDxGbGF0QnV0dG9uIGxhYmVsPVwiQWRkIGFub3RoZXIgaW5wdXRcIiBzZWNvbmRhcnkgb25Ub3VjaFRhcD17KCk9PntcbiAgICAgICAgICAgICAgICAgY29uc3QgbGF5MCA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUub3B0aW9ucywge2xheTA6IHRoaXMuc3RhdGUub3B0aW9ucy5sYXkwICsgMX0pO1xuICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtvcHRpb25zOiBsYXkwfSk7XG4gICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgPC9kaXY+KTtcbiAgICB9XG4gICAgY3JlYXRlUGVyY2VwdHJvbigpIHtcbiAgICAgICAgY29uc3QgaW5pdCA9IG5ldyBBcmNoaXRlY3QuUGVyY2VwdHJvbih0aGlzLnN0YXRlLmxheTAsIC4uLnRoaXMuc3RhdGUuaGlkZGVucywgdGhpcy5zdGF0ZS5sYXlOKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Tk46IGluaXQudG9KU09OKCl9KTtcbiAgICB9XG4gICAgdXBkYXRlSGlkZGVucygpIHtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5zdGF0ZS5vcHRpb25zLmxheTAgKyAxO1xuICAgICAgICBjb25zdCBuZXdIaWRkZW4gPSB0aGlzLnN0YXRlLm9wdGlvbnMuaGlkZGVucy5zbGljZSgpLmZpbGwoaGVpZ2h0KTtcbiAgICAgICAgY29uc3QgaGlkZGVuczAgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLm9wdGlvbnMsIHtoaWRkZW5zOiBuZXdIaWRkZW4uc2xpY2UoKX0pO1xuICAgICAgICBjb25zb2xlLmxvZygnaGVyZScsIHR5cGVvZiBoaWRkZW5zMCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe29wdGlvbnM6IGhpZGRlbnMwfSk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPEljb25CdXR0b24gY2xhc3NOYW1lPVwiY2xvc2UtYnV0dG9uXCIgb25Ub3VjaFRhcD17KCk9PnRoaXMucHJvcHMuY2xvc2VDYXJkKCl9ID48TmF2aWdhdGlvbkNsb3NlIC8+PC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50IGNyZWF0ZS1zaW1wbGUtbmV0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMT5CdWlsZCBhIG5ldyBzaW1wbGUgbmV1cmFsIG5ldHdvcmshPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOiAnMTAwJScsIG1heFdpZHRoOiA3MDAsIG1hcmdpbjogJ2F1dG8nfX0+XG4gICAgICAgICAgICAgICAgICAgICAgPFN0ZXBwZXIgYWN0aXZlU3RlcD17dGhpcy5zdGF0ZS5zdGVwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGVwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RlcExhYmVsPkRlc2lnbiB0aGUgTmV0d29yazwvU3RlcExhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGVwPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0ZXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGVwTGFiZWw+VHJhaW4gdGhlIG5ldHdvcms8L1N0ZXBMYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RlcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L1N0ZXBwZXI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmZpbmlzaGVkID8gKDxkaXY+PGgyPllvdXIgbmV0d29yayBoYXMgYmVlbiB0cmFpbmVkIGFuZCBzYXZlZCE8L2gyPjxwPk9wZW4gdGhlIFRlc3QgQSBOZXR3b3JrIGNhcmQgdG8gc2VlIHlvdXIgbmV0d29yayBpbiBhY3Rpb24uPC9wPjwvZGl2PilcbiAgICAgICAgICAgICAgICAgICAgICAgIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclBhcnQoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOiAxMiwgZmxvYXQ6ICdyaWdodCd9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGF0QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQmFja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLnN0ZXAgPT09IDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVG91Y2hUYXA9e3RoaXMuaGFuZGxlUHJldi5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpblJpZ2h0OiAxMn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhaXNlZEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17dGhpcy5zdGF0ZS5zdGVwID09PSAxID8gJ1N0YXJ0IHRyYWluaW5nIScgOiAnTmV4dCd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Ub3VjaFRhcD17dGhpcy5oYW5kbGVOZXh0LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5DcmVhdGVTaW1wbGVOZXRDYXJkLnByb3BUeXBlcyA9IHtcbiAgICBjbG9zZUNhcmQ6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVTaW1wbGVOZXRDYXJkO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGZyb250ZW5kL2NvbXBvbmVudHMvcGxheS9wbGF5Z3JvdW5kL0NyZWF0ZVNpbXBsZU5ldENhcmQuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFXQTtBQWRBO0FBRkE7QUFrQkE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsQkE7QUFvQkE7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQTVCQTtBQURBO0FBZ0NBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFDQTtBQXZDQTtBQXlDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBSEE7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQUxBO0FBQ0E7QUFFQTtBQUFBO0FBZUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFKQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBUEE7QUFGQTtBQUhBO0FBVEE7QUFGQTtBQUZBO0FBc0NBOzs7O0FBdExBO0FBQ0E7QUF3TEE7QUFDQTtBQURBO0FBQ0E7QUFHQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})