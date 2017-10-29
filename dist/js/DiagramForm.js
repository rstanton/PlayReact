"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DiagramForm = function (_React$Component) {
    _inherits(DiagramForm, _React$Component);

    function DiagramForm(props) {
        _classCallCheck(this, DiagramForm);

        var _this = _possibleConstructorReturn(this, (DiagramForm.__proto__ || Object.getPrototypeOf(DiagramForm)).call(this, props));

        _this.state = {
            diagramName: ""
        };

        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }

    _createClass(DiagramForm, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "modal fade", tabIndex: "-1", id: this.props.id, role: "dialog" },
                React.createElement(
                    "div",
                    { className: "modal-dialog", role: "document" },
                    React.createElement(
                        "div",
                        { className: "modal-content" },
                        React.createElement(
                            "div",
                            { className: "modal-header" },
                            React.createElement(
                                "button",
                                { type: "button", className: "close", "data-dismiss": "modal", "aria-label": "Close" },
                                React.createElement(
                                    "span",
                                    { "aria-hidden": "true" },
                                    "\xD7"
                                )
                            ),
                            React.createElement(
                                "h4",
                                { className: "modal-title" },
                                this.props.title
                            )
                        ),
                        React.createElement(
                            "form",
                            { action: "#", onSubmit: this.handleSubmit },
                            React.createElement(
                                "div",
                                { className: "modal-body" },
                                React.createElement(
                                    "div",
                                    { className: "form-group" },
                                    React.createElement(
                                        "label",
                                        { htmlFor: "appName" },
                                        "Diagram Name"
                                    ),
                                    React.createElement("input", { type: "text", className: "form-control", id: "diagramName", value: this.state.diagramName, placeholder: "Application Name", onChange: this.handleChange })
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "modal-footer" },
                                React.createElement(
                                    "button",
                                    { type: "button", className: "btn btn-default", "data-dismiss": "modal" },
                                    "Cancel"
                                ),
                                React.createElement(
                                    "button",
                                    { type: "submit", className: "btn btn-primary" },
                                    "Save changes"
                                )
                            )
                        )
                    )
                )
            );
        }
    }, {
        key: "handleChange",
        value: function handleChange(event) {
            var state = _defineProperty({}, event.target.id, event.target.value);

            this.setState(state);
        }
    }, {
        key: "handleSubmit",
        value: function handleSubmit(event) {
            var app = {
                "diagramName": this.state.diagramName
            };

            console.log("Saving " + JSON.stringify(app));
            diagramDB.post(app, function (err, doc) {
                if (err) console.log(err);
            });

            //close the modal
            $("#" + this.props.id).modal('toggle');

            this.setState({
                diagramName: ""
            });

            event.preventDefault();

            this.props.view();
        }
    }]);

    return DiagramForm;
}(React.Component);
//# sourceMappingURL=DiagramForm.js.map