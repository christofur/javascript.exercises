'use strict';
var mocha = require('mocha');
var chai = require('chai');
var expect = chai.expect;
var _ = require('lodash');

describe('Decorator Pattern', () => {

  it('Should allow us to apply a discount', () => {

    //Create a new product which costs 3.00
    var espresso = new Beverage(3.00);

    // Use decorator pattern to add a loyalty 10% discount
    espresso.discounts.push((cost) => { return (cost - (cost * 0.1));});

    //Ensure we get the correct cost
    expect(espresso.getCost()).to.equal(2.7);

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