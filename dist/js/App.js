"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * This is the entry point to the 'admin' application
 *
 */
var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.init = _this.init.bind(_this);
        _this.createSchemaView = _this.createSchemaView.bind(_this);

        _this.init();

        _this.state = {
            view: ""
        };
        return _this;
    }

    /**
     * This needs to read all the schemas and create the relevant views
     */


    _createClass(App, [{
        key: "init",
        value: function init() {
            var db = new PouchDB(OBJECT_DB);

            db.info(function (err, info) {
                if (info.doc_count == 0 && info.update_seq == 0) {
                    console.debug("First Boot. Setting up...");

                    //Hacky, but create the view for the Schema DB
                    this.createSchemaView({ title: "Schema" });
                    this.createSchemaView({ title: "Config" });
                    this.createSchemaView({ title: "Object" });
                }

                //Database already exists, nothing to do, just show the tabs
                this.setState({
                    view: React.createElement(DynamicTabSheet, null)
                });
            }.bind(this));
        }

        /**
         * Creates the actual views
         * @param doc The schema 'by_name' results doc, contains 'key' (title of the schema eg 'Application') and 'id'
         */

    }, {
        key: "createSchemaView",
        value: function createSchemaView(schema) {
            var db = new PouchDB(schema.title);

            var designDoc = {
                _id: '_design/' + schema.title,
                views: {
                    by_name: {
                        map: function (doc) {
                            if (doc.title) {
                                emit(doc.title, doc);
                            }
                        }.toString()
                    },
                    by_type: {
                        map: function (doc) {
                            if (doc.type) {
                                emit(doc.type, doc);
                            }
                        }.toString()
                    },
                    all: {
                        map: function (doc) {
                            emit(doc);
                        }.toString()
                    }
                }
            };

            db.put(designDoc, function (err, resp) {
                if (err) {
                    if (err.status != 409) console.error(err);
                } else {
                    console.log("Index for " + schema.title + " created.");
                }
            }.bind(this));
        }

        /**
         * Adds the navigation, adds a hidden modal for new applications, shows the tabbed screen
         * @returns {XML}
         */

    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    { className: "container" },
                    this.state.view
                )
            );
        }
    }]);

    return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
//# sourceMappingURL=App.js.map