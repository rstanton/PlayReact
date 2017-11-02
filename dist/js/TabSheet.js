"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabSheet = function (_React$Component) {
    _inherits(TabSheet, _React$Component);

    function TabSheet() {
        _classCallCheck(this, TabSheet);

        return _possibleConstructorReturn(this, (TabSheet.__proto__ || Object.getPrototypeOf(TabSheet)).apply(this, arguments));
    }

    _createClass(TabSheet, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { id: "tabs" },
                React.createElement(
                    "ul",
                    { className: "nav nav-tabs", role: "tablist" },
                    React.createElement(
                        "li",
                        { role: "presentation" },
                        React.createElement(
                            "a",
                            { href: "#diagrams", "aria-controls": "diagrams", role: "tab", "data-toggle": "tab" },
                            "Diagrams"
                        )
                    ),
                    React.createElement(
                        "li",
                        { role: "presentation" },
                        React.createElement(
                            "a",
                            { href: "#applications", "aria-controls": "applications", role: "tab", "data-toggle": "tab" },
                            "Applications"
                        )
                    ),
                    React.createElement(
                        "li",
                        { role: "presentation" },
                        React.createElement(
                            "a",
                            { href: "#interfaces", "aria-controls": "interfaces", role: "tab", "data-toggle": "tab" },
                            "Interfaces"
                        )
                    ),
                    React.createElement(
                        "li",
                        { role: "presentation" },
                        React.createElement(
                            "a",
                            { href: "#schemas", "aria-controls": "interfaces", role: "tab", "data-toggle": "tab" },
                            "Objects"
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "tab-content" },
                    React.createElement(
                        "div",
                        { role: "tabpanel", className: "tab-pane active", id: "diagrams" },
                        React.createElement(DiagramLister, null)
                    ),
                    React.createElement(
                        "div",
                        { role: "tabpanel", className: "tab-pane", id: "applications" },
                        React.createElement(ApplicationLister, null)
                    ),
                    React.createElement(
                        "div",
                        { role: "tabpanel", className: "tab-pane", id: "interfaces" },
                        React.createElement(InterfaceLister, null)
                    ),
                    React.createElement(
                        "div",
                        { role: "tabpanel", className: "tab-pane", id: "schemas" },
                        React.createElement(SchemaLister, null),
                        React.createElement(NewSchemaForm, null)
                    )
                )
            );
        }
    }]);

    return TabSheet;
}(React.Component);
//# sourceMappingURL=TabSheet.js.map