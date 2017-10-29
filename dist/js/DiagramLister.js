"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//this class will iterate through all the diagrams in the database...
var DiagramLister = function (_React$Component) {
    _inherits(DiagramLister, _React$Component);

    function DiagramLister(props) {
        _classCallCheck(this, DiagramLister);

        var _this = _possibleConstructorReturn(this, (DiagramLister.__proto__ || Object.getPrototypeOf(DiagramLister)).call(this, props));

        _this.state = {
            list: []
        };

        _this.getDiagrams = _this.getDiagrams.bind(_this);
        _this.displayDiagram = _this.displayDiagram.bind(_this);
        return _this;
    }

    _createClass(DiagramLister, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.getDiagrams();
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            return React.createElement(
                "div",
                null,
                React.createElement(DiagramForm, { view: this.getDiagrams.bind(this), id: "DiagramModal", title: "Create A New Diagram", body: "" }),
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
                                "Author"
                            ),
                            React.createElement(
                                "th",
                                null,
                                React.createElement("span", { onClick: function onClick() {
                                        return _this2.getDiagrams();
                                    }, className: "glyphicon glyphicon-refresh", "aria-hidden": "true" }),
                                React.createElement("span", { "data-toggle": "modal", "data-target": "#DiagramModal", className: "glyphicon glyphicon-plus-sign", "aria-hidden": "true" })
                            )
                        )
                    ),
                    React.createElement(
                        "tbody",
                        null,
                        this.state.list
                    )
                )
            );
        }
    }, {
        key: "getDiagrams",
        value: function getDiagrams() {

            //Clear the current state
            this.setState({
                list: []
            });

            //Get all documents in the database index
            diagramDB.query("diagrams/by_name", function (err, res) {
                if (err) console.error(err);

                //get a list of all the ids
                var list = [];
                list = res.rows.map(function (key) {
                    return key.id;
                });

                for (var n = 0; n < list.length; n++) {
                    diagramDB.get(list[n], function (err, doc) {
                        var _this3 = this;

                        if (err) console.error(err);

                        //get the current array and add a new entry on the end
                        var arr = this.state.list;
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
                                doc.diagramName
                            ),
                            React.createElement(
                                "td",
                                null,
                                doc.appVendor
                            ),
                            React.createElement(
                                "td",
                                null,
                                React.createElement(
                                    "a",
                                    { href: "#", title: "Delete Diagram" },
                                    React.createElement("span", { onClick: function onClick() {
                                            return _this3.delete(doc._id);
                                        }, className: "glyphicon glyphicon-trash", "aria-hidden": "true" })
                                ),
                                React.createElement(
                                    "a",
                                    { href: "#", title: "Edit Diagram" },
                                    React.createElement("span", { onClick: function onClick() {
                                            return _this3.displayDiagram(doc._id);
                                        }, className: "glyphicon glyphicon-pencil", "aria-hidden": "true" })
                                )
                            )
                        ));

                        //save to the state
                        this.setState({ list: arr });
                    }.bind(this));
                }
            }.bind(this));
        }
    }, {
        key: "displayDiagram",
        value: function displayDiagram(id) {
            $("#tabs").addClass("hidden");
            $("#canvas").removeClass("hidden");
            $("#canvas").addClass("show");
        }
        /**
         * Removes the application from the database that is associated with the specified application ID then refreshes the view state based on the updated DB contents
         * @param id
         */

    }, {
        key: "delete",
        value: function _delete(id) {
            console.log("Delete Request for " + id);

            diagramDB.get(id, function (err, doc) {
                diagramDB.remove(doc, function (err, response) {
                    if (err) console.error(err);

                    this.getDiagrams();
                }.bind(this));
            }.bind(this));
        }
    }]);

    return DiagramLister;
}(React.Component);
//# sourceMappingURL=DiagramLister.js.map