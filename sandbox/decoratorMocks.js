var mocha = require('mocha');
var expect = require('chai').expect;
var sinon = require('sinon');
var _ = require('lodash');

describe('Decorators', () => {
  it('Can apply multiple functions', () => {

    //Setup
    var bill = new Bill(50);

    //Add three decorators to 'taxes' decoration holder
    bill.taxes.push(peakSurcharge);
    bill.taxes.push(vat);
    bill.taxes.push(tip);

    var total = Math.ceil(bill.getTotal());
    expect(total).to.equal(86);

  });
});


/* System Under Test */

var Bill = function(total) {
  this.total = total;
  this.taxes = [];
  this.getTotal = () => {
    "use strict";

    let total = this.total;

    _.each(this.taxes, function(tax) {
      total = tax(total);

    });

    return total;
  }
};

const vat = (amount) => {
  "use strict";
  return (amount * 1.2)
};

const tip = (amount) => {
  "use strict";
  return (amount * 1.1);
};

const peakSurcharge = (amount) => {
  "use strict";
  return (amount * 1.3);
};