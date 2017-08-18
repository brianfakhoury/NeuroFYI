webpackHotUpdate(0,{

/***/ 362:
/* unknown exports provided */
/* all exports used */
/*!********************************************************************!*\
  !*** ./frontend/components/play/playground/CreateSimpleNetCard.js ***!
  \********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ 2);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _synaptic = __webpack_require__(/*! synaptic */ 106);\n\nvar _Stepper = __webpack_require__(/*! material-ui/Stepper */ 640);\n\nvar _RaisedButton = __webpack_require__(/*! material-ui/RaisedButton */ 632);\n\nvar _RaisedButton2 = _interopRequireDefault(_RaisedButton);\n\nvar _FlatButton = __webpack_require__(/*! material-ui/FlatButton */ 27);\n\nvar _FlatButton2 = _interopRequireDefault(_FlatButton);\n\nvar _SelectField = __webpack_require__(/*! material-ui/SelectField */ 634);\n\nvar _SelectField2 = _interopRequireDefault(_SelectField);\n\nvar _MenuItem = __webpack_require__(/*! material-ui/MenuItem */ 627);\n\nvar _MenuItem2 = _interopRequireDefault(_MenuItem);\n\nvar _TextField = __webpack_require__(/*! material-ui/TextField */ 158);\n\nvar _TextField2 = _interopRequireDefault(_TextField);\n\nvar _IconButton = __webpack_require__(/*! material-ui/IconButton */ 77);\n\nvar _IconButton2 = _interopRequireDefault(_IconButton);\n\nvar _close = __webpack_require__(/*! material-ui/svg-icons/navigation/close */ 675);\n\nvar _close2 = _interopRequireDefault(_close);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar CreateSimpleNetCard = function (_React$Component) {\n    _inherits(CreateSimpleNetCard, _React$Component);\n\n    function CreateSimpleNetCard(props) {\n        _classCallCheck(this, CreateSimpleNetCard);\n\n        var _this = _possibleConstructorReturn(this, (CreateSimpleNetCard.__proto__ || Object.getPrototypeOf(CreateSimpleNetCard)).call(this, props));\n\n        _this.state = {\n            step: 0,\n            finished: false,\n            processing: false,\n            options: {\n                desc: \"\",\n                type: 'perceptron',\n                scene: null,\n                pHardness: null,\n                lay0: 1,\n                inputDescriptions: [\"\"],\n                inputTypes: [0],\n                hidden: null,\n                hiddens: [],\n                layN: 1\n            },\n            NN: {}\n        };\n        return _this;\n    }\n\n    _createClass(CreateSimpleNetCard, [{\n        key: 'handleNext',\n        value: function handleNext() {\n            if (this.state.step === 0) {\n                this.createPerceptron();\n            }\n            var step = this.state.step;\n\n            this.setState({\n                step: step + 1,\n                finished: step >= 2\n            });\n        }\n    }, {\n        key: 'handlePrev',\n        value: function handlePrev() {\n            var step = this.state.step;\n\n            if (step > 0) {\n                this.setState({ step: step - 1 });\n            }\n        }\n    }, {\n        key: 'handleOptChange',\n        value: function handleOptChange(op, event, index, value) {\n            switch (op) {\n                case 0:\n                    var op0 = Object.assign({}, this.state.options, { desc: index });\n                    this.setState({ options: op0 });\n                    break;\n                case 1:\n                    var op1 = Object.assign({}, this.state.options, { hiddens: new Array(index + 1).fill(2), hidden: value });\n                    this.setState({ options: op1 });\n                    break;\n                case 2:\n                    var op2 = Object.assign({}, this.state.options, { scene: value });\n                    this.setState({ options: op2 });\n                    break;\n                case 3:\n                    var op3 = Object.assign({}, this.state.options, { pHardness: value });\n                    this.setState({ options: op3 });\n                    break;\n                default:\n                    break;\n            }\n        }\n    }, {\n        key: 'renderPart',\n        value: function renderPart() {\n            switch (this.state.step) {\n                case 0:\n                    return _react2.default.createElement(\n                        'div',\n                        null,\n                        _react2.default.createElement(\n                            'div',\n                            null,\n                            _react2.default.createElement(\n                                'h2',\n                                null,\n                                'Configure the network'\n                            ),\n                            _react2.default.createElement(_TextField2.default, {\n                                hintText: 'Describe your intelligent task',\n                                value: this.state.options.desc,\n                                onChange: this.handleOptChange.bind(this, 0),\n                                fullWidth: true\n                            }),\n                            _react2.default.createElement(\n                                _SelectField2.default,\n                                { className: 'selectCreate1', autoWidth: false, floatingLabelText: 'Category', value: this.state.options.hidden, onChange: this.handleOptChange.bind(this, 1) },\n                                _react2.default.createElement(_MenuItem2.default, { value: 'single layer', primaryText: 'Simple Predictive' }),\n                                _react2.default.createElement(_MenuItem2.default, { value: 'double layer', primaryText: 'Informed choice' }),\n                                _react2.default.createElement(_MenuItem2.default, { value: 'triple layer', primaryText: 'Deep Choice' })\n                            ),\n                            _react2.default.createElement(\n                                _SelectField2.default,\n                                { className: 'selectCreate1', autoWidth: false, floatingLabelText: 'Scenario', value: this.state.options.scene, onChange: this.handleOptChange.bind(this, 2) },\n                                _react2.default.createElement(_MenuItem2.default, { value: 'binary', primaryText: 'Binary Decision' }),\n                                _react2.default.createElement(_MenuItem2.default, { value: 'gut', primaryText: 'Gut instinct' }),\n                                _react2.default.createElement(_MenuItem2.default, { value: 'reminiscence', primaryText: 'How healthy will I be' }),\n                                _react2.default.createElement(_MenuItem2.default, { value: 'approximation', primaryText: 'Approximate choice' })\n                            ),\n                            _react2.default.createElement(\n                                _SelectField2.default,\n                                { className: 'selectCreate1', autoWidth: false, floatingLabelText: 'How hard is this?', value: this.state.options.pHardness, onChange: this.handleOptChange.bind(this, 3) },\n                                _react2.default.createElement(_MenuItem2.default, { value: 0, primaryText: '0' }),\n                                _react2.default.createElement(_MenuItem2.default, { value: 1, primaryText: '1' }),\n                                _react2.default.createElement(_MenuItem2.default, { value: 2, primaryText: '2' }),\n                                _react2.default.createElement(_MenuItem2.default, { value: 3, primaryText: '3' }),\n                                _react2.default.createElement(_MenuItem2.default, { value: 4, primaryText: '4' }),\n                                _react2.default.createElement(_MenuItem2.default, { value: 5, primaryText: '5' })\n                            ),\n                            _react2.default.createElement(\n                                'h2',\n                                { style: { marginBottom: 0 } },\n                                'Specify Inputs'\n                            ),\n                            this.renderInputOption()\n                        )\n                    );\n                case 1:\n                    return _react2.default.createElement(\n                        'div',\n                        null,\n                        _react2.default.createElement(\n                            'h2',\n                            null,\n                            'The network is initialized! Now specify the data'\n                        )\n                    );\n                case 2:\n                    return;\n                default:\n                    return _react2.default.createElement('div', null);\n            }\n        }\n    }, {\n        key: 'renderInputOption',\n        value: function renderInputOption() {\n            var _this2 = this;\n\n            var returnEls = [];\n\n            var _loop = function _loop(n) {\n                returnEls.push(_react2.default.createElement(\n                    'div',\n                    { key: n, className: 'option-column' },\n                    _react2.default.createElement(_TextField2.default, {\n                        floatingLabelText: 'Input ' + n,\n                        hintText: 'Name',\n                        value: _this2.state.options.inputDescriptions[n],\n                        floatingLabelFixed: true,\n                        fullWidth: true,\n                        onChange: function onChange(e, val) {\n                            var tempIns = _this2.state.options.inputDescriptions.slice();\n                            tempIns[n] = val;\n                            var inputDescriptions = Object.assign({}, _this2.state.options, { inputDescriptions: tempIns });\n                            _this2.setState({ options: inputDescriptions });\n                        } }),\n                    _react2.default.createElement(\n                        _SelectField2.default,\n                        {\n                            floatingLabelText: 'Data type',\n                            value: _this2.state.options.inputTypes[n],\n                            onChange: function onChange(e, val) {\n                                var tempTypes = _this2.state.options.inputTypes.slice();\n                                tempTypes[n] = val;\n                                var inputTypes = Object.assign({}, _this2.state.options, { inputTypes: tempTypes });\n                                _this2.setState({ options: inputTypes });\n                            } },\n                        _react2.default.createElement(_MenuItem2.default, { value: 0, primaryText: 'Quantitative' }),\n                        _react2.default.createElement(_MenuItem2.default, { value: 1, primaryText: 'Qualitative' })\n                    )\n                ));\n            };\n\n            for (var n = 0; n < this.state.options.lay0; n++) {\n                _loop(n);\n            }\n            return _react2.default.createElement(\n                'div',\n                { className: 'net-options-box' },\n                returnEls,\n                _react2.default.createElement(_FlatButton2.default, { label: 'Add another input', secondary: true, onTouchTap: function onTouchTap() {\n                        _this2.updateLayers();\n                    } })\n            );\n        }\n    }, {\n        key: 'createPerceptron',\n        value: function createPerceptron() {\n            var init = new (Function.prototype.bind.apply(_synaptic.Architect.Perceptron, [null].concat([this.state.options.lay0], _toConsumableArray(this.state.options.hiddens), [this.state.options.layN])))();\n            this.setState({ NN: init.toJSON() });\n        }\n    }, {\n        key: 'updateLayers',\n        value: function updateLayers() {\n            var newHeight = this.state.options.lay0 + 1;\n            var newHidden = this.state.options.hiddens.slice().fill(newHeight + 1);\n            var newInputDescriptions = this.state.options.inputDescriptions.concat([\"\"]);\n            var newInputTypes = this.state.options.inputTypes.concat([0]);\n            var updated = Object.assign({}, this.state.options, { hiddens: newHidden, lay0: newHeight, inputDescriptions: newInputDescriptions, inputTypes: newInputTypes });\n            this.setState({ options: updated });\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this3 = this;\n\n            return _react2.default.createElement(\n                'div',\n                { className: 'card-content-container' },\n                _react2.default.createElement(\n                    _IconButton2.default,\n                    { className: 'close-button', onTouchTap: function onTouchTap() {\n                            return _this3.props.closeCard();\n                        } },\n                    _react2.default.createElement(_close2.default, null)\n                ),\n                _react2.default.createElement(\n                    'div',\n                    { className: 'card-content create-simple-net' },\n                    _react2.default.createElement(\n                        'h1',\n                        null,\n                        'Build a new simple neural network!'\n                    ),\n                    _react2.default.createElement(\n                        'div',\n                        { style: { width: '100%', maxWidth: 700, margin: 'auto' } },\n                        _react2.default.createElement(\n                            _Stepper.Stepper,\n                            { activeStep: this.state.step },\n                            _react2.default.createElement(\n                                _Stepper.Step,\n                                null,\n                                _react2.default.createElement(\n                                    _Stepper.StepLabel,\n                                    null,\n                                    'Design the Network'\n                                )\n                            ),\n                            _react2.default.createElement(\n                                _Stepper.Step,\n                                null,\n                                _react2.default.createElement(\n                                    _Stepper.StepLabel,\n                                    null,\n                                    'Train the network'\n                                )\n                            ),\n                            _react2.default.createElement(\n                                _Stepper.Step,\n                                null,\n                                _react2.default.createElement(\n                                    _Stepper.StepLabel,\n                                    null,\n                                    'Processing!'\n                                )\n                            )\n                        ),\n                        _react2.default.createElement(\n                            'div',\n                            null,\n                            this.state.finished ? _react2.default.createElement(\n                                'div',\n                                null,\n                                _react2.default.createElement(\n                                    'h2',\n                                    null,\n                                    'Your network has been trained and saved!'\n                                ),\n                                _react2.default.createElement(\n                                    'p',\n                                    null,\n                                    'Open the Test A Network card to see your network in action.'\n                                )\n                            ) : _react2.default.createElement(\n                                'div',\n                                null,\n                                this.renderPart(),\n                                _react2.default.createElement(\n                                    'div',\n                                    { style: { marginTop: 12, float: 'right' } },\n                                    _react2.default.createElement(_FlatButton2.default, {\n                                        label: 'Back',\n                                        disabled: this.state.step === 0,\n                                        onTouchTap: this.handlePrev.bind(this),\n                                        style: { marginRight: 12 }\n                                    }),\n                                    _react2.default.createElement(_RaisedButton2.default, {\n                                        label: this.state.step === 1 ? 'Start training!' : 'Next',\n                                        primary: true,\n                                        onTouchTap: this.handleNext.bind(this)\n                                    })\n                                )\n                            )\n                        )\n                    )\n                )\n            );\n        }\n    }]);\n\n    return CreateSimpleNetCard;\n}(_react2.default.Component);\n\nCreateSimpleNetCard.propTypes = {\n    closeCard: _propTypes2.default.func\n};\n\nexports.default = CreateSimpleNetCard;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzYyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbXBvbmVudHMvcGxheS9wbGF5Z3JvdW5kL0NyZWF0ZVNpbXBsZU5ldENhcmQuanM/YWJjMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEFyY2hpdGVjdCB9IGZyb20gJ3N5bmFwdGljJztcbmltcG9ydCB7IFN0ZXAsIFN0ZXBwZXIsIFN0ZXBMYWJlbCB9IGZyb20gJ21hdGVyaWFsLXVpL1N0ZXBwZXInO1xuaW1wb3J0IFJhaXNlZEJ1dHRvbiBmcm9tICdtYXRlcmlhbC11aS9SYWlzZWRCdXR0b24nO1xuaW1wb3J0IEZsYXRCdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvRmxhdEJ1dHRvbic7XG5pbXBvcnQgU2VsZWN0RmllbGQgZnJvbSAnbWF0ZXJpYWwtdWkvU2VsZWN0RmllbGQnO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ21hdGVyaWFsLXVpL01lbnVJdGVtJztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnbWF0ZXJpYWwtdWkvVGV4dEZpZWxkJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ21hdGVyaWFsLXVpL0ljb25CdXR0b24nO1xuaW1wb3J0IE5hdmlnYXRpb25DbG9zZSBmcm9tICdtYXRlcmlhbC11aS9zdmctaWNvbnMvbmF2aWdhdGlvbi9jbG9zZSc7XG5cbmNsYXNzIENyZWF0ZVNpbXBsZU5ldENhcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHN0ZXA6IDAsXG4gICAgICAgICAgICBmaW5pc2hlZDogZmFsc2UsXG4gICAgICAgICAgICBwcm9jZXNzaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBkZXNjOiBcIlwiLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdwZXJjZXB0cm9uJyxcbiAgICAgICAgICAgICAgICBzY2VuZTogbnVsbCxcbiAgICAgICAgICAgICAgICBwSGFyZG5lc3M6IG51bGwsXG4gICAgICAgICAgICAgICAgbGF5MDogMSxcbiAgICAgICAgICAgICAgICBpbnB1dERlc2NyaXB0aW9uczogW1wiXCJdLFxuICAgICAgICAgICAgICAgIGlucHV0VHlwZXM6IFswXSxcbiAgICAgICAgICAgICAgICBoaWRkZW46IG51bGwsXG4gICAgICAgICAgICAgICAgaGlkZGVuczogW10sXG4gICAgICAgICAgICAgICAgbGF5TjogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIE5OOiB7fVxuICAgICAgICB9O1xuICAgIH1cbiAgICBoYW5kbGVOZXh0KCkge1xuICAgICAgICBpZih0aGlzLnN0YXRlLnN0ZXAgPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlUGVyY2VwdHJvbigpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHtzdGVwfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc3RlcDogc3RlcCArIDEsXG4gICAgICAgICAgICBmaW5pc2hlZDogc3RlcCA+PSAyLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaGFuZGxlUHJldigpIHtcbiAgICAgICAgY29uc3Qge3N0ZXB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgaWYgKHN0ZXAgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzdGVwOiBzdGVwIC0gMX0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGhhbmRsZU9wdENoYW5nZShvcCwgZXZlbnQsIGluZGV4LCB2YWx1ZSkge1xuICAgICAgICBzd2l0Y2gob3ApIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBjb25zdCBvcDAgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLm9wdGlvbnMsIHtkZXNjOiBpbmRleH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe29wdGlvbnM6IG9wMH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGNvbnN0IG9wMSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUub3B0aW9ucywge2hpZGRlbnM6IG5ldyBBcnJheShpbmRleCArIDEpLmZpbGwoMiksIGhpZGRlbjogdmFsdWV9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtvcHRpb25zOiBvcDF9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBjb25zdCBvcDIgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLm9wdGlvbnMsIHtzY2VuZTogdmFsdWV9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtvcHRpb25zOiBvcDJ9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBjb25zdCBvcDMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLm9wdGlvbnMsIHtwSGFyZG5lc3M6IHZhbHVlfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7b3B0aW9uczogb3AzfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlclBhcnQoKSB7XG4gICAgICAgIHN3aXRjaCh0aGlzLnN0YXRlLnN0ZXApIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICByZXR1cm4oPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5Db25maWd1cmUgdGhlIG5ldHdvcms8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50VGV4dD1cIkRlc2NyaWJlIHlvdXIgaW50ZWxsaWdlbnQgdGFza1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm9wdGlvbnMuZGVzY31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlT3B0Q2hhbmdlLmJpbmQodGhpcywgMCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RGaWVsZCBjbGFzc05hbWU9XCJzZWxlY3RDcmVhdGUxXCIgYXV0b1dpZHRoPXtmYWxzZX0gZmxvYXRpbmdMYWJlbFRleHQ9XCJDYXRlZ29yeVwiIHZhbHVlPXt0aGlzLnN0YXRlLm9wdGlvbnMuaGlkZGVufSBvbkNoYW5nZT17dGhpcy5oYW5kbGVPcHRDaGFuZ2UuYmluZCh0aGlzLCAxKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17J3NpbmdsZSBsYXllcid9IHByaW1hcnlUZXh0PVwiU2ltcGxlIFByZWRpY3RpdmVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9eydkb3VibGUgbGF5ZXInfSBwcmltYXJ5VGV4dD1cIkluZm9ybWVkIGNob2ljZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17J3RyaXBsZSBsYXllcid9IHByaW1hcnlUZXh0PVwiRGVlcCBDaG9pY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3RGaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RGaWVsZCBjbGFzc05hbWU9XCJzZWxlY3RDcmVhdGUxXCIgYXV0b1dpZHRoPXtmYWxzZX0gZmxvYXRpbmdMYWJlbFRleHQ9XCJTY2VuYXJpb1wiIHZhbHVlPXt0aGlzLnN0YXRlLm9wdGlvbnMuc2NlbmV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZU9wdENoYW5nZS5iaW5kKHRoaXMsIDIpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXsnYmluYXJ5J30gcHJpbWFyeVRleHQ9XCJCaW5hcnkgRGVjaXNpb25cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9eydndXQnfSBwcmltYXJ5VGV4dD1cIkd1dCBpbnN0aW5jdFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17J3JlbWluaXNjZW5jZSd9IHByaW1hcnlUZXh0PVwiSG93IGhlYWx0aHkgd2lsbCBJIGJlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXsnYXBwcm94aW1hdGlvbid9IHByaW1hcnlUZXh0PVwiQXBwcm94aW1hdGUgY2hvaWNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0RmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0RmllbGQgY2xhc3NOYW1lPVwic2VsZWN0Q3JlYXRlMVwiIGF1dG9XaWR0aD17ZmFsc2V9IGZsb2F0aW5nTGFiZWxUZXh0PVwiSG93IGhhcmQgaXMgdGhpcz9cIiB2YWx1ZT17dGhpcy5zdGF0ZS5vcHRpb25zLnBIYXJkbmVzc30gb25DaGFuZ2U9e3RoaXMuaGFuZGxlT3B0Q2hhbmdlLmJpbmQodGhpcywgMyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9ezB9IHByaW1hcnlUZXh0PVwiMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17MX0gcHJpbWFyeVRleHQ9XCIxXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXsyfSBwcmltYXJ5VGV4dD1cIjJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9ezN9IHByaW1hcnlUZXh0PVwiM1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17NH0gcHJpbWFyeVRleHQ9XCI0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXs1fSBwcmltYXJ5VGV4dD1cIjVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3RGaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBzdHlsZT17e21hcmdpbkJvdHRvbTogMH19PlNwZWNpZnkgSW5wdXRzPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlcklucHV0T3B0aW9uKCl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2Pik7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgcmV0dXJuKDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5UaGUgbmV0d29yayBpcyBpbml0aWFsaXplZCEgTm93IHNwZWNpZnkgdGhlIGRhdGE8L2gyPlxuICAgICAgICAgICAgICAgIDwvZGl2Pik7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAoPGRpdiAvPik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVySW5wdXRPcHRpb24oKSB7XG4gICAgICAgIGNvbnN0IHJldHVybkVscyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBuID0gMDsgbiA8IHRoaXMuc3RhdGUub3B0aW9ucy5sYXkwOyBuKyspIHtcbiAgICAgICAgICAgIHJldHVybkVscy5wdXNoKDxkaXYga2V5PXtufSBjbGFzc05hbWU9XCJvcHRpb24tY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICBmbG9hdGluZ0xhYmVsVGV4dD17YElucHV0ICR7bn1gfVxuICAgICAgICAgICAgICAgICAgICBoaW50VGV4dD1cIk5hbWVcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5vcHRpb25zLmlucHV0RGVzY3JpcHRpb25zW25dfVxuICAgICAgICAgICAgICAgICAgICBmbG9hdGluZ0xhYmVsRml4ZWRcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSwgdmFsKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlbXBJbnMgPSB0aGlzLnN0YXRlLm9wdGlvbnMuaW5wdXREZXNjcmlwdGlvbnMuc2xpY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBJbnNbbl0gPSB2YWw7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dERlc2NyaXB0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUub3B0aW9ucywge2lucHV0RGVzY3JpcHRpb25zOiB0ZW1wSW5zfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtvcHRpb25zOiBpbnB1dERlc2NyaXB0aW9uc30pO1xuICAgICAgICAgICAgICAgICAgICB9fS8+XG4gICAgICAgICAgICAgICAgPFNlbGVjdEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIGZsb2F0aW5nTGFiZWxUZXh0PVwiRGF0YSB0eXBlXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUub3B0aW9ucy5pbnB1dFR5cGVzW25dfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVtcFR5cGVzID0gdGhpcy5zdGF0ZS5vcHRpb25zLmlucHV0VHlwZXMuc2xpY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBUeXBlc1tuXSA9IHZhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0VHlwZXMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLm9wdGlvbnMsIHtpbnB1dFR5cGVzOiB0ZW1wVHlwZXN9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe29wdGlvbnM6IGlucHV0VHlwZXN9KTtcbiAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17MH0gcHJpbWFyeVRleHQ9XCJRdWFudGl0YXRpdmVcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9ezF9IHByaW1hcnlUZXh0PVwiUXVhbGl0YXRpdmVcIiAvPlxuICAgICAgICAgICAgICAgIDwvU2VsZWN0RmllbGQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwibmV0LW9wdGlvbnMtYm94XCI+XG4gICAgICAgICAgICB7cmV0dXJuRWxzfVxuICAgICAgICAgICAgIDxGbGF0QnV0dG9uIGxhYmVsPVwiQWRkIGFub3RoZXIgaW5wdXRcIiBzZWNvbmRhcnkgb25Ub3VjaFRhcD17KCk9PntcbiAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVMYXllcnMoKTtcbiAgICAgICAgICAgICB9fSAvPlxuICAgICAgICA8L2Rpdj4pO1xuICAgIH1cbiAgICBjcmVhdGVQZXJjZXB0cm9uKCkge1xuICAgICAgICBjb25zdCBpbml0ID0gbmV3IEFyY2hpdGVjdC5QZXJjZXB0cm9uKHRoaXMuc3RhdGUub3B0aW9ucy5sYXkwLCAuLi50aGlzLnN0YXRlLm9wdGlvbnMuaGlkZGVucywgdGhpcy5zdGF0ZS5vcHRpb25zLmxheU4pO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtOTjogaW5pdC50b0pTT04oKX0pO1xuICAgIH1cbiAgICB1cGRhdGVMYXllcnMoKSB7XG4gICAgICAgIGNvbnN0IG5ld0hlaWdodCA9IHRoaXMuc3RhdGUub3B0aW9ucy5sYXkwICsgMTtcbiAgICAgICAgY29uc3QgbmV3SGlkZGVuID0gdGhpcy5zdGF0ZS5vcHRpb25zLmhpZGRlbnMuc2xpY2UoKS5maWxsKG5ld0hlaWdodCArIDEpO1xuICAgICAgICBjb25zdCBuZXdJbnB1dERlc2NyaXB0aW9ucyA9IHRoaXMuc3RhdGUub3B0aW9ucy5pbnB1dERlc2NyaXB0aW9ucy5jb25jYXQoW1wiXCJdKTtcbiAgICAgICAgY29uc3QgbmV3SW5wdXRUeXBlcyA9IHRoaXMuc3RhdGUub3B0aW9ucy5pbnB1dFR5cGVzLmNvbmNhdChbMF0pO1xuICAgICAgICBjb25zdCB1cGRhdGVkID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5vcHRpb25zLCB7aGlkZGVuczogbmV3SGlkZGVuLCBsYXkwOiBuZXdIZWlnaHQsIGlucHV0RGVzY3JpcHRpb25zOiBuZXdJbnB1dERlc2NyaXB0aW9ucywgaW5wdXRUeXBlczogbmV3SW5wdXRUeXBlc30pO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtvcHRpb25zOiB1cGRhdGVkfSk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPEljb25CdXR0b24gY2xhc3NOYW1lPVwiY2xvc2UtYnV0dG9uXCIgb25Ub3VjaFRhcD17KCk9PnRoaXMucHJvcHMuY2xvc2VDYXJkKCl9ID48TmF2aWdhdGlvbkNsb3NlIC8+PC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50IGNyZWF0ZS1zaW1wbGUtbmV0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMT5CdWlsZCBhIG5ldyBzaW1wbGUgbmV1cmFsIG5ldHdvcmshPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOiAnMTAwJScsIG1heFdpZHRoOiA3MDAsIG1hcmdpbjogJ2F1dG8nfX0+XG4gICAgICAgICAgICAgICAgICAgICAgPFN0ZXBwZXIgYWN0aXZlU3RlcD17dGhpcy5zdGF0ZS5zdGVwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGVwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RlcExhYmVsPkRlc2lnbiB0aGUgTmV0d29yazwvU3RlcExhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGVwPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0ZXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGVwTGFiZWw+VHJhaW4gdGhlIG5ldHdvcms8L1N0ZXBMYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RlcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGVwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RlcExhYmVsPlByb2Nlc3NpbmchPC9TdGVwTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1N0ZXA+XG4gICAgICAgICAgICAgICAgICAgICAgPC9TdGVwcGVyPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5maW5pc2hlZCA/ICg8ZGl2PjxoMj5Zb3VyIG5ldHdvcmsgaGFzIGJlZW4gdHJhaW5lZCBhbmQgc2F2ZWQhPC9oMj48cD5PcGVuIHRoZSBUZXN0IEEgTmV0d29yayBjYXJkIHRvIHNlZSB5b3VyIG5ldHdvcmsgaW4gYWN0aW9uLjwvcD48L2Rpdj4pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJQYXJ0KCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDogMTIsIGZsb2F0OiAncmlnaHQnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxhdEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkJhY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5zdGF0ZS5zdGVwID09PSAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblRvdWNoVGFwPXt0aGlzLmhhbmRsZVByZXYuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5SaWdodDogMTJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWlzZWRCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3RoaXMuc3RhdGUuc3RlcCA9PT0gMSA/ICdTdGFydCB0cmFpbmluZyEnIDogJ05leHQnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVG91Y2hUYXA9e3RoaXMuaGFuZGxlTmV4dC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuQ3JlYXRlU2ltcGxlTmV0Q2FyZC5wcm9wVHlwZXMgPSB7XG4gICAgY2xvc2VDYXJkOiBQcm9wVHlwZXMuZnVuY1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlU2ltcGxlTmV0Q2FyZDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBmcm9udGVuZC9jb21wb25lbnRzL3BsYXkvcGxheWdyb3VuZC9DcmVhdGVTaW1wbGVOZXRDYXJkLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFZQTtBQWhCQTtBQUZBO0FBb0JBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbEJBO0FBb0JBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUE1QkE7QUFEQTtBQWdDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBekNBO0FBMkNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRkE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBYkE7QUFIQTtBQUNBO0FBQ0E7QUFBQTtBQTJCQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQVBBO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFQQTtBQUZBO0FBSEE7QUFaQTtBQUZBO0FBRkE7QUF5Q0E7Ozs7QUFyTUE7QUFDQTtBQXVNQTtBQUNBO0FBREE7QUFDQTtBQUdBIiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})