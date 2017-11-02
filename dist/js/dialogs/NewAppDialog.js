"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @ToDo This needs to conditionally show the 're-use' tab as it's not valid for a new application scenario
 */
var NewApplicationDialog = function (_Dialog) {
    _inherits(NewApplicationDialog, _Dialog);

    function NewApplicationDialog(props) {
        _classCallCheck(this, NewApplicationDialog);

        return _possibleConstructorReturn(this, (NewApplicationDialog.__proto__ || Object.getPrototypeOf(NewApplicationDialog)).call(this, props));
    }

    //@Todo this is kind of hacky and needs re-writing.


    _createClass(NewApplicationDialog, [{
        key: "render",
        value: function render() {
            var reuse = null;
            if (this.props.reuse) {
                reuse = React.createElement(
                    "div",
                    { role: "tabpanel", className: "tab-pane", id: "reuse" },
                    React.createElement(ReuseApplicationForm, { next: this.next.bind(this) })
                );
            }

            return React.createElement(
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
                            React.createElement(ApplicationForm, { next: this.next.bind(this) })
                        ),
                        reuse
                    )
                )
            );
        }

        //@ToDo this is the most hacky part!

    }, {
        key: "next",
        value: function next(obj) {
            $("#" + this.props.id).dialog("close");

            if (this.props.next != null) this.props.next(obj);
        }
    }]);

    return NewApplicationDialog;
}(Dialog);
//# sourceMappingURL=NewAppDialog.js.map