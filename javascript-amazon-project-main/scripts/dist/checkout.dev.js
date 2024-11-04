"use strict";

var _cart = require("../data/cart.js");

var _products = require("../data/products.js");

var _money = require("./utils/money.js");

var cartSummaryHTML = '';

_cart.cart.forEach(function (cartItem) {
  var productId = cartItem.productId;
  var matchingProduct;

  _products.products.forEach(function (product) {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });

  cartSummaryHTML += "\n  <div class=\"cart-item-container \n    js-cart-item-container-".concat(matchingProduct.id, "\">\n          <div class=\"delivery-date\">\n            Delivery date: Tuesday, June 21\n          </div>\n\n          <div class=\"cart-item-details-grid\">\n            <img class=\"product-image\" src=\"").concat(matchingProduct.image, "\">\n\n            <div class=\"cart-item-details\">\n              <div class=\"product-name\">\n                ").concat(matchingProduct.name, "\n              </div>\n              <div class=\"product-price\">\n                $").concat((0, _money.formatCurrency)(matchingProduct.priceCents), "\n              </div>\n              <div class=\"product-quantity\">\n                <span>\n                  Quantity: <span class=\"quantity-label\">").concat(cartItem.quantity, "</span>\n                </span>\n                <span class=\"update-quantity-link link-primary\">\n                  Update\n                </span>\n                <span class=\"delete-quantity-link link-primary js-delete-link\" data-product-id=\"").concat(matchingProduct.id, "\">\n                  Delete\n                </span>\n              </div>\n            </div>\n\n            <div class=\"delivery-options\">\n              <div class=\"delivery-options-title\">\n                Choose a delivery option:\n              </div>\n              <div class=\"delivery-option\">\n                <input type=\"radio\" checked class=\"delivery-option-input\" name=\"delivery-option-").concat(matchingProduct.id, "\">\n                <div>\n                  <div class=\"delivery-option-date\">\n                    Tuesday, June 21\n                  </div>\n                  <div class=\"delivery-option-price\">\n                    FREE Shipping\n                  </div>\n                </div>\n              </div>\n              <div class=\"delivery-option\">\n                <input type=\"radio\" class=\"delivery-option-input\" name=\"delivery-option-").concat(matchingProduct.id, "\">\n                <div>\n                  <div class=\"delivery-option-date\">\n                    Wednesday, June 15\n                  </div>\n                  <div class=\"delivery-option-price\">\n                    $4.99 - Shipping\n                  </div>\n                </div>\n              </div>\n              <div class=\"delivery-option\">\n                <input type=\"radio\" class=\"delivery-option-input\" name=\"delivery-option-").concat(matchingProduct.id, "\">\n                <div>\n                  <div class=\"delivery-option-date\">\n                    Monday, June 13\n                  </div>\n                  <div class=\"delivery-option-price\">\n                    $9.99 - Shipping\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n    ");
});

document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML;
document.querySelectorAll('.js-delete-link').forEach(function (link) {
  link.addEventListener('click', function () {
    var productId = link.dataset.productId;
    (0, _cart.removeFromCart)(productId);
    var container = document.querySelector(".js-cart-item-container-".concat(productId));
    container.remove();
  });
});
//# sourceMappingURL=checkout.dev.js.map
