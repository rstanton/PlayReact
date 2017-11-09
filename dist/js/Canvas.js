"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Canvas = function (_React$Component) {
    _inherits(Canvas, _React$Component);

    function Canvas(props) {
        _classCallCheck(this, Canvas);

        var _this = _possibleConstructorReturn(this, (Canvas.__proto__ || Object.getPrototypeOf(Canvas)).call(this, props));

        _this.componentDidMount = _this.componentDidMount.bind(_this);
        _this.init = _this.init.bind(_this);

        _this.schemas = [];
        _this.view = {};

        _this.init();
        return _this;
    }

    _createClass(Canvas, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var width = 3000;
            var height = 3000;

            this.view = new View(this.props.id, width, height);
            this.view.setScrollArea("#" + this.props.id);
        }

        /**
         * Read all the schemas and make them available to the rest of the app
         */

    }, {
        key: "init",
        value: function init() {
            var db = new PouchDB(SCHEMA_DB);

            db.query(SCHEMA_ALL_VIEW, function (err, res) {
                console.debug("Got " + res.rows.length + " schemas");

                var schemas = res.rows.map(function (obj) {
                    return obj;
                }.bind(this));

                this.schemas = schemas;

                db = null;
            }.bind(this));
        }
    }, {
        key: "render",
        value: function render() {
            var canvasStyle = {
                width: "3000px",
                height: "3000px"
            };

            var floatStyle = {
                position: "sticky",
                left: "10px",
                top: "10px",
                zIndex: "1000"
            };

            return React.createElement(
                "div",
                null,
                React.createElement("span", { style: floatStyle, className: "glyphicon glyphicon-plus-sign", "aria-hidden": "true" }),
                React.createElement(NavBar, null),
                React.createElement(
                    "div",
                    { id: this.props.id + "_container" },
                    React.createElement("div", { style: canvasStyle, id: this.props.id })
                )
            );
        }
    }]);

    return Canvas;
}(React.Component);

ReactDOM.render(React.createElement(
    "div",
    null,
    React.createElement(Canvas, { id: "canvas" })
), document.getElementById('root'));
//# sourceMappingURL=Canvas.js.map