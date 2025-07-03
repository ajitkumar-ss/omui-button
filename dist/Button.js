"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Button.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Button = function Button(_ref) {
  var label = _ref.label,
    onClick = _ref.onClick,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'button' : _ref$type,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className;
  return /*#__PURE__*/_react["default"].createElement("button", {
    type: type,
    onClick: onClick,
    className: "my-btn ".concat(className)
  }, label);
};
var _default = exports["default"] = Button;