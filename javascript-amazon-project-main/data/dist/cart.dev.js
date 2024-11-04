"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addToCart = addToCart;
exports.removeFromCart = removeFromCart;
exports.cart = void 0;
// Deduplicating data or Normalizing data
var cart = JSON.parse(localStorage.getItem('cart'));
exports.cart = cart;

if (!cart) {
  exports.cart = cart = [{
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2
  }, {
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 1
  }];
}

function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

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

  saveToStorage();
}

function removeFromCart(productId) {
  var newCart = [];
  cart.forEach(function (cartItem) {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });
  exports.cart = cart = newCart;
  saveToStorage();
}
//# sourceMappingURL=cart.dev.js.map
