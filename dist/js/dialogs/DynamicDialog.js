"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 *
 */
var DynamicDialog = function (_Dialog) {
    _inherits(DynamicDialog, _Dialog);

    function DynamicDialog(props) {
        _classCallCheck(this, DynamicDialog);

        return _possibleConstructorReturn(this, (DynamicDialog.__proto__ || Object.getPrototypeOf(DynamicDialog)).call(this, props));
    }

    _createClass(DynamicDialog, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { id: this.props.id, title: this.props.title },
                React.createElement(
                    "div",
                    null,
                    React.createElement(DynamicObjectForm, { dialogId: this.props.id, next: this.props.next, allSchemas: this.props.allSchemas, schema: this.props.schema })
                )
            );
        }
    }]);

    return DynamicDialog;
}(Dialog);
//# sourceMappingURL=DynamicDialog.js.map