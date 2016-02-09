'use strict';
var mocha = require('mocha');
var chai = require('chai');
var expect = chai.expect;
var _ = require('lodash');

describe('Power Of Algorithm', () => {

  before(() => {
    this.sut = new Sut();
  });

  it('Should return true for positive test cases', () => {

    const positiveTestCases = [3, 9, 27];

    _.each(positiveTestCases, (i) => {
      expect(this.sut.isPowerOfThree(i)).to.equal.true;
    });

  });

  it('Should return false for negative test cases', () => {

    const negativeTestCases = [5, 10, 15];

    _.each(negativeTestCases, (i) => {
      expect(this.sut.isPowerOfThree(i)).to.equal.false;
    });

  });
});

class Sut {
  isPowerOfThree(n){

    while (n > 1) {
      n = (n / 3);
    }

    return (n === 1);
  }
}