"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var view;
var appDB;

var Canvas = function (_React$Component) {
    _inherits(Canvas, _React$Component);

    function Canvas(props) {
        _classCallCheck(this, Canvas);

        var _this = _possibleConstructorReturn(this, (Canvas.__proto__ || Object.getPrototypeOf(Canvas)).call(this, props));

        _this.componentDidMount = _this.componentDidMount.bind(_this);

        appDB = new PouchDB("applications");
        return _this;
    }

    _createClass(Canvas, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var width = 2000;
            var height = 2000;

            view = new View(this.props.id, width, height);
            view.setScrollArea("#" + this.props.id);
        }
    }, {
        key: "render",
        value: function render() {
            var style = {
                width: "2000px",
                height: "2000px"
            };

            return React.createElement(
                "div",
                null,
                React.createElement(IntDialog, { next: this.next.bind(this), modal: "true", id: "interfaceDialog", title: "Interfaces", body: "Interfaces Here" }),
                React.createElement(NewApplicationDialog, { reuse: true, next: this.next.bind(this), modal: "true", id: "applicationDialog", title: "Applications", body: "Applications Here" }),
                React.createElement(
                    "div",
                    { id: this.props.id + "_container" },
                    React.createElement("div", { style: style, id: this.props.id })
                )
            );
        }
    }, {
        key: "next",
        value: function next(obj) {
            $("#applicationDialog").dialog("close");
            console.log(JSON.stringify(obj));
            var rect = new draw2d.shape.basic.Rectangle();
            var label = new draw2d.shape.basic.Label({ text: obj.id + " " + obj.appName });
            rect.add(label, new draw2d.layout.locator.BottomLocator());

            view.add(rect);
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