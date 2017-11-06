"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @ToDo Should split the reuse functionality into another component
 */
var GenericDialog = function (_Dialog) {
    _inherits(GenericDialog, _Dialog);

    function GenericDialog(props) {
        _classCallCheck(this, GenericDialog);

        var _this = _possibleConstructorReturn(this, (GenericDialog.__proto__ || Object.getPrototypeOf(GenericDialog)).call(this, props));

        _this.state = {};

        _this.handleSubmit = _this.handleSubmit.bind(_this);
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }

    _createClass(GenericDialog, [{
        key: "render",
        value: function render() {
            var reuse = null;
            if (this.props.reuse) {
                reuse = React.createElement(
                    "div",
                    { role: "tabpanel", className: "tab-pane", id: "reuse" },
                    React.createElement(
                        "p",
                        null,
                        "reuse"
                    )
                );
            }

            var inputFields = [];
            var props = this.props.schema.properties;

            inputFields.push(React.createElement(
                "p",
                { key: "label" },
                "Create a new ",
                this.props.schema.title
            ));

            for (var x in props) {
                console.debug("Building Input Type for: " + x);
                console.debug(eval("props." + x + ".type"));

                if (eval("props." + x + ".type").localeCompare("string") == 0) {
                    inputFields.push(React.createElement(
                        "div",
                        { key: x },
                        React.createElement(
                            "label",
                            { htmlFor: "input" + x },
                            x
                        ),
                        React.createElement("input", { type: "text",
                            onChange: this.handleChange,
                            className: "form-control",
                            placeholder: "input " + x,
                            id: "input" + x,
                            "data-title": x })
                    ));
                } else {
                    inputFields.push(React.createElement(
                        "div",
                        { key: x },
                        React.createElement(
                            "label",
                            { htmlFor: "input" + x },
                            x
                        ),
                        React.createElement(GenericObjectLister, null)
                    ));
                }
            }

            var dialog = React.createElement(
                "div",
                { id: this.props.id },
                React.createElement(
                    "p",
                    null,
                    this.props.body
                ),
                React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "ul",
                        { className: "nav nav-tabs", role: "tablist" },
                        React.createElement(
                            "li",
                            { role: "presentation", className: "active" },
                            React.createElement(
                                "a",
                                { href: "#new", "aria-controls": "home", role: "tab", "data-toggle": "tab" },
                                "New"
                            )
                        ),
                        reuse != null && React.createElement(
                            "li",
                            { role: "presentation" },
                            React.createElement(
                                "a",
                                { href: "#reuse", "aria-controls": "profile", role: "tab", "data-toggle": "tab" },
                                "Existing"
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "tab-content" },
                        React.createElement(
                            "div",
                            { role: "tabpanel", className: "tab-pane active", id: "new" },
                            React.createElement(
                                "form",
                                { action: "#", onSubmit: this.handleSubmit },
                                React.createElement(
                                    "div",
                                    { className: "form-group" },
                                    inputFields
                                ),
                                React.createElement(
                                    "button",
                                    { type: "submit", className: "btn btn-primary" },
                                    "Save"
                                )
                            ),
                            React.createElement(
                                "pre",
                                null,
                                JSON.stringify(this.props.schema)
                            )
                        ),
                        reuse
                    )
                )
            );

            return dialog;
        }

        /**
         * Updates React State, based on the data attribute set on the input box.
         * @param event
         */

    }, {
        key: "handleChange",
        value: function handleChange(event) {
            this.setState(_defineProperty({}, $("#" + event.target.id).data("title"), event.target.value));
        }

        /**
         * Saves the object to the database
         * @param event
         * @ToDo validate state against the JSON Schema object and respond accordingly
         */

    }, {
        key: "handleSubmit",
        value: function handleSubmit(event) {
            event.preventDefault();

            console.debug("Saving " + this.props.schema.title + " with " + JSON.stringify(this.state));

            var db = new PouchDB(this.props.schema.title);

            db.post(this.state, function (err, doc) {
                if (err) {
                    console.error(err);
                } else {
                    $("#dialog" + this.props.schema._id).dialog("close");
                }

                this.setState();

                //If a next action is specified then execute, passing the schema object forward
                if (this.props.next) this.props.next(this.props.schema);
            }.bind(this));
        }
    }]);

    return GenericDialog;
}(Dialog);
//# sourceMappingURL=GenericDialog.js.map