"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatCurrency = formatCurrency;
exports["default"] = void 0;

function formatCurrency(priceCents) {
  return (priceCents / 100).toFixed(2);
}

var _default = formatCurrency;
exports["default"] = _default;
//# sourceMappingURL=money.dev.js.map
