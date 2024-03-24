"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var CustomButton = function CustomButton(_ref) {
  var children = _ref.children,
    onClick = _ref.onClick,
    variant = _ref.variant;
  // Define styles based on the variant prop
  var styles = {
    padding: "8px 16px",
    borderRadius: "4px",
    cursor: "pointer",
    backgroundColor: variant === "primary" ? "#007bff" : variant === "secondary" ? "#6c757d" : variant === "success" ? "#28a745" : variant === "danger" ? "#dc3545" : "transparent",
    color: variant === "primary" || variant === "secondary" || variant === "success" || variant === "danger" ? "white" : "black"
  };
  return /*#__PURE__*/_react["default"].createElement("button", {
    style: styles,
    onClick: onClick
  }, children);
};
var _default = exports["default"] = CustomButton;
