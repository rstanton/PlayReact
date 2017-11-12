"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @Todo there's a bug with single entry lists, the value never gets saved because the user never selects anything.
 */
var Select = function (_React$Component) {
    _inherits(Select, _React$Component);

    function Select(props) {
        _classCallCheck(this, Select);

        var _this = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));

        _this.componentDidMount = _this.componentDidMount.bind(_this);
        _this.buildList = _this.buildList.bind(_this);
        _this.getObjectsByID = _this.getObjectsByID.bind(_this);
        _this.buildOption = _this.buildOption.bind(_this);

        _this.state = {
            list: []
        };

        _this.list = [];

        return _this;
    }

    _createClass(Select, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.buildList();
        }
    }, {
        key: "render",
        value: function render() {
            console.debug("Building Select for " + this.props.field + ", with value '" + JSON.stringify(this.props.value) + "'");

            return React.createElement(
                "select",
                { id: "select" + this.props.field, value: this.props.value, "data-field": this.props.field, onChange: this.props.handleSelect, className: "list-group", multiple: this.props.multi },
                this.state.list
            );
        }
    }, {
        key: "buildList",
        value: function buildList() {
            var arr = [];
            console.debug("Building List for " + this.props.target);

            if (this.props.target == "http://architecture.com/Object") {
                //Use the known list of all user-configured schemas
                this.list = this.props.list;
                this.buildOption();
            } else if (this.props.target) {
                //Lookup all objects of the given type.
                this.getObjectsByID(this.props.target, this.buildOption);
            } else {
                this.list = this.props.list;
                this.buildOption();
            }
        }
    }, {
        key: "buildOption",
        value: function buildOption() {
            console.debug("Building List Output for " + JSON.stringify(this.list));

            //Build the list option, set the type to the ID of the selected object
            var list = this.list.map(function (schema) {
                //return <button key={schema.title} type="button" className="list-group-item" data-schema={schema} onClick={this.props.onValueSelect}>{schema.title}</button>
                return React.createElement(
                    "option",
                    { className: "list-group-item", key: schema.title, value: schema.id, "data-title": schema.title, "data-type": schema.id, "data-field": this.props.field },
                    schema.title
                );
            }.bind(this));

            this.setState({
                list: list
            });
        }

        //@ToDo externalise to db handling object

    }, {
        key: "getObjectsByID",
        value: function getObjectsByID(id, next) {
            var db = new PouchDB(OBJECT_DB);
            console.debug("Getting Objects for type " + id);

            db.query(OBJECT_BY_TYPE, { key: id }, function (err, res) {
                if (err) console.error(err);else {
                    console.debug("Got " + res.rows.length + " for " + id);

                    var list = res.rows.map(function (obj) {
                        console.log("Processing List Option for " + id + " based on object " + JSON.stringify(obj));

                        return {
                            title: obj.value.name,
                            id: obj.value.type
                        };
                    });

                    console.log("Got " + JSON.stringify(list) + " as items for " + id);

                    this.list = list;

                    next();
                }
            }.bind(this));
        }
    }]);

    return Select;
}(React.Component);
//# sourceMappingURL=MultiSelect.js.map