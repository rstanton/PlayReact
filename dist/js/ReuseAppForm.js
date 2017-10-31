"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReuseApplicationForm = function (_React$Component) {
    _inherits(ReuseApplicationForm, _React$Component);

    function ReuseApplicationForm() {
        _classCallCheck(this, ReuseApplicationForm);

        return _possibleConstructorReturn(this, (ReuseApplicationForm.__proto__ || Object.getPrototypeOf(ReuseApplicationForm)).apply(this, arguments));
    }

    _createClass(ReuseApplicationForm, [{
        key: "super",
        value: function _super(props) {}
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "form",
                { action: "#", onSubmit: this.handleSubmit },
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
            );
        }
    }, {
        key: "handleSubmit",
        value: function handleSubmit(event) {
            var appDB = new PouchDB("applications");
            var app = {
                "appName": this.state.appName,
                "appVendor": this.state.appVendor
            };

            this.setState({
                appVendor: "",
                appName: ""
            });

            event.preventDefault();

            //Next is the function passed in from the calling application! Love JS!
            //@ToDo Need to pass back the ID as well
            this.props.next(app);

            //@ToDo need to close PouchDB connection
        }
    }]);

    return ReuseApplicationForm;
}(React.Component);
//# sourceMappingURL=ReuseAppForm.js.map