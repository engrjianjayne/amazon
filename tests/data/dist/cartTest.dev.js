"use strict";

var _cart = require("../../data/cart.js");

describe('test suite: addToCart', function () {
  it('adds an existing product to the cart', function () {
    spyOn(localStorage, 'setItem');
    spyOn(localStorage, 'getItem').and.callFake(function () {
      return JSON.stringify([{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 1,
        deliveryOptionId: '1'
      }]);
    });
    (0, _cart.loadFromStorage)();
    (0, _cart.addToCart)('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(_cart.cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(_cart.cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(_cart.cart[0].quantity).toEqual(2);
  });
  it('adds a new product to the cart', function () {
    spyOn(localStorage, 'setItem');
    spyOn(localStorage, 'getItem').and.callFake(function () {
      return JSON.stringify([]);
    });
    (0, _cart.loadFromStorage)();
    (0, _cart.addToCart)('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(_cart.cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(_cart.cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(_cart.cart[0].quantity).toEqual(1);
  });
});
//# sourceMappingURL=cartTest.dev.js.map
