webpackHotUpdate(0,{

/***/ 362:
/* unknown exports provided */
/* all exports used */
/*!********************************************************************!*\
  !*** ./frontend/components/play/playground/CreateSimpleNetCard.js ***!
  \********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ 2);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _synaptic = __webpack_require__(/*! synaptic */ 106);\n\nvar _Stepper = __webpack_require__(/*! material-ui/Stepper */ 640);\n\nvar _RaisedButton = __webpack_require__(/*! material-ui/RaisedButton */ 632);\n\nvar _RaisedButton2 = _interopRequireDefault(_RaisedButton);\n\nvar _FlatButton = __webpack_require__(/*! material-ui/FlatButton */ 27);\n\nvar _FlatButton2 = _interopRequireDefault(_FlatButton);\n\nvar _SelectField = __webpack_require__(/*! material-ui/SelectField */ 634);\n\nvar _SelectField2 = _interopRequireDefault(_SelectField);\n\nvar _MenuItem = __webpack_require__(/*! material-ui/MenuItem */ 627);\n\nvar _MenuItem2 = _interopRequireDefault(_MenuItem);\n\nvar _TextField = __webpack_require__(/*! material-ui/TextField */ 158);\n\nvar _TextField2 = _interopRequireDefault(_TextField);\n\nvar _IconButton = __webpack_require__(/*! material-ui/IconButton */ 77);\n\nvar _IconButton2 = _interopRequireDefault(_IconButton);\n\nvar _close = __webpack_require__(/*! material-ui/svg-icons/navigation/close */ 675);\n\nvar _close2 = _interopRequireDefault(_close);\n\nvar _CircularProgress = __webpack_require__(/*! material-ui/CircularProgress */ 905);\n\nvar _CircularProgress2 = _interopRequireDefault(_CircularProgress);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar CreateSimpleNetCard = function (_React$Component) {\n    _inherits(CreateSimpleNetCard, _React$Component);\n\n    function CreateSimpleNetCard(props) {\n        _classCallCheck(this, CreateSimpleNetCard);\n\n        var _this = _possibleConstructorReturn(this, (CreateSimpleNetCard.__proto__ || Object.getPrototypeOf(CreateSimpleNetCard)).call(this, props));\n\n        _this.state = {\n            step: 0,\n            finished: false,\n            processing: false,\n            options: {\n                desc: \"\",\n                type: 'perceptron',\n                scene: null,\n                pHardness: null,\n                lay0: 1,\n                inputDescriptions: [\"\"],\n                inputTypes: [0],\n                hidden: null,\n                hiddens: [],\n                layN: 1\n            },\n            NN: {}\n        };\n        return _this;\n    }\n\n    _createClass(CreateSimpleNetCard, [{\n        key: 'handleNext',\n        value: function handleNext() {\n            var _this2 = this;\n\n            if (this.state.step === 0) {\n                this.createPerceptron();\n            }\n            if (this.state.step === 1) {\n                this.setState({ processing: true });\n                setTimeout(function () {\n                    return _this2.setState({ processing: false, step: 3 });\n                }, 5000);\n            }\n            var step = this.state.step;\n\n            this.setState({\n                step: step + 1,\n                finished: step >= 2\n            });\n        }\n    }, {\n        key: 'handlePrev',\n        value: function handlePrev() {\n            var step = this.state.step;\n\n            if (step > 0) {\n                this.setState({ step: step - 1 });\n            }\n        }\n    }, {\n        key: 'handleOptChange',\n        value: function handleOptChange(op, event, index, value) {\n            switch (op) {\n                case 0:\n                    var op0 = Object.assign({}, this.state.options, { desc: index });\n                    this.setState({ options: op0 });\n                    break;\n                case 1:\n                    var op1 = Object.assign({}, this.state.options, { hiddens: new Array(index + 1).fill(2), hidden: value });\n                    this.setState({ options: op1 });\n                    break;\n                case 2:\n                    var op2 = Object.assign({}, this.state.options, { scene: value });\n                    this.setState({ options: op2 });\n                    break;\n                case 3:\n                    var op3 = Object.assign({}, this.state.options, { pHardness: value });\n                    this.setState({ options: op3 });\n                    break;\n                default:\n                    break;\n            }\n        }\n    }, {\n        key: 'renderPart',\n        value: function renderPart() {\n            switch (this.state.step) {\n                case 0:\n                    return _react2.default.createElement(\n                        'div',\n                        null,\n                        _react2.default.createElement(\n                            'div',\n                            null,\n                            _react2.default.createElement(\n                                'h2',\n                                null,\n                                'Configure the network'\n                            ),\n                            _react2.default.createElement(_TextField2.default, {\n                                hintText: 'Describe your intelligent task',\n                                value: this.state.options.desc,\n                                onChange: this.handleOptChange.bind(this, 0),\n                                fullWidth: true\n                            }),\n                            _react2.default.createElement(\n                                _SelectField2.default,\n                                { className: 'selectCreate1', autoWidth: false, floatingLabelText: 'Category', value: this.state.options.hidden, onChange: this.handleOptChange.bind(this, 1) },\n                                _react2.default.createElement(_MenuItem2.default, { value: 'single layer', primaryText: 'Simple Predictive' }),\n                                _react2.default.createElement(_MenuItem2.default, { value: 'double layer', primaryText: 'Informed choice' }),\n                                _react2.default.createElement(_MenuItem2.default, { value: 'triple layer', primaryText: 'Deep Choice' })\n                            ),\n                            _react2.default.createElement(\n                                _SelectField2.default,\n                                { className: 'selectCreate1', autoWidth: false, floatingLabelText: 'Scenario', value: this.state.options.scene, onChange: this.handleOptChange.bind(this, 2) },\n                                _react2.default.createElement(_MenuItem2.default, { value: 'binary', primaryText: 'Binary Decision' }),\n                                _react2.default.createElement(_MenuItem2.default, { value: 'gut', primaryText: 'Gut instinct' }),\n                                _react2.default.createElement(_MenuItem2.default, { value: 'reminiscence', primaryText: 'How healthy will I be' }),\n                                _react2.default.createElement(_MenuItem2.default, { value: 'approximation', primaryText: 'Approximate choice' })\n                            ),\n                            _react2.default.createElement(\n                                _SelectField2.default,\n                                { className: 'selectCreate1', autoWidth: false, floatingLabelText: 'How hard is this?', value: this.state.options.pHardness, onChange: this.handleOptChange.bind(this, 3) },\n                                _react2.default.createElement(_MenuItem2.default, { value: 0, primaryText: '0' }),\n                                _react2.default.createElement(_MenuItem2.default, { value: 1, primaryText: '1' }),\n                                _react2.default.createElement(_MenuItem2.default, { value: 2, primaryText: '2' }),\n                                _react2.default.createElement(_MenuItem2.default, { value: 3, primaryText: '3' }),\n                                _react2.default.createElement(_MenuItem2.default, { value: 4, primaryText: '4' }),\n                                _react2.default.createElement(_MenuItem2.default, { value: 5, primaryText: '5' })\n                            ),\n                            _react2.default.createElement(\n                                'h2',\n                                { style: { marginBottom: 0 } },\n                                'Specify Inputs'\n                            ),\n                            this.renderInputOption()\n                        )\n                    );\n                case 1:\n                    return _react2.default.createElement(\n                        'div',\n                        null,\n                        _react2.default.createElement(\n                            'h2',\n                            null,\n                            'The network is initialized! Now specify the data'\n                        )\n                    );\n                case 2:\n                    return _react2.default.createElement(\n                        'div',\n                        null,\n                        _react2.default.createElement(\n                            'h2',\n                            null,\n                            'The network is trained! Click next to save this network to your profile.'\n                        )\n                    );\n                default:\n                    return _react2.default.createElement('div', null);\n            }\n        }\n    }, {\n        key: 'renderInputOption',\n        value: function renderInputOption() {\n            var _this3 = this;\n\n            var returnEls = [];\n\n            var _loop = function _loop(n) {\n                returnEls.push(_react2.default.createElement(\n                    'div',\n                    { key: n, className: 'option-column' },\n                    _react2.default.createElement(_TextField2.default, {\n                        floatingLabelText: 'Input ' + n,\n                        hintText: 'Name',\n                        value: _this3.state.options.inputDescriptions[n],\n                        floatingLabelFixed: true,\n                        fullWidth: true,\n                        onChange: function onChange(e, val) {\n                            var tempIns = _this3.state.options.inputDescriptions.slice();\n                            tempIns[n] = val;\n                            var inputDescriptions = Object.assign({}, _this3.state.options, { inputDescriptions: tempIns });\n                            _this3.setState({ options: inputDescriptions });\n                        } }),\n                    _react2.default.createElement(\n                        _SelectField2.default,\n                        {\n                            floatingLabelText: 'Data type',\n                            value: _this3.state.options.inputTypes[n],\n                            onChange: function onChange(e, val) {\n                                var tempTypes = _this3.state.options.inputTypes.slice();\n                                tempTypes[n] = val;\n                                var inputTypes = Object.assign({}, _this3.state.options, { inputTypes: tempTypes });\n                                _this3.setState({ options: inputTypes });\n                            } },\n                        _react2.default.createElement(_MenuItem2.default, { value: 0, primaryText: 'Quantitative' }),\n                        _react2.default.createElement(_MenuItem2.default, { value: 1, primaryText: 'Qualitative' })\n                    )\n                ));\n            };\n\n            for (var n = 0; n < this.state.options.lay0; n++) {\n                _loop(n);\n            }\n            return _react2.default.createElement(\n                'div',\n                { className: 'net-options-box' },\n                returnEls,\n                _react2.default.createElement(_FlatButton2.default, { label: 'Add another input', secondary: true, onTouchTap: function onTouchTap() {\n                        _this3.updateLayers();\n                    } })\n            );\n        }\n    }, {\n        key: 'createPerceptron',\n        value: function createPerceptron() {\n            var init = new (Function.prototype.bind.apply(_synaptic.Architect.Perceptron, [null].concat([this.state.options.lay0], _toConsumableArray(this.state.options.hiddens), [this.state.options.layN])))();\n            this.setState({ NN: init.toJSON() });\n        }\n    }, {\n        key: 'updateLayers',\n        value: function updateLayers() {\n            var newHeight = this.state.options.lay0 + 1;\n            var newHidden = this.state.options.hiddens.slice().fill(newHeight + 1);\n            var newInputDescriptions = this.state.options.inputDescriptions.concat([\"\"]);\n            var newInputTypes = this.state.options.inputTypes.concat([0]);\n            var updated = Object.assign({}, this.state.options, { hiddens: newHidden, lay0: newHeight, inputDescriptions: newInputDescriptions, inputTypes: newInputTypes });\n            this.setState({ options: updated });\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this4 = this;\n\n            return _react2.default.createElement(\n                'div',\n                { className: 'card-content-container' },\n                _react2.default.createElement(\n                    _IconButton2.default,\n                    { className: 'close-button', onTouchTap: function onTouchTap() {\n                            return _this4.props.closeCard();\n                        } },\n                    _react2.default.createElement(_close2.default, null)\n                ),\n                _react2.default.createElement(\n                    'div',\n                    { className: 'card-content create-simple-net' },\n                    _react2.default.createElement(\n                        'h1',\n                        null,\n                        'Build a new simple neural network!'\n                    ),\n                    _react2.default.createElement(\n                        'div',\n                        { style: { width: '100%', maxWidth: 700, margin: 'auto' } },\n                        _react2.default.createElement(\n                            _Stepper.Stepper,\n                            { activeStep: this.state.step },\n                            _react2.default.createElement(\n                                _Stepper.Step,\n                                null,\n                                _react2.default.createElement(\n                                    _Stepper.StepLabel,\n                                    null,\n                                    'Design the Network'\n                                )\n                            ),\n                            _react2.default.createElement(\n                                _Stepper.Step,\n                                null,\n                                _react2.default.createElement(\n                                    _Stepper.StepLabel,\n                                    null,\n                                    'Train the network'\n                                )\n                            ),\n                            _react2.default.createElement(\n                                _Stepper.Step,\n                                null,\n                                _react2.default.createElement(\n                                    _Stepper.StepLabel,\n                                    null,\n                                    'Processing!'\n                                )\n                            )\n                        ),\n                        _react2.default.createElement(\n                            'div',\n                            null,\n                            this.state.finished ? _react2.default.createElement(\n                                'div',\n                                null,\n                                _react2.default.createElement(\n                                    'h2',\n                                    null,\n                                    'Your network has been trained and saved!'\n                                ),\n                                _react2.default.createElement(\n                                    'p',\n                                    null,\n                                    'Open the Test A Network card to see your network in action.'\n                                )\n                            ) : this.state.processing ? _react2.default.createElement(\n                                'div',\n                                { className: 'processing-screen' },\n                                _react2.default.createElement(\n                                    'h2',\n                                    null,\n                                    'Training the network!'\n                                ),\n                                _react2.default.createElement(_CircularProgress2.default, { size: 300, thickness: 5 })\n                            ) : _react2.default.createElement(\n                                'div',\n                                null,\n                                this.renderPart(),\n                                _react2.default.createElement(\n                                    'div',\n                                    { style: { marginTop: 12, float: 'right' } },\n                                    _react2.default.createElement(_FlatButton2.default, {\n                                        label: 'Back',\n                                        disabled: this.state.step === 0,\n                                        onTouchTap: this.handlePrev.bind(this),\n                                        style: { marginRight: 12 } }),\n                                    _react2.default.createElement(_RaisedButton2.default, {\n                                        label: this.state.step === 1 ? 'Start training!' : 'Next',\n                                        primary: true,\n                                        onTouchTap: this.handleNext.bind(this) })\n                                )\n                            )\n                        )\n                    )\n                )\n            );\n        }\n    }]);\n\n    return CreateSimpleNetCard;\n}(_react2.default.Component);\n\nCreateSimpleNetCard.propTypes = {\n    closeCard: _propTypes2.default.func\n};\n\nexports.default = CreateSimpleNetCard;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzYyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbXBvbmVudHMvcGxheS9wbGF5Z3JvdW5kL0NyZWF0ZVNpbXBsZU5ldENhcmQuanM/YWJjMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEFyY2hpdGVjdCB9IGZyb20gJ3N5bmFwdGljJztcbmltcG9ydCB7IFN0ZXAsIFN0ZXBwZXIsIFN0ZXBMYWJlbCB9IGZyb20gJ21hdGVyaWFsLXVpL1N0ZXBwZXInO1xuaW1wb3J0IFJhaXNlZEJ1dHRvbiBmcm9tICdtYXRlcmlhbC11aS9SYWlzZWRCdXR0b24nO1xuaW1wb3J0IEZsYXRCdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvRmxhdEJ1dHRvbic7XG5pbXBvcnQgU2VsZWN0RmllbGQgZnJvbSAnbWF0ZXJpYWwtdWkvU2VsZWN0RmllbGQnO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ21hdGVyaWFsLXVpL01lbnVJdGVtJztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnbWF0ZXJpYWwtdWkvVGV4dEZpZWxkJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ21hdGVyaWFsLXVpL0ljb25CdXR0b24nO1xuaW1wb3J0IE5hdmlnYXRpb25DbG9zZSBmcm9tICdtYXRlcmlhbC11aS9zdmctaWNvbnMvbmF2aWdhdGlvbi9jbG9zZSc7XG5pbXBvcnQgQ2lyY3VsYXJQcm9ncmVzcyBmcm9tICdtYXRlcmlhbC11aS9DaXJjdWxhclByb2dyZXNzJztcblxuY2xhc3MgQ3JlYXRlU2ltcGxlTmV0Q2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc3RlcDogMCxcbiAgICAgICAgICAgIGZpbmlzaGVkOiBmYWxzZSxcbiAgICAgICAgICAgIHByb2Nlc3Npbmc6IGZhbHNlLFxuICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgIGRlc2M6IFwiXCIsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3BlcmNlcHRyb24nLFxuICAgICAgICAgICAgICAgIHNjZW5lOiBudWxsLFxuICAgICAgICAgICAgICAgIHBIYXJkbmVzczogbnVsbCxcbiAgICAgICAgICAgICAgICBsYXkwOiAxLFxuICAgICAgICAgICAgICAgIGlucHV0RGVzY3JpcHRpb25zOiBbXCJcIl0sXG4gICAgICAgICAgICAgICAgaW5wdXRUeXBlczogWzBdLFxuICAgICAgICAgICAgICAgIGhpZGRlbjogbnVsbCxcbiAgICAgICAgICAgICAgICBoaWRkZW5zOiBbXSxcbiAgICAgICAgICAgICAgICBsYXlOOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgTk46IHt9XG4gICAgICAgIH07XG4gICAgfVxuICAgIGhhbmRsZU5leHQoKSB7XG4gICAgICAgIGlmKHRoaXMuc3RhdGUuc3RlcCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVQZXJjZXB0cm9uKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5zdGF0ZS5zdGVwID09PSAxKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtwcm9jZXNzaW5nOiB0cnVlfSk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT4gdGhpcy5zZXRTdGF0ZSh7cHJvY2Vzc2luZzogZmFsc2UsIHN0ZXA6IDN9KSwgNTAwMCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qge3N0ZXB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzdGVwOiBzdGVwICsgMSxcbiAgICAgICAgICAgIGZpbmlzaGVkOiBzdGVwID49IDIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBoYW5kbGVQcmV2KCkge1xuICAgICAgICBjb25zdCB7c3RlcH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBpZiAoc3RlcCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3N0ZXA6IHN0ZXAgLSAxfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaGFuZGxlT3B0Q2hhbmdlKG9wLCBldmVudCwgaW5kZXgsIHZhbHVlKSB7XG4gICAgICAgIHN3aXRjaChvcCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGNvbnN0IG9wMCA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUub3B0aW9ucywge2Rlc2M6IGluZGV4fSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7b3B0aW9uczogb3AwfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgY29uc3Qgb3AxID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5vcHRpb25zLCB7aGlkZGVuczogbmV3IEFycmF5KGluZGV4ICsgMSkuZmlsbCgyKSwgaGlkZGVuOiB2YWx1ZX0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe29wdGlvbnM6IG9wMX0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGNvbnN0IG9wMiA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUub3B0aW9ucywge3NjZW5lOiB2YWx1ZX0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe29wdGlvbnM6IG9wMn0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGNvbnN0IG9wMyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUub3B0aW9ucywge3BIYXJkbmVzczogdmFsdWV9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtvcHRpb25zOiBvcDN9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyUGFydCgpIHtcbiAgICAgICAgc3dpdGNoKHRoaXMuc3RhdGUuc3RlcCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHJldHVybig8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkNvbmZpZ3VyZSB0aGUgbmV0d29yazwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnRUZXh0PVwiRGVzY3JpYmUgeW91ciBpbnRlbGxpZ2VudCB0YXNrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUub3B0aW9ucy5kZXNjfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVPcHRDaGFuZ2UuYmluZCh0aGlzLCAwKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdEZpZWxkIGNsYXNzTmFtZT1cInNlbGVjdENyZWF0ZTFcIiBhdXRvV2lkdGg9e2ZhbHNlfSBmbG9hdGluZ0xhYmVsVGV4dD1cIkNhdGVnb3J5XCIgdmFsdWU9e3RoaXMuc3RhdGUub3B0aW9ucy5oaWRkZW59IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZU9wdENoYW5nZS5iaW5kKHRoaXMsIDEpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXsnc2luZ2xlIGxheWVyJ30gcHJpbWFyeVRleHQ9XCJTaW1wbGUgUHJlZGljdGl2ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17J2RvdWJsZSBsYXllcid9IHByaW1hcnlUZXh0PVwiSW5mb3JtZWQgY2hvaWNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXsndHJpcGxlIGxheWVyJ30gcHJpbWFyeVRleHQ9XCJEZWVwIENob2ljZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdEZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdEZpZWxkIGNsYXNzTmFtZT1cInNlbGVjdENyZWF0ZTFcIiBhdXRvV2lkdGg9e2ZhbHNlfSBmbG9hdGluZ0xhYmVsVGV4dD1cIlNjZW5hcmlvXCIgdmFsdWU9e3RoaXMuc3RhdGUub3B0aW9ucy5zY2VuZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlT3B0Q2hhbmdlLmJpbmQodGhpcywgMil9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9eydiaW5hcnknfSBwcmltYXJ5VGV4dD1cIkJpbmFyeSBEZWNpc2lvblwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17J2d1dCd9IHByaW1hcnlUZXh0PVwiR3V0IGluc3RpbmN0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXsncmVtaW5pc2NlbmNlJ30gcHJpbWFyeVRleHQ9XCJIb3cgaGVhbHRoeSB3aWxsIEkgYmVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9eydhcHByb3hpbWF0aW9uJ30gcHJpbWFyeVRleHQ9XCJBcHByb3hpbWF0ZSBjaG9pY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3RGaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RGaWVsZCBjbGFzc05hbWU9XCJzZWxlY3RDcmVhdGUxXCIgYXV0b1dpZHRoPXtmYWxzZX0gZmxvYXRpbmdMYWJlbFRleHQ9XCJIb3cgaGFyZCBpcyB0aGlzP1wiIHZhbHVlPXt0aGlzLnN0YXRlLm9wdGlvbnMucEhhcmRuZXNzfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVPcHRDaGFuZ2UuYmluZCh0aGlzLCAzKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17MH0gcHJpbWFyeVRleHQ9XCIwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXsxfSBwcmltYXJ5VGV4dD1cIjFcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9ezJ9IHByaW1hcnlUZXh0PVwiMlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17M30gcHJpbWFyeVRleHQ9XCIzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXs0fSBwcmltYXJ5VGV4dD1cIjRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9ezV9IHByaW1hcnlUZXh0PVwiNVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdEZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAwfX0+U3BlY2lmeSBJbnB1dHM8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVySW5wdXRPcHRpb24oKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+KTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICByZXR1cm4oPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPlRoZSBuZXR3b3JrIGlzIGluaXRpYWxpemVkISBOb3cgc3BlY2lmeSB0aGUgZGF0YTwvaDI+XG4gICAgICAgICAgICAgICAgPC9kaXY+KTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gKDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5UaGUgbmV0d29yayBpcyB0cmFpbmVkISBDbGljayBuZXh0IHRvIHNhdmUgdGhpcyBuZXR3b3JrIHRvIHlvdXIgcHJvZmlsZS48L2gyPlxuICAgICAgICAgICAgICAgIDwvZGl2Pik7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAoPGRpdiAvPik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVySW5wdXRPcHRpb24oKSB7XG4gICAgICAgIGNvbnN0IHJldHVybkVscyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBuID0gMDsgbiA8IHRoaXMuc3RhdGUub3B0aW9ucy5sYXkwOyBuKyspIHtcbiAgICAgICAgICAgIHJldHVybkVscy5wdXNoKDxkaXYga2V5PXtufSBjbGFzc05hbWU9XCJvcHRpb24tY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICBmbG9hdGluZ0xhYmVsVGV4dD17YElucHV0ICR7bn1gfVxuICAgICAgICAgICAgICAgICAgICBoaW50VGV4dD1cIk5hbWVcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5vcHRpb25zLmlucHV0RGVzY3JpcHRpb25zW25dfVxuICAgICAgICAgICAgICAgICAgICBmbG9hdGluZ0xhYmVsRml4ZWRcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSwgdmFsKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlbXBJbnMgPSB0aGlzLnN0YXRlLm9wdGlvbnMuaW5wdXREZXNjcmlwdGlvbnMuc2xpY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBJbnNbbl0gPSB2YWw7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dERlc2NyaXB0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUub3B0aW9ucywge2lucHV0RGVzY3JpcHRpb25zOiB0ZW1wSW5zfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtvcHRpb25zOiBpbnB1dERlc2NyaXB0aW9uc30pO1xuICAgICAgICAgICAgICAgICAgICB9fS8+XG4gICAgICAgICAgICAgICAgPFNlbGVjdEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIGZsb2F0aW5nTGFiZWxUZXh0PVwiRGF0YSB0eXBlXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUub3B0aW9ucy5pbnB1dFR5cGVzW25dfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVtcFR5cGVzID0gdGhpcy5zdGF0ZS5vcHRpb25zLmlucHV0VHlwZXMuc2xpY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBUeXBlc1tuXSA9IHZhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0VHlwZXMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLm9wdGlvbnMsIHtpbnB1dFR5cGVzOiB0ZW1wVHlwZXN9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe29wdGlvbnM6IGlucHV0VHlwZXN9KTtcbiAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17MH0gcHJpbWFyeVRleHQ9XCJRdWFudGl0YXRpdmVcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9ezF9IHByaW1hcnlUZXh0PVwiUXVhbGl0YXRpdmVcIiAvPlxuICAgICAgICAgICAgICAgIDwvU2VsZWN0RmllbGQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwibmV0LW9wdGlvbnMtYm94XCI+XG4gICAgICAgICAgICB7cmV0dXJuRWxzfVxuICAgICAgICAgICAgIDxGbGF0QnV0dG9uIGxhYmVsPVwiQWRkIGFub3RoZXIgaW5wdXRcIiBzZWNvbmRhcnkgb25Ub3VjaFRhcD17KCk9PntcbiAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVMYXllcnMoKTtcbiAgICAgICAgICAgICB9fSAvPlxuICAgICAgICA8L2Rpdj4pO1xuICAgIH1cbiAgICBjcmVhdGVQZXJjZXB0cm9uKCkge1xuICAgICAgICBjb25zdCBpbml0ID0gbmV3IEFyY2hpdGVjdC5QZXJjZXB0cm9uKHRoaXMuc3RhdGUub3B0aW9ucy5sYXkwLCAuLi50aGlzLnN0YXRlLm9wdGlvbnMuaGlkZGVucywgdGhpcy5zdGF0ZS5vcHRpb25zLmxheU4pO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtOTjogaW5pdC50b0pTT04oKX0pO1xuICAgIH1cbiAgICB1cGRhdGVMYXllcnMoKSB7XG4gICAgICAgIGNvbnN0IG5ld0hlaWdodCA9IHRoaXMuc3RhdGUub3B0aW9ucy5sYXkwICsgMTtcbiAgICAgICAgY29uc3QgbmV3SGlkZGVuID0gdGhpcy5zdGF0ZS5vcHRpb25zLmhpZGRlbnMuc2xpY2UoKS5maWxsKG5ld0hlaWdodCArIDEpO1xuICAgICAgICBjb25zdCBuZXdJbnB1dERlc2NyaXB0aW9ucyA9IHRoaXMuc3RhdGUub3B0aW9ucy5pbnB1dERlc2NyaXB0aW9ucy5jb25jYXQoW1wiXCJdKTtcbiAgICAgICAgY29uc3QgbmV3SW5wdXRUeXBlcyA9IHRoaXMuc3RhdGUub3B0aW9ucy5pbnB1dFR5cGVzLmNvbmNhdChbMF0pO1xuICAgICAgICBjb25zdCB1cGRhdGVkID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5vcHRpb25zLCB7aGlkZGVuczogbmV3SGlkZGVuLCBsYXkwOiBuZXdIZWlnaHQsIGlucHV0RGVzY3JpcHRpb25zOiBuZXdJbnB1dERlc2NyaXB0aW9ucywgaW5wdXRUeXBlczogbmV3SW5wdXRUeXBlc30pO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtvcHRpb25zOiB1cGRhdGVkfSk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPEljb25CdXR0b24gY2xhc3NOYW1lPVwiY2xvc2UtYnV0dG9uXCIgb25Ub3VjaFRhcD17KCk9PnRoaXMucHJvcHMuY2xvc2VDYXJkKCl9ID48TmF2aWdhdGlvbkNsb3NlIC8+PC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50IGNyZWF0ZS1zaW1wbGUtbmV0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMT5CdWlsZCBhIG5ldyBzaW1wbGUgbmV1cmFsIG5ldHdvcmshPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOiAnMTAwJScsIG1heFdpZHRoOiA3MDAsIG1hcmdpbjogJ2F1dG8nfX0+XG4gICAgICAgICAgICAgICAgICAgICAgPFN0ZXBwZXIgYWN0aXZlU3RlcD17dGhpcy5zdGF0ZS5zdGVwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGVwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RlcExhYmVsPkRlc2lnbiB0aGUgTmV0d29yazwvU3RlcExhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGVwPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0ZXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGVwTGFiZWw+VHJhaW4gdGhlIG5ldHdvcms8L1N0ZXBMYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RlcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGVwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RlcExhYmVsPlByb2Nlc3NpbmchPC9TdGVwTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1N0ZXA+XG4gICAgICAgICAgICAgICAgICAgICAgPC9TdGVwcGVyPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5maW5pc2hlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gKDxkaXY+PGgyPllvdXIgbmV0d29yayBoYXMgYmVlbiB0cmFpbmVkIGFuZCBzYXZlZCE8L2gyPjxwPk9wZW4gdGhlIFRlc3QgQSBOZXR3b3JrIGNhcmQgdG8gc2VlIHlvdXIgbmV0d29yayBpbiBhY3Rpb24uPC9wPjwvZGl2PilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMuc3RhdGUucHJvY2Vzc2luZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICg8ZGl2IGNsYXNzTmFtZT1cInByb2Nlc3Npbmctc2NyZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+VHJhaW5pbmcgdGhlIG5ldHdvcmshPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaXJjdWxhclByb2dyZXNzIHNpemU9ezMwMH0gdGhpY2tuZXNzPXs1fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJQYXJ0KCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOiAxMiwgZmxvYXQ6ICdyaWdodCd9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxhdEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkJhY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUuc3RlcCA9PT0gMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVG91Y2hUYXA9e3RoaXMuaGFuZGxlUHJldi5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5SaWdodDogMTJ9fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFpc2VkQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3RoaXMuc3RhdGUuc3RlcCA9PT0gMSA/ICdTdGFydCB0cmFpbmluZyEnIDogJ05leHQnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblRvdWNoVGFwPXt0aGlzLmhhbmRsZU5leHQuYmluZCh0aGlzKX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkNyZWF0ZVNpbXBsZU5ldENhcmQucHJvcFR5cGVzID0ge1xuICAgIGNsb3NlQ2FyZDogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENyZWF0ZVNpbXBsZU5ldENhcmQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZnJvbnRlbmQvY29tcG9uZW50cy9wbGF5L3BsYXlncm91bmQvQ3JlYXRlU2ltcGxlTmV0Q2FyZC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBWUE7QUFoQkE7QUFGQTtBQW9CQTtBQUNBOzs7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFQQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsQkE7QUFvQkE7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQTVCQTtBQURBO0FBZ0NBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUNBO0FBM0NBO0FBNkNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRkE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBYkE7QUFIQTtBQUNBO0FBQ0E7QUFBQTtBQTJCQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQVBBO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBRkE7QUFSQTtBQVpBO0FBRkE7QUFGQTtBQTRDQTs7OztBQTlNQTtBQUNBO0FBZ05BO0FBQ0E7QUFEQTtBQUNBO0FBR0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})