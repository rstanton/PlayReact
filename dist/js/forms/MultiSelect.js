"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Select = function (_React$Component) {
    _inherits(Select, _React$Component);

    function Select(props) {
        _classCallCheck(this, Select);

        var _this = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));

        _this.componentDidMount = _this.componentDidMount.bind(_this);
        _this.buildList = _this.buildList.bind(_this);
        return _this;
    }

    _createClass(Select, [{
        key: "componentDidMount",
        value: function componentDidMount() {}
    }, {
        key: "render",
        value: function render() {
            if (this.props.multi) {
                return React.createElement(
                    "select",
                    { id: "select" + this.props.field, selectedvalue: this.props.value, "data-field": this.props.field, onChange: this.props.handleSelect, className: "list-group", multiple: true },
                    this.buildList()
                );
            } else {
                return React.createElement(
                    "select",
                    { id: "select" + this.props.field, value: this.props.value, "data-field": this.props.field, onChange: this.props.handleSelect, className: "list-group" },
                    this.buildList()
                );
            }
        }
    }, {
        key: "buildList",
        value: function buildList() {
            console.debug("Building MultiSelect List: " + JSON.stringify(this.props.list));

            var list = this.props.list.map(function (schema) {
                console.log(JSON.stringify(schema));

                //return <button key={schema.title} type="button" className="list-group-item" data-schema={schema} onClick={this.props.onValueSelect}>{schema.title}</button>
                return React.createElement(
                    "option",
                    { className: "list-group-item", key: schema.title, value: schema.title, "data-id": schema.id, "data-field": this.props.field, "data-schema": schema },
                    schema.title
                );
            }.bind(this));

            return list;
        }
    }]);

    return Select;
}(React.Component);
//# sourceMappingURL=MultiSelect.js.map