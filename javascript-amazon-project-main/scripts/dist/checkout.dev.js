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
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap((0, _products.loadProductsFetch)());

        case 3:
          _context.next = 5;
          return regeneratorRuntime.awrap(new Promise(function (resolve, reject) {
            //throw 'error2';
            (0, _cart.loadCart)(function () {
              // reject('error3');
              resolve('value3');
            });
          }));

        case 5:
          value = _context.sent;
          _context.next = 11;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.log('Unexpected error. Please try again later.');

        case 11:
          (0, _orderSummary.renderOrderSummary)();
          (0, _paymentSummary.renderPaymentSummary)();

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
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
