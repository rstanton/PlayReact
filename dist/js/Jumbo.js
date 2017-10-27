"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Jumbo = function (_React$Component) {
    _inherits(Jumbo, _React$Component);

    function Jumbo() {
        _classCallCheck(this, Jumbo);

        return _possibleConstructorReturn(this, (Jumbo.__proto__ || Object.getPrototypeOf(Jumbo)).apply(this, arguments));
    }

    _createClass(Jumbo, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "jumbotron" },
                React.createElement(
                    "h1",
                    null,
                    "Hello, ",
                    this.props.name,
                    "!"
                ),
                React.createElement(
                    "p",
                    null,
                    this.props.message
                ),
                React.createElement(
                    "p",
                    null,
                    React.createElement(
                        "a",
                        { className: "btn btn-primary btn-lg", href: "#", role: "button" },
                        this.props.label
                    )
                )
            );
        }
    }]);

    return Jumbo;
}(React.Component);
//# sourceMappingURL=Jumbo.js.map