'use strict';
var mocha = require('mocha');
var chai = require('chai');
var expect = chai.expect;
var _ = require('lodash');
var sinon = require('sinon');

describe('Decorator Pattern with Sinon', () => {

  it('Should allow us to apply a discount', () => {

    //Create a new product which costs 3.00
    var espresso = new Beverage(3.00);

    // Use decorator pattern to add a loyalty 10% discount
    espresso.discounts.push((cost) => { return (cost - (cost * 0.1));});

    //Ensure we get the correct cost
    expect(espresso.getCost()).to.equal(2.7);

  });

  it('Should work with Spies', () => {

    //Create a new product which costs 3.00
    var espresso = new Beverage(3.00);

    // Use decorator pattern to add a loyalty 10% discount
    espresso.discounts.push((cost) => { return (cost - (cost * 0.1));});

    let spy = sinon.spy(espresso, "getCost");
    expect(spy.calledOnce).to.equal(false);

    //Ensure we get the correct cost
    expect(espresso.getCost()).to.equal(2.7);

    expect(spy.calledOnce).to.equal(true);

  });


  it('Should work with Stubs', () => {

    //Create a new product which costs 3.00
    var espresso = new Beverage(3.00);

    sinon.stub(espresso, 'getCost', () => {
      return 12345;
    });

    //Ensure we get the correct cost
    expect(espresso.getCost()).to.equal(12345);

  });


  it('Should work with Mocks', () => {

    //Create a new product which costs 3.00
    var espresso = new Beverage(3.00);

    let mock = sinon.mock(espresso).expects("getCost").once();

    espresso.getCost();

    expect(mock.verify()).to.equal.true;

  });

});


/* System Under Test */

var Beverage = function(cost) {
  this.cost = cost;
  this.discounts = [];
  this.getCost = function(){
    for(var i in this.discounts)
    {
      this.cost = this.discounts[i](this.cost);
    }

    return this.cost;
  }
};