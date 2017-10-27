"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Nav = function (_React$Component) {
    _inherits(Nav, _React$Component);

    function Nav() {
        _classCallCheck(this, Nav);

        return _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).apply(this, arguments));
    }

    _createClass(Nav, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "nav",
                { className: "navbar navbar-default" },
                React.createElement(
                    "div",
                    { className: "container-fluid" },
                    React.createElement(
                        "ul",
                        { className: "nav navbar-nav" },
                        React.createElement(
                            "li",
                            { className: "active" },
                            React.createElement(
                                "a",
                                { href: "#" },
                                "Link"
                            )
                        ),
                        React.createElement(
                            "li",
                            null,
                            React.createElement(
                                "a",
                                { href: "#" },
                                "Link"
                            )
                        ),
                        React.createElement(
                            "li",
                            { className: "dropdown" },
                            React.createElement(
                                "a",
                                { href: "#", className: "dropdown-toggle", "data-toggle": "dropdown", role: "button", "aria-haspopup": "true", "aria-expanded": "false" },
                                "Dropdown ",
                                React.createElement("span", { className: "caret" })
                            ),
                            React.createElement(
                                "ul",
                                { className: "dropdown-menu" },
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "#" },
                                        "Action"
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "#" },
                                        "Another action"
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "#" },
                                        "Something else here"
                                    )
                                ),
                                React.createElement("li", { role: "separator", className: "divider" }),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "#" },
                                        "Separated link"
                                    )
                                ),
                                React.createElement("li", { role: "separator", className: "divider" }),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "#" },
                                        "One more separated link"
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Nav;
}(React.Component);
//# sourceMappingURL=Nav.js.map