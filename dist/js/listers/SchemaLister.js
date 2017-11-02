"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SchemaLister = function (_React$Component) {
    _inherits(SchemaLister, _React$Component);

    function SchemaLister(props) {
        _classCallCheck(this, SchemaLister);

        var _this = _possibleConstructorReturn(this, (SchemaLister.__proto__ || Object.getPrototypeOf(SchemaLister)).call(this, props));

        _this.getSchemas = _this.getSchemas.bind(_this);
        _this.componentDidMount = _this.componentDidMount.bind(_this);

        _this.state = {
            schemas: []
        };
        return _this;
    }

    _createClass(SchemaLister, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.getSchemas();
        }
    }, {
        key: "getSchemas",
        value: function getSchemas() {
            var db = new PouchDB("schemas");
            this.setState({
                schemas: []
            });

            db.query("schemas/by_name", function (err, res) {
                if (err) console.error(err);else {
                    var list = [];
                    list = res.rows.map(function (obj) {
                        return obj.id;
                    });

                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;

                    try {
                        for (var _iterator = list[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            var x = _step.value;

                            db.get(x, function (err, doc) {
                                if (err) console.error(err);else {
                                    var arr = this.state.schemas;
                                    arr.push(React.createElement(
                                        "tr",
                                        { key: doc._id },
                                        React.createElement(
                                            "td",
                                            null,
                                            doc._id
                                        ),
                                        React.createElement(
                                            "td",
                                            null,
                                            doc.title
                                        ),
                                        React.createElement(
                                            "td",
                                            null,
                                            React.createElement("textarea", { readOnly: true, rows: "10", cols: "80", defaultValue: JSON.stringify(doc, undefined, 2) })
                                        ),
                                        React.createElement("td", null)
                                    ));

                                    this.setState({
                                        schemas: arr
                                    });
                                }
                            }.bind(this));
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }
                        } finally {
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }

                    db.close();
                }
            }.bind(this));
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var view = React.createElement(
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
                            React.createElement(
                                "th",
                                null,
                                "#"
                            ),
                            React.createElement(
                                "th",
                                null,
                                "Name"
                            ),
                            React.createElement(
                                "th",
                                null,
                                "Schema"
                            ),
                            React.createElement(
                                "th",
                                null,
                                React.createElement("span", { onClick: function onClick() {
                                        return _this2.getSchemas();
                                    }, className: "glyphicon glyphicon-refresh", "aria-hidden": "true" }),
                                React.createElement("span", { onClick: function onClick() {
                                        return _this2.showDialog();
                                    }, className: "glyphicon glyphicon-plus-sign", "aria-hidden": "true" })
                            )
                        )
                    ),
                    React.createElement(
                        "tbody",
                        null,
                        this.state.schemas
                    )
                )
            );

            return view;
        }
    }]);

    return SchemaLister;
}(React.Component);
//# sourceMappingURL=SchemaLister.js.map