webpackHotUpdate(0,{

/***/ 362:
/* unknown exports provided */
/* all exports used */
/*!********************************************************************!*\
  !*** ./frontend/components/play/playground/CreateSimpleNetCard.js ***!
  \********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ 2);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _synaptic = __webpack_require__(/*! synaptic */ 106);\n\nvar _Stepper = __webpack_require__(/*! material-ui/Stepper */ 640);\n\nvar _RaisedButton = __webpack_require__(/*! material-ui/RaisedButton */ 632);\n\nvar _RaisedButton2 = _interopRequireDefault(_RaisedButton);\n\nvar _FlatButton = __webpack_require__(/*! material-ui/FlatButton */ 27);\n\nvar _FlatButton2 = _interopRequireDefault(_FlatButton);\n\nvar _SelectField = __webpack_require__(/*! material-ui/SelectField */ 634);\n\nvar _SelectField2 = _interopRequireDefault(_SelectField);\n\nvar _MenuItem = __webpack_require__(/*! material-ui/MenuItem */ 627);\n\nvar _MenuItem2 = _interopRequireDefault(_MenuItem);\n\nvar _TextField = __webpack_require__(/*! material-ui/TextField */ 158);\n\nvar _TextField2 = _interopRequireDefault(_TextField);\n\nvar _IconButton = __webpack_require__(/*! material-ui/IconButton */ 77);\n\nvar _IconButton2 = _interopRequireDefault(_IconButton);\n\nvar _close = __webpack_require__(/*! material-ui/svg-icons/navigation/close */ 675);\n\nvar _close2 = _interopRequireDefault(_close);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar CreateSimpleNetCard = function (_React$Component) {\n    _inherits(CreateSimpleNetCard, _React$Component);\n\n    function CreateSimpleNetCard(props) {\n        _classCallCheck(this, CreateSimpleNetCard);\n\n        var _this = _possibleConstructorReturn(this, (CreateSimpleNetCard.__proto__ || Object.getPrototypeOf(CreateSimpleNetCard)).call(this, props));\n\n        _this.state = {\n            step: 0,\n            finished: false,\n            options: {\n                desc: \"\",\n                type: 'perceptron',\n                scene: null,\n                pHardness: null,\n                lay0: 1,\n                inputDescriptions: [\"\"],\n                inputTypes: [0],\n                hidden: null,\n                hiddens: [],\n                layN: 1\n            },\n            NN: {}\n        };\n        return _this;\n    }\n\n    _createClass(CreateSimpleNetCard, [{\n        key: 'handleNext',\n        value: function handleNext() {\n            if (this.state.step === 0) {\n                this.createPerceptron();\n            }\n            var step = this.state.step;\n\n            this.setState({\n                step: step + 1,\n                finished: step >= 1\n            });\n        }\n    }, {\n        key: 'handlePrev',\n        value: function handlePrev() {\n            var step = this.state.step;\n\n            if (step > 0) {\n                this.setState({ step: step - 1 });\n            }\n        }\n    }, {\n        key: 'handleOptChange',\n        value: function handleOptChange(op, event, index, value) {\n            switch (op) {\n                case 0:\n                    var op0 = Object.assign({}, this.state.options, { desc: index });\n                    this.setState({ options: op0 });\n                    break;\n                case 1:\n                    var op1 = Object.assign({}, this.state.options, { hiddens: new Array(index + 1).fill(2), hidden: value });\n                    this.setState({ options: op1 });\n                    break;\n                case 2:\n                    var op2 = Object.assign({}, this.state.options, { scene: value });\n                    this.setState({ options: op2 });\n                    break;\n                case 3:\n                    var op3 = Object.assign({}, this.state.options, { pHardness: value });\n                    this.setState({ options: op3 });\n                    break;\n                default:\n                    break;\n            }\n        }\n    }, {\n        key: 'renderPart',\n        value: function renderPart() {\n            switch (this.state.step) {\n                case 0:\n                    return _react2.default.createElement(\n                        'div',\n                        null,\n                        _react2.default.createElement(\n                            'div',\n                            null,\n                            _react2.default.createElement(\n                                'h2',\n                                null,\n                                'Configure the network'\n                            ),\n                            _react2.default.createElement(_TextField2.default, {\n                                hintText: 'Describe your intelligent task',\n                                value: this.state.options.desc,\n                                onChange: this.handleOptChange.bind(this, 0),\n                                fullWidth: true\n                            }),\n                            _react2.default.createElement(\n                                _SelectField2.default,\n                                { className: 'selectCreate1', autoWidth: false, floatingLabelText: 'Category', value: this.state.options.hidden, onChange: this.handleOptChange.bind(this, 1) },\n                                _react2.default.createElement(_MenuItem2.default, { value: 'single layer', primaryText: 'Simple Predictive' }),\n                                _react2.default.createElement(_MenuItem2.default, { value: 'double layer', primaryText: 'Informed choice' }),\n                                _react2.default.createElement(_MenuItem2.default, { value: 'triple layer', primaryText: 'Deep Choice' })\n                            ),\n                            _react2.default.createElement(\n                                _SelectField2.default,\n                                { className: 'selectCreate1', autoWidth: false, floatingLabelText: 'Scenario', value: this.state.options.scene, onChange: this.handleOptChange.bind(this, 2) },\n                                _react2.default.createElement(_MenuItem2.default, { value: 'binary', primaryText: 'Binary Decision' }),\n                                _react2.default.createElement(_MenuItem2.default, { value: 'gut', primaryText: 'Gut instinct' }),\n                                _react2.default.createElement(_MenuItem2.default, { value: 'reminiscence', primaryText: 'How healthy will I be' }),\n                                _react2.default.createElement(_MenuItem2.default, { value: 'approximation', primaryText: 'Approximate choice' })\n                            ),\n                            _react2.default.createElement(\n                                _SelectField2.default,\n                                { className: 'selectCreate1', autoWidth: false, floatingLabelText: 'How hard is this?', value: this.state.options.pHardness, onChange: this.handleOptChange.bind(this, 3) },\n                                _react2.default.createElement(_MenuItem2.default, { value: 0, primaryText: '0' }),\n                                _react2.default.createElement(_MenuItem2.default, { value: 1, primaryText: '1' }),\n                                _react2.default.createElement(_MenuItem2.default, { value: 2, primaryText: '2' }),\n                                _react2.default.createElement(_MenuItem2.default, { value: 3, primaryText: '3' }),\n                                _react2.default.createElement(_MenuItem2.default, { value: 4, primaryText: '4' }),\n                                _react2.default.createElement(_MenuItem2.default, { value: 5, primaryText: '5' })\n                            ),\n                            _react2.default.createElement(\n                                'h2',\n                                { style: { marginBottom: 0 } },\n                                'Specify Inputs'\n                            ),\n                            this.renderInputOption()\n                        )\n                    );\n                case 1:\n                    return _react2.default.createElement(\n                        'div',\n                        null,\n                        _react2.default.createElement(\n                            'h2',\n                            null,\n                            'The network is initialized! Now specify the data'\n                        )\n                    );\n                default:\n                    return _react2.default.createElement('div', null);\n            }\n        }\n    }, {\n        key: 'renderInputOption',\n        value: function renderInputOption() {\n            var _this2 = this;\n\n            var returnEls = [];\n\n            var _loop = function _loop(n) {\n                returnEls.push(_react2.default.createElement(\n                    'div',\n                    { key: n, className: 'option-column' },\n                    _react2.default.createElement(_TextField2.default, {\n                        floatingLabelText: 'Input ' + n,\n                        hintText: 'Name',\n                        value: _this2.state.options.inputDescriptions[n],\n                        floatingLabelFixed: true,\n                        fullWidth: true,\n                        onChange: function onChange(e, val) {\n                            var tempIns = _this2.state.options.inputDescriptions.slice();\n                            tempIns[n] = val;\n                            var inputDescriptions = Object.assign({}, _this2.state.options, { inputDescriptions: tempIns });\n                            _this2.setState({ options: inputDescriptions });\n                        } }),\n                    _react2.default.createElement(\n                        _SelectField2.default,\n                        {\n                            floatingLabelText: 'Data type',\n                            value: _this2.state.options.inputTypes[n],\n                            onChange: function onChange(e, val) {\n                                var tempTypes = _this2.state.options.inputTypes.slice();\n                                tempTypes[n] = val;\n                                var inputTypes = Object.assign({}, _this2.state.options, { inputTypes: tempTypes });\n                                _this2.setState({ options: inputTypes });\n                            } },\n                        _react2.default.createElement(_MenuItem2.default, { value: 0, primaryText: 'Quantitative' }),\n                        _react2.default.createElement(_MenuItem2.default, { value: 1, primaryText: 'Qualitative' })\n                    )\n                ));\n            };\n\n            for (var n = 0; n < this.state.options.lay0; n++) {\n                _loop(n);\n            }\n            return _react2.default.createElement(\n                'div',\n                { className: 'net-options-box' },\n                returnEls,\n                _react2.default.createElement(_FlatButton2.default, { label: 'Add another input', secondary: true, onTouchTap: function onTouchTap() {\n                        _this2.updateLayers();\n                    } })\n            );\n        }\n    }, {\n        key: 'createPerceptron',\n        value: function createPerceptron() {\n            var init = new (Function.prototype.bind.apply(_synaptic.Architect.Perceptron, [null].concat([this.state.options.lay0], _toConsumableArray(this.state.options.hiddens), [this.state.options.layN])))();\n            this.setState({ NN: init.toJSON() });\n        }\n    }, {\n        key: 'updateLayers',\n        value: function updateLayers() {\n            var newHeight = this.state.options.lay0 + 1;\n            var newHidden = this.state.options.hiddens.slice().fill(newHeight + 1);\n            var newInputDescriptions = this.state.options.inputDescriptions.concat([\"\"]);\n            var newInputTypes = this.state.options.inputTypes.concat([0]);\n            var updated = Object.assign({}, this.state.options, { hiddens: newHidden, lay0: newHeight, inputDescriptions: newInputDescriptions, inputTypes: newInputTypes });\n            this.setState({ options: updated });\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this3 = this;\n\n            return _react2.default.createElement(\n                'div',\n                { className: 'card-content-container' },\n                _react2.default.createElement(\n                    _IconButton2.default,\n                    { className: 'close-button', onTouchTap: function onTouchTap() {\n                            return _this3.props.closeCard();\n                        } },\n                    _react2.default.createElement(_close2.default, null)\n                ),\n                _react2.default.createElement(\n                    'div',\n                    { className: 'card-content create-simple-net' },\n                    _react2.default.createElement(\n                        'h1',\n                        null,\n                        'Build a new simple neural network!'\n                    ),\n                    _react2.default.createElement(\n                        'div',\n                        { style: { width: '100%', maxWidth: 700, margin: 'auto' } },\n                        _react2.default.createElement(\n                            _Stepper.Stepper,\n                            { activeStep: this.state.step },\n                            _react2.default.createElement(\n                                _Stepper.Step,\n                                null,\n                                _react2.default.createElement(\n                                    _Stepper.StepLabel,\n                                    null,\n                                    'Design the Network'\n                                )\n                            ),\n                            _react2.default.createElement(\n                                _Stepper.Step,\n                                null,\n                                _react2.default.createElement(\n                                    _Stepper.StepLabel,\n                                    null,\n                                    'Train the network'\n                                )\n                            )\n                        ),\n                        _react2.default.createElement(\n                            'div',\n                            null,\n                            this.state.finished ? _react2.default.createElement(\n                                'div',\n                                null,\n                                _react2.default.createElement(\n                                    'h2',\n                                    null,\n                                    'Your network has been trained and saved!'\n                                ),\n                                _react2.default.createElement(\n                                    'p',\n                                    null,\n                                    'Open the Test A Network card to see your network in action.'\n                                )\n                            ) : _react2.default.createElement(\n                                'div',\n                                null,\n                                this.renderPart(),\n                                _react2.default.createElement(\n                                    'div',\n                                    { style: { marginTop: 12, float: 'right' } },\n                                    _react2.default.createElement(_FlatButton2.default, {\n                                        label: 'Back',\n                                        disabled: this.state.step === 0,\n                                        onTouchTap: this.handlePrev.bind(this),\n                                        style: { marginRight: 12 }\n                                    }),\n                                    _react2.default.createElement(_RaisedButton2.default, {\n                                        label: this.state.step === 1 ? 'Start training!' : 'Next',\n                                        primary: true,\n                                        onTouchTap: this.handleNext.bind(this)\n                                    })\n                                )\n                            )\n                        )\n                    )\n                )\n            );\n        }\n    }]);\n\n    return CreateSimpleNetCard;\n}(_react2.default.Component);\n\nCreateSimpleNetCard.propTypes = {\n    closeCard: _propTypes2.default.func\n};\n\nexports.default = CreateSimpleNetCard;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzYyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbXBvbmVudHMvcGxheS9wbGF5Z3JvdW5kL0NyZWF0ZVNpbXBsZU5ldENhcmQuanM/YWJjMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEFyY2hpdGVjdCB9IGZyb20gJ3N5bmFwdGljJztcbmltcG9ydCB7IFN0ZXAsIFN0ZXBwZXIsIFN0ZXBMYWJlbCB9IGZyb20gJ21hdGVyaWFsLXVpL1N0ZXBwZXInO1xuaW1wb3J0IFJhaXNlZEJ1dHRvbiBmcm9tICdtYXRlcmlhbC11aS9SYWlzZWRCdXR0b24nO1xuaW1wb3J0IEZsYXRCdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvRmxhdEJ1dHRvbic7XG5pbXBvcnQgU2VsZWN0RmllbGQgZnJvbSAnbWF0ZXJpYWwtdWkvU2VsZWN0RmllbGQnO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ21hdGVyaWFsLXVpL01lbnVJdGVtJztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnbWF0ZXJpYWwtdWkvVGV4dEZpZWxkJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ21hdGVyaWFsLXVpL0ljb25CdXR0b24nO1xuaW1wb3J0IE5hdmlnYXRpb25DbG9zZSBmcm9tICdtYXRlcmlhbC11aS9zdmctaWNvbnMvbmF2aWdhdGlvbi9jbG9zZSc7XG5cbmNsYXNzIENyZWF0ZVNpbXBsZU5ldENhcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHN0ZXA6IDAsXG4gICAgICAgICAgICBmaW5pc2hlZDogZmFsc2UsXG4gICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgZGVzYzogXCJcIixcbiAgICAgICAgICAgICAgICB0eXBlOiAncGVyY2VwdHJvbicsXG4gICAgICAgICAgICAgICAgc2NlbmU6IG51bGwsXG4gICAgICAgICAgICAgICAgcEhhcmRuZXNzOiBudWxsLFxuICAgICAgICAgICAgICAgIGxheTA6IDEsXG4gICAgICAgICAgICAgICAgaW5wdXREZXNjcmlwdGlvbnM6IFtcIlwiXSxcbiAgICAgICAgICAgICAgICBpbnB1dFR5cGVzOiBbMF0sXG4gICAgICAgICAgICAgICAgaGlkZGVuOiBudWxsLFxuICAgICAgICAgICAgICAgIGhpZGRlbnM6IFtdLFxuICAgICAgICAgICAgICAgIGxheU46IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBOTjoge31cbiAgICAgICAgfTtcbiAgICB9XG4gICAgaGFuZGxlTmV4dCgpIHtcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5zdGVwID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVBlcmNlcHRyb24oKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7c3RlcH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHN0ZXA6IHN0ZXAgKyAxLFxuICAgICAgICAgICAgZmluaXNoZWQ6IHN0ZXAgPj0gMSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGhhbmRsZVByZXYoKSB7XG4gICAgICAgIGNvbnN0IHtzdGVwfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGlmIChzdGVwID4gMCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c3RlcDogc3RlcCAtIDF9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBoYW5kbGVPcHRDaGFuZ2Uob3AsIGV2ZW50LCBpbmRleCwgdmFsdWUpIHtcbiAgICAgICAgc3dpdGNoKG9wKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgY29uc3Qgb3AwID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5vcHRpb25zLCB7ZGVzYzogaW5kZXh9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtvcHRpb25zOiBvcDB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBjb25zdCBvcDEgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLm9wdGlvbnMsIHtoaWRkZW5zOiBuZXcgQXJyYXkoaW5kZXggKyAxKS5maWxsKDIpLCBoaWRkZW46IHZhbHVlfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7b3B0aW9uczogb3AxfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgY29uc3Qgb3AyID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5vcHRpb25zLCB7c2NlbmU6IHZhbHVlfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7b3B0aW9uczogb3AyfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgY29uc3Qgb3AzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5vcHRpb25zLCB7cEhhcmRuZXNzOiB2YWx1ZX0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe29wdGlvbnM6IG9wM30pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXJQYXJ0KCkge1xuICAgICAgICBzd2l0Y2godGhpcy5zdGF0ZS5zdGVwKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuKDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+Q29uZmlndXJlIHRoZSBuZXR3b3JrPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGludFRleHQ9XCJEZXNjcmliZSB5b3VyIGludGVsbGlnZW50IHRhc2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5vcHRpb25zLmRlc2N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZU9wdENoYW5nZS5iaW5kKHRoaXMsIDApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0RmllbGQgY2xhc3NOYW1lPVwic2VsZWN0Q3JlYXRlMVwiIGF1dG9XaWR0aD17ZmFsc2V9IGZsb2F0aW5nTGFiZWxUZXh0PVwiQ2F0ZWdvcnlcIiB2YWx1ZT17dGhpcy5zdGF0ZS5vcHRpb25zLmhpZGRlbn0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlT3B0Q2hhbmdlLmJpbmQodGhpcywgMSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9eydzaW5nbGUgbGF5ZXInfSBwcmltYXJ5VGV4dD1cIlNpbXBsZSBQcmVkaWN0aXZlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXsnZG91YmxlIGxheWVyJ30gcHJpbWFyeVRleHQ9XCJJbmZvcm1lZCBjaG9pY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9eyd0cmlwbGUgbGF5ZXInfSBwcmltYXJ5VGV4dD1cIkRlZXAgQ2hvaWNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0RmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0RmllbGQgY2xhc3NOYW1lPVwic2VsZWN0Q3JlYXRlMVwiIGF1dG9XaWR0aD17ZmFsc2V9IGZsb2F0aW5nTGFiZWxUZXh0PVwiU2NlbmFyaW9cIiB2YWx1ZT17dGhpcy5zdGF0ZS5vcHRpb25zLnNjZW5lfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVPcHRDaGFuZ2UuYmluZCh0aGlzLCAyKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17J2JpbmFyeSd9IHByaW1hcnlUZXh0PVwiQmluYXJ5IERlY2lzaW9uXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXsnZ3V0J30gcHJpbWFyeVRleHQ9XCJHdXQgaW5zdGluY3RcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9eydyZW1pbmlzY2VuY2UnfSBwcmltYXJ5VGV4dD1cIkhvdyBoZWFsdGh5IHdpbGwgSSBiZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17J2FwcHJveGltYXRpb24nfSBwcmltYXJ5VGV4dD1cIkFwcHJveGltYXRlIGNob2ljZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdEZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdEZpZWxkIGNsYXNzTmFtZT1cInNlbGVjdENyZWF0ZTFcIiBhdXRvV2lkdGg9e2ZhbHNlfSBmbG9hdGluZ0xhYmVsVGV4dD1cIkhvdyBoYXJkIGlzIHRoaXM/XCIgdmFsdWU9e3RoaXMuc3RhdGUub3B0aW9ucy5wSGFyZG5lc3N9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZU9wdENoYW5nZS5iaW5kKHRoaXMsIDMpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXswfSBwcmltYXJ5VGV4dD1cIjBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9ezF9IHByaW1hcnlUZXh0PVwiMVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17Mn0gcHJpbWFyeVRleHQ9XCIyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXszfSBwcmltYXJ5VGV4dD1cIjNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9ezR9IHByaW1hcnlUZXh0PVwiNFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17NX0gcHJpbWFyeVRleHQ9XCI1XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0RmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgc3R5bGU9e3ttYXJnaW5Cb3R0b206IDB9fT5TcGVjaWZ5IElucHV0czwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJJbnB1dE9wdGlvbigpfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj4pO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHJldHVybig8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDI+VGhlIG5ldHdvcmsgaXMgaW5pdGlhbGl6ZWQhIE5vdyBzcGVjaWZ5IHRoZSBkYXRhPC9oMj5cbiAgICAgICAgICAgICAgICA8L2Rpdj4pO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gKDxkaXYgLz4pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlcklucHV0T3B0aW9uKCkge1xuICAgICAgICBjb25zdCByZXR1cm5FbHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgbiA9IDA7IG4gPCB0aGlzLnN0YXRlLm9wdGlvbnMubGF5MDsgbisrKSB7XG4gICAgICAgICAgICByZXR1cm5FbHMucHVzaCg8ZGl2IGtleT17bn0gY2xhc3NOYW1lPVwib3B0aW9uLWNvbHVtblwiPlxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgZmxvYXRpbmdMYWJlbFRleHQ9e2BJbnB1dCAke259YH1cbiAgICAgICAgICAgICAgICAgICAgaGludFRleHQ9XCJOYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUub3B0aW9ucy5pbnB1dERlc2NyaXB0aW9uc1tuXX1cbiAgICAgICAgICAgICAgICAgICAgZmxvYXRpbmdMYWJlbEZpeGVkXG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUsIHZhbCk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZW1wSW5zID0gdGhpcy5zdGF0ZS5vcHRpb25zLmlucHV0RGVzY3JpcHRpb25zLnNsaWNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wSW5zW25dID0gdmFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5wdXREZXNjcmlwdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLm9wdGlvbnMsIHtpbnB1dERlc2NyaXB0aW9uczogdGVtcEluc30pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7b3B0aW9uczogaW5wdXREZXNjcmlwdGlvbnN9KTtcbiAgICAgICAgICAgICAgICAgICAgfX0vPlxuICAgICAgICAgICAgICAgIDxTZWxlY3RGaWVsZFxuICAgICAgICAgICAgICAgICAgICBmbG9hdGluZ0xhYmVsVGV4dD1cIkRhdGEgdHlwZVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm9wdGlvbnMuaW5wdXRUeXBlc1tuXX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlbXBUeXBlcyA9IHRoaXMuc3RhdGUub3B0aW9ucy5pbnB1dFR5cGVzLnNsaWNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wVHlwZXNbbl0gPSB2YWw7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dFR5cGVzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5vcHRpb25zLCB7aW5wdXRUeXBlczogdGVtcFR5cGVzfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtvcHRpb25zOiBpbnB1dFR5cGVzfSk7XG4gICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9ezB9IHByaW1hcnlUZXh0PVwiUXVhbnRpdGF0aXZlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXsxfSBwcmltYXJ5VGV4dD1cIlF1YWxpdGF0aXZlXCIgLz5cbiAgICAgICAgICAgICAgICA8L1NlbGVjdEZpZWxkPlxuICAgICAgICAgICAgICAgIDwvZGl2Pik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cIm5ldC1vcHRpb25zLWJveFwiPlxuICAgICAgICAgICAge3JldHVybkVsc31cbiAgICAgICAgICAgICA8RmxhdEJ1dHRvbiBsYWJlbD1cIkFkZCBhbm90aGVyIGlucHV0XCIgc2Vjb25kYXJ5IG9uVG91Y2hUYXA9eygpPT57XG4gICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTGF5ZXJzKCk7XG4gICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgPC9kaXY+KTtcbiAgICB9XG4gICAgY3JlYXRlUGVyY2VwdHJvbigpIHtcbiAgICAgICAgY29uc3QgaW5pdCA9IG5ldyBBcmNoaXRlY3QuUGVyY2VwdHJvbih0aGlzLnN0YXRlLm9wdGlvbnMubGF5MCwgLi4udGhpcy5zdGF0ZS5vcHRpb25zLmhpZGRlbnMsIHRoaXMuc3RhdGUub3B0aW9ucy5sYXlOKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Tk46IGluaXQudG9KU09OKCl9KTtcbiAgICB9XG4gICAgdXBkYXRlTGF5ZXJzKCkge1xuICAgICAgICBjb25zdCBuZXdIZWlnaHQgPSB0aGlzLnN0YXRlLm9wdGlvbnMubGF5MCArIDE7XG4gICAgICAgIGNvbnN0IG5ld0hpZGRlbiA9IHRoaXMuc3RhdGUub3B0aW9ucy5oaWRkZW5zLnNsaWNlKCkuZmlsbChuZXdIZWlnaHQgKyAxKTtcbiAgICAgICAgY29uc3QgbmV3SW5wdXREZXNjcmlwdGlvbnMgPSB0aGlzLnN0YXRlLm9wdGlvbnMuaW5wdXREZXNjcmlwdGlvbnMuY29uY2F0KFtcIlwiXSk7XG4gICAgICAgIGNvbnN0IG5ld0lucHV0VHlwZXMgPSB0aGlzLnN0YXRlLm9wdGlvbnMuaW5wdXRUeXBlcy5jb25jYXQoWzBdKTtcbiAgICAgICAgY29uc3QgdXBkYXRlZCA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUub3B0aW9ucywge2hpZGRlbnM6IG5ld0hpZGRlbiwgbGF5MDogbmV3SGVpZ2h0LCBpbnB1dERlc2NyaXB0aW9uczogbmV3SW5wdXREZXNjcmlwdGlvbnMsIGlucHV0VHlwZXM6IG5ld0lucHV0VHlwZXN9KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7b3B0aW9uczogdXBkYXRlZH0pO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGNsYXNzTmFtZT1cImNsb3NlLWJ1dHRvblwiIG9uVG91Y2hUYXA9eygpPT50aGlzLnByb3BzLmNsb3NlQ2FyZCgpfSA+PE5hdmlnYXRpb25DbG9zZSAvPjwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudCBjcmVhdGUtc2ltcGxlLW5ldFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDE+QnVpbGQgYSBuZXcgc2ltcGxlIG5ldXJhbCBuZXR3b3JrITwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDogJzEwMCUnLCBtYXhXaWR0aDogNzAwLCBtYXJnaW46ICdhdXRvJ319PlxuICAgICAgICAgICAgICAgICAgICAgIDxTdGVwcGVyIGFjdGl2ZVN0ZXA9e3RoaXMuc3RhdGUuc3RlcH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RlcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0ZXBMYWJlbD5EZXNpZ24gdGhlIE5ldHdvcms8L1N0ZXBMYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RlcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGVwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RlcExhYmVsPlRyYWluIHRoZSBuZXR3b3JrPC9TdGVwTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1N0ZXA+XG4gICAgICAgICAgICAgICAgICAgICAgPC9TdGVwcGVyPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5maW5pc2hlZCA/ICg8ZGl2PjxoMj5Zb3VyIG5ldHdvcmsgaGFzIGJlZW4gdHJhaW5lZCBhbmQgc2F2ZWQhPC9oMj48cD5PcGVuIHRoZSBUZXN0IEEgTmV0d29yayBjYXJkIHRvIHNlZSB5b3VyIG5ldHdvcmsgaW4gYWN0aW9uLjwvcD48L2Rpdj4pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJQYXJ0KCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDogMTIsIGZsb2F0OiAncmlnaHQnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxhdEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkJhY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5zdGF0ZS5zdGVwID09PSAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblRvdWNoVGFwPXt0aGlzLmhhbmRsZVByZXYuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5SaWdodDogMTJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWlzZWRCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3RoaXMuc3RhdGUuc3RlcCA9PT0gMSA/ICdTdGFydCB0cmFpbmluZyEnIDogJ05leHQnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVG91Y2hUYXA9e3RoaXMuaGFuZGxlTmV4dC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuQ3JlYXRlU2ltcGxlTmV0Q2FyZC5wcm9wVHlwZXMgPSB7XG4gICAgY2xvc2VDYXJkOiBQcm9wVHlwZXMuZnVuY1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlU2ltcGxlTmV0Q2FyZDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBmcm9udGVuZC9jb21wb25lbnRzL3BsYXkvcGxheWdyb3VuZC9DcmVhdGVTaW1wbGVOZXRDYXJkLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBWUE7QUFmQTtBQUZBO0FBbUJBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbEJBO0FBb0JBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUE1QkE7QUFEQTtBQWdDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQ0E7QUF2Q0E7QUF5Q0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFGQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFiQTtBQUhBO0FBQ0E7QUFDQTtBQUFBO0FBMkJBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSkE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQVBBO0FBRkE7QUFIQTtBQVRBO0FBRkE7QUFGQTtBQXNDQTs7OztBQS9MQTtBQUNBO0FBaU1BO0FBQ0E7QUFEQTtBQUNBO0FBR0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})