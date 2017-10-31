"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IntDialog = function (_Dialog) {
    _inherits(IntDialog, _Dialog);

    function IntDialog(props) {
        _classCallCheck(this, IntDialog);

        var _this = _possibleConstructorReturn(this, (IntDialog.__proto__ || Object.getPrototypeOf(IntDialog)).call(this, props));

        _this.componentDidMount = _this.componentDidMount.bind(_this);
        return _this;
    }

    _createClass(IntDialog, [{
        key: "render",
        value: function render() {
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
                                { href: "#home", "aria-controls": "home", role: "tab", "data-toggle": "tab" },
                                "New"
                            )
                        ),
                        React.createElement(
                            "li",
                            { role: "presentation" },
                            React.createElement(
                                "a",
                                { href: "#profile", "aria-controls": "profile", role: "tab", "data-toggle": "tab" },
                                "Existing"
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "tab-content" },
                        React.createElement(
                            "div",
                            { role: "tabpanel", className: "tab-pane active", id: "home" },
                            "New Int"
                        ),
                        React.createElement(
                            "div",
                            { role: "tabpanel", className: "tab-pane", id: "profile" },
                            "..."
                        )
                    )
                )
            );
        }
    }]);

    return IntDialog;
}(Dialog);
//# sourceMappingURL=IntDialog.js.map