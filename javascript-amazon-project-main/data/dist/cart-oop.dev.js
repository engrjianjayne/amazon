"use strict";

function Cart(localStorageKey) {
  var cart = {
    cartItems: undefined,
    loadFromStorage: function loadFromStorage() {
      this.cartItems = JSON.parse(localStorage.getItem(localStorageKey));

      if (!this.cartItems) {
        this.cartItems = [{
          productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
          quantity: 2,
          deliveryOptionId: '1'
        }, {
          productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
          quantity: 1,
          deliveryOptionId: '2'
        }];
      }
    },
    saveToStorage: function saveToStorage() {
      localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
    },
    addToCart: function addToCart(productId) {
      var matchingItem;
      this.cartItems.forEach(function (cartItem) {
        if (productId === cartItem.productId) {
          matchingItem = cartItem;
        }
      });

      if (matchingItem) {
        matchingItem.quantity += 1;
      } else {
        this.cartItems.push({
          productId: productId,
          quantity: 1,
          deliveryOptionId: '1'
        });
      }

      this.saveToStorage();
    },
    removeFromCart: function removeFromCart(productId) {
      var newCart = [];
      this.cartItems.forEach(function (cartItem) {
        if (cartItem.productId !== productId) {
          newCart.push(cartItem);
        }
      });
      this.cartItems = newCart;
      this.saveToStorage();
    },
    updateDeliveryOption: function updateDeliveryOption(productId, deliveryOptionId) {
      var matchingItem;
      this.cartItems.forEach(function (cartItem) {
        if (productId === cartItem.productId) {
          matchingItem = cartItem;
        }
      });
      matchingItem.deliveryOptionId = deliveryOptionId;
      this.saveToStorage();
    }
  };
  return cart;
}

var cart = Cart('cart-oop');
var businessCart = Cart('cart-business');
cart.loadFromStorage();
businessCart.loadFromStorage();
console.log(cart);
console.log(businessCart);
//# sourceMappingURL=cart-oop.dev.js.map
