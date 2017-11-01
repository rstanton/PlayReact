"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewDiagramForm = function (_React$Component) {
    _inherits(NewDiagramForm, _React$Component);

    function NewDiagramForm(props) {
        _classCallCheck(this, NewDiagramForm);

        var _this = _possibleConstructorReturn(this, (NewDiagramForm.__proto__ || Object.getPrototypeOf(NewDiagramForm)).call(this, props));

        _this.state = {
            diagramName: "",
            author: ""
        };

        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }

    _createClass(NewDiagramForm, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "form",
                { action: "#", onSubmit: this.handleSubmit },
                React.createElement(
                    "div",
                    { className: "modal-body" },
                    React.createElement(
                        "div",
                        { className: "form-group" },
                        React.createElement(
                            "label",
                            { htmlFor: "appName" },
                            "Diagram Name"
                        ),
                        React.createElement("input", { type: "text", className: "form-control", id: "diagramName", value: this.state.diagramName, placeholder: "Application Name", onChange: this.handleChange }),
                        React.createElement(
                            "label",
                            { htmlFor: "appName" },
                            "Author"
                        ),
                        React.createElement("input", { type: "text", className: "form-control", id: "author", value: this.state.author, placeholder: "Application Name", onChange: this.handleChange })
                    )
                ),
                React.createElement(
                    "div",
                    { className: "modal-footer" },
                    React.createElement(
                        "button",
                        { type: "button", className: "btn btn-default", "data-dismiss": "modal" },
                        "Cancel"
                    ),
                    React.createElement(
                        "button",
                        { type: "submit", className: "btn btn-primary" },
                        "Save changes"
                    )
                )
            );
        }
    }, {
        key: "handleChange",
        value: function handleChange(event) {
            var state = _defineProperty({}, event.target.id, event.target.value);

            this.setState(state);
        }
    }, {
        key: "handleSubmit",
        value: function handleSubmit(event) {
            diagramDB.post(this.state, function (err, doc) {
                if (err) console.log(err);
            });

            this.setState({
                diagramName: ""
            });

            event.preventDefault();

            this.props.next();
        }
    }]);

    return NewDiagramForm;
}(React.Component);
//# sourceMappingURL=NewDiagramForm.js.map