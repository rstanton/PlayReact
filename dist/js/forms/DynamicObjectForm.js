"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Builds an input for for a given schema (this.props.schema)
 */
var DynamicObjectForm = function (_React$Component) {
    _inherits(DynamicObjectForm, _React$Component);

    function DynamicObjectForm(props) {
        _classCallCheck(this, DynamicObjectForm);

        var _this = _possibleConstructorReturn(this, (DynamicObjectForm.__proto__ || Object.getPrototypeOf(DynamicObjectForm)).call(this, props));

        _this.buildInputForm = _this.buildInputForm.bind(_this);
        _this.handleSelect = _this.handleSelect.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        _this.handleChange = _this.handleChange.bind(_this);
        _this.initiateState = _this.initiateState.bind(_this);

        _this.state = {};
        _this.list = [];

        return _this;
    }

    _createClass(DynamicObjectForm, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.initiateState();
        }
    }, {
        key: "render",
        value: function render() {
            var fields = this.buildInputForm();
            var form = React.createElement(
                "form",
                { action: "#", onSubmit: this.handleSubmit },
                React.createElement(
                    "div",
                    { className: "form-group" },
                    fields
                ),
                React.createElement(
                    "button",
                    { type: "submit", className: "btn btn-primary" },
                    "Save"
                )
            );

            return form;
        }
    }, {
        key: "initiateState",
        value: function initiateState() {
            var props = this.props.schema.properties;

            for (var field in props) {
                this.setState(_defineProperty({}, field, []));
            }
        }
    }, {
        key: "buildInputForm",
        value: function buildInputForm() {
            console.log("Building Input Form for " + JSON.stringify(this.props.schema));

            var inputFields = [];
            var props = this.props.schema.properties;

            //@Todo this needs to support all JSON Schema type fields

            for (var field in props) {
                console.debug("Building Form element for " + field + " for type: " + JSON.stringify(props[field]));

                var obj = props[field];

                if (obj.hide) continue;

                //If the schema has a display name set use that, otherwise stick with the props.field
                var displayName = field;
                if (obj.displayName) {
                    displayName = obj.displayName;
                }

                if (obj.type.localeCompare("string") == 0) {
                    inputFields.push(React.createElement(
                        "div",
                        { key: field, className: "form-group" },
                        React.createElement(
                            "label",
                            { htmlFor: "input" + field },
                            displayName
                        ),
                        React.createElement("input", { type: "text", value: this.state[field], onChange: this.handleChange, className: "form-control", placeholder: "input " + field, id: field, "data-field": field })
                    ));
                } else if (obj.type.localeCompare("object") == 0) {
                    //Handle refs by doing a lookup.
                    inputFields.push(React.createElement(
                        "div",
                        { key: field, className: "form-group" },
                        React.createElement(
                            "label",
                            { htmlFor: "input" + field },
                            displayName
                        ),
                        React.createElement(Select, { value: this.state[field], multi: false, handleSelect: this.handleSelect, field: field, target: obj.$ref, list: this.props.allSchemas })
                    ));
                } else if (obj.type.localeCompare("array") == 0) {
                    inputFields.push(React.createElement(
                        "div",
                        { key: field, className: "form-group" },
                        React.createElement(
                            "label",
                            { htmlFor: "input" + field },
                            displayName
                        ),
                        React.createElement(Select, { value: this.state[field], multi: true, handleSelect: this.handleSelect, field: field, target: obj.$ref, list: this.props.allSchemas })
                    ));
                }
            }

            return inputFields;
        }

        //@Todo externalise to db object

    }, {
        key: "handleSubmit",
        value: function handleSubmit(event) {
            var db = new PouchDB(OBJECT_DB);

            this.state.type = this.props.schema.id;

            console.log("Writing new Object: " + JSON.stringify(this.state));

            db.post(this.state, function (err, res) {
                if (err) console.error(err);else {
                    $("#" + this.props.dialogId).dialog("close");

                    this.initiateState();

                    //Callback
                    this.props.next();
                }
            }.bind(this));
        }
    }, {
        key: "handleChange",
        value: function handleChange(event) {
            var field = [$("#" + event.target.id).data("field")];

            console.debug("Value change in " + field + ", updating state");

            //let obj = this.state.object;
            //obj[field] = event.target.value;

            this.setState(_defineProperty({}, field, event.target.value));

            console.log("New State: " + JSON.stringify(this.state));
        }
    }, {
        key: "handleSelect",
        value: function handleSelect(event) {
            var field = [$("#" + event.target.id).data("field")];
            console.debug("Value change in " + field + ", updating state");

            var options = event.target.selectedOptions;

            var list = [];
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = options[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var x = _step.value;

                    var title = x.attributes["data-title"].value;
                    var type = x.attributes["data-type"].value;

                    list.push(type);

                    var obj = {};
                    obj.title = title;
                    obj.type = type;

                    this.list.push(obj);
                }

                //let obj = this.state.object;
                //obj[field] = list;
                //console.log("Setting new Object State: "+JSON.stringify(obj));
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            this.setState(_defineProperty({}, field, list));

            console.log("New State: " + JSON.stringify(this.state));
            console.log("New List: " + JSON.stringify(this.list));
        }
    }]);

    return DynamicObjectForm;
}(React.Component);
//# sourceMappingURL=DynamicObjectForm.js.map