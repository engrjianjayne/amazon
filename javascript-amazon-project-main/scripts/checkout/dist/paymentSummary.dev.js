"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderPaymentSummary = renderPaymentSummary;

var _cart = require("../../data/cart.js");

var _products = require("../../data/products.js");

var _deliveryOptions = require("../../data/deliveryOptions.js");

var _money = require("../utils/money.js");

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
  var paymentSummaryHTML = "\n    <div class=\"payment-summary-title\">\n      Order Summary\n    </div>\n\n    <div class=\"payment-summary-row\">\n      <div>Items (3):</div>\n      <div class=\"payment-summary-money\">\n      $".concat((0, _money.formatCurrency)(productPriceCents), "</div>\n    </div>\n\n    <div class=\"payment-summary-row\">\n      <div>Shipping &amp; handling:</div>\n      <div class=\"payment-summary-money\">\n      ").concat((0, _money.formatCurrency)(shippingPriceCents), "</div>\n    </div>\n\n    <div class=\"payment-summary-row subtotal-row\">\n      <div>Total before tax:</div>\n      <div class=\"payment-summary-money\">\n      $").concat((0, _money.formatCurrency)(totalBeforeTaxCents), "</div>\n    </div>\n\n    <div class=\"payment-summary-row\">\n      <div>Estimated tax (10%):</div>\n      <div class=\"payment-summary-money\">\n      $").concat((0, _money.formatCurrency)(taxCents), "</div>\n    </div>\n\n    <div class=\"payment-summary-row total-row\">\n      <div>Order total:</div>\n      <div class=\"payment-summary-money\">\n        $").concat((0, _money.formatCurrency)(totalCents), "</div>\n    </div>\n\n    <button class=\"place-order-button button-primary\">\n      Place your order\n    </button>\n\n  ");
  document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHTML;
}
//# sourceMappingURL=paymentSummary.dev.js.map
