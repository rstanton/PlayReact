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

        //@ToDo finish building table data rows

    }, {
        key: "getData",
        value: function getData(schema) {
            console.debug(JSON.stringify(schema));

            var db = new PouchDB(schema.title);

            //execute the view to get the IDs of all the documents
            db.query(schema.title + "/by_name", function (err, res) {
                if (err) {
                    console.error(err);
                } else {
                    var body = [];

                    //Loop each record in the DB
                    var key = 0;
                    res.rows.map(function (doc) {
                        console.debug("Processing Lister for " + JSON.stringify(doc));

                        var obj = doc.key;
                        var td = [];

                        //@Todo, need to use the schema here -> we need to get the attributes of the document based on the fields in the schema, can't just iterate over the object as there maybe missing / null fields.
                        for (var field in schema.properties) {
                            console.debug("Processing " + schema.title + "." + field);

                            td.push(React.createElement(
                                "td",
                                { key: schema.title + "." + field },
                                eval("obj." + field)
                            ));
                        }

                        body.push(React.createElement(
                            "tr",
                            { key: key },
                            td,
                            React.createElement("td", null)
                        ));
                        key++;
                    });

                    this.setState({
                        body: body
                    });
                }
            }.bind(this));
        }

        //Read the schema from the DB, display the table header and call on to next which should render the data table.

    }, {
        key: "getSchema",
        value: function getSchema(next) {
            var db = new PouchDB("schemas");

            db.get(this.props.id, function (err, doc) {
                var _this2 = this;

                if (err) {
                    console.error(err);
                } else {
                    console.debug("Building Table Header for " + JSON.stringify(doc));

                    //Setup a new dialog
                    var dialog = React.createElement(GenericDialog, { id: "dialog" + doc._id, body: "New " + doc.title, modal: true, schema: doc });

                    var props = doc.properties;

                    var th = [];
                    for (var x in props) {
                        th.push(React.createElement(
                            "th",
                            { key: x },
                            x
                        ));
                    }

                    var button = React.createElement(
                        "th",
                        { key: "button" },
                        React.createElement(
                            "button",
                            { onClick: function onClick() {
                                    return _this2.showDialog("dialog" + doc._id);
                                }, className: "btn btn-primary" },
                            "New " + doc.title
                        )
                    );
                    th.push(button);

                    this.setState({
                        head: th,
                        dialog: dialog
                    });
                }
                //now populate the data table
                next(doc);
            }.bind(this));
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