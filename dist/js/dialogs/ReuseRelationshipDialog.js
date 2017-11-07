"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
  */
var ReuseRelationshipDialog = function (_Dialog) {
    _inherits(ReuseRelationshipDialog, _Dialog);

    function ReuseRelationshipDialog(props) {
        _classCallCheck(this, ReuseRelationshipDialog);

        return _possibleConstructorReturn(this, (ReuseRelationshipDialog.__proto__ || Object.getPrototypeOf(ReuseRelationshipDialog)).call(this, props));
    }

    _createClass(ReuseRelationshipDialog, [{
        key: "componentDidMount",
        value: function componentDidMount() {}

        /**
         * Will contain two elements;
         *  - A relationship selector, which when changed will drive a change in
         *  - A list of relationship instances.
         */

    }, {
        key: "render",
        value: function render() {}
    }]);

    return ReuseRelationshipDialog;
}(Dialog);
//# sourceMappingURL=ReuseRelationshipDialog.js.map