"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderOrderSummary = renderOrderSummary;

var _cart = require("../../data/cart.js");

var _products = require("../../data/products.js");

var _money = require("../utils/money.js");

var _helloEsm = require("https://unpkg.com/supersimpledev@1.0.1/hello.esm.js");

var _index = _interopRequireDefault(require("https://unpkg.com/dayjs@1.11.10/esm/index.js"));

var _deliveryOptions = require("../../data/deliveryOptions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _helloEsm.hello)();
var today = (0, _index["default"])();
var deliveryDate = today.add(7, 'days');
console.log(deliveryDate.format('dddd, MMMM D'));

function renderOrderSummary() {
  var cartSummaryHTML = '';

  _cart.cart.forEach(function (cartItem) {
    var productId = cartItem.productId;
    var matchingProduct = (0, _products.getProduct)(productId);
    var deliveryOptionId = cartItem.deliveryOptionId;
    var deliveryOption = (0, _deliveryOptions.getDeliveryOption)(deliveryOptionId);
    var today = (0, _index["default"])();
    var deliveryDate = today.add(deliveryOption.deliveryDays, 'days');
    var dateString = deliveryDate.format('dddd, MMMM D');
    cartSummaryHTML += "\n    <div class=\"cart-item-container js-cart-item-container-".concat(matchingProduct.id, "\">\n            <div class=\"delivery-date\">\n              Delivery date: ").concat(dateString, "\n            </div>\n\n            <div class=\"cart-item-details-grid\">\n              <img class=\"product-image\" src=\"").concat(matchingProduct.image, "\">\n\n              <div class=\"cart-item-details\">\n                <div class=\"product-name\">\n                  ").concat(matchingProduct.name, "\n                </div>\n                <div class=\"product-price\">\n                  $").concat((0, _money.formatCurrency)(matchingProduct.priceCents), "\n                </div>\n                <div class=\"product-quantity\">\n                  <span>\n                    Quantity: <span class=\"quantity-label\">").concat(cartItem.quantity, "</span>\n                  </span>\n                  <span class=\"update-quantity-link link-primary\">\n                    Update\n                  </span>\n                  <span class=\"delete-quantity-link link-primary js-delete-link\" data-product-id=\"").concat(matchingProduct.id, "\">\n                    Delete\n                  </span>\n                </div>\n              </div>\n\n              <div class=\"delivery-options\">\n                <div class=\"delivery-options-title\">\n                  Choose a delivery option:\n                </div>\n                ").concat(deliveryOptionsHTML(matchingProduct, cartItem), "\n              </div>\n            </div>\n          </div>\n\n      ");
  });

  function deliveryOptionsHTML(matchingProduct, cartItem) {
    var html = '';

    _deliveryOptions.deliveryOptions.forEach(function (deliveryOption) {
      var today = (0, _index["default"])();
      var deliveryDate = today.add(deliveryOption.deliveryDays, 'days');
      var dateString = deliveryDate.format('dddd, MMMM D');
      var priceString = deliveryOption.priceCents === 0 ? 'FREE' : "$".concat((0, _money.formatCurrency)(deliveryOption.priceCents), " -");
      var isChecked = deliveryOption.id === cartItem.deliveryOptionId;
      html += "\n      <div class=\"delivery-option js-delivery-option\"\n      data-product-id=\"".concat(matchingProduct.id, "\" data-delivery-option-id=\"").concat(deliveryOption.id, "\">\n        <input type=\"radio\"\n        ").concat(isChecked ? 'checked' : '', " \n        class=\"delivery-option-input\" name=\"delivery-option-").concat(matchingProduct.id, "\">\n        <div>\n          <div class=\"delivery-option-date\">\n            ").concat(dateString, "\n          </div>\n          <div class=\"delivery-option-price\">\n            ").concat(priceString, " Shipping\n          </div>\n        </div>\n      </div>\n      ");
    });

    return html;
  }

  document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML;
  document.querySelectorAll('.js-delete-link').forEach(function (link) {
    link.addEventListener('click', function () {
      var productId = link.dataset.productId;
      (0, _cart.removeFromCart)(productId);
      var container = document.querySelector(".js-cart-item-container-".concat(productId));
      container.remove();
    });
  });
  document.querySelectorAll('.js-delivery-option').forEach(function (element) {
    element.addEventListener('click', function () {
      var _element$dataset = element.dataset,
          productId = _element$dataset.productId,
          deliveryOptionId = _element$dataset.deliveryOptionId;
      (0, _cart.updateDeliveryOption)(productId, deliveryOptionId);
      renderOrderSummary();
    });
  });
}
//# sourceMappingURL=orderSummary.dev.js.map
