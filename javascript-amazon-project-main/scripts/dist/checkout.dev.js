"use strict";

var _orderSummary = require("./checkout/orderSummary.js");

var _paymentSummary = require("./checkout/paymentSummary.js");

var _products = require("../data/products.js");

var _cart = require("../data/cart.js");

// import '../data/cart-class.js';
// import '../data/backend-practice.js';
Promise.all([new Promise(function (resolve) {
  (0, _products.loadProducts)(function () {
    resolve('value1');
  });
}), new Promise(function (resolve) {
  (0, _cart.loadCart)(function () {
    resolve();
  });
})]).then(function (values) {
  console.log(values);
  (0, _orderSummary.renderOrderSummary)();
  (0, _paymentSummary.renderPaymentSummary)();
});
/*
new Promise((resolve) => {
  loadProducts(() => {
    resolve('value1');
  });

}).then((value) => {
  console.log(value);

  return new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  });

}).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});
*/

/*
loadProducts(() => {
  loadCart(() => {
    renderOrderSummary();
    renderPaymentSummary();
  });
});
*/
//# sourceMappingURL=checkout.dev.js.map
