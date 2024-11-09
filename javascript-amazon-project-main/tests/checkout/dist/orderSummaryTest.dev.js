"use strict";

var _orderSummary = require("../../scripts/checkout/orderSummary.js");

var _cart = require("../../data/cart.js");

var _products = require("../../data/products.js");

describe('test suite: renderOrderSummary', function () {
  var productId1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
  var productId2 = '15b6fc6f-327a-4ec4-896f-486349e85a3d';
  beforeAll(function (done) {
    (0, _products.loadProducts)(function () {
      done();
    });
  });
  beforeEach(function () {
    spyOn(localStorage, 'setItem');
    document.querySelector('.js-test-container').innerHTML = "\n      <div class=\"js-order-summary\"></div>\n      <div class=\"js-payment-summary\"></div>\n    ";
    spyOn(localStorage, 'getItem').and.callFake(function () {
      return JSON.stringify([{
        productId: productId1,
        quantity: 2,
        deliveryOptionId: '1'
      }, {
        productId: productId2,
        quantity: 1,
        deliveryOptionId: '2'
      }]);
    });
    (0, _cart.loadFromStorage)();
    (0, _orderSummary.renderOrderSummary)();
  });
  it('displays the cart', function () {
    expect(document.querySelectorAll('.js-cart-item-container').length).toEqual(2);
    expect(document.querySelector(".js-product-quantity-".concat(productId1)).innerText).toContain('Quantity: 2');
    expect(document.querySelector(".js-product-quantity-".concat(productId2)).innerText).toContain('Quantity: 1');
    document.querySelector('.js-test-container').innerHTML = '';
  });
  it('removes a product', function () {
    document.querySelector(".js-delete-link-".concat(productId1)).click();
    expect(document.querySelectorAll('.js-cart-item-container').length).toEqual(1);
    expect(document.querySelector(".js-cart-item-container-".concat(productId1))).toEqual(null);
    expect(document.querySelector(".js-cart-item-container-".concat(productId2))).not.toEqual(null);
    expect(_cart.cart.length).toEqual(1);
    expect(_cart.cart[0].productId).toEqual(productId2);
    document.querySelector('.js-test-container').innerHTML = '';
  });
});
//# sourceMappingURL=orderSummaryTest.dev.js.map
