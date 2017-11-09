"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DynamicTabSheet = function (_React$Component) {
    _inherits(DynamicTabSheet, _React$Component);

    function DynamicTabSheet(props) {
        _classCallCheck(this, DynamicTabSheet);

        var _this = _possibleConstructorReturn(this, (DynamicTabSheet.__proto__ || Object.getPrototypeOf(DynamicTabSheet)).call(this, props));

        _this.componentDidMount = _this.componentDidMount.bind(_this);
        _this.getObjectTypes = _this.getObjectTypes.bind(_this);

        //tabs the HTML for the tabs, and tabContent the HTML for the tab bodies
        _this.state = {
            tabs: [],
            tabContent: []
        };
        return _this;
    }

    _createClass(DynamicTabSheet, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.getObjectTypes();
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { id: "tabs" },
                React.createElement(
                    "ul",
                    { className: "nav nav-tabs", role: "tablist" },
                    this.state.tabs
                ),
                React.createElement(
                    "div",
                    { className: "tab-content" },
                    this.state.tabContent
                )
            );
        }

        /**
         * Get the objects types from the DB, assign the names and the IDs to some elements by updating the state.
         */

    }, {
        key: "getObjectTypes",
        value: function getObjectTypes() {
            var db = new PouchDB(SCHEMA_DB);

            this.setState({
                tabs: [],
                tabContent: []
            });

            //Get all the object types that the user has configured and create a tab for each one.
            db.query(SCHEMA_ALL_VIEW, function (err, res) {
                if (err) {
                    console.error(err);
                } else {
                    var tbs = [];
                    var content = [];

                    //Loop each of the Schema objects returned from the Schema DB query
                    res.rows.map(function (schema) {
                        console.debug("Creating Sheet for " + JSON.stringify(schema));

                        //Add a tab
                        tbs = this.state.tabs;
                        tbs.push(React.createElement(
                            "li",
                            { key: schema.key.title, role: "presentation" },
                            React.createElement(
                                "a",
                                { href: "#" + schema.key.title, "aria-controls": "diagrams", role: "tab", "data-toggle": "tab" },
                                schema.key.title
                            )
                        ));

                        //add tab content, use the lister component to update
                        content = this.state.tabContent;
                        content.push(React.createElement(
                            "div",
                            { key: schema.key.title, role: "tabpanel", className: "tab-pane", id: schema.key.title },
                            React.createElement(GenericLister, { schema: schema.key, id: schema.key.title, next: this.getObjectTypes })
                        ));
                    }.bind(this));

                    /** Objects **/
                    tbs.push(React.createElement(
                        "li",
                        { key: "schema", role: "presentation" },
                        React.createElement(
                            "a",
                            { href: "#schema", "aria-controls": "diagrams", role: "tab", "data-toggle": "tab" },
                            "Objects"
                        )
                    ));

                    content.push(React.createElement(
                        "div",
                        { key: "schema", role: "tabpanel", className: "tab-pane", id: "schema" },
                        React.createElement(SchemaLister, { next: this.getObjectTypes }),
                        React.createElement(NewSchemaForm, { next: this.getObjectTypes })
                    ));

                    //Add tabs and tab content for diagrams and relationships
                    tbs.push(React.createElement(
                        "li",
                        { key: "relationships", role: "presentation" },
                        React.createElement(
                            "a",
                            { href: "#" + relationshipSchema.title, "aria-controls": "diagrams", role: "tab", "data-toggle": "tab" },
                            "Relationships"
                        )
                    ));
                    content.push(React.createElement(
                        "div",
                        { key: relationshipSchema.title, role: "tabpanel", className: "tab-pane", id: relationshipSchema.title },
                        React.createElement(GenericLister, { schema: relationshipSchema, id: relationshipSchema.title, next: this.getObjectTypes })
                    ));

                    tbs.push(React.createElement(
                        "li",
                        { key: "diagrams", role: "presentation" },
                        React.createElement(
                            "a",
                            { href: "#" + diagramSchema.title, "aria-controls": "diagrams", role: "tab", "data-toggle": "tab" },
                            "Diagrams"
                        )
                    ));
                    content.push(React.createElement(
                        "div",
                        { key: diagramSchema.title, role: "tabpanel", className: "tab-pane", id: diagramSchema.title },
                        React.createElement(GenericLister, { schema: diagramSchema, id: diagramSchema.title, next: this.getObjectTypes })
                    ));

                    console.log("Adding Templates");

                    tbs.push(React.createElement(
                        "li",
                        { key: "templates", role: "presentation" },
                        React.createElement(
                            "a",
                            { href: "#" + templateSchema.title, "aria-controls": "diagrams", role: "tab", "data-toggle": "tab" },
                            "Templates"
                        )
                    ));
                    content.push(React.createElement(
                        "div",
                        { key: templateSchema.title, role: "tabpanel", className: "tab-pane", id: templateSchema.title },
                        React.createElement(GenericLister, { schema: templateSchema, id: templateSchema.title, next: this.getObjectTypes })
                    ));

                    /**tbs.push(<li key="diagrams" role="presentation"><a href={"#diagrams"} aria-controls="diagrams" role="tab" data-toggle="tab">Diagrams</a></li>);
                    content.push(<div key="diagrams" role="tabpanel" className="tab-pane" id="diagrams"><DiagramLister/></div>);**/

                    this.setState({
                        tabs: tbs,
                        tabContent: content
                    });
                }
            }.bind(this));
        }
    }]);

    return DynamicTabSheet;
}(React.Component);
//# sourceMappingURL=DynamicTabSheet.js.map