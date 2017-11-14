"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Re use dialog
 * props:
 *  id
 *  modal: false
 */
var ReuseDialog = function (_React$Component) {
    _inherits(ReuseDialog, _React$Component);

    function ReuseDialog(props) {
        _classCallCheck(this, ReuseDialog);

        var _this = _possibleConstructorReturn(this, (ReuseDialog.__proto__ || Object.getPrototypeOf(ReuseDialog)).call(this, props));

        _this.componentDidMount = _this.componentDidMount.bind(_this);
        return _this;
    }

    _createClass(ReuseDialog, [{
        key: "componentDidMount",
        value: function componentDidMount() {

            $("#" + this.props.id).dialog({
                autoOpen: false,
                closeOnEscape: true,
                title: this.props.title,
                modal: this.props.modal,
                width: 500,
                height: 500,
                resizable: false
            });

            $("#" + this.props.id).dialog("open");

            $("#draggable").draggable({
                helper: 'clone',
                appendTo: 'body',
                zIndex: 150
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { id: this.props.id, title: this.props.title },
                React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "div",
                        { className: "panel-group", id: "accordion", role: "tablist", "aria-multiselectable": "true" },
                        React.createElement(
                            "div",
                            { className: "panel panel-default" },
                            React.createElement(
                                "div",
                                { className: "panel-heading", role: "tab", id: "headingOne" },
                                React.createElement(
                                    "h4",
                                    { className: "panel-title" },
                                    React.createElement(
                                        "a",
                                        { role: "button", "data-toggle": "collapse", "data-parent": "#accordion", href: "#collapseOne", "aria-expanded": "true", "aria-controls": "collapseOne" },
                                        "Object Name (Title from Schema?)"
                                    )
                                )
                            ),
                            React.createElement(
                                "div",
                                { id: "collapseOne", className: "panel-collapse collapse in", role: "tabpanel", "aria-labelledby": "headingOne" },
                                React.createElement(
                                    "div",
                                    { id: "draggable", "data-title": "SAP ECC6 for Retail", className: "panel-body" },
                                    "SAP ECC6 for Retail"
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return ReuseDialog;
}(React.Component);
//# sourceMappingURL=ReuseDialog.js.map