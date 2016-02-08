var _ = require('lodash');
var mocha = require('mocha');
var chai = require('chai');
var expect = chai.expect;

describe('JavaScript Inheritance', () => {
  it('Should allow us to inherit properties of a parent class', () => {
    "use strict";



  });
});


var Vehicle = function(colour, wheels){
  "use strict";
  this.colour = colour;
  this.wheels = wheels;
  this.describe = () => {
    console.log('The ' + colour + ' vehicle has ' + wheels + ' wheels');
  }
};


const car = new Vehicle("red", 4);
car.describe();


