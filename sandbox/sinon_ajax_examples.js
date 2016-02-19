'use strict';
var mocha = require('mocha');
var chai = require('chai');
var expect = chai.expect;
var _ = require('lodash');
var sinon = require('sinon');

describe('Ajax simulation with Sinon', () => {

  this.server = null;

  before(() => {
    var testData = {foo: 'bar', name: 'phil'};
    this.server = sinon.fakeServer.create();
    this.server.respondWith("GET", "/api/testmodel/1", [200, {"Content-Type": "application/json"}, JSON.stringify(testData)]);
  });

  after(() => {
    this.server.restore();
  });

  it('Should run a basic HTTP request', () => {


    var a = this.server.respond();

console.log(a);

  });

});
