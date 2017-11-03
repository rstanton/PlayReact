"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Props will contain the ID of the schema object that describes the resource to be displayed
 * - Get the schema
 * - Open a connection to the relevant database
 * - Query for all objects
 * - Display a table containing the relevant properties
 */
var GenericLister = function (_React$Component) {
    _inherits(GenericLister, _React$Component);

    function GenericLister(props) {
        _classCallCheck(this, GenericLister);

        var _this = _possibleConstructorReturn(this, (GenericLister.__proto__ || Object.getPrototypeOf(GenericLister)).call(this, props));

        _this.componentDidMount = _this.componentDidMount.bind(_this);
        _this.getSchema = _this.getSchema.bind(_this);
        _this.getData = _this.getData.bind(_this);

        _this.state = {
            head: [],
            body: []
        };

        _this.schema = {};
        return _this;
    }

    _createClass(GenericLister, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            //Reads the table header
            this.getSchema(this.getData);
        }
    }, {
        key: "getData",
        value: function getData() {
            var db = new PouchDB(this.schema.title);

            db.query(this.schema.title + "/by_name", function (err, res) {
                if (err) {
                    console.error(err);
                } else {
                    var td = [];
                }
            }.bind(this));
        }
    }, {
        key: "getSchema",
        value: function getSchema(next) {
            var db = new PouchDB("schemas");
            var schema = {};
            db.get(this.props.id, function (err, doc) {
                if (err) {
                    console.error(err);
                } else {
                    this.schema = doc;

                    var props = doc.properties;

                    var th = [];
                    for (var x in props) {
                        th.push(React.createElement(
                            "th",
                            { key: x },
                            x
                        ));
                    }

                    this.setState({
                        head: th
                    });
                }
                //now populate the table
                next();
            }.bind(this));
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "table",
                    { className: "table table-striped" },
                    React.createElement(
                        "thead",
                        null,
                        React.createElement(
                            "tr",
                            null,
                            this.state.head
                        )
                    ),
                    React.createElement(
                        "tbody",
                        null,
                        this.state.body
                    )
                )
            );
        }
    }]);

    return GenericLister;
}(React.Component);
//# sourceMappingURL=GenericLister.js.map