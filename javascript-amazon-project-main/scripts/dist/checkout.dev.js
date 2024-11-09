"use strict";

var _orderSummary = require("./checkout/orderSummary.js");

var _paymentSummary = require("./checkout/paymentSummary.js");

var _products = require("../data/products.js");

var _cart = require("../data/cart.js");

// import '../data/cart-class.js';
// import '../data/backend-practice.js';
function loadPage() {
  var value;
  return regeneratorRuntime.async(function loadPage$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap((0, _products.loadProductsFetch)());

        case 2:
          _context.next = 4;
          return regeneratorRuntime.awrap(new Promise(function (resolve) {
            (0, _cart.loadCart)(function () {
              resolve('value');
            });
          }));

        case 4:
          value = _context.sent;
          (0, _orderSummary.renderOrderSummary)();
          (0, _paymentSummary.renderPaymentSummary)();

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
}

loadPage();
/*
Promise.all([
  loadProductsFetch(),
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  })

]).then((values) =>{
  console.log(values);
  renderOrderSummary();
  renderPaymentSummary();
});
*/

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
