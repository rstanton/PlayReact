"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReuseApplicationForm = function (_React$Component) {
    _inherits(ReuseApplicationForm, _React$Component);

    function ReuseApplicationForm(props) {
        _classCallCheck(this, ReuseApplicationForm);

        var _this = _possibleConstructorReturn(this, (ReuseApplicationForm.__proto__ || Object.getPrototypeOf(ReuseApplicationForm)).call(this, props));

        _this.componentDidMount = _this.componentDidMount.bind(_this);
        return _this;
    }

    _createClass(ReuseApplicationForm, [{
        key: "componentDidMount",
        value: function componentDidMount() {}
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "form",
                { action: "#" },
                React.createElement("input", { type: "text" })
            );
        }
    }]);

    return ReuseApplicationForm;
}(React.Component);
//# sourceMappingURL=ReuseAppForm.js.map