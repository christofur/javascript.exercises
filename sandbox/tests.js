var _ = require('lodash');
var mocha = require('mocha');
var chai = require('chai');
var expect = chai.expect;
var car = require('./sut');

//lodash, prototypes, mocks

describe('something', () => {
  "use strict";
  it('should', () => {
    expect(car.prototype.color).to.equal('red');
  });
});