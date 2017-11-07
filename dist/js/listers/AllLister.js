"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AllLister = function (_React$Component) {
    _inherits(AllLister, _React$Component);

    function AllLister(props) {
        _classCallCheck(this, AllLister);

        var _this = _possibleConstructorReturn(this, (AllLister.__proto__ || Object.getPrototypeOf(AllLister)).call(this, props));

        _this.state = {
            objects: []
        };
        return _this;
    }

    _createClass(AllLister, [{
        key: "componentDidMount",
        value: function componentDidMount() {}
    }, {
        key: "render",
        value: function render() {}
    }, {
        key: "getObjects",
        value: function getObjects() {
            var db = new PouchDB(OBJECT_DB);

            db.query(OBJECT_VIEW, function (err, res) {
                if (err) {
                    console.error(err);
                } else {
                    res.rows.map(function (row) {
                        console.debug("Processing Table Row for " + JSON.stringify(row));
                    }.bind(this));
                }
            }.bind(this));
        }
    }]);

    return AllLister;
}(React.Component);
//# sourceMappingURL=AllLister.js.map