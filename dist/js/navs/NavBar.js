"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavBar = function (_React$Component) {
    _inherits(NavBar, _React$Component);

    function NavBar(props) {
        _classCallCheck(this, NavBar);

        var _this = _possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).call(this, props));

        _this.showDialog = _this.showDialog.bind(_this);
        return _this;
    }

    _createClass(NavBar, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            return React.createElement(
                "nav",
                { className: "navbar navbar-default navbar-fixed-top" },
                React.createElement(
                    "div",
                    { className: "container-fluid" },
                    React.createElement(
                        "div",
                        { className: "navbar-header" },
                        React.createElement(
                            "a",
                            { className: "navbar-brand", href: "#", onClick: function onClick() {
                                    return _this2.showDialog();
                                } },
                            React.createElement("img", { width: "15px", src: "/bower_components/octicons/lib/svg/database.svg" })
                        )
                    ),
                    React.createElement(
                        "p",
                        { className: "navbar-text navbar-right" },
                        "Signed in as ",
                        React.createElement(
                            "b",
                            null,
                            "Ross"
                        )
                    )
                )
            );
        }
    }]);

    return NavBar;
}(React.Component);
//# sourceMappingURL=NavBar.js.map