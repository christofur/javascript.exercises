"use strict";
var mocha = require('mocha');
var chai = require('chai');
var expect = chai.expect;

describe("Game of Nim", () => {
  it("Should prodice the correct results", () => {
      const nimBot = new NimAnalyser();

      expect(nimBot.canWin(3)).to.equal(true);
      expect(nimBot.canWin(7)).to.equal(true);
      expect(nimBot.canWin(8)).to.equal(false);
  });
});

//SUT
class NimAnalyser {
  canWin(n){
    return (n < 4 || n % 4 !== 0);
  }
}