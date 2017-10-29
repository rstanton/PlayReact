"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ApplicationLister = function (_React$Component) {
    _inherits(ApplicationLister, _React$Component);

    function ApplicationLister(props) {
        _classCallCheck(this, ApplicationLister);

        return _possibleConstructorReturn(this, (ApplicationLister.__proto__ || Object.getPrototypeOf(ApplicationLister)).call(this, props));
    }

    _createClass(ApplicationLister, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "table",
                    { className: "table table-striped" },
                    React.createElement(
                        "thead",
                        null,
                        React.createElement(
                            "tr",
                            null,
                            React.createElement(
                                "th",
                                null,
                                "#"
                            ),
                            React.createElement(
                                "th",
                                null,
                                "Name"
                            ),
                            React.createElement(
                                "th",
                                null,
                                "Vendor"
                            ),
                            React.createElement(
                                "th",
                                null,
                                "Action"
                            )
                        )
                    ),
                    React.createElement(
                        "tbody",
                        null,
                        React.createElement(
                            "tr",
                            null,
                            React.createElement(
                                "td",
                                null,
                                "1"
                            ),
                            React.createElement(
                                "td",
                                null,
                                "Test"
                            ),
                            React.createElement(
                                "td",
                                null,
                                "Test2"
                            ),
                            React.createElement("td", null)
                        ),
                        React.createElement(
                            "tr",
                            null,
                            React.createElement(
                                "td",
                                null,
                                "2"
                            ),
                            React.createElement(
                                "td",
                                null,
                                "Ping"
                            ),
                            React.createElement(
                                "td",
                                null,
                                "Ident"
                            ),
                            React.createElement("td", null)
                        )
                    )
                )
            );
        }
    }]);

    return ApplicationLister;
}(React.Component);
//# sourceMappingURL=ApplicationLister.js.map