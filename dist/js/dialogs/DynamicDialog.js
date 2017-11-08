"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 *
 */
var DynamicDialog = function (_Dialog) {
    _inherits(DynamicDialog, _Dialog);

    function DynamicDialog(props) {
        _classCallCheck(this, DynamicDialog);

        var _this = _possibleConstructorReturn(this, (DynamicDialog.__proto__ || Object.getPrototypeOf(DynamicDialog)).call(this, props));

        _this.handleSubmit = _this.handleSubmit.bind(_this);
        _this.handleChange = _this.handleChange.bind(_this);

        _this.object = {};

        return _this;
    }

    _createClass(DynamicDialog, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { id: this.props.id, title: this.props.title },
                React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "form",
                        { action: "#", onSubmit: this.handleSubmit },
                        React.createElement(
                            "div",
                            { className: "form-group" },
                            React.createElement(DynamicObjectForm, { onChange: this.handleChange, schema: this.props.schema })
                        ),
                        React.createElement(
                            "button",
                            { type: "submit", className: "btn btn-primary" },
                            "Save"
                        )
                    )
                )
            );
        }
    }, {
        key: "handleChange",
        value: function handleChange(event) {
            var field = [$("#" + event.target.id).data("title")];
            this.object[field] = event.target.value;
        }

        //@ToDo handle database submission...

    }, {
        key: "handleSubmit",
        value: function handleSubmit(event) {
            var db = new PouchDB(OBJECT_DB);

            this.object.title = this.props.schema.title;

            console.log(JSON.stringify(this.object));

            db.post(this.object, function (err, res) {
                if (err) console.error(err);else {
                    $("#" + this.props.id).dialog("close");

                    //Callback
                    this.props.next();
                }
            }.bind(this));

            this.object = {};
        }
    }]);

    return DynamicDialog;
}(Dialog);
//# sourceMappingURL=DynamicDialog.js.map