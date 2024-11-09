"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadFromStorage = loadFromStorage;
exports.addToCart = addToCart;
exports.removeFromCart = removeFromCart;
exports.updateDeliveryOption = updateDeliveryOption;
exports.loadCart = loadCart;
exports.cart = void 0;
// Deduplicating data or Normalizing data
var cart;
exports.cart = cart;
loadFromStorage();

function loadFromStorage() {
  exports.cart = cart = JSON.parse(localStorage.getItem('cart'));

  if (!cart) {
    exports.cart = cart = [{
      productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity: 2,
      deliveryOptionId: '1'
    }, {
      productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
      quantity: 1,
      deliveryOptionId: '2'
    }];
  }
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
      quantity: 1,
      deliveryOptionId: '1'
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

function updateDeliveryOption(productId, deliveryOptionId) {
  var matchingItem;
  cart.forEach(function (cartItem) {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });
  matchingItem.deliveryOptionId = deliveryOptionId;
  saveToStorage();
}

function loadCart(fun) {
  var xhr = new XMLHttpRequest();
  xhr.addEventListener('load', function () {
    console.log(xhr.response);

    if (typeof fun === 'function') {
      fun();
    }
  });
  xhr.open('GET', 'https://supersimplebackend.dev/cart');
  xhr.send();
}
//# sourceMappingURL=cart.dev.js.map
