"use strict";

var productsHTML = '';
products.forEach(function (product) {
  productsHTML += " \n      <div class=\"product-container\">\n        <div class=\"product-image-container\">\n          <img class=\"product-image\" src=\"".concat(product.image, "\">\n        </div>\n\n        <div class=\"product-name limit-text-to-2-lines\">\n          ").concat(product.name, "\n        </div>\n\n        <div class=\"product-rating-container\">\n          <img class=\"product-rating-stars\" src=\"images/ratings/rating-").concat(product.rating.stars * 10, ".png\">\n          <div class=\"product-rating-count link-primary\">\n            ").concat(product.rating.count, "\n          </div>\n        </div>\n\n        <div class=\"product-price\">\n          $").concat((product.priceCents / 100).toFixed(2), "\n        </div>\n\n        <div class=\"product-quantity-container\">\n          <select>\n            <option selected value=\"1\">1</option>\n            <option value=\"2\">2</option>\n            <option value=\"3\">3</option>\n            <option value=\"4\">4</option>\n            <option value=\"5\">5</option>\n            <option value=\"6\">6</option>\n            <option value=\"7\">7</option>\n            <option value=\"8\">8</option>\n            <option value=\"9\">9</option>\n            <option value=\"10\">10</option>\n          </select>\n        </div>\n\n        <div class=\"product-spacer\"></div>\n\n        <div class=\"added-to-cart\">\n          <img src=\"images/icons/checkmark.png\">\n          Added\n        </div>\n\n        <button class=\"add-to-cart-button button-primary js-add-to-cart\"\n        data-product-id=\"").concat(product.id, "\">\n          Add to Cart\n        </button>\n      </div>");
});
document.querySelector('.js-products-grid').innerHTML = productsHTML;
document.querySelectorAll('.js-add-to-cart').forEach(function (button) {
  button.addEventListener('click', function () {
    var productId = button.dataset.productId;
    var matchingItem;
    cart.forEach(function (item) {
      if (productId === item.productId) {
        matchingItem = item;
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

    var cartQuantity = 0;
    cart.forEach(function (item) {
      cartQuantity += item.quantity;
    });
    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
  });
});
//# sourceMappingURL=amazon.dev.js.map
