"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The clever bit:
 * @ToDo Calling classes need to pass a function that is the next thing to be done...
 */
var ApplicationForm = function (_React$Component) {
    _inherits(ApplicationForm, _React$Component);

    function ApplicationForm(props) {
        _classCallCheck(this, ApplicationForm);

        var _this = _possibleConstructorReturn(this, (ApplicationForm.__proto__ || Object.getPrototypeOf(ApplicationForm)).call(this, props));

        _this.state = {
            appName: "",
            appVendor: ""
        };

        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }

    _createClass(ApplicationForm, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "form",
                { action: "#", onSubmit: this.handleSubmit },
                React.createElement(
                    "div",
                    { className: "form-group" },
                    React.createElement(
                        "label",
                        { htmlFor: "appName" },
                        "Application Name"
                    ),
                    React.createElement("input", { type: "text", className: "form-control", id: "appName", value: this.state.appName, placeholder: "Application Name", onChange: this.handleChange })
                ),
                React.createElement(
                    "div",
                    { className: "form-group" },
                    React.createElement(
                        "label",
                        { htmlFor: "appVendor" },
                        "Vendor"
                    ),
                    React.createElement("input", { type: "text", className: "form-control", id: "appVendor", value: this.state.appVendor, placeholder: "Vendor Name", onChange: this.handleChange })
                ),
                React.createElement(
                    "button",
                    { type: "submit", className: "btn btn-primary" },
                    "Save changes"
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
            var app = {
                "appName": this.state.appName,
                "appVendor": this.state.appVendor
            };

            console.log("Saving " + JSON.stringify(app));

            appDB.post(app, function (err, doc) {
                if (err) console.log(err);else {
                    console.log(JSON.stringify(doc));

                    app.id = doc.id;
                    app.rev = doc.rev;

                    //Next is the function passed in from the calling application! Love JS!
                    //@ToDo Need to pass back the ID as well
                }

                this.props.next(app);
            }.bind(this));

            this.setState({
                appVendor: "",
                appName: ""
            });

            event.preventDefault();

            //@ToDo need to close PouchDB connection
        }
    }]);

    return ApplicationForm;
}(React.Component);
//# sourceMappingURL=NewApplicationForm.js.map