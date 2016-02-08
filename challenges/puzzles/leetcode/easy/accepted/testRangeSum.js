'use strict';
var chai = require('chai');
var expect = chai.expect;

describe('Range Sum Algorithm', () => {
  it('Should return the correct result for any input', () => {

    const nums = [-2, 0, 3, -5, 2, -1];
    const rangeSummer = new RangeSum(nums);

    expect(rangeSummer.sumRange(0,2)).to.equal(1);
    expect(rangeSummer.sumRange(2,5)).to.equal(-1);
    expect(rangeSummer.sumRange(0,5)).to.equal(-3);

  });
});

class RangeSum{
  constructor(nums){
    this.nums = nums;
    this.memo = [];
    this.calculateTotals();
  }
  calculateTotals(){
    var sum = 0;
    for(var i = 0; i < this.nums.length; i++)
    {
      this.memo[i] = (sum += this.nums[i]);
    }
  }
  sumRange(i, j){
    return i === 0 ? this.memo[j] : this.memo[j] - this.memo[i - 1];
  }
}