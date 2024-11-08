"use strict";

var _orderSummary = require("./checkout/orderSummary.js");

var _paymentSummary = require("./checkout/paymentSummary.js");

var _products = require("../data/products.js");

// import '../data/cart-class.js';
// import '../data/backend-practice.js';
(0, _products.loadProducts)(function () {
  (0, _orderSummary.renderOrderSummary)();
  (0, _paymentSummary.renderPaymentSummary)();
});
//# sourceMappingURL=checkout.dev.js.map
