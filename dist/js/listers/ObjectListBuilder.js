"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ObjectListBuilder = function (_React$Component) {
    _inherits(ObjectListBuilder, _React$Component);

    function ObjectListBuilder(props) {
        _classCallCheck(this, ObjectListBuilder);

        var _this = _possibleConstructorReturn(this, (ObjectListBuilder.__proto__ || Object.getPrototypeOf(ObjectListBuilder)).call(this, props));

        _this.componentDidMount = _this.componentDidMount.bind(_this);
        return _this;
    }

    _createClass(ObjectListBuilder, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            $("#" + this.props.id).selectable({
                selected: function selected(ev, ui) {
                    console.log("Selected");
                }
            });
        }
    }, {
        key: "render",
        value: function render() {
            console.log("Runing Builder");
            var style = {
                width: "100%"
            };

            return React.createElement(
                "div",
                { style: style },
                React.createElement(
                    "ul",
                    { className: "list-group", multiple: true, id: this.props.id },
                    React.createElement(
                        "option",
                        { className: "list-group-item", value: "one", key: "one" },
                        "One"
                    ),
                    React.createElement(
                        "option",
                        { className: "list-group-item", value: "two", key: "two" },
                        "trow"
                    )
                )
            );
        }
    }]);

    return ObjectListBuilder;
}(React.Component);
//# sourceMappingURL=ObjectListBuilder.js.map