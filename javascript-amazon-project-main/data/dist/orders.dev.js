"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addOrder = addOrder;
exports.orders = void 0;
var orders = JSON.parse(localStorage.getItem('orders')) || [];
exports.orders = orders;

function addOrder(order) {
  orders.unshift(order);
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem('orders', JSON.stringify(orders));
}
//# sourceMappingURL=orders.dev.js.map
