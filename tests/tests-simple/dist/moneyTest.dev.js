"use strict";

var _money = require("../scripts/utils/money.js");

console.log('test suite: formatCurrency');
console.log('converts cents into dollars');

if ((0, _money.formatCurrency)(2095) === '20.95') {
  console.log('passed');
} else {
  console.log('failed');
}

console.log('works with 0');

if ((0, _money.formatCurrency)(0) === '0.00') {
  console.log('passed');
} else {
  console.log('failed');
}

console.log('round up to the nearest cent');

if ((0, _money.formatCurrency)(2000.5) === '20.01') {
  console.log('passed');
} else {
  console.log('failed');
}
//# sourceMappingURL=moneyTest.dev.js.map
