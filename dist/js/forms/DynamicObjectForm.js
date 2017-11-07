"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DynamicObjectForm = function (_React$Component) {
    _inherits(DynamicObjectForm, _React$Component);

    function DynamicObjectForm(props) {
        _classCallCheck(this, DynamicObjectForm);

        var _this = _possibleConstructorReturn(this, (DynamicObjectForm.__proto__ || Object.getPrototypeOf(DynamicObjectForm)).call(this, props));

        _this.buildInputForm = _this.buildInputForm.bind(_this);

        _this.state = {
            inputFields: []
        };
        return _this;
    }

    _createClass(DynamicObjectForm, [{
        key: "render",
        value: function render() {
            var form = this.buildInputForm();

            return form;
        }
    }, {
        key: "buildInputForm",
        value: function buildInputForm() {
            console.log("Building Input Form for " + JSON.stringify(this.props.schema));

            var inputFields = [];
            var props = this.props.schema.properties;

            //inputFields.push(<p key={"label"}>Create a new {this.props.schema.title}</p>)

            //@Todo this needs to support all JSON Schema type fields
            for (var x in props) {
                inputFields.push(React.createElement(
                    "div",
                    { key: x },
                    React.createElement(
                        "label",
                        { htmlFor: "input" + x },
                        x
                    ),
                    React.createElement("input", { type: "text", onChange: this.props.onChange, className: "form-control", placeholder: "input " + x, id: "input" + x, "data-title": x })
                ));
            }

            return inputFields;
        }
    }]);

    return DynamicObjectForm;
}(React.Component);
//# sourceMappingURL=DynamicObjectForm.js.map