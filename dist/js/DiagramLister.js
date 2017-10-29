"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//this class will iterate through all the diagrams in the database...
var DiagramLister = function (_React$Component) {
    _inherits(DiagramLister, _React$Component);

    function DiagramLister(props) {
        _classCallCheck(this, DiagramLister);

        var _this = _possibleConstructorReturn(this, (DiagramLister.__proto__ || Object.getPrototypeOf(DiagramLister)).call(this, props));

        _this.state = { list: "" };
        return _this;
    }

    _createClass(DiagramLister, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            diagramDB.query("diagrams/by_name", function (err, res) {
                var list = res.rows.map(function (key) {
                    return React.createElement(
                        "li",
                        null,
                        key.key
                    );
                });

                this.setState({ list: list });
            }.bind(this));
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    { type: "button", className: "btn btn-default", "data-toggle": "modal", "data-target": "#AppModal" },
                    "Create Application"
                ),
                React.createElement(
                    "ul",
                    null,
                    this.state.list
                )
            );
        }
    }]);

    return DiagramLister;
}(React.Component);
//# sourceMappingURL=DiagramLister.js.map