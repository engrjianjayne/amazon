"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDeliveryOption = getDeliveryOption;
exports.deliveryOptions = void 0;
var deliveryOptions = [{
  id: '1',
  deliveryDays: 7,
  priceCents: 0
}, {
  id: '2',
  deliveryDays: 3,
  priceCents: 499
}, {
  id: '3',
  deliveryDays: 1,
  priceCents: 999
}];
exports.deliveryOptions = deliveryOptions;

function getDeliveryOption(deliveryOptionId) {
  var deliveryOption;
  deliveryOptions.forEach(function (option) {
    if (option.id === deliveryOptionId) {
      deliveryOption = option;
    }
  });
  return deliveryOption || deliveryOptions[0];
}
//# sourceMappingURL=deliveryOptions.dev.js.map
