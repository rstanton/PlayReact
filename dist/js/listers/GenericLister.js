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
        _this.showDialog = _this.showDialog.bind(_this);
        _this.delete = _this.delete.bind(_this);

        _this.state = {
            head: [],
            body: [],
            dialog: ""
        };
        return _this;
    }

    _createClass(GenericLister, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            //Reads the table header and passes the schema doc to 'getData'
            this.getSchema(this.getData);
        }
    }, {
        key: "getData",
        value: function getData() {
            this.setState({
                body: []
            });

            //@ToDo, open the object DB, not the Schema DB
            var db = new PouchDB(OBJECT_DB);
            var schema = this.props.schema;

            //The view now returns all of the documents (not the IDs)
            db.query("Object/by_name", { key: schema.title }, function (err, res) {
                if (err) {
                    console.error(err);
                } else {
                    console.debug("Got " + res.rows.length + " of " + schema.title);
                    var body = [];

                    //Loop each record in the DB
                    var key = 0;
                    res.rows.map(function (doc) {
                        var _this2 = this;

                        console.debug(schema.title + ", Processing Lister for " + JSON.stringify(doc));

                        var obj = doc.value;
                        var td = [];

                        for (var field in schema.properties) {
                            td.push(React.createElement(
                                "td",
                                { key: schema.title + "." + field },
                                obj[field]
                            ));
                        }

                        //
                        body.push(React.createElement(
                            "tr",
                            { key: key },
                            td,
                            React.createElement(
                                "td",
                                null,
                                React.createElement("span", { onClick: function onClick() {
                                        return _this2.delete(doc.id);
                                    }, className: "glyphicon glyphicon-trash", "aria-hidden": "true" })
                            )
                        ));

                        key++;
                    }.bind(this));

                    this.setState({
                        body: body
                    });
                }
            }.bind(this));
        }

        /**
         * Remove the object from the DB associated with the Schema
         *
         * @param schema
         * @param id
         */

    }, {
        key: "delete",
        value: function _delete(id) {
            console.debug("Delete " + this.props.schema.title + " with ID " + id);
            var db = new PouchDB(OBJECT_DB);

            db.get(id, function (err, doc) {
                db.remove(doc, function (err, response) {
                    if (err) console.error(err);

                    this.getData();
                }.bind(this));
            }.bind(this));
        }

        /**
         * Read the schema from the DB, display the table header and call on to next which should render the data table.
         *
         * @param next
         */

    }, {
        key: "getSchema",
        value: function getSchema(next) {
            var _this3 = this;

            this.setState({
                head: [],
                dialog: ""
            });

            var schema = this.props.schema;

            //Setup a new dialog
            $("#dialog" + schema.title).dialog("destroy"); //JQuery wraps the dialog in tons of gumpf which breaks react. Have to destroy the previous dialog if it exists!

            var dialog = React.createElement(DynamicDialog, { schema: this.props.schema, next: this.getData, id: "dialog" + schema.title, title: "New " + schema.title, modal: true });
            var props = schema.properties;

            var th = [];
            for (var field in props) {
                th.push(React.createElement(
                    "th",
                    { key: field },
                    field
                ));
            }

            var button = React.createElement(
                "th",
                { key: "button" },
                React.createElement(
                    "button",
                    { onClick: function onClick() {
                            return _this3.showDialog("dialog" + schema.title);
                        }, className: "btn btn-primary" },
                    "New " + schema.title
                )
            );
            th.push(button);

            this.setState({
                head: th,
                dialog: dialog
            });

            //now populate the data table
            next();
        }
    }, {
        key: "showDialog",
        value: function showDialog(id) {
            console.debug("Showing dialog with ID " + id);

            $("#" + id).dialog("open");
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                this.state.dialog,
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