"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewSchemaForm = function (_React$Component) {
    _inherits(NewSchemaForm, _React$Component);

    function NewSchemaForm(props) {
        _classCallCheck(this, NewSchemaForm);

        var _this = _possibleConstructorReturn(this, (NewSchemaForm.__proto__ || Object.getPrototypeOf(NewSchemaForm)).call(this, props));

        _this.handleSubmit = _this.handleSubmit.bind(_this);
        _this.handleChange = _this.handleChange.bind(_this);

        _this.state = {
            schema: ""
        };
        return _this;
    }

    _createClass(NewSchemaForm, [{
        key: "render",
        value: function render() {
            var form = React.createElement(
                "form",
                { action: "#", onSubmit: this.handleSubmit },
                React.createElement(
                    "div",
                    { className: "form-group" },
                    React.createElement(
                        "label",
                        { htmlFor: "schema" },
                        "Schema:"
                    ),
                    React.createElement("textarea", { className: "form-control", rows: "10", id: "schema", value: this.state.schema, onChange: this.handleChange, placeholder: "Enter JSON Schema" }),
                    React.createElement(
                        "button",
                        { type: "submit", className: "btn btn-primary" },
                        "Save changes"
                    )
                )
            );

            return form;
        }
    }, {
        key: "handleChange",
        value: function handleChange(change) {
            this.setState({
                schema: change.target.value
            });
        }
    }, {
        key: "handleSubmit",
        value: function handleSubmit(event) {
            //let db = new PouchDB("schema");

            var obj = JSON.parse(this.state.schema);

            var db = new PouchDB("schemas");
            db.post(obj, function (err, doc) {
                if (err) console.error(err);
            }.bind(this));

            this.setState({
                schema: ""
            });

            event.preventDefault();
        }
    }]);

    return NewSchemaForm;
}(React.Component);
//# sourceMappingURL=NewSchemaForm.js.map