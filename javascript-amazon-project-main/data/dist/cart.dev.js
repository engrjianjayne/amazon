"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addToCart = addToCart;
exports.cart = void 0;
var cart = [];
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
