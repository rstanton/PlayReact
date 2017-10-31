"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ApplicationLister = function (_React$Component) {
    _inherits(ApplicationLister, _React$Component);

    function ApplicationLister(props) {
        _classCallCheck(this, ApplicationLister);

        var _this = _possibleConstructorReturn(this, (ApplicationLister.__proto__ || Object.getPrototypeOf(ApplicationLister)).call(this, props));

        _this.componentDidMount = _this.componentDidMount.bind(_this);
        _this.delete = _this.delete.bind(_this);
        _this.getApplications = _this.getApplications.bind(_this);

        _this.state = {
            list: []
        };

        return _this;
    }

    _createClass(ApplicationLister, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            return React.createElement(
                "div",
                null,
                React.createElement(ApplicationForm, { next: this.getApplications.bind(this), id: "AppModal", title: "Create A New Application", body: "" }),
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
                                "Vendor"
                            ),
                            React.createElement(
                                "th",
                                null,
                                React.createElement("span", { onClick: function onClick() {
                                        return _this2.getApplications();
                                    }, className: "glyphicon glyphicon-refresh", "aria-hidden": "true" }),
                                React.createElement("span", { "data-toggle": "modal", "data-target": "#AppModal", className: "glyphicon glyphicon-plus-sign", "aria-hidden": "true" })
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
        key: "componentDidMount",
        value: function componentDidMount() {
            this.getApplications();
        }
    }, {
        key: "getApplications",
        value: function getApplications() {
            //Clear the current state
            this.setState({
                list: []
            });

            //Get all documents in the database index
            appDB.query("applications/by_name", function (err, res) {
                if (err) console.error(err);

                //get a list of all the ids
                var list = [];
                list = res.rows.map(function (key) {
                    return key.id;
                });

                for (var n = 0; n < list.length; n++) {
                    appDB.get(list[n], function (err, doc) {
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
                                doc.appName
                            ),
                            React.createElement(
                                "td",
                                null,
                                doc.appVendor
                            ),
                            React.createElement(
                                "td",
                                null,
                                React.createElement("span", { onClick: function onClick() {
                                        return _this3.delete(doc._id);
                                    }, className: "glyphicon glyphicon-trash", "aria-hidden": "true" })
                            )
                        ));

                        //save to the state
                        this.setState({ list: arr });
                    }.bind(this));
                }
            }.bind(this));
        }
        /**
         * Removes the application from the database that is associated with the specified application ID then refreshes the view state based on the updated DB contents
         * @param id
         */

    }, {
        key: "delete",
        value: function _delete(id) {
            console.log("Delete Request for " + id);

            appDB.get(id, function (err, doc) {
                appDB.remove(doc, function (err, response) {
                    if (err) console.error(err);

                    this.getApplications();
                }.bind(this));
            }.bind(this));
        }
    }]);

    return ApplicationLister;
}(React.Component);
//# sourceMappingURL=ApplicationLister.js.map