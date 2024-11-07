"use strict";

var _money = require("../scripts/utils/money.js");

describe('test suite: formatCurrency', function () {
  it('converts cents into dollars', function () {
    expect((0, _money.formatCurrency)(2095)).toEqual('20.95');
  });
  it('works with 0', function () {
    expect((0, _money.formatCurrency)(0)).toEqual('0.00');
  });
  it('round up to the nearest cent', function () {
    expect((0, _money.formatCurrency)(2000.5)).toEqual('20.01');
  });
});
//# sourceMappingURL=moneyTest.dev.js.map
