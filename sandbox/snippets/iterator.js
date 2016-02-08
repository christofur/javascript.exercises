'use strict';

var chai = require('chai');
var expect = chai.expect;

describe('Iterators', () => {
  it('Should iterate until done', () => {
      const sut = new Sut([1,2,3]);

      expect(sut.getNext().done).to.equal(false);
      expect(sut.getNext().done).to.equal(false);
      expect(sut.getNext().done).to.equal(false);
      expect(sut.getNext().done).to.equal(true);

  })
});


/* System Under Test */

class Sut {
  constructor(nums){
    this.nums = nums;
    this.iterator = this.nums[Symbol.iterator]();
  }
  getNext(){
    return this.iterator.next();
  }
}