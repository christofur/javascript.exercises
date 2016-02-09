"use strict";
var mocha = require('mocha');
var chai = require('chai');
var expect = chai.expect;
var _ = require('lodash');

describe("Generators", () => {
  it("Should do something..", () => {

    let results = [];
    for (let v of foo()) {
      results.push(v);
    }

    expect(results.length).to.equal(3);
    expect(_.sum(results)).to.equal(60);

  });
});

//SUT
function *foo() {
    yield 10;
    yield 20;
    yield 30;
}
