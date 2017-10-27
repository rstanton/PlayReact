"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ApplicationForm = function (_React$Component) {
    _inherits(ApplicationForm, _React$Component);

    function ApplicationForm() {
        _classCallCheck(this, ApplicationForm);

        return _possibleConstructorReturn(this, (ApplicationForm.__proto__ || Object.getPrototypeOf(ApplicationForm)).apply(this, arguments));
    }

    _createClass(ApplicationForm, [{
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
                            "div",
                            { className: "modal-body" },
                            React.createElement(
                                "form",
                                null,
                                React.createElement(
                                    "div",
                                    { className: "form-group" },
                                    React.createElement(
                                        "label",
                                        { htmlFor: "exampleInputEmail1" },
                                        "Email address"
                                    ),
                                    React.createElement("input", { type: "email", className: "form-control", id: "exampleInputEmail1", placeholder: "Email" })
                                ),
                                React.createElement(
                                    "div",
                                    { className: "form-group" },
                                    React.createElement(
                                        "label",
                                        { htmlFor: "exampleOther" },
                                        "Name"
                                    ),
                                    React.createElement("input", { type: "text", className: "form-control", id: "exampleOther", placeholder: "Name" })
                                )
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "modal-footer" },
                            React.createElement(
                                "button",
                                { type: "button", className: "btn btn-default", "data-dismiss": "modal" },
                                "Close"
                            ),
                            React.createElement(
                                "button",
                                { type: "button", className: "btn btn-primary" },
                                "Save changes"
                            )
                        )
                    )
                )
            );
        }
    }]);

    return ApplicationForm;
}(React.Component);
//# sourceMappingURL=ApplicationForm.js.map