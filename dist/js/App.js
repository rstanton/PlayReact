"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var diagramDB;
var appDB;

var ddoc = {
    _id: '_design/diagrams',
    views: {
        by_name: {
            map: function (doc) {
                emit(doc.name);
            }.toString()
        }
    }
};

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        diagramDB = new PouchDB("diagrams");
        appDB = new PouchDB("apps");

        diagramDB.put(ddoc, function (err, doc) {
            if (err) {
                if (err.status != 409) console.error(err);
            }
        });

        diagramDB.post({ name: "ross" }, function (err, doc) {
            if (err) console.error(err);

            console.log("OK");
        });
        return _this;
    }

    _createClass(App, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "container" },
                React.createElement(Nav, null),
                React.createElement(Alert, { status: "success", message: " All Ok ", timeout: "5000" }),
                React.createElement(ApplicationForm, { id: "AppModal", title: "Something Urgent!", body: "Body Message. Better Fix whatever's up!" }),
                React.createElement(TabSheet, null)
            );
        }
    }]);

    return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
//# sourceMappingURL=App.js.map