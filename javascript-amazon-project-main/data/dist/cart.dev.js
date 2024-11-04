"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addToCart = addToCart;
exports.cart = void 0;
// Deduplicating data or Normalizing data
var cart = [{
  productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity: 2
}, {
  productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity: 1
}];
exports.cart = cart;

function addToCart(productId) {
  var matchingItem;
  cart.forEach(function (cartItem) {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({
      productId: productId,
      quantity: 1
    });
  }
}
//# sourceMappingURL=cart.dev.js.map
