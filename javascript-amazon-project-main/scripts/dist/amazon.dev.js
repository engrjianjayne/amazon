"use strict";

var products = [{
  image: 'images/products/athletic-cotton-socks-6-pairs.jpg',
  name: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
  rating: {
    stars: 4.5,
    count: 87
  },
  priceCents: 1090
}, {
  image: 'images/products/intermediate-composite-basketball.jpg',
  name: 'Intermediate Size Basketball',
  rating: {
    stars: 4.0,
    count: 127
  },
  pricecents: 2095
}, {
  image: 'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
  name: 'Adults Plain Cotton T-Shirt - 2 Pack',
  rating: {
    stars: 4.5,
    count: 56
  },
  priceCents: 799
}];
var productsHTML = '';
products.forEach(function (product) {
  productsHTML += " \n      <div class=\"product-container\">\n        <div class=\"product-image-container\">\n          <img class=\"product-image\" src=\"".concat(product.image, "\">\n        </div>\n\n        <div class=\"product-name limit-text-to-2-lines\">\n          ").concat(product.name, "\n        </div>\n\n        <div class=\"product-rating-container\">\n          <img class=\"product-rating-stars\" src=\"images/ratings/rating-").concat(product.rating.stars * 10, ".png\">\n          <div class=\"product-rating-count link-primary\">\n            ").concat(product.rating.count, "\n          </div>\n        </div>\n\n        <div class=\"product-price\">\n          $").concat((product.priceCents / 100).toFixed(2), "\n        </div>\n\n        <div class=\"product-quantity-container\">\n          <select>\n            <option selected value=\"1\">1</option>\n            <option value=\"2\">2</option>\n            <option value=\"3\">3</option>\n            <option value=\"4\">4</option>\n            <option value=\"5\">5</option>\n            <option value=\"6\">6</option>\n            <option value=\"7\">7</option>\n            <option value=\"8\">8</option>\n            <option value=\"9\">9</option>\n            <option value=\"10\">10</option>\n          </select>\n        </div>\n\n        <div class=\"product-spacer\"></div>\n\n        <div class=\"added-to-cart\">\n          <img src=\"images/icons/checkmark.png\">\n          Added\n        </div>\n\n        <button class=\"add-to-cart-button button-primary\">\n          Add to Cart\n        </button>\n      </div>");
});
console.log(productsHTML);
document.querySelector('.js-products-grid').innerHTML = productsHTML;
//# sourceMappingURL=amazon.dev.js.map
