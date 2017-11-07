"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Should query for all the schemas and offer a drop down list containing the results.
 */
var GenericObjectLister = function (_React$Component) {
    _inherits(GenericObjectLister, _React$Component);

    function GenericObjectLister(props) {
        _classCallCheck(this, GenericObjectLister);

        var _this = _possibleConstructorReturn(this, (GenericObjectLister.__proto__ || Object.getPrototypeOf(GenericObjectLister)).call(this, props));

        _this.getData = _this.getData.bind(_this);
        _this.componentDidMount = _this.componentDidMount.bind(_this);

        _this.state = {
            list: []
        };
        return _this;
    }

    _createClass(GenericObjectLister, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.getData();
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "select",
                { id: this.props.id, onChange: this.props.onChange, className: "form-control" },
                this.state.list
            );
        }
    }, {
        key: "getData",
        value: function getData() {
            var db = new PouchDB(SCHEMA_DB);

            db.query(SCHEMA_VIEW, function (err, res) {
                if (err) console.error(err);else {

                    var list = [];

                    list.push(React.createElement(
                        "option",
                        { key: "default", selected: true },
                        "Choose"
                    ));

                    res.rows.map(function (row) {

                        list.push(React.createElement(
                            "option",
                            { key: row.key.title, "data-schema": JSON.stringify(row.key) },
                            row.key.title
                        ));
                    }.bind(this));

                    this.setState({
                        list: list
                    });
                }
            }.bind(this));
        }
    }]);

    return GenericObjectLister;
}(React.Component);
//# sourceMappingURL=GenericObjectLister.js.map