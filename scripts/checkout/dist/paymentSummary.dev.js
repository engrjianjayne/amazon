"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderPaymentSummary = renderPaymentSummary;

var _cart = require("../../data/cart.js");

var _products = require("../../data/products.js");

var _deliveryOptions = require("../../data/deliveryOptions.js");

var _money = require("../utils/money.js");

var _orders = require("../../data/orders.js");

function renderPaymentSummary() {
  var productPriceCents = 0;
  var shippingPriceCents = 0;

  _cart.cart.forEach(function (cartItem) {
    var product = (0, _products.getProduct)(cartItem.productId);
    productPriceCents += product.priceCents * cartItem.quantity;
    var deliveryOption = (0, _deliveryOptions.getDeliveryOption)(cartItem.deliveryOptionId);
    shippingPriceCents += deliveryOption.priceCents;
  });

  var totalBeforeTaxCents = productPriceCents + shippingPriceCents;
  var taxCents = totalBeforeTaxCents * 0.1;
  var totalCents = totalBeforeTaxCents + taxCents;
  var paymentSummaryHTML = "\n    <div class=\"payment-summary-title\">\n      Order Summary\n    </div>\n\n    <div class=\"payment-summary-row\">\n      <div>Items (3):</div>\n      <div class=\"payment-summary-money\">\n      $".concat((0, _money.formatCurrency)(productPriceCents), "</div>\n    </div>\n\n    <div class=\"payment-summary-row\">\n      <div>Shipping &amp; handling:</div>\n      <div class=\"payment-summary-money\">\n      ").concat((0, _money.formatCurrency)(shippingPriceCents), "</div>\n    </div>\n\n    <div class=\"payment-summary-row subtotal-row\">\n      <div>Total before tax:</div>\n      <div class=\"payment-summary-money\">\n      $").concat((0, _money.formatCurrency)(totalBeforeTaxCents), "</div>\n    </div>\n\n    <div class=\"payment-summary-row\">\n      <div>Estimated tax (10%):</div>\n      <div class=\"payment-summary-money\">\n      $").concat((0, _money.formatCurrency)(taxCents), "</div>\n    </div>\n\n    <div class=\"payment-summary-row total-row\">\n      <div>Order total:</div>\n      <div class=\"payment-summary-money\">\n        $").concat((0, _money.formatCurrency)(totalCents), "</div>\n    </div>\n\n    <button class=\"place-order-button button-primary add-to-cart-button js-place-order\">\n      Place your order\n    </button>\n\n  ");
  document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHTML;
  document.querySelector('.js-place-order').addEventListener('click', function _callee() {
    var response, order;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return regeneratorRuntime.awrap(fetch('https://supersimplebackend.dev/orders', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                cart: _cart.cart
              })
            }));

          case 3:
            response = _context.sent;
            _context.next = 6;
            return regeneratorRuntime.awrap(response.json());

          case 6:
            order = _context.sent;
            (0, _orders.addOrder)(order);
            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            console.log('Unexpected error. Try again later.');

          case 13:
            window.location.href = 'orders.html';

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 10]]);
  });
}
//# sourceMappingURL=paymentSummary.dev.js.map
